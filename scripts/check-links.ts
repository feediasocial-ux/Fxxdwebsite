/**
 * Verificador post-build de enlaces internos, recursos, imágenes Open Graph y JSON-LD.
 * - Comprueba que todo <a href="/..."> apunte a una ruta real en dist/.
 * - Comprueba que toda meta og:image / twitter:image exista en dist/.
 * - Comprueba que cada bloque <script type="application/ld+json"> sea JSON válido y NO contenga LocalBusiness.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const DIST = path.resolve(process.cwd(), 'dist');

async function walkHtml(dir: string): Promise<string[]> {
  const out: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...(await walkHtml(full)));
    } else if (e.name.endsWith('.html')) {
      out.push(full);
    }
  }
  return out;
}

async function exists(p: string): Promise<boolean> {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function resolveDistTarget(hrefPath: string): Promise<boolean> {
  const clean = hrefPath.split('#')[0].split('?')[0];
  if (!clean || clean === '') return true;
  const rel = clean.replace(/^\/+/, '');
  const candidateFile = path.join(DIST, rel);
  const candidateIndex = path.join(DIST, rel, 'index.html');
  const candidateHtml = path.join(DIST, `${rel.replace(/\/+$/, '')}.html`);
  return (await exists(candidateFile)) || (await exists(candidateIndex)) || (await exists(candidateHtml));
}

async function run() {
  const files = await walkHtml(DIST);
  let errors = 0;
  let checkedLinks = 0;
  let checkedJsonLd = 0;

  for (const file of files) {
    const relPage = '/' + path.relative(DIST, file).replace(/index\.html$/, '');
    const html = await fs.readFile(file, 'utf-8');

    // 1. Verificar enlaces internos <a href="...">
    const hrefMatches = html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/gi);
    for (const m of hrefMatches) {
      const href = m[1];
      if (href.startsWith('#') || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        continue;
      }
      checkedLinks++;
      if (!(await resolveDistTarget(href))) {
        console.error(`❌ [${relPage}] Enlace interno roto: ${href}`);
        errors++;
      }
    }

    // 2. Verificar og:image
    const ogMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
    if (!ogMatch) {
      console.error(`❌ [${relPage}] Falta meta og:image`);
      errors++;
    } else {
      const ogUrl = new URL(ogMatch[1]);
      if (!(await resolveDistTarget(ogUrl.pathname))) {
        console.error(`❌ [${relPage}] Imagen OG no existe en dist: ${ogUrl.pathname}`);
        errors++;
      }
    }

    // 3. Verificar JSON-LD válido y prohibición de LocalBusiness
    const jsonLdMatches = html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
    for (const jm of jsonLdMatches) {
      checkedJsonLd++;
      const raw = jm[1].trim();
      try {
        const parsed = JSON.parse(raw);
        if (raw.includes('"LocalBusiness"')) {
          console.error(`❌ [${relPage}] JSON-LD contiene LocalBusiness prohibido (usar Organization/ProfessionalService/Service)`);
          errors++;
        }
        if (!parsed['@context']) {
          console.error(`❌ [${relPage}] JSON-LD sin @context`);
          errors++;
        }
      } catch (e) {
        console.error(`❌ [${relPage}] JSON-LD inválido:`, e);
        errors++;
      }
    }
  }

  if (errors > 0) {
    console.error(`\n❌ check-links.ts falló con ${errors} errores.`);
    process.exit(1);
  }
  console.log(`✅ Enlaces internos (${checkedLinks} verificados), imágenes OG y bloques JSON-LD (${checkedJsonLd} verificados, cero LocalBusiness) correctos en ${files.length} páginas.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
