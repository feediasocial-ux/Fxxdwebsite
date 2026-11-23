import type { IntentLandingData } from './types.ts';

export const intentsES: IntentLandingData[] = [
  {
    id: 'precio',
    country: 'es',
    slug: 'precio-community-manager',
    routeKey: 'intencionPrecio',
    shortTitle: 'Precio de un community manager en España',
    cardSummary: 'Cuánto cuesta delegar las redes de tu pyme en España: tarifas reales de mercado, qué incluye cada cuota y dónde se va el presupuesto.',
    metaTitle: 'Precio de un Community Manager en España (Guía honesta)',
    metaDescription:
      '¿Cuánto cobra un community manager o agencia de redes en España? Desglose real de tarifas en euros, qué incluye cada tramo y nuestros paquetes claros.',
    eyebrow: 'Guía de precios · España',
    h1: '¿Cuánto cuesta un community manager o servicio de gestión de redes en España?',
    intro:
      'En España, contratar la gestión de redes sociales para una pyme cuesta de media entre 300 €/mes y 1.200 €/mes (más IVA) cuando trabajas con un profesional autónomo o una agencia especializada. Si decides incorporar a una persona en plantilla a jornada completa, el coste empresa supera los 2.100 €/mes contando sueldo bruto y Seguridad Social. En Feediasocial trabajamos con paquetes cerrados desde 300 €/mes donde tú solo grabas 30 minutos al mes con tu móvil y nosotros entregamos guiones, edición de vídeo, diseño con IA y programación en Metricool.',
    pendingNote: 'Rangos orientativos del mercado español según modalidad de contratación y volumen mensual de vídeo.',
    comparisonTable: {
      title: 'Tabla orientativa de precios en el mercado español',
      subtitle: 'Comparativa realista de lo que suele incluir cada rango de inversión mensual en España:',
      headers: ['Tramo mensual (sin IVA)', 'Quién suele ofrecerlo', 'Qué suele incluir de verdad', 'Riesgo principal para tu pyme'],
      rows: [
        {
          label: '100 € – 250 €/mes',
          col1: 'Perfiles junior sin experiencia o plantillas en masa',
          col2: '4–8 carteles estáticos de plantilla genérica sin vídeo ni estrategia',
          col3: 'Tu cuenta parece un catálogo frío; cero alcance orgánico en Reels y abandono a los dos meses.',
        },
        {
          label: '300 € – 450 €/mes',
          col1: 'Agencia especializada por sistema (tramo Esencial / Crecimiento)',
          col2: 'Guiones palabra por palabra, edición de reels verticales, carruseles con IA y programación en Metricool',
          col3: 'Requiere que alguien del negocio dedique 30 minutos al mes a grabar brutos con el móvil (o usar Plan B sin cámara).',
        },
        {
          label: '800 € – 1.500 €/mes',
          col1: 'Agencia integral con desplazamiento o paquete Pro con estrategia de anuncios',
          col2: 'Volumen alto de vídeo (8+ reels/mes), gestión de comentarios, guiones de anuncios o rodaje presencial',
          col3: 'Solo compensa si tu ticket medio o volumen de consultas amortiza la producción intensiva.',
        },
        {
          label: '2.100 € – 2.800 €/mes',
          col1: 'Community manager en plantilla (sueldo + cuota patronal Seguridad Social)',
          col2: 'Dedicación interna diaria y grabación in situ constante',
          col3: 'Coste fijo alto, vacaciones, bajas laborales y necesidad de comprar equipo y software aparte.',
        },
      ],
    },
    pillarsTitle: 'Qué determina el precio real de llevar tus redes en España',
    pillars: [
      {
        badge: 'Factor 01 · Vídeo vertical',
        title: 'Editar Reels con retención no cuesta lo mismo que pegar un texto en Canva',
        text: 'Hoy el alcance orgánico en Instagram y TikTok depende del vídeo corto. Pensar el gancho de los 3 primeros segundos, redactar el guion y montar cortes dinámicos con subtítulos lleva horas de oficio.',
        bullets: [
          'Investigación previa de audios y formatos de tu sector en España.',
          'Guion estructurado para que no improvises frente al móvil.',
          'Montaje de ritmo, limpieza de audio, subtítulos y portada.',
        ],
        color: 'coral',
      },
      {
        badge: 'Factor 02 · Quién graba los brutos',
        title: 'Por qué el desplazamiento encarece cualquier presupuesto en 400 € o 600 € extra',
        text: 'Cuando una agencia envía un cámara a tu local en Madrid, Barcelona o Valencia, pagas horas de transporte, dietas y equipo. Nuestro modelo elimina ese sobrecoste: tú grabas en 30 minutos con tu móvil siguiendo nuestra lista de tomas.',
        bullets: [
          'Ahorras el sobrecoste de rodaje presencial sin perder autenticidad.',
          'Los clientes ven tu negocio real y a tu equipo, no actores.',
          'Si nadie quiere salir en vídeo, activamos el Plan B sin cámara.',
        ],
        color: 'lemon',
      },
      {
        badge: 'Factor 03 · Sistema y continuidad',
        title: 'Herramientas, programación en Metricool y respaldo de equipo',
        text: 'En nuestras cuotas de 300 €/mes, 450 €/mes y 650 €/mes ya están incluidas las licencias de diseño, herramientas de IA y programación en Metricool, además de un equipo que no deja tu cuenta parada en agosto o por una baja.',
        bullets: [
          'Calendario mensual completo revisado antes de publicar.',
          'Programación automática en tus horas de mayor actividad.',
          'Informe mensual de una página centrado en mensajes y guardados.',
        ],
        color: 'sky',
      },
    ],
    whenToChooseTitle: 'Qué opción te conviene según el momento de tu negocio',
    whenToChoose: [
      {
        profile: 'Autónomo o pyme que empieza y no tiene presupuesto mensual',
        recommendation: 'Hazlo tú mismo con un calendario sencillo de 2 publicaciones por semana.',
        honestVerdict: 'No contrates tarifas de 100 €/mes: tirarás el dinero en carteles que nadie mira. Espera a poder invertir en un sistema con vídeo real.',
      },
      {
        profile: 'Clínica, restaurante, inmobiliaria o gimnasio con clientes activos y cero tiempo',
        recommendation: 'Paquete Esencial (300 €/mes) o Crecimiento (450 €/mes) con grabación guiada de 30 minutos.',
        honestVerdict: 'Es el punto óptimo entre coste e impacto: mantienes la cara real de tu negocio y delegas el 90 % del trabajo técnico.',
      },
      {
        profile: 'Empresa con varias sedes que necesita cobertura diaria en vivo',
        recommendation: 'Perfil interno en plantilla combinado con dirección estratégica externa.',
        honestVerdict: 'Si necesitas grabar historias cada dos horas dentro del local, alguien dentro del local siempre será más ágil.',
      },
    ],
    faqTitle: 'Preguntas frecuentes sobre tarifas de community manager en España',
    faqs: [
      {
        q: '¿Los precios de vuestros paquetes incluyen el IVA en España?',
        a: 'Nuestros paquetes (300 €/mes, 450 €/mes y 650 €/mes) se muestran antes de impuestos aplicables y se abonan mensualmente con factura oficial.',
      },
      {
        q: '¿Por qué hay ofertas de gestión de redes por 90 € al mes?',
        a: 'Porque reutilizan las mismas plantillas estáticas para decenas de cuentas sin conocer tu negocio ni editar un solo vídeo real. Ese tipo de publicaciones no retiene la atención ni genera confianza en clientes reales.',
      },
      {
        q: '¿La inversión publicitaria en Meta Ads está incluida en la cuota?',
        a: 'No. El presupuesto destinado a Meta Ads o TikTok Ads se abona directamente desde tu cuenta publicitaria a la plataforma para que tengas control transparente de cada euro invertido.',
      },
      {
        q: '¿Exigís permanencia anual al contratar un paquete?',
        a: 'Trabajamos mes a mes. Recomendamos mantener el sistema al menos 3 meses para evaluar la tracción orgánica con datos reales, pero no bloqueamos tu salida con cláusulas abusivas.',
      },
      {
        q: '¿Qué pasa si un mes quiero subir o bajar de paquete?',
        a: 'Nos avisas por WhatsApp antes de arrancar la planificación del mes siguiente y ajustamos el volumen de piezas y la cuota sin penalizaciones.',
      },
    ],
    waMessage: 'Hola, vengo de la guía de precios de Community Manager en España y quiero saber qué paquete encaja con mi negocio.',
    waCta: 'Consultar qué paquete me encaja por WhatsApp',
  },
  {
    id: 'comparativa',
    country: 'es',
    slug: 'agencia-vs-community-manager-vs-freelancer',
    routeKey: 'intencionComparativa',
    shortTitle: 'Agencia vs Community Manager vs Freelancer',
    cardSummary: 'Comparativa honesta entre contratar en plantilla, buscar un autónomo freelance o delegar en una agencia especializada en España.',
    metaTitle: 'Agencia vs Community Manager en plantilla vs Freelancer (España)',
    metaDescription:
      '¿Qué compensa más para una pyme en España: agencia de contenido, community manager en nómina o freelancer autónomo? Comparativa real de costes y pros.',
    eyebrow: 'Comparativa para pymes · España',
    h1: 'Agencia vs community manager en plantilla vs freelancer: ¿qué compensa más en España?',
    intro:
      'Para la mayoría de las pymes españolas de entre 2 y 25 empleados, contratar un community manager en nómina resulta desproporcionado en costes fijos, mientras que depender de un único freelancer autónomo suele fallar cuando esa persona acumula picos de trabajo o coge una baja. Una agencia de contenido por sistema te da guionistas, editores de vídeo y diseñadores por una fracción de una nómina (desde 300 €/mes), pero exige que dediques 30 minutos al mes con tu móvil. Aquí comparamos las tres opciones sin barrer para casa.',
    comparisonTable: {
      title: 'Comparativa directa de las 3 opciones en España',
      subtitle: 'Analizamos coste real, continuidad, perfiles incluidos y rapidez de arranque:',
      headers: ['Criterio', 'CM en plantilla (Nómina)', 'Freelancer autónomo', 'Feediasocial (Sistema remoto)'],
      rows: [
        {
          label: 'Coste mensual aproximado',
          col1: '2.100 € – 2.800 €/mes (sueldo + Seguridad Social)',
          col2: '300 € – 700 €/mes + IVA',
          col3: '300 € – 650 €/mes (según paquete)',
        },
        {
          label: 'Perfiles que trabajan tu cuenta',
          col1: '1 sola persona para estrategia, guion, vídeo y diseño',
          col2: '1 sola persona (suele dominar texto o diseño, rara vez vídeo + estrategia)',
          col3: 'Equipo combinado: estrategia/guiones + edición de vídeo + diseño con IA',
        },
        {
          label: 'Qué ocurre en vacaciones o bajas',
          col1: 'La cuenta se para o tienes que cubrirlo tú',
          col2: 'Si enferma o se satura de clientes, tus publicaciones se retrasan',
          col3: 'El calendario sigue saliendo puntual porque el proceso está respaldado',
        },
        {
          label: 'Grabación en el local',
          col1: 'Inmediata (está allí todos los días)',
          col2: 'Solo si vive en tu misma ciudad y cobra desplazamiento aparte',
          col3: 'Tú o tu equipo grabáis 30 min al mes con el móvil con nuestra lista de tomas',
        },
        {
          label: 'Tiempo hasta publicar el primer mes',
          col1: '1 a 3 meses entre selección, contratación y adaptación',
          col2: '2 a 3 semanas según su disponibilidad',
          col3: '7 a 10 días laborables desde el onboarding de 45 minutos',
        },
      ],
    },
    pillarsTitle: 'Dónde suele fallar cada opción (incluida la nuestra)',
    pillars: [
      {
        badge: 'Opción A · En nómina',
        title: 'El síndrome del «chico o chica para todo» en la oficina',
        text: 'Muchas pymes contratan a un perfil recién titulado esperando que sea estratega, guionista, cámara, montador de vídeo, diseñador gráfico y experto en anuncios. Una sola persona rara vez domina las seis disciplinas.',
        bullets: [
          'Coste laboral fijo todos los meses aunque baje la facturación.',
          'Necesitas pagar aparte licencias de edición, bancos y Metricool.',
          'Tiene todo el sentido si generas más de 20 vídeos presenciales por semana.',
        ],
        color: 'cream-deep',
      },
      {
        badge: 'Opción B · Freelancer autónomo',
        title: 'Gran trato directo, pero cuello de botella en edición de vídeo',
        text: 'En España hay excelentes profesionales autónomos. El problema aparece cuando ese freelancer lleva 8 cuentas él solo: lo primero que sacrifica por falta de horas es el montaje de reels y el estudio de tendencias.',
        bullets: [
          'Dependencia total de la agenda y salud de una única persona.',
          'Muchos perfiles clásicos vienen del texto y sufren con el vídeo vertical.',
          'Buena opción si ya tienes quién edite vídeos dentro de tu empresa.',
        ],
        color: 'sky',
      },
      {
        badge: 'Opción C · Nuestro sistema',
        title: 'Por qué no somos para todo el mundo (transparencia total)',
        text: 'En Feediasocial no vamos físicamente a tu negocio con focos ni prometemos hacerte viral en dos semanas. Funcionamos como un reloj para dueños de negocio que aceptan grabar 30 minutos al mes con su móvil (o usar nuestro Plan B sin cámara).',
        bullets: [
          'Combinas guionista + editor de vídeo + diseñador por menos de media nómina.',
          'Calendario mensual cerrado en Metricool antes de que empiece el mes.',
          'Sin permanencia: si no cumplimos los plazos, puedes cancelar.',
        ],
        color: 'lemon',
      },
    ],
    whenToChooseTitle: 'Veredicto rápido: a quién contratar en cada caso',
    whenToChoose: [
      {
        profile: 'Quieres que alguien grabe historias en directo cada mañana en tu tienda',
        recommendation: 'Contrata en plantilla (o forma a alguien que ya trabaje en tienda).',
        honestVerdict: 'Ninguna agencia remota ni externa puede grabar un imprevisto que ocurre a las 11:00 h en tu mostrador.',
      },
      {
        profile: 'Solo necesitas diseño puntual de un cartel o folleto suelto',
        recommendation: 'Contrata a un diseñador autónomo por proyecto cerrado.',
        honestVerdict: 'No necesitas pagar una iguala mensual si no vas a mantener un ritmo constante de publicación.',
      },
      {
        profile: 'Buscas publicar reels, carruseles y stories todas las semanas sin pensar qué subir',
        recommendation: 'Trabaja con un sistema mensual de guiones + edición + calendario como Feediasocial.',
        honestVerdict: 'Dedicas media hora al mes con el móvil y te olvidas de sufrir cada domingo pensando qué publicar el lunes.',
      },
    ],
    faqTitle: 'Preguntas frecuentes al comparar agencia, plantilla y freelancer',
    faqs: [
      {
        q: 'En una agencia remota, ¿hablaré con un gestor de cuentas que no conoce mi negocio?',
        a: 'No en nuestro caso. En Feediasocial hablas directamente por WhatsApp con las dos personas fundadoras y responsables de tus guiones y tu edición.',
      },
      {
        q: 'Ya tuve una mala experiencia con una agencia grande en España, ¿en qué cambiáis?',
        a: 'Las agencias generalistas suelen delegar las cuentas pequeñas en becarios y mandar informes de 40 páginas llenos de humo. Nosotros nos limitamos a una sola cosa: entregarte guiones reales, vídeos bien editados y el calendario programado a tiempo.',
      },
      {
        q: '¿Puedo combinar una persona de recepción de mi negocio con vuestro sistema?',
        a: 'Sí, de hecho es nuestra combinación favorita en clínicas, restaurantes y gimnasios: nosotros enviamos la lista de tomas de 30 minutos y una persona de tu equipo graba los planos con el móvil.',
      },
      {
        q: '¿Quién es dueño del material y de la cuenta de Metricool si decidimos parar?',
        a: 'Tú siempre eres propietario de tus perfiles, de los vídeos editados y de los brutos grabados.',
      },
      {
        q: '¿Podéis hacer una prueba de ideas antes de decidir?',
        a: 'Sí: puedes pedir nuestra mini-auditoría gratuita y te enviamos 3 ideas concretas de reels para tu negocio en España antes de contratar nada.',
      },
    ],
    waMessage: 'Hola, estoy comparando opciones para llevar las redes de mi negocio en España y quiero comentaros mi caso.',
    waCta: 'Contarnos tu caso por WhatsApp',
  },
  {
    id: 'sin-camara',
    country: 'es',
    slug: 'contenido-redes-sin-salir-en-camara',
    routeKey: 'intencionSinCamara',
    shortTitle: 'Contenido para redes sin salir en cámara',
    cardSummary: 'Nuestro Plan B para negocios en España sin grabar cada mes: Reels con tu gemelo digital (AI Twin), avatar fotorrealista a medida, B-roll y carruseles con IA.',
    metaTitle: 'Contenido para Redes Sociales Sin Salir en Cámara | España',
    metaDescription:
      '¿No quieres grabarte cada mes? Creamos tus Reels y posts en España con tu gemelo digital (AI Twin), avatar fotorrealista de marca, B-roll y carruseles con IA.',
    eyebrow: 'Plan B sin cámara · España',
    h1: 'Contenido para redes sociales sin salir en cámara: publica cada mes sin grabarte',
    intro:
      'No hace falta ponerse frente al móvil cada semana si te incomoda la cámara o no tienes tiempo. Con nuestro Plan B sin cámara mantenemos tus redes activas combinando Reels hablados con tu gemelo digital (AI Twin) o con un avatar fotorrealista creado a medida para tu marca, además de Reels B-roll de producto y carruseles editoriales con IA.',
    comparisonTable: {
      title: 'Cómo sustituimos cada formato con cámara por el Plan B',
      subtitle: 'Misma constancia mensual y mismos objetivos de negocio, sin tener que grabarte cada mes:',
      headers: ['Objetivo de la pieza', 'Versión clásica (grabándote)', 'Versión Plan B sin cámara (lo que hacemos)', 'Qué aportas tú'],
      rows: [
        {
          label: 'Resolver dudas de compra o precio',
          col1: 'Reel del fundador explicando 3 puntos a cámara',
          col2: 'Carrusel paso a paso de 7 diapositivas con gancho visual y diseño editorial',
          col3: 'Cero grabación: nos das los datos en la llamada inicial.',
        },
        {
          label: 'Conseguir alcance orgánico en Reels',
          col1: 'Vídeo grabado cada mes frente al móvil',
          col2: 'Reel hablado con tu gemelo digital (AI Twin) o avatar fotorrealista de marca, o Reel B-roll de manos y producto con subtítulos dinámicos',
          col3: 'Cero grabación mensual (o 5 clips cortos de tu local/producto si prefieres B-roll).',
        },
        {
          label: 'Diferenciar tu marca de la competencia',
          col1: 'Opinión en primer plano',
          col2: 'Ilustraciones y composiciones visuales a medida generadas y retocadas con IA con tu paleta',
          col3: 'Cero grabación: lo produce nuestro estudio visual.',
        },
        {
          label: 'Generar mensajes por Stories',
          col1: 'Stories habladas del día a día',
          col2: 'Secuencias interactivas con encuestas, casos explicados en texto y disponibilidad semanal',
          col3: 'Confirmarnos horarios o novedades por WhatsApp.',
        },
      ],
    },
    pillarsTitle: 'Las 3 piezas clave de nuestro Plan B sin cámara',
    pillars: [
      {
        badge: 'Pieza 01 · Reels con AI Twin o Avatar',
        title: 'Reels hablados sin ponerte frente a la cámara cada mes',
        text: 'Puedes elegir entre crear tu gemelo digital (AI Twin) a partir de una sola muestra o diseñar un avatar fotorrealista propio para tu marca, además de combinarlo con Reels B-roll de manos, local y producto.',
        bullets: [
          'AI Twin entrenado con tu imagen y voz para publicar Reels sin grabar.',
          'Avatar fotorrealista creado a medida si prefieres no mostrar tu rostro.',
          'Opción B-roll de producto/local con subtítulos dinámicos y ritmo editorial.',
        ],
        color: 'coral',
      },
      {
        badge: 'Pieza 02 · Carruseles de guardado',
        title: 'Carruseles que explican tu servicio mejor que un folleto',
        text: 'Transformamos las preguntas reales de tus clientes en guías visuales limpias y directas pensadas para generar guardados y mensajes por privado.',
        bullets: [
          'Portada con titular potente para frenar el scroll.',
          'Desarrollo claro sin párrafos eternos ni letra diminuta.',
          'Última diapositiva orientada a que te escriban por WhatsApp.',
        ],
        color: 'lemon',
      },
      {
        badge: 'Pieza 03 · Gráficos editoriales con IA',
        title: 'Dirección de arte propia (nada de bancos de imágenes genéricos)',
        text: 'Creamos portadas, fondos y composiciones visuales con IA retocadas por nuestro equipo de diseño siguiendo la paleta y el tono de tu negocio.',
        bullets: [
          'Coherencia visual mes tras mes en toda tu cuadrícula.',
          'Sin fotos de stock artificiales ni plantillas repetidas.',
          'Adaptado al sector (sobrio en salud/legal, vibrante en hostelería).',
        ],
        color: 'sky',
      },
    ],
    whenToChooseTitle: '¿Para quién funciona especialmente bien el Plan B sin cámara?',
    whenToChoose: [
      {
        profile: 'Profesionales sanitarios, abogados o perfiles discretos',
        recommendation: 'Plan B 100 % basado en carruseles de autoridad, infografías y fotos reales del centro.',
        honestVerdict: 'Transmites rigor y cercanía sin sentir que estás haciendo espectáculo en redes.',
      },
      {
        profile: 'Restaurantes, cafeterías, tiendas o talleres artesanales',
        recommendation: 'Plan B mixto: producto y manos en acción (B-roll) + carruseles de carta o proceso.',
        honestVerdict: 'El protagonista real es el plato o el producto recién hecho; no hace falta que el chef hable a cámara.',
      },
      {
        profile: 'Equipos con rotación donde no quieres atar la marca a una sola cara',
        recommendation: 'Identidad visual fuerte con gráficos de marca, espacio y voz corporativa.',
        honestVerdict: 'Si un empleado cambia de empresa mañana, tus redes no pierden su cara visible.',
      },
    ],
    faqTitle: 'Preguntas frecuentes sobre crear contenido sin salir en cámara',
    faqs: [
      {
        q: '¿Una cuenta sin caras consigue resultados reales o el algoritmo la castiga?',
        a: 'El algoritmo premia la retención y los guardados, no que aparezca una cara por obligación. Un buen carrusel educativo o un reel de proceso bien montado con texto en pantalla funciona mucho mejor que un vídeo hablado aburrido.',
      },
      {
        q: '¿El Plan B sin cámara cuesta más caro que los paquetes normales?',
        a: 'No. Se aplica sobre nuestros mismos paquetes (Esencial 300 €/mes, Crecimiento 450 €/mes y Pro 650 €/mes), adaptando los Reels a tu gemelo digital (AI Twin), avatar fotorrealista de marca o B-roll con carruseles editoriales.',
      },
      {
        q: '¿Puedo empezar con el Plan B sin cámara y más adelante animarme a grabar algún vídeo hablado?',
        a: 'Por supuesto. Muchos clientes empiezan con AI Twin, avatar fotorrealista o B-roll y, cuando ven el sistema en marcha, combinan también vídeos grabados con el móvil.',
      },
      {
        q: '¿Cómo funcionan el gemelo digital (AI Twin) y el avatar fotorrealista?',
        a: 'Con el AI Twin entrenamos tu réplica digital a partir de un único vídeo corto para generar Reels hablados sin tener que grabarte cada mes. Si prefieres no mostrar tu cara, creamos un avatar fotorrealista a medida como portavoz visual de tu marca (siempre con guiones reales y sin fingir reseñas falsas).',
      },
      {
        q: '¿Qué material os tengo que mandar si elijo no grabar absolutamente nada?',
        a: 'Nos basta con tu logotipo, fotos existentes de tu local o catálogo y la llamada de onboarding de 45 minutos para extraer todas las ideas y argumentos de venta.',
      },
    ],
    waMessage: 'Hola, he visto vuestra página de contenido sin salir en cámara (España) y me interesa el Plan B para mi negocio.',
    waCta: 'Pedir ejemplo del Plan B por WhatsApp',
  },
];
