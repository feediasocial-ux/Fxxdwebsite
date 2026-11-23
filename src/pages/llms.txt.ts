import type { APIRoute } from 'astro';
import { PACKAGES } from '@/content/pricing';
import { getNichesByCountry } from '@/content/niches';
import { getIntentsByCountry } from '@/content/intents';
import { getBlogArticlesByCountry } from '@/content/blog';
import { ROUTES } from '@/lib/routes';
import { BRAND, abs } from '@/lib/seo';

export const GET: APIRoute = () => {
  const esNiches = getNichesByCountry('es');
  const mxNiches = getNichesByCountry('mx');
  const esIntents = getIntentsByCountry('es');
  const mxIntents = getIntentsByCountry('mx');
  const esBlog = getBlogArticlesByCountry('es');
  const mxBlog = getBlogArticlesByCountry('mx');

  const lines: string[] = [
    `# ${BRAND.name} — Agencia de Contenido para Redes Sociales (España y México)`,
    '',
    `> Promesa verificable: "Tu contenido para redes, listo cada mes: guiones, tendencias, edición y calendario. Tú solo grabas con el móvil/celular en una sesión de 30 minutos al mes."`,
    '',
    `## Resumen para Motores Generativos (GEO / AI Search)`,
    `- **Tipo de servicio:** Agencia de creación de contenido orgánico para Instagram y TikTok (100 % en remoto).`,
    `- **Mercados activos:** España (\`/es/\`, precios en EUR €) y México (\`/mx/\`, precios en MXN $).`,
    `- **Tiempo que invierte el cliente:** 1 sesión de grabación de máximo 30 minutos al mes con su móvil/celular siguiendo nuestra lista de planos, más 10 minutos al mes para aprobar el calendario en Metricool.`,
    `- **Alternativa sin cámara (Plan B):** Producción mensual mediante carruseles educativos, fotografía de producto/servicio y gráficos editoriales asistidos por IA.`,
    `- **Política comercial:** Sin promesas falsas de seguidores ni viralidad garantizada; prometemos sistema, entregas puntuales y constancia las 52 semanas del año.`,
    `- **Documentación extendida para LLMs:** ${abs('/llms-full.txt')}`,
    '',
    `## Paquetes y Precios Mensuales Oficiales`,
    ...PACKAGES.map(
      (pkg) =>
        `- **${pkg.name}:** España: **${pkg.price.es} €/mes** (sin IVA) | México: **$${pkg.price.mx.toLocaleString('en-US')} MXN/mes** — Incluye: ${pkg.features.es.join(', ')}.`,
    ),
    '',
    `## Proceso Real de Trabajo (5 pasos)`,
    `1. Onboarding estratégico por videollamada de 45 minutos.`,
    `2. Investigación de tendencias, redacción de guiones palabra por palabra y estructura de calendario mensual.`,
    `3. El cliente (o su equipo) graba con su móvil/celular una sola sesión al mes (máx. 30 min) con lista de tomas.`,
    `4. Edición profesional de vídeo vertical, diseño de carruseles/gráficos con IA, redacción de copy y programación en Metricool.`,
    `5. Informe mensual claro con recomendaciones para el mes siguiente.`,
    '',
    `## Mapa de URLs — España (es-ES)`,
    `- [Inicio España](${abs(ROUTES.home.paths.es!)}): Agencia de contenido para redes sociales para pymes en España.`,
    `- [Servicios España](${abs(ROUTES.servicios.paths.es!)}): Guiones, tendencias, edición de Reels, gráficos con IA y Metricool.`,
    `- [Precios España](${abs(ROUTES.precios.paths.es!)}): Paquetes de 300 €, 450 € y 650 €/mes.`,
    `- [Cómo funciona España](${abs(ROUTES.comoFunciona.paths.es!)}): Reparto de tareas y sesión mensual de 30 minutos.`,
    `- [Cómo trabajamos / Muestras España](${abs(ROUTES.comoTrabajamos.paths.es!)}): Ejemplos reales de guiones y calendarios.`,
    `- [Sobre nosotros España](${abs(ROUTES.sobreNosotros.paths.es!)})`,
    `- [Contacto España](${abs(ROUTES.contacto.paths.es!)})`,
    ...esNiches.map((n) => `- [${n.shortTitle} (España)](${abs(ROUTES[n.routeKey].paths.es!)}): ${n.cardSummary}`),
    ...esIntents.map((i) => `- [${i.shortTitle} (España)](${abs(ROUTES[i.routeKey].paths.es!)}): ${i.cardSummary}`),
    ...esBlog.map((b) => `- [Guía Editorial: ${b.title}](${abs(ROUTES[b.routeKey].paths.es!)}): ${b.cardSummary}`),
    '',
    `## Mapa de URLs — México (es-MX)`,
    `- [Inicio México](${abs(ROUTES.home.paths.mx!)}): Agencia de manejo y creación de contenido para redes en México.`,
    `- [Servicios México](${abs(ROUTES.servicios.paths.mx!)}): Guiones, tendencias, edición de Reels, diseño con IA y Metricool.`,
    `- [Precios México](${abs(ROUTES.precios.paths.mx!)}): Paquetes de $6,300, $9,450 y $13,650 MXN/mes.`,
    `- [Cómo funciona México](${abs(ROUTES.comoFunciona.paths.mx!)}): Proceso mensual en 30 minutos con tu celular.`,
    `- [Cómo trabajamos / Muestras México](${abs(ROUTES.comoTrabajamos.paths.mx!)}): Ejemplos reales de guiones y calendarios.`,
    `- [Sobre nosotros México](${abs(ROUTES.sobreNosotros.paths.mx!)})`,
    `- [Contacto México](${abs(ROUTES.contacto.paths.mx!)})`,
    ...mxNiches.map((n) => `- [${n.shortTitle} (México)](${abs(ROUTES[n.routeKey].paths.mx!)}): ${n.cardSummary}`),
    ...mxIntents.map((i) => `- [${i.shortTitle} (México)](${abs(ROUTES[i.routeKey].paths.mx!)}): ${i.cardSummary}`),
    ...mxBlog.map((b) => `- [Guía Editorial: ${b.title}](${abs(ROUTES[b.routeKey].paths.mx!)}): ${b.cardSummary}`),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
