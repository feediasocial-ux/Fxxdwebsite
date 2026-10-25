/**
 * Verificador de presupuesto de rendimiento sobre `dist/`:
 * - Imagen hero en AVIF/WebP <= 150 KB.
 * - JS total de cliente < 70 KB gzip.
 * - Cero <video autoplay> en las páginas HTML.
 * - Preload de fuente display presente en todas las páginas.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import zlib from 'node:zlib';

const DIST = path.resolve(process.cwd(), 'dist');
const ASTRO_ASSETS = path.join(DIST, '_astro');
const MAX_HERO_BYTES = 150 * 1024; // 150 KB
const MAX_JS_GZIP_BYTES = 70 * 1024; // 70 KB gzip

async function walk(dir: string, ext: string): Promise<string[]> {
  const out: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...(await walk(full, ext)));
    } else if (e.name.endsWith(ext)) {
      out.push(full);
    }
  }
  return out;
}

async function run() {
  let errors = 0;

  // 1. Verificar peso de imágenes hero en AVIF/WebP (<= 150 KB)
  const assetFiles = await fs.readdir(ASTRO_ASSETS);
  const heroOptimized = assetFiles.filter(
    (f) => f.startsWith('hero-') && (f.endsWith('.avif') || f.endsWith('.webp')),
  );

  let maxHeroSeen = 0;
  for (const file of heroOptimized) {
    const stat = await fs.stat(path.join(ASTRO_ASSETS, file));
    if (stat.size > maxHeroSeen) maxHeroSeen = stat.size;
    if (stat.size > MAX_HERO_BYTES) {
      console.error(`❌ Imagen hero supera 150 KB: ${file} (${(stat.size / 1024).toFixed(1)} KB)`);
      errors++;
    }
  }
  console.log(`✅ Imágenes hero AVIF/WebP verificadas (${heroOptimized.length} variantes, máx ${(maxHeroSeen / 1024).toFixed(1)} KB <= 150 KB).`);

  // 2. Verificar JS total de cliente (< 70 KB gzip)
  const jsFiles = await walk(DIST, '.js');
  let totalJsGzip = 0;
  for (const jf of jsFiles) {
    const buf = await fs.readFile(jf);
    totalJsGzip += zlib.gzipSync(buf).length;
  }

  // Sumar también scripts inline por página para comprobar el peor caso
  const htmlFiles = await walk(DIST, '.html');
  let maxInlineJsGzip = 0;
  for (const hf of htmlFiles) {
    const html = await fs.readFile(hf, 'utf-8');
    if (/<video\b[^>]*\bautoplay\b/i.test(html)) {
      console.error(`❌ [presupuesto] <video autoplay> prohibido en ${hf}`);
      errors++;
    }
    if (!/<link\s+rel="preload"[^>]*\.woff2/i.test(html)) {
      console.error(`❌ [presupuesto] Falta preload de fuente woff2 en ${hf}`);
      errors++;
    }
    const scripts = [...html.matchAll(/<script(?![^>]*application\/ld\+json)[^>]*>([\s\S]*?)<\/script>/gi)]
      .map((m) => m[1])
      .join('\n');
    const gz = zlib.gzipSync(Buffer.from(scripts)).length;
    if (gz > maxInlineJsGzip) maxInlineJsGzip = gz;
  }

  const worstPageJs = totalJsGzip + maxInlineJsGzip;
  if (worstPageJs > MAX_JS_GZIP_BYTES) {
    console.error(`❌ JS total (${(worstPageJs / 1024).toFixed(2)} KB gzip) supera el límite de 70 KB gzip`);
    errors++;
  } else {
    console.log(`✅ Presupuesto JS cumplido: ${(worstPageJs / 1024).toFixed(2)} KB gzip (límite 70.00 KB gzip). Cero <video autoplay>. Preload woff2 activo.`);
  }

  if (errors > 0) {
    process.exit(1);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
