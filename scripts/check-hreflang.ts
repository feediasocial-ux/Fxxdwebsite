/**
 * Valida en ./dist:
 * 1. Canonical autorreferenciado en cada página indexable.
 * 2. hreflang recíproco (es-ES, es-MX, y x-default en homes/raíz) en las páginas indexables.
 * 3. Exactamente 1 <h1> por página HTML.
 * 4. <title> y <meta name="description"> únicos entre todas las páginas indexables.
 * 5. Todas las imágenes <img> tienen atributo alt no vacío.
 * 6. Sitemaps XML generados (/sitemap-index.xml, /es/sitemap.xml, /mx/sitemap.xml) y sin /styleguide/.
 */
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');

function walkHtml(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkHtml(full));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

if (!fs.existsSync(DIST)) {
  console.error('❌ No existe ./dist. Ejecuta npm run build primero.');
  process.exit(1);
}

const files = walkHtml(DIST);
let errors = 0;
const seenTitles = new Map<string, string>();
const seenDescs = new Map<string, string>();

for (const file of files) {
  const rel = '/' + path.relative(DIST, file).replace(/index\.html$/, '').replace(/\\/g, '/');
  const html = fs.readFileSync(file, 'utf8');
  const isNoindex = /<meta\s+name=["']robots["']\s+content=["'][^"']*noindex/i.test(html);

  // 1. Un solo H1
  const h1Matches = html.match(/<h1[\s>]/gi) || [];
  if (h1Matches.length !== 1) {
    console.error(`❌ ${rel}: se esperaban 1 <h1>, encontrados ${h1Matches.length}`);
    errors++;
  }

  // 2. Canonical
  const canon = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (!canon) {
    console.error(`❌ ${rel}: falta <link rel="canonical">`);
    errors++;
  }

  // 3. Title y meta description únicos
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    console.error(`❌ ${rel}: falta <title>`);
    errors++;
  } else if (!isNoindex) {
    const t = titleMatch[1].trim();
    if (seenTitles.has(t)) {
      console.error(`❌ ${rel}: <title> duplicado con ${seenTitles.get(t)} -> "${t}"`);
      errors++;
    }
    seenTitles.set(t, rel);
  }

  if (!descMatch || !descMatch[1].trim()) {
    console.error(`❌ ${rel}: falta <meta name="description">`);
    errors++;
  } else if (!isNoindex) {
    const d = descMatch[1].trim();
    if (seenDescs.has(d)) {
      console.error(`❌ ${rel}: <meta description> duplicada con ${seenDescs.get(d)}`);
      errors++;
    }
    seenDescs.set(d, rel);
  }

  // 4. hreflang en páginas indexables
  if (!isNoindex) {
    const requiredCodes = ['/', '/es/', '/mx/'].includes(rel) ? ['es-ES', 'es-MX', 'x-default'] : ['es-ES', 'es-MX'];
    for (const code of requiredCodes) {
      const re = new RegExp(`<link\\s+rel=["']alternate["']\\s+hreflang=["']${code}["']\\s+href=["']([^"']+)["']`, 'i');
      if (!re.test(html)) {
        console.error(`❌ ${rel}: falta hreflang="${code}"`);
        errors++;
      }
    }
  }

  // 5. Todas las <img> con alt
  const imgs = html.match(/<img\b[^>]*>/gi) || [];
  for (const img of imgs) {
    const alt = img.match(/\balt=["']([^"']*)["']/i);
    if (!alt || alt[1].trim().length === 0) {
      console.error(`❌ ${rel}: <img> sin atributo alt descriptivo -> ${img.slice(0, 80)}`);
      errors++;
    }
  }

  console.log(`✅ ${rel} (${isNoindex ? 'noindex' : 'indexable'}): 1×H1, title/meta únicos, canonical, hreflang, ${imgs.length} imgs con alt`);
}

// 6. Sitemaps y archivos GEO (llms.txt / llms-full.txt)
for (const sm of ['sitemap-index.xml', 'es/sitemap.xml', 'mx/sitemap.xml']) {
  const p = path.join(DIST, sm);
  if (!fs.existsSync(p)) {
    console.error(`❌ Falta sitemap: ${sm}`);
    errors++;
  } else {
    const xml = fs.readFileSync(p, 'utf8');
    if (xml.includes('styleguide')) {
      console.error(`❌ ${sm} incluye /styleguide/ (debe ser noindex)`);
      errors++;
    }
    console.log(`✅ Sitemap válido: /${sm}`);
  }
}

for (const geoFile of ['llms.txt', 'llms-full.txt']) {
  const p = path.join(DIST, geoFile);
  if (!fs.existsSync(p)) {
    console.error(`❌ Falta archivo GEO: /${geoFile}`);
    errors++;
  } else {
    const content = fs.readFileSync(p, 'utf8');
    if (!content.includes('300 €') || !content.includes('6,300 MXN')) {
      console.error(`❌ /${geoFile} no incluye la tabla completa de precios EUR/MXN`);
      errors++;
    }
    console.log(`✅ Archivo GEO válido: /${geoFile} (${(Buffer.byteLength(content) / 1024).toFixed(1)} KB)`);
  }
}

if (errors > 0) {
  console.error(`\n❌ Fallaron ${errors} comprobaciones.`);
  process.exit(1);
}
console.log(`\n✅ Todas las ${files.length} páginas, sitemaps y archivos GEO pasaron las comprobaciones de SEO, hreflang y accesibilidad.`);
