import type { CorePagesCopy } from '../types';

export const pages: CorePagesCopy = {
  precios: {
    metaTitle: 'Precios de gestión de redes sociales en España | Feediasocial',
    metaDescription:
      'Paquetes claros desde 349 €/mes: guiones, edición de vídeo, gráficos con IA y calendario en Metricool. Tú solo grabas con el móvil.',
    eyebrow: 'Paquetes y precios · España',
    h1: 'Precios claros para tener tus redes listas cada mes',
    intro:
      'En España un paquete mensual de contenido para redes con guiones, edición de vídeo y programación en Metricool empieza en 349 €/mes. Sin presupuestos ocultos: eliges el volumen de reels y publicaciones que encaja con tu pyme.',
    comparisonTitle: '¿Qué incluye exactamente cada paquete?',
    comparisonRows: [
      { feature: 'Posts mensuales en el feed (carrusel o imagen)', esencial: '8 al mes', crecimiento: '12 al mes', pro: '12 al mes' },
      { feature: 'Stories con diseño y copy', esencial: '8 al mes', crecimiento: '12 al mes', pro: '12 al mes' },
      { feature: 'Reels con guion palabra por palabra y edición', esencial: '2 al mes', crecimiento: '4 al mes', pro: '8 al mes' },
      { feature: 'Búsqueda de tendencias y audios de tu sector', esencial: 'Incluida', crecimiento: 'Incluida', pro: 'Incluida' },
      { feature: 'Calendario y programación en Metricool', esencial: 'Incluido', crecimiento: 'Incluido', pro: 'Incluido' },
      { feature: 'Informe mensual con recomendaciones', esencial: 'Resumen básico', crecimiento: 'Completo + 1 llamada/mes', pro: 'Completo + 1 llamada/mes' },
      { feature: 'Estrategia de anuncios (Meta Ads)', esencial: '—', crecimiento: '—', pro: 'Incluida (inversión aparte)' },
      { feature: 'Gestión de comentarios habituales', esencial: '—', crecimiento: '—', pro: 'Incluida' },
    ],
    includedTitle: 'Lo que siempre va incluido, elijas el paquete que elijas',
    includedItems: [
      {
        title: 'Onboarding inicial de 45 minutos',
        text: 'Definimos el tono de tu marca, las dudas reales de tus clientes y qué productos o servicios tienen prioridad cada mes.',
      },
      {
        title: 'Lista de tomas para grabar en 30 minutos',
        text: 'No pierdes la mañana pensando planos. Te enviamos un checklist exacto para grabar con tu móvil de una tirada.',
      },
      {
        title: 'Revisión antes de programar',
        text: 'Ves todo el calendario en Metricool antes de que salga publicado. Si hay que ajustar un texto, lo cambiamos.',
      },
    ],
    faqTitle: 'Dudas habituales sobre precios y facturación en España',
    faqs: [
      {
        q: '¿Los precios incluyen el presupuesto para anuncios en Instagram o Facebook?',
        a: 'No. La inversión publicitaria se paga directamente a Meta desde tu cuenta. En el paquete Pro incluimos la estrategia y configuración de campañas.',
      },
      {
        q: '¿Puedo empezar en Esencial y subir a Crecimiento después?',
        a: 'Sí, puedes cambiar de paquete de un mes para otro según la temporada de tu negocio.',
      },
      {
        q: '¿Qué pasa si un mes nadie del equipo puede grabar con el móvil?',
        a: 'Activamos el Plan B sin cámara ese mes: convertimos los temas en carruseles, gráficos con IA y piezas con material de archivo propio de tu negocio.',
      },
      {
        q: '¿Cómo funciona la facturación para pymes y autónomos en España?',
        a: 'Recibes factura mensual oficial antes del cargo. [PENDIENTE: confirmar régimen de IVA con asesoría fiscal].',
      },
    ],
  },
  comoFunciona: {
    metaTitle: 'Cómo funciona nuestro sistema de contenido | Feediasocial',
    metaDescription:
      'Descubre quién graba qué: tú dedicas 30 minutos al mes con tu móvil y nosotros hacemos guiones, edición, IA y programación en Metricool.',
    eyebrow: 'Cómo funciona · El proceso real',
    h1: 'Tú grabas 30 minutos con el móvil. Nosotros hacemos el resto del mes.',
    intro:
      'Nuestro sistema separa lo único que nadie puede hacer por ti (poner la cara o enseñar tu local con tu móvil durante media hora al mes) de todo el trabajo técnico: estrategia, guiones, edición de vídeo, diseño y programación.',
    processSteps: [
      {
        num: '01',
        who: 'Juntos',
        duration: '45 min (solo el primer mes)',
        title: 'Onboarding estratégico',
        text: 'Nos reunimos por videollamada para conocer tu negocio, tus márgenes, las objeciones de tus clientes y el estilo visual que te representa.',
        deliverable: 'Entregable: manual breve de voz y pilares de contenido.',
        color: 'lemon',
      },
      {
        num: '02',
        who: 'Nosotros',
        duration: 'Semana 1 de cada mes',
        title: 'Búsqueda de tendencias, guiones y calendario',
        text: 'Investigamos qué formatos están funcionando en tu sector y redactamos los guiones palabra por palabra junto con la propuesta de calendario mensual.',
        deliverable: 'Entregable: guiones + lista de tomas paso a paso.',
        color: 'coral',
      },
      {
        num: '03',
        who: 'Tú o tu equipo',
        duration: 'Máximo 30 min al mes',
        title: 'Una sola sesión de grabación con el móvil',
        text: 'Colocas el móvil en un trípode o alguien de tu equipo graba los planos de la lista. Sin focos complicados ni cámaras caras: luz natural y tu espacio real.',
        deliverable: 'Entregable: subes los brutos a tu carpeta compartida.',
        color: 'sky',
      },
      {
        num: '04',
        who: 'Nosotros',
        duration: 'Semanas 2 a 4',
        title: 'Edición de vídeo, gráficos con IA y programación en Metricool',
        text: 'Montamos los reels con ritmo, subtítulos limpios y portadas, diseñamos los carruseles y stories, redactamos los textos y lo programamos todo en Metricool.',
        deliverable: 'Entregable: mes completo listo y programado tras tu visto bueno.',
        color: 'lemon',
      },
      {
        num: '05',
        who: 'Nosotros',
        duration: 'Fin de mes',
        title: 'Informe mensual sencillo y ajustes',
        text: 'Te resumimos en una página qué publicaciones han traído más guardados, mensajes y visitas al perfil para afinar los guiones del mes siguiente.',
        deliverable: 'Entregable: informe claro sin jerga + plan del mes siguiente.',
        color: 'cream-deep',
      },
    ],
    whoRecordsTitle: '¿Quién hace qué exactamente?',
    whoRecordsIntro: 'La regla es sencilla: tú pones la verdad de tu negocio en bruto y nosotros ponemos el oficio diario.',
    whoRecordsCols: [
      {
        who: 'Lo que haces tú (30 min/mes)',
        badge: 'Con tu móvil',
        color: 'lemon',
        items: [
          'Aprobar los temas y guiones del mes en 10 minutos.',
          'Grabar con el móvil los clips cortos siguiendo nuestra lista de tomas.',
          'Subir los vídeos en bruto a la carpeta compartida desde el propio móvil.',
        ],
      },
      {
        who: 'Lo que hacemos nosotros (todo el mes)',
        badge: 'Nuestro equipo',
        color: 'coral',
        items: [
          'Detectar tendencias y redactar cada guion con gancho, desarrollo y cierre.',
          'Editar los vídeos verticales (cortes, subtítulos, color, ritmo y portadas).',
          'Diseñar carruseles, posts y stories con apoyo de IA adaptada a tu marca.',
          'Escribir el copy, programar en Metricool y entregarte el informe mensual.',
        ],
      },
    ],
    shotListTitle: 'Ejemplo real de lista de tomas (lo que recibes antes de grabar)',
    shotListSubtitle: 'Así evitamos que te quedes en blanco delante de la cámara:',
    shotListItems: [
      {
        clip: 'Tomas 1 a 3 · Reel educativo (25 s)',
        duration: '8 min en total',
        instruction: 'Móvil en trípode a la altura de los ojos, junto a la ventana. Lees las 3 frases del guion por bloques (si te equivocas, repites la frase sin cortar).',
      },
      {
        clip: 'Tomas 4 y 5 · Recursos de apoyo (B-roll)',
        duration: '5 min en total',
        instruction: 'Graba 5 segundos en vertical preparando el material, atendiendo de espaldas o mostrando el detalle del producto en mesa.',
      },
      {
        clip: 'Tomas 6 a 8 · Reel de objeción frecuente (30 s)',
        duration: '10 min en total',
        instruction: 'En tu zona de trabajo habitual. Respondes a la pregunta del guion como se la explicarías a un cliente en persona.',
      },
    ],
    planBTitle: 'Plan B sin cámara: cuando prefieres no salir en vídeo',
    planBText:
      'Si en tu negocio nadie quiere hablar a cámara, sustituimos los reels hablados por carruseles de alto valor, animaciones tipográficas, gráficos con IA y vídeos cortos de detalle de producto o espacio.',
    waMessage: 'Hola, he visto cómo funciona vuestro sistema en España y quiero consultar dudas por WhatsApp.',
    waCta: 'Preguntar dudas por WhatsApp',
  },
  sobreNosotros: {
    metaTitle: 'Sobre nosotros · Equipo entre España y México | Feediasocial',
    metaDescription:
      'Conoce a las dos personas fundadoras de Feediasocial. Agencia de contenido para redes 100 % en remoto que habla el español real de España y México.',
    eyebrow: 'Sobre nosotros',
    h1: 'Dos personas fundadoras, cero humo y un sistema para publicar cada mes',
    intro:
      'Feediasocial nació para resolver un problema concreto: pymes y profesionales que saben muy bien hacer su trabajo, pero no tienen tardes libres para pensar guiones ni editar vídeos en el móvil.',
    storyTitle: 'Por qué montamos una agencia entre España y México',
    storyParagraphs: [
      'Después de ver cómo muchas pymes pagaban a agencias tradicionales por «estar en redes» con frases genéricas y fotos de banco de imágenes, decidimos construir lo contrario: un sistema donde la cara y la verdad son las del negocio, pero todo el trabajo pesado lo hacemos nosotros.',
      'Vivimos y trabajamos entre España y México. Sabemos que en Madrid pides cita por el móvil para una clínica estética y en Ciudad de México agendas por WhatsApp desde el celular para tu consultorio. Por eso jamás traducimos ni reciclamos textos entre países.',
    ],
    foundersTitle: 'Las dos personas al otro lado de tu cuenta',
    founders: [
      {
        name: '[PENDIENTE: Nombre fundadora/or 1]',
        role: 'Estrategia, guiones y dirección de cuentas',
        bio: '[PENDIENTE: bio real de 3 líneas — experiencia en contenido, guiones de conversión y trabajo con negocios en España y México].',
        placeholder: '[FOTO REAL: fundadora/or 1 trabajando con guiones]',
        color: 'lemon',
      },
      {
        name: '[PENDIENTE: Nombre fundador/a 2]',
        role: 'Edición de vídeo, diseño con IA y programación en Metricool',
        bio: '[PENDIENTE: bio real de 3 líneas — experiencia en edición vertical, sistemas visuales con IA y analítica mensual].',
        placeholder: '[FOTO REAL: fundador/a 2 editando vídeo vertical]',
        color: 'sky',
      },
    ],
    whyTwoCountriesTitle: 'Por qué hablamos tu idioma (de verdad)',
    whyTwoCountriesText:
      'Un guion que suena forzado espanta a los clientes en los primeros dos segundos. Nuestro glosario interno separa vocabulario, giros, horarios y referencias culturales de España y de México en cada pieza que escribimos.',
    valuesTitle: 'Tres reglas que no rompemos nunca',
    values: [
      {
        title: 'Prohibido prometer viralidad o seguidores',
        text: 'No controlamos el algoritmo y no te vamos a mentir. Controlamos que cada mes salgan piezas útiles, bien editadas y a tiempo.',
        color: 'coral',
      },
      {
        title: 'Nada de fotos de stock disfrazadas',
        text: 'Los clientes quieren ver tu local, tu clínica o tu forma de explicar. Preferimos 30 minutos de móvil real a mil fotos de archivo.',
        color: 'lemon',
      },
      {
        title: 'Trato directo y sin jerga',
        text: 'Hablas por WhatsApp con quienes hacen tu contenido. Y los informes mensuales caben en una pantalla.',
        color: 'sky',
      },
    ],
    waMessage: 'Hola, vengo de la página Sobre nosotros (España) y quiero hablar con vosotros.',
    waCta: 'Hablar con nosotros por WhatsApp',
  },
  contacto: {
    metaTitle: 'Contacto y mini-auditoría gratuita | Feediasocial España',
    metaDescription:
      'Escríbenos por WhatsApp o pide tu mini-auditoría gratuita: te enviamos 3 ideas de reels para tu negocio en 24 horas laborables.',
    eyebrow: 'Contacto · España',
    h1: 'Hablemos por WhatsApp o pide tus 3 ideas de reels gratis',
    intro:
      'La forma más rápida de ver si encajamos es por WhatsApp. Si prefieres que primero miremos tu perfil y te mandemos 3 ideas concretas de reels sin coste, rellena el formulario corto.',
    waCardTitle: 'Vía rápida: escríbenos por WhatsApp',
    waCardText:
      'Te respondemos directamente las personas fundadoras (sin bots de por medio) para ver qué paquete encaja mejor con tu negocio.',
    waCardCta: 'Abrir conversación en WhatsApp',
    waMessage: 'Hola, vengo de la página de Contacto (España) y quiero información sobre los paquetes.',
    responseGuarantee: 'Respuesta en menos de 24 horas laborables.',
    photoAlt: 'Mano sujetando un móvil con una conversación de chat en la mesa de una cafetería luminosa',
    expectationsTitle: '¿Qué pasa cuando nos escribes?',
    expectations: [
      'Revisamos tu perfil actual de Instagram o web antes de contestarte.',
      'Te enviamos 3 ideas de reels con gancho pensadas para tu sector en España.',
      'Si te cuadra nuestra forma de trabajar, te proponemos el paquete adecuado sin insistir ni hacer llamadas comerciales agresivas.',
    ],
  },
};
