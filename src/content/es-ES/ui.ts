import type { UiCopy } from '../types';

/** Copy España (es-ES): móvil, vídeo, tú/vosotros, €. */
export const ui: UiCopy = {
  countryName: 'España',
  meta: {
    homeTitle: 'Gestión de redes sociales para pymes | Feediasocial',
    homeDescription:
      'Guiones, tendencias, edición y calendario cada mes. Tú solo grabas con el móvil. Escríbenos por WhatsApp y te enseñamos los paquetes.',
  },
  a11y: {
    skipLink: 'Saltar al contenido',
    mainNav: 'Navegación principal',
    openWhatsApp: 'Abrir WhatsApp (se abre en una pestaña nueva)',
    countrySwitcher: 'Cambiar de país',
    marqueePaused: 'Guiones, tendencias, edición y calendario',
    breadcrumb: 'Migas de pan',
    logoHome: 'Feediasocial — Ir al inicio (España)',
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
    defaultMessage: 'Hola, vengo de la web de Feediasocial (España) y quiero ver los paquetes.',
    floatLabel: 'Escríbenos',
  },
  hero: {
    eyebrow: 'Agencia de contenido para redes · 100 % en remoto',
    title: 'Tus redes en',
    titleHighlight: 'piloto automático',
    promise: 'Tú solo grabas con tu móvil. Nosotros ponemos los guiones, las tendencias, la edición y el calendario cada mes.',
    ctaPrimary: 'Escríbenos por WhatsApp',
    ctaSecondary: 'Ver paquetes',
    photoAlt: 'Dueña de una cafetería grabando un vídeo vertical con el móvil sobre un trípode en su barra',
    founderPlaceholder: '[FOTO: fundadores en acción]',
    stickers: ['Sin permanencia [PENDIENTE: confirmar]', '1 sesión de grabación al mes'],
  },
  marquee: ['Guiones', 'Tendencias', 'Edición', 'Calendario'],
  problem: {
    eyebrow: 'El día a día real',
    title: 'No sabes qué publicar, no tienes tiempo y tu competencia sí aparece.',
    points: [
      {
        title: 'Abres Instagram y no sabes por dónde empezar',
        text: 'Guardar audios y tendencias sueltas no sirve si no tienes un guion pensado para tu negocio.',
      },
      {
        title: 'Grabar y editar te roba horas del negocio',
        text: 'Entre atender clientes y llevar el local o la clínica, editar vídeos por la noche no es sostenible.',
      },
      {
        title: 'Publicas una semana sí y tres no',
        text: 'Sin sistema ni calendario mensual, las redes quedan abandonadas justo cuando más trabajo tienes.',
      },
    ],
  },
  stepsSection: {
    eyebrow: 'Cómo funciona',
    title: 'Tres pasos y tus redes quedan listas cada mes',
    subtitle: 'Una sola sesión de grabación con el móvil (máximo 30 minutos). Del resto nos encargamos nosotros.',
    ctaMore: 'Ver el proceso paso a paso',
  },
  steps: [
    { title: 'Nos cuentas tu negocio', text: 'Onboarding de 45 minutos para entender a tu cliente, tu tono y lo que vendes.' },
    { title: 'Te damos guiones y calendario', text: 'Estrategia, tendencias del mes y una lista de tomas clara para grabar en 30 minutos.' },
    { title: 'Grabas, nosotros editamos y programamos', text: 'Editamos los vídeos, escribimos el copy y lo dejamos programado en Metricool.' },
  ],
  servicesSection: {
    eyebrow: 'Qué incluye el sistema',
    title: 'Todo lo que necesita tu cuenta para publicar con constancia',
    ctaMore: 'Ver todos los servicios al detalle',
  },
  services: [
    { title: 'Guiones y tendencias', text: 'Ideas pensadas para tu sector y tu ciudad, con guion palabra por palabra.', color: 'coral' },
    { title: 'Edición y contenido con IA', text: 'Reels editados, carruseles y gráficos con IA que parecen de tu marca.', color: 'lemon' },
    { title: 'Calendario y programación', text: 'Todo el mes planificado y programado en Metricool. Tú lo revisas y listo.', color: 'sky' },
  ],
  nichesSection: {
    eyebrow: 'Especialistas por sector',
    title: 'Guiones y calendarios adaptados a tu tipo de negocio en España',
    subtitle: 'No escribimos igual para una clínica dental que para un bar de tapas o una inmobiliaria. Entra en tu sector para ver guiones y calendarios reales de muestra.',
    cardCta: 'Ver sistema para este sector',
  },
  pricing: {
    eyebrow: 'Paquetes y precios',
    title: 'Precios claros para España',
    subtitle: 'Elige el ritmo que necesita tu negocio. Sin sorpresas ni letra pequeña.',
    perMonth: '/mes',
    cta: 'Quiero este paquete',
    popular: 'El más elegido [PENDIENTE: validar]',
    adsNote: 'Inversión en anuncios no incluida.',
    taxNote: 'Precios en € sin IVA. [PENDIENTE: confirmar con asesoría fiscal]',
    waMessage: 'Hola, vengo de la web de España y me interesa el paquete {name}.',
    planBTitle: '¿No quieres salir en cámara? Tenemos Plan B',
    planBText:
      'Si tú o tu equipo preferís no aparecer en vídeo, preparamos tu mes con carruseles educativos, fotografía de producto/servicio y gráficos editoriales con IA.',
    planBCta: 'Preguntar por el Plan B sin cámara',
    planBGuideCta: 'Cómo funciona el Plan B sin cámara',
    planBWaMessage: 'Hola, vengo de la web de España y me interesa el Plan B sin salir en cámara.',
  },
  proofSection: {
    eyebrow: 'Cómo se ve por dentro',
    title: 'Ejemplos reales de guiones y calendarios que entregamos',
    subtitle:
      'No inventamos casos de éxito ni cifras falsas. Esto es una muestra real de cómo estructuramos tu mes antes de que grabes un solo segundo.',
    pendingBadge: '[PENDIENTE: aportar capturas reales de Metricool y casos piloto con permiso]',
    ctaMore: 'Ver más muestras de guiones y calendarios',
    sampleScriptTitle: 'Ejemplo de guion listo para leer (Reel · 25 s)',
    sampleScriptMeta: 'Sector: Clínica dental / estética · Objetivo: resolver una duda frecuente en consulta',
    sampleScriptHook: 'Gancho (0–3 s): «Si te sangran las encías al cepillarte, NO dejes de pasar el cepillo.»',
    sampleScriptBody: [
      'Plano 1 (móvil en trípode, bata clínica): explica en 2 frases por qué el sangrado suele ser inflamación por placa acumulada.',
      'Plano 2 (recurso de 4 s mostrando cepillo suave e hilo): indica qué hacer durante 7 días y cuándo pedir revisión.',
    ],
    sampleScriptCta: 'Cierre: «Guarda este vídeo o escríbenos por mensaje directo si quieres que revisemos tu caso.»',
    sampleCalendarTitle: 'Semana tipo en tu calendario de Metricool',
    sampleCalendarItems: [
      { day: 'Lunes', format: 'Reel con guion (25 s)', topic: 'Duda real de cliente + solución clara', color: 'coral' },
      { day: 'Miércoles', format: 'Carrusel educativo (6 slides)', topic: '3 errores comunes antes de contratar tu servicio', color: 'lemon' },
      { day: 'Viernes', format: 'Post + 3 stories de cercanía', topic: 'Detrás de las cámaras del equipo / proceso real', color: 'sky' },
      { day: 'Domingo', format: 'Stories de respuesta rápida', topic: 'Preguntas frecuentes y recordatorio de citas/reservas', color: 'lemon' },
    ],
  },
  aboutTeaser: {
    eyebrow: 'Quiénes somos',
    title: 'Dos personas al otro lado del WhatsApp, hablando tu mismo idioma',
    text: 'Trabajamos entre España y México. Conocemos la diferencia entre llevar un local con terraza en Madrid y una clínica en Ciudad de México, y por eso nunca usamos textos traducidos ni plantillas clónicas.',
    bullets: [
      'Trato directo con las dos personas fundadoras, sin cuentas intermedias.',
      'Cero promesas de humo: no prometemos hacerte viral, prometemos que tus redes salgan cada mes.',
      '100 % en remoto, con procesos pensados para quitarte trabajo, no para darte más reuniones.',
    ],
    cta: 'Conoce nuestra historia',
    founder1Placeholder: '[FOTO: fundadora 1 · España/México]',
    founder2Placeholder: '[FOTO: fundador 2 · España/México]',
  },
  faqSection: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Resolvemos tus dudas antes de empezar',
    items: [
      {
        q: '¿Tengo que salir yo en los vídeos?',
        a: 'Es lo que mejor conecta, pero no es obligatorio. Puede grabar alguien de tu equipo o podemos activar el Plan B sin cámara con carruseles y gráficos con IA.',
      },
      {
        q: '¿Y si no tengo tiempo de grabar?',
        a: 'Te damos una lista de tomas cerrada para que grabes todo el mes en una sola sesión de 30 minutos con tu móvil.',
      },
      {
        q: '¿Hay permanencia mínima?',
        a: '[PENDIENTE: definir política de permanencia]. Trabajamos mes a mes porque queremos que te quedes por el sistema, no por un contrato.',
      },
      {
        q: '¿Garantizáis seguidores o ventas?',
        a: 'No. Nadie honesto puede prometerte viralidad ni una cifra de ventas. Te garantizamos sistema, calidad, entregas puntuales y constancia cada mes.',
      },
      {
        q: '¿Cómo se paga y se factura en España?',
        a: 'Pago mensual domiciliado o con tarjeta y factura oficial. [PENDIENTE: confirmar detalles fiscales con asesoría].',
      },
    ],
  },
  finalCta: {
    title: 'Mándanos tu Instagram y te enviamos 3 ideas de reels en 24 horas, gratis.',
    subtitle: 'Las preparamos a mano viendo tu perfil actual. Por WhatsApp o rellenando este formulario de 30 segundos.',
    cta: 'Pedir mis 3 ideas por WhatsApp',
    waMessage: 'Hola, vengo de la web de España y quiero las 3 ideas de reels gratis para mi Instagram: @',
  },
  auditForm: {
    title: 'Pide tu mini-auditoría gratuita (3 ideas de reels)',
    subtitle: 'Miramos tu cuenta y te mandamos 3 guiones cortos pensados para tu negocio en menos de 24 h laborables.',
    nameLabel: 'Tu nombre',
    namePlaceholder: 'Ej. Marta Gómez',
    igLabel: 'Tu usuario de Instagram o web',
    igPlaceholder: 'Ej. @clinica.marta',
    waLabel: 'Tu WhatsApp (para enviarte las ideas)',
    waPlaceholder: 'Ej. +34 600 000 000',
    countryLabel: 'País de tu negocio',
    countryOptions: { es: 'España', mx: 'México' },
    submitLabel: 'Recibir mis 3 ideas gratis',
    submittingLabel: 'Enviando…',
    privacyNote: 'Solo usaremos tus datos para enviarte la mini-auditoría. Cero spam.',
    successTitle: '¡Recibido! Ya estamos revisando tu cuenta.',
    successText: 'En menos de 24 horas laborables te escribimos con las 3 ideas de reels. Si prefieres ir más rápido, ábrenos por WhatsApp ahora mismo:',
    fallbackWaCta: 'Abrir WhatsApp con mis datos',
    honeypotLabel: 'Deja este campo vacío',
  },
  cookieBanner: {
    title: 'Tu privacidad manda (cookies sin letra pequeña)',
    text: 'Usamos cookies propias para recordar tu país y, solo si nos das permiso, Google Analytics 4 y Microsoft Clarity para ver qué secciones funcionan mejor (RGPD / LSSI).',
    acceptAll: 'Aceptar todas',
    rejectOptional: 'Solo necesarias',
    configure: 'Configurar',
    savePrefs: 'Guardar preferencias',
    categories: {
      necessary: {
        title: 'Técnicas y necesarias',
        desc: 'Recuerdan tu país sugerido y el estado de este aviso. No rastrean tu navegación.',
        badge: 'Siempre activas',
      },
      analytics: {
        title: 'Analítica (GA4 y Clarity)',
        desc: 'Nos ayudan a medir clics en WhatsApp, envíos de formulario y lectura de páginas de forma agregada.',
      },
      marketing: {
        title: 'Marketing y atribución',
        desc: 'Permiten medir campañas cuando activamos anuncios propios.',
      },
    },
    reopenLabel: 'Configurar cookies',
  },
  footer: {
    tagline: 'Contenido para redes, listo cada mes. Hecho con cariño entre España y México.',
    legalNav: 'Enlaces legales',
    legal: [
      { label: 'Aviso legal', route: 'avisoLegal' },
      { label: 'Privacidad', route: 'privacidad' },
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
