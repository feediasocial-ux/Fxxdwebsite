/**
 * Generador de imágenes Open Graph (1200×630 PNG) por página + ilustración editorial 404.
 * Usa `sharp` sobre plantillas SVG con la identidad visual de Feediasocial:
 * --cream (#FFF6E5), --ink (#1B1B1F), --coral (#FF5A36), --lemon (#E8F05A), --sky (#BFE3FF), --maroon (#5A2530).
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { ROUTES, type RouteKey } from '../src/lib/routes.ts';
import { COUNTRIES, COUNTRY_KEYS, type CountryKey } from '../src/lib/i18n.ts';
import { getCorePages, getPhase4, getUi, rootCopy } from '../src/content/index.ts';
import { getNichesByCountry } from '../src/content/niches/index.ts';
import { getIntentsByCountry } from '../src/content/intents/index.ts';
import { getBlogArticlesByCountry } from '../src/content/blog/index.ts';

const ROOT = process.cwd();
const OG_DIR = path.join(ROOT, 'public', 'og');
const PHOTOS_DIR = path.join(ROOT, 'src', 'assets', 'photos');

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapLines(text: string, maxCharsPerLine = 28, maxLines = 3): string[] {
  const words = text.replace(/\s*\|\s*Feediasocial.*$/i, '').trim().split(/\s+/);
  const lines: string[] = [];
  let current = '';
  for (const word of words) {
    if (!current) {
      current = word;
    } else if ((current + ' ' + word).length <= maxCharsPerLine) {
      current += ' ' + word;
    } else {
      lines.push(current);
      current = word;
      if (lines.length === maxLines - 1) break;
    }
  }
  const consumedWords = lines.join(' ').split(/\s+/).filter(Boolean).length;
  const remaining = words.slice(consumedWords).join(' ');
  if (remaining) {
    lines.push(remaining.length > maxCharsPerLine + 6 ? remaining.slice(0, maxCharsPerLine + 3) + '…' : remaining);
  }
  return lines.slice(0, maxLines);
}

function buildOgSvg(opts: {
  badge: string;
  title: string;
  subtitle: string;
  accent: string;
}): string {
  const lines = wrapLines(opts.title.toUpperCase(), 26, 3);
  const lineSvg = lines
    .map(
      (line, idx) =>
        `<text x="72" y="${250 + idx * 74}" font-family="'Arial Black', 'Impact', sans-serif" font-weight="900" font-size="60" fill="#1B1B1F" letter-spacing="1">${escapeXml(line)}</text>`,
    )
    .join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#FFF6E5"/>
  <!-- Formas orgánicas de marca -->
  <circle cx="1070" cy="130" r="190" fill="#E8F05A" stroke="#1B1B1F" stroke-width="5"/>
  <rect x="880" y="340" width="260" height="150" rx="75" fill="#BFE3FF" stroke="#1B1B1F" stroke-width="5" transform="rotate(-8 1010 415)"/>
  <path d="M -40 535 Q 300 475 620 535 T 1240 515" fill="none" stroke="${opts.accent}" stroke-width="26" stroke-linecap="round"/>
  <!-- Barra superior marca -->
  <rect x="72" y="56" width="230" height="54" rx="27" fill="#1B1B1F"/>
  <text x="100" y="91" font-family="'Arial Black', sans-serif" font-weight="900" font-size="26" fill="#FFF6E5">FEEDIA</text>
  <rect x="206" y="65" width="84" height="36" rx="18" fill="#FF5A36"/>
  <text x="220" y="89" font-family="sans-serif" font-weight="700" font-size="18" fill="#1B1B1F">social</text>
  <!-- Etiqueta de país / sección -->
  <rect x="320" y="58" width="380" height="50" rx="25" fill="#E8F05A" stroke="#1B1B1F" stroke-width="4"/>
  <text x="348" y="90" font-family="sans-serif" font-weight="800" font-size="22" fill="#1B1B1F">${escapeXml(opts.badge.toUpperCase())}</text>
  <!-- Titular principal -->
  ${lineSvg}
  <!-- Subtítulo -->
  <text x="72" y="485" font-family="sans-serif" font-weight="700" font-size="26" fill="#3D3D45">${escapeXml(opts.subtitle.slice(0, 78))}</text>
  <!-- Franja inferior -->
  <rect x="0" y="586" width="1200" height="44" fill="#5A2530"/>
  <text x="72" y="615" font-family="sans-serif" font-weight="700" font-size="20" fill="#FFF6E5">GUIONES · TENDENCIAS · EDICIÓN · CALENDARIO EN METRICOOL · 100 % REMOTO</text>
</svg>`;
}

function buildError404Svg(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900">
  <rect width="900" height="900" fill="#FFF6E5"/>
  <circle cx="450" cy="460" r="320" fill="#F5E6C8" stroke="#1B1B1F" stroke-width="6" stroke-dasharray="18 14"/>
  <!-- Nota adhesiva limón en blanco -->
  <rect x="160" y="190" width="190" height="190" rx="22" fill="#E8F05A" stroke="#1B1B1F" stroke-width="6" transform="rotate(-10 255 285)"/>
  <line x1="195" y1="250" x2="310" y2="232" stroke="#1B1B1F" stroke-width="6" stroke-linecap="round"/>
  <line x1="202" y1="290" x2="290" y2="275" stroke="#1B1B1F" stroke-width="6" stroke-linecap="round"/>
  <!-- Taza coral volcada -->
  <ellipse cx="660" cy="640" rx="95" ry="38" fill="#BFE3FF" stroke="#1B1B1F" stroke-width="5"/>
  <rect x="580" y="510" width="130" height="110" rx="24" fill="#FF5A36" stroke="#1B1B1F" stroke-width="6" transform="rotate(18 645 565)"/>
  <!-- Trípode pequeño inclinado -->
  <line x1="430" y1="450" x2="310" y2="690" stroke="#1B1B1F" stroke-width="14" stroke-linecap="round"/>
  <line x1="430" y1="450" x2="440" y2="710" stroke="#1B1B1F" stroke-width="14" stroke-linecap="round"/>
  <line x1="430" y1="450" x2="555" y2="675" stroke="#1B1B1F" stroke-width="14" stroke-linecap="round"/>
  <circle cx="430" cy="445" r="26" fill="#5A2530" stroke="#1B1B1F" stroke-width="6"/>
  <!-- Teléfono móvil boca abajo / en pausa -->
  <g transform="rotate(-16 450 320)">
    <rect x="355" y="170" width="190" height="330" rx="36" fill="#1B1B1F"/>
    <rect x="371" y="190" width="158" height="290" rx="24" fill="#FF5A36"/>
    <circle cx="450" cy="335" r="46" fill="#E8F05A" stroke="#1B1B1F" stroke-width="6"/>
    <rect x="434" y="315" width="10" height="40" rx="4" fill="#1B1B1F"/>
    <rect x="456" y="315" width="10" height="40" rx="4" fill="#1B1B1F"/>
  </g>
</svg>`;
}

function slugFile(urlPath: string): string {
  const clean = urlPath.replace(/^\/+|\/+$/g, '').replace(/\//g, '-');
  return clean ? `${clean}.png` : 'default.png';
}

async function run() {
  await fs.mkdir(OG_DIR, { recursive: true });
  await fs.mkdir(PHOTOS_DIR, { recursive: true });

  // 1. Generar src/assets/photos/error-404.jpg
  const err404Path = path.join(PHOTOS_DIR, 'error-404.jpg');
  await sharp(Buffer.from(buildError404Svg())).jpeg({ quality: 88 }).toFile(err404Path);

  // 1b. Generar variantes cromáticas editoriales para nuevos nichos (abogados y belleza)
  const nichesPhotoDir = path.join(PHOTOS_DIR, 'niches');
  await fs.mkdir(nichesPhotoDir, { recursive: true });
  await sharp(path.join(PHOTOS_DIR, 'proceso-01-onboarding.jpg'))
    .resize(768, 960, { fit: 'cover' })
    .modulate({ saturation: 0.85, brightness: 1.02 })
    .jpeg({ quality: 84 })
    .toFile(path.join(nichesPhotoDir, 'abogados-es.jpg'));
  await sharp(path.join(PHOTOS_DIR, 'proceso-01-onboarding.jpg'))
    .flop()
    .resize(768, 960, { fit: 'cover' })
    .modulate({ saturation: 0.9, brightness: 0.98, hue: 8 })
    .jpeg({ quality: 84 })
    .toFile(path.join(nichesPhotoDir, 'abogados-mx.jpg'));
  await sharp(path.join(PHOTOS_DIR, 'hero-es.jpg'))
    .flop()
    .resize(768, 960, { fit: 'cover' })
    .modulate({ saturation: 1.08, brightness: 1.03, hue: -8 })
    .jpeg({ quality: 84 })
    .toFile(path.join(nichesPhotoDir, 'belleza-es.jpg'));
  await sharp(path.join(PHOTOS_DIR, 'hero-mx.jpg'))
    .flop()
    .resize(768, 960, { fit: 'cover' })
    .modulate({ saturation: 1.08, brightness: 1.02, hue: 10 })
    .jpeg({ quality: 84 })
    .toFile(path.join(nichesPhotoDir, 'belleza-mx.jpg'));

  // 2. Recopilar todas las páginas y generar su tarjeta OG 1200×630
  const cards: { file: string; badge: string; title: string; subtitle: string; accent: string }[] = [
    {
      file: 'default.png',
      badge: 'España · México',
      title: rootCopy.title,
      subtitle: 'Tu contenido para redes, listo cada mes: guiones, tendencias, edición y calendario.',
      accent: '#FF5A36',
    },
    {
      file: 'styleguide.png',
      badge: 'Sistema de diseño',
      title: 'Style Guide · Feediasocial',
      subtitle: 'Tokens de color, tipografía y componentes.',
      accent: '#FF5A36',
    },
    {
      file: '404.html.png',
      badge: 'Error 404',
      title: 'Esta página se ha quedado fuera del montaje final',
      subtitle: 'Feediasocial · España y México',
      accent: '#FF5A36',
    },
  ];

  for (const country of COUNTRY_KEYS) {
    const ui = getUi(country);
    const core = getCorePages(country);
    const p4 = getPhase4(country);

    const entries: { routeKey: RouteKey; title: string; subtitle: string; accent?: string }[] = [
      { routeKey: 'home', title: ui.meta.homeTitle, subtitle: ui.hero.promise },
      { routeKey: 'servicios', title: core.servicios.h1, subtitle: core.servicios.metaDescription },
      { routeKey: 'precios', title: core.precios.h1, subtitle: core.precios.metaDescription },
      { routeKey: 'comoFunciona', title: core.comoFunciona.h1, subtitle: core.comoFunciona.metaDescription },
      { routeKey: 'comoTrabajamos', title: p4.comoTrabajamos.h1, subtitle: p4.comoTrabajamos.metaDescription },
      { routeKey: 'sobreNosotros', title: core.sobreNosotros.h1, subtitle: core.sobreNosotros.metaDescription },
      { routeKey: 'contacto', title: core.contacto.h1, subtitle: core.contacto.metaDescription },
      { routeKey: 'blog', title: p4.blog.h1, subtitle: p4.blog.metaDescription },
      { routeKey: 'avisoLegal', title: p4.legales.avisoLegal.h1, subtitle: p4.legales.avisoLegal.metaDescription },
      { routeKey: 'privacidad', title: p4.legales.privacidad.h1, subtitle: p4.legales.privacidad.metaDescription },
      { routeKey: 'cookies', title: p4.legales.cookies.h1, subtitle: p4.legales.cookies.metaDescription },
    ];

    for (const e of entries) {
      const p = ROUTES[e.routeKey].paths[country];
      if (!p) continue;
      cards.push({
        file: slugFile(p),
        badge: `${ui.countryName} · Feediasocial`,
        title: e.title,
        subtitle: e.subtitle,
        accent: '#FF5A36',
      });
    }

    for (const niche of getNichesByCountry(country)) {
      const p = ROUTES[niche.routeKey].paths[country]!;
      cards.push({
        file: slugFile(p),
        badge: `${ui.countryName} · ${niche.shortTitle}`,
        title: niche.h1,
        subtitle: niche.cardSummary,
        accent: niche.theme === 'sober' ? '#5A2530' : '#FF5A36',
      });
    }

    for (const intent of getIntentsByCountry(country)) {
      const p = ROUTES[intent.routeKey].paths[country]!;
      cards.push({
        file: slugFile(p),
        badge: `${ui.countryName} · Guía práctica`,
        title: intent.h1,
        subtitle: intent.cardSummary,
        accent: '#FF5A36',
      });
    }

    for (const article of getBlogArticlesByCountry(country)) {
      const p = ROUTES[article.routeKey].paths[country]!;
      cards.push({
        file: slugFile(p),
        badge: `${ui.countryName} · ${article.category}`,
        title: article.title,
        subtitle: article.cardSummary,
        accent: '#FF5A36',
      });
    }
  }

  for (const card of cards) {
    const svg = buildOgSvg(card);
    const out = path.join(OG_DIR, card.file);
    await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true }).toFile(out);
  }

  console.log(`✅ Generadas ${cards.length} imágenes Open Graph (1200×630) en public/og/ y error-404.jpg.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
