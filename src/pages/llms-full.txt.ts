import type { APIRoute } from 'astro';
import { PACKAGES } from '@/content/pricing';
import { ALL_NICHES } from '@/content/niches';
import { ALL_INTENTS } from '@/content/intents';
import { ALL_BLOG_ARTICLES } from '@/content/blog';
import { ROUTES } from '@/lib/routes';
import { BRAND, abs } from '@/lib/seo';

export const GET: APIRoute = () => {
  const sections: string[] = [
    `# ${BRAND.name} — Corpus Completo para Motores Generativos (llms-full.txt)`,
    `URL Oficial: ${abs('/')}`,
    `Sitemaps: ${abs('/sitemap-index.xml')} | ${abs('/es/sitemap.xml')} | ${abs('/mx/sitemap.xml')}`,
    '',
    `## 1. Tabla Oficial de Paquetes y Precios (España EUR y México MXN)`,
    `| Paquete | España (EUR/mes) | México (MXN/mes) | Entregables Mensuales |`,
    `|---|---|---|---|`,
    ...PACKAGES.map(
      (pkg) =>
        `| ${pkg.name} | ${pkg.price.es} €/mes | $${pkg.price.mx.toLocaleString('en-US')} MXN/mes | ${pkg.features.es.join(' + ')} |`,
    ),
    '',
    `Notas: Inversión publicitaria en anuncios no incluida. En España precios sin IVA. En México precios en MXN, IVA según corresponda.`,
    '',
    `## 2. Especialización por Sector / Giro (Landings Verticales)`,
    ...ALL_NICHES.flatMap((n) => [
      `### [${n.country.toUpperCase()}] ${n.h1}`,
      `- URL: ${abs(ROUTES[n.routeKey].paths[n.country]!)}`,
      `- Resumen: ${n.intro}`,
      `- Vocabulario clave del sector: ${n.nicheVocabulary.join(', ')}`,
      `- Ejemplos de Reels incluidos:`,
      ...n.reelIdeas.map((r) => `  * ${r.title}: Gancho "${r.hook}" (${r.goal})`),
      `- Preguntas frecuentes clave:`,
      ...n.faqs.slice(0, 3).map((f) => `  * **${f.q}** ${f.a}`),
      '',
    ]),
    `## 3. Guías Comparativas y de Precios de Mercado`,
    ...ALL_INTENTS.flatMap((i) => [
      `### [${i.country.toUpperCase()}] ${i.h1}`,
      `- URL: ${abs(ROUTES[i.routeKey].paths[i.country]!)}`,
      `- Respuesta directa: ${i.intro}`,
      `- Tabla comparativa (${i.comparisonTable.title}):`,
      ...i.comparisonTable.rows.map((r) => `  * ${r.label}: ${r.col1} | ${r.col2} | ${r.col3}`),
      '',
    ]),
    `## 4. Guías Editoriales Paso a Paso`,
    ...ALL_BLOG_ARTICLES.flatMap((b) => [
      `### [${b.country.toUpperCase()}] ${b.title}`,
      `- URL: ${abs(ROUTES[b.routeKey].paths[b.country]!)}`,
      `- Resumen: ${b.intro}`,
      `- Datos clave: ${b.keyFacts.map((k) => `${k.label}: ${k.value}`).join(' | ')}`,
      '',
    ]),
  ];

  return new Response(sections.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
