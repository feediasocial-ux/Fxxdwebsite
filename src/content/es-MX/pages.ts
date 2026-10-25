import type { CorePagesCopy } from '../types';

export const pages: CorePagesCopy = {
  precios: {
    metaTitle: 'Precios de manejo de redes sociales en México | Feediasocial',
    metaDescription:
      'Paquetes claros desde 3,900 MXN/mes: guiones, edición de video, gráficos con IA y calendario en Metricool. Tú solo grabas con tu celular.',
    eyebrow: 'Paquetes y precios · México',
    h1: 'Precios claros en pesos para tener tus redes listas cada mes',
    intro:
      'En México un paquete mensual de manejo de contenido para redes con guiones, edición de video y programación en Metricool empieza en 3,900 MXN/mes. Sin cotizaciones eternas: eliges el volumen de reels y publicaciones que necesita tu negocio.',
    comparisonTitle: '¿Qué incluye exactamente cada paquete?',
    comparisonRows: [
      { feature: 'Posts mensuales en el feed (carrusel o imagen)', esencial: '8 al mes', crecimiento: '12 al mes', pro: '12 al mes' },
      { feature: 'Historias con diseño y textos', esencial: '8 al mes', crecimiento: '12 al mes', pro: '12 al mes' },
      { feature: 'Reels con guion listo para leer y edición', esencial: '2 al mes', crecimiento: '4 al mes', pro: '8 al mes' },
      { feature: 'Búsqueda de tendencias y audios de tu giro', esencial: 'Incluida', crecimiento: 'Incluida', pro: 'Incluida' },
      { feature: 'Calendario y programación en Metricool', esencial: 'Incluido', crecimiento: 'Incluido', pro: 'Incluido' },
      { feature: 'Reporte mensual con recomendaciones', esencial: 'Resumen básico', crecimiento: 'Completo + 1 llamada/mes', pro: 'Completo + 1 llamada/mes' },
      { feature: 'Estrategia de anuncios (Meta Ads)', esencial: '—', crecimiento: '—', pro: 'Incluida (pauta aparte)' },
      { feature: 'Respuesta a comentarios frecuentes', esencial: '—', crecimiento: '—', pro: 'Incluida' },
    ],
    includedTitle: 'Lo que siempre va incluido, elijas el paquete que elijas',
    includedItems: [
      {
        title: 'Llamada inicial de onboarding (45 minutos)',
        text: 'Aterrizamos el tono de tu negocio, las dudas reales de tus clientes y qué productos o servicios quieres mover cada mes.',
      },
      {
        title: 'Lista de tomas para grabar en 30 minutos',
        text: 'No pierdes toda la tarde pensando qué grabar. Te damos un checklist puntual para grabar con tu celular en una sola sesión.',
      },
      {
        title: 'Revisión antes de programar',
        text: 'Revisas todo el calendario en Metricool antes de que se publique. Si quieres ajustar algún texto, lo dejamos al cien.',
      },
    ],
    faqTitle: 'Dudas frecuentes sobre precios y facturación en México',
    faqs: [
      {
        q: '¿Los precios incluyen la pauta en anuncios de Instagram o Facebook?',
        a: 'No. La inversión en anuncios se paga directo a Meta desde tu tarjeta. En el paquete Pro incluimos la estrategia y armado de campañas.',
      },
      {
        q: '¿Puedo arrancar en Esencial y subir a Crecimiento después?',
        a: 'Sí, puedes ajustar tu paquete de un mes a otro según la temporada de tu negocio.',
      },
      {
        q: '¿Qué pasa si un mes nadie en el negocio puede grabar con el celular?',
        a: 'Activamos el Plan B sin cámara ese mes: armamos tus publicaciones con carruseles educativos, diseño con IA y material que ya tengas de tu negocio.',
      },
      {
        q: '¿Cómo funciona el pago y la facturación en México?',
        a: 'Pago mensual en MXN con tarjeta o transferencia. Precios en MXN, IVA según corresponda. [PENDIENTE: facturación/CFDI con contador].',
      },
    ],
  },
  comoFunciona: {
    metaTitle: 'Cómo funciona nuestro sistema de contenido | Feediasocial México',
    metaDescription:
      'Conoce quién graba qué: tú dedicas 30 minutos al mes con tu celular y nosotros armamos guiones, edición de video, IA y programación en Metricool.',
    eyebrow: 'Cómo funciona · El proceso real',
    h1: 'Tú grabas 30 minutos con tu celular. Nosotros armamos todo el mes.',
    intro:
      'Nuestro sistema separa lo único que nadie puede hacer por ti (mostrar tu negocio o hablar a cámara con tu celular durante media hora al mes) de toda la talacha diaria: estrategia, guiones, edición de video, diseño y programación.',
    processSteps: [
      {
        num: '01',
        who: 'Juntos',
        duration: '45 min (solo el primer mes)',
        title: 'Llamada de onboarding',
        text: 'Platicamos por videollamada para entender tu giro, tu cliente ideal, las preguntas que siempre te hacen por WhatsApp y el estilo de tu marca.',
        deliverable: 'Entregable: guía breve de tono y pilares de contenido.',
        color: 'lemon',
      },
      {
        num: '02',
        who: 'Nosotros',
        duration: 'Semana 1 de cada mes',
        title: 'Tendencias, guiones y calendario mensual',
        text: 'Buscamos qué formatos están funcionando en tu giro y escribimos los guiones palabra por palabra junto con la propuesta de calendario del mes.',
        deliverable: 'Entregable: guiones + lista de tomas paso a paso.',
        color: 'coral',
      },
      {
        num: '03',
        who: 'Tú o tu equipo',
        duration: 'Máximo 30 min al mes',
        title: 'Una sola sesión de grabación con el celular',
        text: 'Pones tu celular en un tripié o alguien de tu equipo graba las tomas de la lista. Sin equipo caro: buena luz natural y tu negocio real.',
        deliverable: 'Entregable: subes los clips en bruto a tu carpeta compartida.',
        color: 'sky',
      },
      {
        num: '04',
        who: 'Nosotros',
        duration: 'Semanas 2 a 4',
        title: 'Edición de video, gráficos con IA y programación en Metricool',
        text: 'Editamos los reels con ritmo, subtítulos claros y portadas, diseñamos carruseles e historias, redactamos el copy y programamos todo en Metricool.',
        deliverable: 'Entregable: mes completo programado tras tu visto bueno.',
        color: 'lemon',
      },
      {
        num: '05',
        who: 'Nosotros',
        duration: 'Fin de mes',
        title: 'Reporte mensual sencillo y ajustes',
        text: 'Te mostramos en una sola página qué publicaciones trajeron más guardados, mensajes y visitas al perfil para mejorar los guiones del siguiente mes.',
        deliverable: 'Entregable: reporte claro + plan del mes siguiente.',
        color: 'cream-deep',
      },
    ],
    whoRecordsTitle: '¿Quién hace qué exactamente?',
    whoRecordsIntro: 'La regla es simple: tú pones la esencia real de tu negocio y nosotros ponemos toda la producción mensual.',
    whoRecordsCols: [
      {
        who: 'Lo que haces tú (30 min/mes)',
        badge: 'Con tu celular',
        color: 'lemon',
        items: [
          'Dar visto bueno a los temas y guiones del mes en 10 minutos.',
          'Grabar con tu celular los clips cortos siguiendo nuestra lista de tomas.',
          'Subir los videos sin editar a la carpeta compartida desde tu celular.',
        ],
      },
      {
        who: 'Lo que hacemos nosotros (todo el mes)',
        badge: 'Nuestro equipo',
        color: 'coral',
        items: [
          'Detectar tendencias de tu giro y redactar cada guion con gancho y llamado a la acción.',
          'Editar los videos verticales (cortes dinámicos, subtítulos, color y portadas).',
          'Diseñar carruseles, posts e historias apoyados con IA aterrizada a tu marca.',
          'Redactar los textos, programar en Metricool y entregarte tu reporte mensual.',
        ],
      },
    ],
    shotListTitle: 'Ejemplo real de lista de tomas (lo que recibes antes de grabar)',
    shotListSubtitle: 'Así nunca te quedas en blanco frente al celular:',
    shotListItems: [
      {
        clip: 'Tomas 1 a 3 · Reel educativo (25 s)',
        duration: '8 min en total',
        instruction: 'Celular en tripié a la altura de los ojos, frente a buena luz natural. Lees las 3 partes del guion por separado (si te trabas, repites la frase sin apagar).',
      },
      {
        clip: 'Tomas 4 y 5 · Tomas de apoyo (B-roll)',
        duration: '5 min en total',
        instruction: 'Graba 5 segundos en vertical preparando tu servicio, atendiendo o mostrando de cerca el producto en tu negocio.',
      },
      {
        clip: 'Tomas 6 a 8 · Reel de duda frecuente (30 s)',
        duration: '10 min en total',
        instruction: 'En tu consultorio, sucursal o escritorio. Respondes la pregunta del guion tal como se la platicas a un cliente en persona.',
      },
    ],
    planBTitle: 'Plan B sin cámara: cuando prefieres no salir en video',
    planBText:
      'Si nadie en tu negocio quiere salir hablando a cuadro, cambiamos los reels hablados por carruseles educativos, diseño gráfico con IA y videos cortos mostrando solo manos, producto o instalaciones.',
    waMessage: 'Hola, vi cómo funciona su sistema en México y quiero resolver unas dudas por WhatsApp.',
    waCta: 'Preguntar dudas por WhatsApp',
  },
  sobreNosotros: {
    metaTitle: 'Sobre nosotros · Equipo entre México y España | Feediasocial',
    metaDescription:
      'Conoce a las dos personas fundadoras de Feediasocial. Agencia de contenido para redes 100 % remota que habla el español real de México y España.',
    eyebrow: 'Sobre nosotros',
    h1: 'Dos personas fundadoras, cero rollo y un sistema para publicar cada mes',
    intro:
      'Feediasocial nació para resolver algo muy concreto: dueños de negocios y profesionistas que son muy buenos en lo que hacen, pero no tienen noches libres para escribir guiones ni editar videos en el celular.',
    storyTitle: 'Por qué armamos una agencia entre México y España',
    storyParagraphs: [
      'Después de ver cómo muchos negocios pagaban igualas mensuales por publicaciones genéricas llenas de fotos de stock que nadie pelaba, decidimos hacer lo opuesto: un sistema donde se vea tu negocio real, pero toda la carga de guiones, edición y programación corra por nuestra cuenta.',
      'Vivimos y trabajamos entre México y España. Sabemos que en CDMX, Guadalajara o Monterrey los clientes agendan por WhatsApp desde el celular y buscan un trato cercano, muy distinto al de Madrid. Por eso cada pieza se escribe desde cero en el español de tu país.',
    ],
    foundersTitle: 'Las dos personas detrás de tu cuenta',
    founders: [
      {
        name: '[PENDIENTE: Nombre fundadora/or 1]',
        role: 'Estrategia, guiones y dirección de cuentas',
        bio: '[PENDIENTE: bio real de 3 líneas — experiencia en estrategia de contenido, guiones de conversión y negocios en México y España].',
        placeholder: '[FOTO REAL: fundadora/or 1 trabajando con guiones]',
        color: 'lemon',
      },
      {
        name: '[PENDIENTE: Nombre fundador/a 2]',
        role: 'Edición de video, diseño con IA y programación en Metricool',
        bio: '[PENDIENTE: bio real de 3 líneas — experiencia en edición de video vertical, diseño con IA y reportes mensuales].',
        placeholder: '[FOTO REAL: fundador/a 2 editando video vertical]',
        color: 'sky',
      },
    ],
    whyTwoCountriesTitle: 'Por qué hablamos como tú hablas',
    whyTwoCountriesText:
      'Un video con palabras prestadas de otro país se siente ajeno desde el primer segundo. Nuestro glosario interno cuida expresiones, referencias, moneda y tono mexicano en cada guion y texto que entregamos.',
    valuesTitle: 'Tres reglas que nunca rompemos',
    values: [
      {
        title: 'Prohibido prometer viralidad o seguidores',
        text: 'Nadie controla el algoritmo y no te vamos a vender humo. Controlamos que cada mes salgan piezas útiles, bien editadas y puntuales.',
        color: 'coral',
      },
      {
        title: 'Cero fotos de stock genéricas',
        text: 'Tus clientes quieren ver tu consultorio, tus platillos o tus propiedades reales. Preferimos 30 minutos de celular real a mil fotos de banco.',
        color: 'lemon',
      },
      {
        title: 'Trato directo y reportes claros',
        text: 'Platicas por WhatsApp directo con quienes hacen tu contenido, y tu reporte mensual cabe en una pantalla.',
        color: 'sky',
      },
    ],
    waMessage: 'Hola, vengo de la página Sobre nosotros (México) y quiero platicar con ustedes.',
    waCta: 'Platicar por WhatsApp',
  },
  contacto: {
    metaTitle: 'Contacto y mini-auditoría gratis | Feediasocial México',
    metaDescription:
      'Escríbenos por WhatsApp o pide tu mini-auditoría gratuita: te mandamos 3 ideas de reels para tu negocio en 24 horas hábiles.',
    eyebrow: 'Contacto · México',
    h1: 'Platicamos por WhatsApp o te mandamos 3 ideas de reels gratis',
    intro:
      'La vía más rápida para ver qué paquete le queda a tu negocio es mandarnos un WhatsApp. Si prefieres que primero revisemos tu cuenta y te enviemos 3 ideas de reels sin costo, llena el formulario corto.',
    waCardTitle: 'Vía rápida: mándanos un WhatsApp',
    waCardText:
      'Te contestamos directamente las personas fundadoras (sin bots) para revisar tu giro y decirte qué paquete te conviene.',
    waCardCta: 'Abrir conversación en WhatsApp',
    waMessage: 'Hola, vengo de la página de Contacto (México) y quiero información de los paquetes.',
    responseGuarantee: 'Respuesta en menos de 24 horas hábiles.',
    photoAlt: 'Mano sosteniendo un celular con una conversación de chat sobre la mesa de una cafetería cálida',
    expectationsTitle: '¿Qué pasa cuando nos escribes?',
    expectations: [
      'Revisamos tu perfil actual de Instagram o sitio web antes de responderte.',
      'Te mandamos 3 ideas de reels con gancho aterrizadas a tu giro en México.',
      'Si te late cómo trabajamos, te recomendamos el paquete ideal sin llamadas insistentes.',
    ],
  },
};
