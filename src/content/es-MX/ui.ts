import type { UiCopy } from '../types';

/** Copy México (es-MX): celular, video, tú/ustedes, MXN. */
export const ui: UiCopy = {
  countryName: 'México',
  meta: {
    homeTitle: 'Manejo de redes sociales para negocios | Feediasocial',
    homeDescription:
      'Guiones, tendencias, edición y calendario cada mes. Tú solo grabas con tu celular. Escríbenos por WhatsApp y te mostramos los paquetes.',
  },
  a11y: {
    skipLink: 'Ir al contenido',
    mainNav: 'Navegación principal',
    openWhatsApp: 'Abrir WhatsApp (se abre en una pestaña nueva)',
    countrySwitcher: 'Cambiar de país',
    marqueePaused: 'Guiones, tendencias, edición y calendario',
    breadcrumb: 'Ruta de navegación',
    logoHome: 'Feediasocial — Ir al inicio (México)',
  },
  header: {
    waCta: 'Escríbenos por WhatsApp',
    waCtaShort: 'WhatsApp',
    nav: [
      { label: 'Servicios', route: 'servicios' },
      { label: 'Precios', route: 'precios' },
      { label: 'Cómo funciona', route: 'comoFunciona' },
      { label: 'Nosotros', route: 'sobreNosotros' },
      { label: 'Contacto', route: 'contacto' },
    ],
  },
  whatsapp: {
    defaultMessage: 'Hola, vengo de la página de Feediasocial (México) y quiero ver los paquetes.',
    floatLabel: 'Escríbenos',
  },
  hero: {
    eyebrow: 'Agencia de contenido para redes · 100 % remota',
    title: 'Tus redes en',
    titleHighlight: 'piloto automático',
    promise: 'Tú solo grabas con tu celular. Nosotros nos encargamos de los guiones, las tendencias, la edición y el calendario cada mes.',
    ctaPrimary: 'Escríbenos por WhatsApp',
    ctaSecondary: 'Ver paquetes',
    photoAlt: 'Dueño de una tienda en Ciudad de México grabando un video vertical con su celular',
    founderPlaceholder: '[FOTO: fundadores en acción]',
    stickers: ['Sin plazos forzosos [PENDIENTE: confirmar]', '1 sesión de grabación al mes'],
  },
  marquee: ['Guiones', 'Tendencias', 'Edición', 'Calendario'],
  problem: {
    eyebrow: 'Lo que pasa siempre',
    title: 'No sabes qué publicar, no tienes tiempo y tu competencia sí aparece.',
    points: [
      {
        title: 'Abres Instagram y no sabes ni qué subir',
        text: 'Guardar audios y trends sueltos no sirve si no tienes un guion aterrizado a tu giro.',
      },
      {
        title: 'Grabar y editar te quita horas de operación',
        text: 'Entre atender clientes y llevar el negocio o el consultorio, ponerte a editar videos en la noche no es vida.',
      },
      {
        title: 'Publicas una semana sí y tres no',
        text: 'Sin sistema ni calendario mensual, tus redes se quedan quietas justo cuando más chamba tienes.',
      },
    ],
  },
  stepsSection: {
    eyebrow: 'Cómo funciona',
    title: 'Tres pasos y tus redes quedan listas cada mes',
    subtitle: 'Una sola sesión de grabación con tu celular (máximo 30 minutos). De todo lo demás nos encargamos nosotros.',
    ctaMore: 'Ver el proceso paso a paso',
  },
  steps: [
    { title: 'Nos platicas de tu negocio', text: 'Una llamada de 45 minutos para entender a tus clientes, tu estilo y lo que vendes.' },
    { title: 'Te damos guiones y calendario', text: 'Estrategia, tendencias del mes y una lista de tomas sencilla para grabar en 30 minutos.' },
    { title: 'Tú grabas, nosotros editamos y programamos', text: 'Editamos los videos, escribimos los textos y todo queda programado en Metricool.' },
  ],
  servicesSection: {
    eyebrow: 'Qué incluye el sistema',
    title: 'Todo lo que necesita tu cuenta para publicar sin fallar',
    ctaMore: 'Ver todos los servicios a detalle',
  },
  services: [
    { title: 'Guiones y tendencias', text: 'Ideas hechas para tu giro y tu ciudad, con guion listo para leer.', color: 'coral' },
    { title: 'Edición y contenido con IA', text: 'Reels editados, carruseles y gráficos con IA con la imagen de tu marca.', color: 'lemon' },
    { title: 'Calendario y programación', text: 'Todo el mes planeado y programado en Metricool. Tú lo revisas y ya.', color: 'sky' },
  ],
  nichesSection: {
    eyebrow: 'Especialistas por giro',
    title: 'Guiones y calendarios pensados para tu giro en México',
    subtitle: 'No hablamos igual para un consultorio dental que para un restaurante o una inmobiliaria. Entra a tu giro para ver guiones y calendarios reales de ejemplo.',
    cardCta: 'Ver sistema para este giro',
  },
  pricing: {
    eyebrow: 'Paquetes y precios',
    title: 'Precios claros para México',
    subtitle: 'Elige el ritmo que necesita tu negocio. En pesos mexicanos y sin letras chiquitas.',
    perMonth: '/mes',
    cta: 'Quiero este paquete',
    popular: 'El más elegido [PENDIENTE: validar]',
    adsNote: 'La inversión en anuncios no está incluida.',
    taxNote: 'Precios en MXN, IVA según corresponda. [PENDIENTE: facturación/CFDI]',
    waMessage: 'Hola, vengo de la página de México y me interesa el paquete {name}.',
    planBTitle: '¿No quieres salir a cuadro? Tenemos Plan B',
    planBText:
      'Si tú o tu equipo prefieren no aparecer en video, armamos tu mes con carruseles educativos, foto de tus productos o servicios y diseño gráfico con IA.',
    planBCta: 'Preguntar por el Plan B sin cámara',
    planBWaMessage: 'Hola, vengo de la página de México y me interesa el Plan B sin salir en cámara.',
  },
  proofSection: {
    eyebrow: 'Cómo se ve por dentro',
    title: 'Ejemplos reales de guiones y calendarios que entregamos',
    subtitle:
      'No inventamos testimonios ni números inflados. Así se ve el material real que te entregamos cada mes antes de que grabes con tu celular.',
    pendingBadge: '[PENDIENTE: aportar capturas reales de Metricool y casos piloto con permiso]',
    sampleScriptTitle: 'Ejemplo de guion listo para grabar (Reel · 25 s)',
    sampleScriptMeta: 'Giro: Consultorio dental / fisioterapia · Objetivo: responder una duda real de pacientes',
    sampleScriptHook: 'Gancho (0–3 s): «Si te truena la mandíbula al despertar, no lo dejes pasar como algo normal.»',
    sampleScriptBody: [
      'Toma 1 (celular en tripié en el consultorio): explica en 2 frases por qué apretar los dientes en la noche desgasta la articulación.',
      'Toma 2 (recurso de 4 s mostrando guarda o ejercicio suave): da un consejo práctico y explica cuándo agendar valoración.',
    ],
    sampleScriptCta: 'Cierre: «Guarda este video o mándanos mensaje directo para agendar tu valoración.»',
    sampleCalendarTitle: 'Semana tipo en tu calendario de Metricool',
    sampleCalendarItems: [
      { day: 'Lunes', format: 'Reel con guion (25 s)', topic: 'Duda frecuente de tus clientes + respuesta directa', color: 'coral' },
      { day: 'Miércoles', format: 'Carrusel educativo (6 slides)', topic: '3 errores comunes antes de contratar tu servicio', color: 'lemon' },
      { day: 'Viernes', format: 'Post + 3 historias del negocio', topic: 'Detrás de cámaras en tu sucursal o consultorio', color: 'sky' },
      { day: 'Domingo', format: 'Historias de preguntas y citas', topic: 'Resolución de dudas y link directo a tu WhatsApp', color: 'lemon' },
    ],
  },
  aboutTeaser: {
    eyebrow: 'Quiénes somos',
    title: 'Dos personas reales al otro lado del WhatsApp, hablando como tú hablas',
    text: 'Operamos entre México y España. Sabemos que no se vende igual en una taquería o consultorio en CDMX que en una cafetería en Madrid, y por eso jamás usamos textos traducidos ni plantillas genéricas.',
    bullets: [
      'Trato directo con las dos personas fundadoras, sin ejecutivos de cuenta que cambian cada mes.',
      'Cero promesas de humo: no prometemos hacerte viral, prometemos constancia y sistema cada mes.',
      '100 % remotos, con un proceso pensado para ahorrarte chamba, no para llenarte de juntas.',
    ],
    cta: 'Conoce nuestra historia',
    founder1Placeholder: '[FOTO: fundadora 1 · México/España]',
    founder2Placeholder: '[FOTO: fundador 2 · México/España]',
  },
  faqSection: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Resolvemos tus dudas antes de arrancar',
    items: [
      {
        q: '¿Tengo que salir yo en los videos?',
        a: 'Es lo que más confianza da, pero no es obligatorio. Puede grabar alguien de tu equipo o armamos el Plan B sin cámara con carruseles y gráficos con IA.',
      },
      {
        q: '¿Y si no tengo tiempo de grabar?',
        a: 'Te entregamos una lista de tomas puntual para que grabes todo el mes en una sola sesión de 30 minutos con tu celular.',
      },
      {
        q: '¿Hay plazo forzoso?',
        a: '[PENDIENTE: definir política de permanencia]. Trabajamos mes a mes porque queremos que te quedes por el resultado del sistema, no por contrato.',
      },
      {
        q: '¿Garantizan seguidores o ventas?',
        a: 'No. Nadie serio puede prometerte hacerte viral ni un número de ventas. Te garantizamos sistema, calidad, entregas a tiempo y constancia cada mes.',
      },
      {
        q: '¿Cómo se paga y se factura en México?',
        a: 'Pago mensual con tarjeta o transferencia. Precios en MXN, IVA según corresponda. [PENDIENTE: facturación/CFDI con contador].',
      },
    ],
  },
  finalCta: {
    title: 'Mándanos tu Instagram y te enviamos 3 ideas de reels en 24 horas, gratis.',
    subtitle: 'Las armamos revisando tu cuenta actual. Por WhatsApp o llenando este formulario en 30 segundos.',
    cta: 'Pedir mis 3 ideas por WhatsApp',
    waMessage: 'Hola, vengo de la página de México y quiero las 3 ideas de reels gratis para mi Instagram: @',
  },
  auditForm: {
    title: 'Pide tu mini-auditoría gratis (3 ideas de reels)',
    subtitle: 'Revisamos tu perfil y te mandamos 3 guiones cortos pensados para tu giro en menos de 24 horas hábiles.',
    nameLabel: 'Tu nombre',
    namePlaceholder: 'Ej. Carlos Hernández',
    igLabel: 'Tu usuario de Instagram o sitio web',
    igPlaceholder: 'Ej. @consultorio.carlos',
    waLabel: 'Tu WhatsApp (para mandarte las ideas)',
    waPlaceholder: 'Ej. +52 55 0000 0000',
    countryLabel: 'País de tu negocio',
    countryOptions: { es: 'España', mx: 'México' },
    submitLabel: 'Recibir mis 3 ideas gratis',
    submittingLabel: 'Enviando…',
    privacyNote: 'Solo usaremos tus datos para mandarte la mini-auditoría. Cero spam.',
    successTitle: '¡Listo! Ya estamos revisando tu cuenta.',
    successText: 'En menos de 24 horas hábiles te escribimos con tus 3 ideas de reels. Si quieres avanzar más rápido, mándanos WhatsApp de una vez:',
    fallbackWaCta: 'Abrir WhatsApp con mis datos',
    honeypotLabel: 'Deja este campo vacío',
  },
  cookieBanner: {
    title: 'Tu privacidad es primero (cookies claras)',
    text: 'Usamos cookies propias para recordar tu país y, solo si aceptas, Google Analytics 4 y Microsoft Clarity para entender qué secciones ayudan más (normativa mexicana de protección de datos personales).',
    acceptAll: 'Aceptar todas',
    rejectOptional: 'Solo necesarias',
    configure: 'Configurar',
    savePrefs: 'Guardar preferencias',
    categories: {
      necessary: {
        title: 'Técnicas y necesarias',
        desc: 'Recuerdan el país que elegiste y tus preferencias de privacidad. No rastrean tu navegación.',
        badge: 'Siempre activas',
      },
      analytics: {
        title: 'Analítica (GA4 y Clarity)',
        desc: 'Nos permiten medir clics a WhatsApp, envíos del formulario y lectura de páginas de forma estadística.',
      },
      marketing: {
        title: 'Marketing y atribución',
        desc: 'Permiten medir campañas cuando activamos anuncios.',
      },
    },
    reopenLabel: 'Configurar cookies',
  },
  footer: {
    tagline: 'Contenido para redes, listo cada mes. Hecho con cariño entre México y España.',
    legalNav: 'Enlaces legales',
    legal: [
      { label: 'Aviso legal', route: 'avisoLegal' },
      { label: 'Aviso de privacidad', route: 'privacidad' },
      { label: 'Cookies', route: 'cookies' },
    ],
    countryLabel: 'País',
    rights: 'Todos los derechos reservados.',
  },
  countrySwitcher: {
    label: 'País',
    suggestion: 'Parece que la última vez visitaste esta versión',
  },
};
