import type { EditorialBlogArticle } from './types.ts';

export const BLOG_ES: EditorialBlogArticle[] = [
  {
    id: 'grabacion',
    slug: 'como-grabar-reels-en-30-minutos-con-movil',
    routeKey: 'blogGrabacion',
    country: 'es',
    category: 'Grabación con móvil',
    eyebrow: 'Guía de rodaje · España',
    title: 'Cómo grabar 4 Reels en 30 minutos con tu móvil usando solo luz de ventana',
    metaTitle: 'Cómo Grabar 4 Reels en 30 Minutos con el Móvil | Feediasocial España',
    metaDescription:
      'Método por bloques para grabar un mes entero de vídeos verticales con tu móvil en 30 minutos: luz natural, audio limpio y lista de planos para pymes.',
    cardSummary:
      'El método de rodaje por bloques para dueños de clínicas, restaurantes e inmobiliarias en España que no tienen tardes libres para repetir tomas.',
    intent: 'informacional',
    targetKeyword: 'cómo grabar reels rápido con el móvil',
    author: 'Equipo Editorial Feediasocial',
    authorRole: 'Dirección de Producción Remota (España)',
    pubDate: '2026-10-15',
    updatedDate: '2026-10-25',
    readingTime: '7 min de lectura',
    heroPhotoKey: 'hero-es',
    heroPhotoAlt: 'Propietaria de negocio en España grabando un vídeo vertical con el móvil frente a una ventana luminosa',
    heroPhotoCaption:
      'Escena editorial ilustrativa: un único rincón bien iluminado del local basta para resolver los cuatro vídeos verticales del mes.',
    heroSticker: '30 MIN / MES',
    intro:
      'Sí: puedes grabar los cuatro Reels de todo el mes en media hora exacta si separas por completo el momento de pensar del momento de encender la cámara del móvil. Cuando llegas a la sesión con los guiones cerrados por frase y los planos agrupados por rincón, eliminas las improvisaciones que suelen convertir un vídeo de 30 segundos en una tarde perdida.',
    tldrTitle: 'En 30 segundos · Resumen ejecutivo para pymes en España',
    keyFacts: [
      { label: 'Tiempo total de rodaje', value: '25 a 30 min al mes (en una sola mañana)' },
      { label: 'Equipo necesario', value: 'Tu móvil actual (1080p a 30 fps) + ventana lateral' },
      { label: 'Piezas obtenidas', value: '4 Reels hablados + 12 clips cortos de recurso (B-roll)' },
      { label: 'Coste si lo delegas en Feediasocial', value: 'Incluido desde 349 €/mes (Esencial) o 649 €/mes (Crecimiento)' },
    ],
    pullQuote: {
      text: 'El problema nunca es la cámara de tu móvil; es intentar escribir el guion en la cabeza mientras el piloto rojo ya está parpadeando.',
      context: 'Regla n.º 1 de producción remota para negocios locales en España',
    },
    sections: [
      {
        id: 'por-que-tardas-tanto',
        number: '01',
        heading: 'Por qué tardas dos horas en grabar un vídeo de 25 segundos',
        lead: 'La fatiga de grabación en una pyme española ocurre cuando mezclas tres tareas incompatibles en el mismo minuto: decidir qué decir, colocar el teléfono y juzgar tu propia voz.',
        paragraphs: [
          'En una clínica estética en Madrid, una inmobiliaria en Valencia o un restaurante con turno partido, el tiempo entre clientes es oro. Si abres la cámara sin una escaleta de frases cortas, repetirás la primera oración diez veces, te frustrarás y terminarás cerrando la aplicación sin publicar nada.',
          'Nuestro sistema divide la sesión mensual en bloques mecánicos: primero se leen los ganchos en voz alta, luego se graban las frases de corrido (aunque te trabes a mitad, sin apagar la cámara) y al final se toman 5 minutos de planos mudos de tus manos trabajando.',
        ],
        bullets: [
          'Nunca grabes un guion entero de un tirón: graba frase por frase con dos segundos de silencio entre cada una.',
          'No revises las tomas en mitad del rodaje: deja que el editor limpie las pausas y los tropiezos.',
          'Cambia solo de chaqueta o de rincón entre el segundo y el tercer vídeo para que parezcan días distintos.',
        ],
        figure: {
          photoKey: 'proceso-01',
          alt: 'Revisión previa de lista de planos y guion antes de grabar con el móvil',
          caption: 'Antes de tocar el trípode, dedicamos 5 minutos a ordenar los cuatro guiones según el rincón del negocio donde se grabarán.',
          badge: 'Preparación · Minutos 0 a 5',
          callouts: [
            'Limpia la lente trasera del móvil con una gamuza (el 80 % de los vídeos borrosos son grasa de los dedos).',
            'Activa el modo «No molestar» o modo avión para que una llamada de proveedor no corte la mejor toma.',
            'Bloquea la exposición (mantén pulsada la pantalla sobre tu cara) para que la luz no salte.',
          ],
        },
      },
      {
        id: 'iluminacion-y-audio',
        number: '02',
        heading: 'Luz de ventana a 45 grados y audio limpio sin comprar focos',
        lead: 'Un espectador en Instagram o TikTok perdona una imagen normal, pero cierra el vídeo en dos segundos si el sonido retumba como en un pasillo vacío.',
        paragraphs: [
          'No necesitas aros de luz que dejan reflejos circulares artificiales en las gafas o en los ojos. Colócate frente a un escaparate o ventana de tu local, nunca de espaldas a ella, girando levemente el cuerpo unos 45 grados para que la luz modele el rostro con naturalidad.',
          'Para el audio, acércate a menos de un brazo del móvil y evita las salas con mucho azulejo desnudo si puedes grabar en un despacho con cortinas, estanterías o sillón. Si tienes un micro de solapa inalámbrico sencillo de 25 €, úsalo; si no, el micrófono nativo del teléfono a 60 centímetros junto a nuestra limpieza de sonido en postproducción da un resultado impecable.',
        ],
        scriptBox: {
          title: 'Ajustes exactos de cámara en tu móvil (iOS y Android)',
          badge: 'Configuración en 60 segundos',
          items: [
            { label: 'Cámara trasera siempre', text: 'Tiene un sensor mucho mayor y mejor nitidez que la cámara frontal de selfie.' },
            { label: 'Resolución 1080p a 30 fps', text: 'Evita el 4K a 60 fps: ocupa el triple al enviarlo por la nube y ofrece un movimiento demasiado frío para hablar a cámara.' },
            { label: 'Cuadrícula activada', text: 'Sitúa tus ojos en la línea horizontal superior para no dejar medio metro de techo vacío encima de tu cabeza.' },
          ],
        },
      },
      {
        id: 'cronograma-30-minutos',
        number: '03',
        heading: 'El cronograma minuto a minuto de una sesión de 30 minutos',
        lead: 'Así repartimos el reloj con nuestros clientes en España para que a la media hora puedan volver a atender su consulta o abrir el local.',
        paragraphs: [
          'En lugar de grabar el Reel 1 completo, luego pensar el Reel 2 y mover el trípode cuatro veces, grabamos por tipo de plano. Los primeros 15 minutos son exclusivamente de voz a cámara en dos rincones del negocio; los últimos 10 minutos son planos de recurso (B-roll) donde ni siquiera tienes que hablar.',
          'Esos clips mudos de 4 segundos —escribiendo en el ordenador, preparando material en cabina, sirviendo un plato o enseñando un plano impreso— son los que luego montamos por encima de tu voz para dar ritmo visual cada 3 segundos.',
        ],
        figure: {
          photoKey: 'clinicas-es',
          alt: 'Profesional en España grabando vídeo explicativo breve en consulta iluminada',
          caption: 'En clínicas y despachos españoles, grabar dos vídeos en consulta y dos en recepción aporta variedad visual para todo el mes.',
          badge: 'Ejecución · Minutos 5 a 25',
          callouts: [
            'Minutos 5–15: Reels 1 y 2 en el rincón A (p. ej. mesa de trabajo o consulta).',
            'Minutos 15–22: Cambio de prenda exterior + Reels 3 y 4 en el rincón B.',
            'Minutos 22–30: 8 a 12 planos cortos de manos, detalles del servicio y fachada.',
          ],
        },
      },
      {
        id: 'envio-y-montaje',
        number: '04',
        heading: 'Qué pasa después de pulsar «detener grabación»',
        lead: 'Grabar en 30 minutos solo sirve si no tienes que pasarte el domingo recortando silencios ni peleándote con subtítulos automáticos.',
        paragraphs: [
          'Cuando un dueño de negocio intenta editar sus propios vídeos en una app del móvil, cada Reel le consume entre 45 y 75 minutos entre cortes, música libre de derechos, subtítulos corregidos a mano y redacción del texto del post.',
          'Con nuestro flujo remoto, subes los brutos a tu carpeta compartida desde el propio teléfono y te olvidas. Nuestro equipo limpia las tomas falsas, añade rótulos con la tipografía de tu negocio, diseña la portada y deja el mes entero programado en Metricool listo para tu visto bueno.',
        ],
      },
    ],
    comparisonTable: {
      title: 'Improvisar cada semana vs. Rodaje mensual por bloques (España)',
      subtitle: 'Comparativa real de horas invertidas por el dueño del negocio para publicar 4 Reels al mes:',
      headers: ['Fase del trabajo', 'Improvisando cada semana', 'Método por bloques (tú solo)', 'Con Feediasocial (desde 349 €/mes)'],
      rows: [
        {
          col1: 'Pensar temas y escribir guiones',
          col2: '3 h/mes mirando otras cuentas',
          col3: '1,5 h/mes con plantilla',
          col4: '0 min (te damos los guiones cerrados)',
        },
        {
          col1: 'Grabación con el móvil',
          col2: '4 tardes sueltas (3 a 4 h/mes)',
          col3: '30 min en una sola sesión',
          col4: '30 min guiados con lista de planos',
        },
        {
          col1: 'Edición, subtítulos y portadas',
          col2: '5 a 6 h/mes en apps del móvil',
          col3: '4 h/mes editando tú mismo',
          col4: '0 min (edición profesional incluida)',
        },
        {
          col1: 'Redacción de copy y programación',
          col2: '2 h/mes publicando a mano',
          col3: '1 h/mes programando',
          col4: '10 min al mes para aprobar en Metricool',
        },
      ],
    },
    checklist: {
      title: 'Lista de control de 6 puntos antes de darle a grabar',
      subtitle: 'Ten esta lista abierta en el móvil justo antes de empezar tu sesión mensual:',
      items: [
        'Lente trasera limpia con un paño seco (nunca con la manga si tiene polvo).',
        'Batería por encima del 40 % y al menos 5 GB libres en la memoria del teléfono.',
        'Modo avión o «No molestar» activado durante los 30 minutos.',
        'Luz de ventana de frente o a 45 grados (luces halógenas amarillas del techo apagadas si distorsionan el color).',
        'Dos segundos de mirada tranquila a cámara antes de la primera palabra y al terminar cada frase.',
        'Al menos 8 clips mudos de 4 segundos de tus manos trabajando para cubrir los cortes de edición.',
      ],
    },
    faqs: [
      {
        q: '¿Vale cualquier móvil de gama media para grabar Reels de empresa en España?',
        a: 'Sí. Cualquier iPhone desde el modelo 11 o cualquier Android de gama media de los últimos 4 años graba en 1080p con calidad de sobra si usas la cámara trasera y te colocas cerca de una ventana.',
      },
      {
        q: '¿Qué hago si me equivoco a mitad de una frase mientras grabo?',
        a: 'No detengas el vídeo. Haz una pausa de dos segundos en silencio, respira y repite solo esa frase desde el principio. En la mesa de edición cortamos el tropiezo en segundos.',
      },
      {
        q: '¿Hace falta comprar un teleprónter para el móvil?',
        a: 'No lo recomendamos. Leer un texto en movimiento hace que los ojos parezcan rígidos y resta naturalidad. Es mucho más rápido leer una frase del papel, levantar la vista a la lente y decirla con tu tono habitual.',
      },
      {
        q: '¿Y si en mi negocio nadie quiere hablar ni salir en cámara?',
        a: 'Activamos nuestro Plan B sin cámara: grabas únicamente planos de detalle del producto o local sin rostros, o producimos el mes completo con carruseles editoriales, locución y gráficos con IA.',
      },
      {
        q: '¿Cómo os envío los vídeos desde el móvil sin que pierdan calidad por WhatsApp?',
        a: 'Nunca enviamos los brutos por chat estándar porque WhatsApp los comprime. Te damos un enlace directo a tu carpeta privada en la nube donde subes los archivos originales en dos toques.',
      },
    ],
    relatedRoutes: ['comoFunciona', 'intencionSinCamara', 'precios', 'nichoClinicas', 'nichoRestaurantes'],
    waMessage:
      'Hola, acabo de leer vuestra guía de cómo grabar 4 Reels en 30 minutos con el móvil en España y quiero ver cómo aplicarlo a mi negocio [REF:blog-grabacion-es]',
    waCta: 'Pedir mi lista de grabación por WhatsApp',
  },
  {
    id: 'guiones',
    slug: 'estructura-guiones-reels-negocios-locales',
    routeKey: 'blogGuiones',
    country: 'es',
    category: 'Guiones de conversión',
    eyebrow: 'Guía de copywriting · España',
    title: 'Estructura de guiones para Reels en pymes de España: gancho, desarrollo y cierre con ejemplos',
    metaTitle: 'Guiones para Reels de Negocios Locales (Con Ejemplos) | Feediasocial España',
    metaDescription:
      'Fórmula en 3 bloques para escribir guiones de Reels que atraen clientes reales en España: ganchos de 3 segundos, desarrollo claro y llamada a la acción.',
    cardSummary:
      'La arquitectura exacta de 3 bloques que utilizamos para redactar los guiones mensuales de clínicas, inmobiliarias, gimnasios y hostelería en España.',
    intent: 'comercial',
    targetKeyword: 'guiones para reels negocios locales',
    author: 'Equipo Editorial Feediasocial',
    authorRole: 'Estrategia y Guionización (España)',
    pubDate: '2026-10-18',
    updatedDate: '2026-10-25',
    readingTime: '8 min de lectura',
    heroPhotoKey: 'proceso-02',
    heroPhotoAlt: 'Mesa de trabajo editorial en España con calendario de contenidos y guiones estructurados por bloques',
    heroPhotoCaption:
      'Escena editorial ilustrativa: cada guion mensual se entrega dividido en tres bloques cronometrados con indicaciones visuales línea por línea.',
    heroSticker: 'GUIONES REALES',
    intro:
      'Un buen guion para el Reel de una pyme en España no busca millones de visitas de adolescentes en otra punta del mundo: busca que un vecino de tu ciudad o un cliente potencial entienda en 25 segundos qué problema resuelves y cómo reservar cita contigo. Para lograrlo sin sonar como un anuncio de teletienda, todos nuestros guiones siguen una arquitectura fija de tres bloques: gancho de filtro (0–3 s), respuesta útil en tres pasos (3–22 s) y cierre de acción única (22–30 s).',
    tldrTitle: 'En 30 segundos · Fórmula de guion para negocios de servicios',
    keyFacts: [
      { label: 'Duración óptima en 2026', value: 'Entre 22 y 35 segundos (unas 65 a 85 palabras habladas)' },
      { label: 'Bloque 1 · Gancho (0–3 s)', value: 'Pregunta o error frecuente que filtra al cliente ideal' },
      { label: 'Bloque 2 · Valor (3–22 s)', value: '1 sola idea explicada sin tecnicismos de gremio' },
      { label: 'Bloque 3 · Cierre (22–30 s)', value: '1 única instrucción clara (mensaje directo o enlace del perfil)' },
    ],
    pullQuote: {
      text: 'Nunca empieces un Reel diciendo «Hola, buenos días, hoy os vengo a hablar de…». En esos cuatro segundos de saludo, la mitad de tu audiencia ya ha deslizado el dedo.',
      context: 'Criterio de guionización de Feediasocial España',
    },
    sections: [
      {
        id: 'anatomia-tres-bloques',
        number: '01',
        heading: 'La anatomía de un Reel de 30 segundos que convierte visitas en consultas',
        lead: 'El error más caro al grabar vídeos de empresa es meter cuatro temas distintos en el mismo minuto y terminar pidiendo tres cosas a la vez («sígueme, dale a me gusta y comenta»).',
        paragraphs: [
          'En redes sociales, la atención se gana en el primer segundo con una frase que nombre exactamente el dolor o la duda que tu cliente ya tiene en la cabeza. No se trata de gritar ni de poner titulares engañosos, sino de actuar como un filtro geográfico y de interés.',
          'Cuando un fisioterapeuta en Sevilla empieza un vídeo con «Si te levantas con dolor lumbar después de ocho horas de oficina, no estires los isquiotibiales en frío», cualquier persona con ese síntoma se queda a escuchar hasta el final.',
        ],
        scriptBox: {
          title: 'Plantilla maestra de 75 palabras (lista para rellenar)',
          badge: 'Estructura 3 bloques',
          items: [
            {
              label: '00–03 s · Gancho de filtro',
              text: '«El error que veo todas las semanas cuando alguien quiere [objetivo del cliente en tu sector] es empezar por [acción equivocada habitual].»',
            },
            {
              label: '03–22 s · Desarrollo en 2 puntos',
              text: '«Cuando haces eso, ocurre [consecuencia real]. En su lugar, en nuestra consulta/estudio primero comprobamos [paso 1 concreto] y después ajustamos [paso 2 concreto].»',
            },
            {
              label: '22–30 s · Cierre de acción única',
              text: '«Si quieres que revisemos tu caso esta semana, escríbenos la palabra VALORACIÓN por mensaje directo o desde el enlace del perfil.»',
            },
          ],
        },
      },
      {
        id: 'ejemplos-por-nicho',
        number: '02',
        heading: 'Ganchos reales adaptados a clínicas, inmobiliarias, restaurantes y gimnasios en España',
        lead: 'Un gancho que funciona para una hamburguesería en Malasaña destruiría la credibilidad de una clínica dental en Bilbao. Cada sector necesita su propio tono.',
        paragraphs: [
          'En salud y estética, el tono debe ser sereno, didáctico y riguroso con la normativa sanitaria. En cambio, en hostelería y restauración el gancho entra por los ojos y por el sonido real de la cocina en el primer segundo.',
          'Por eso en Feediasocial jamás reciclamos plantillas genéricas entre sectores: redactamos los ganchos con el vocabulario real que usan tus clientes en España (fianza, nota simple, bruxismo, menú de mediodía, sobrecarga muscular).',
        ],
        figure: {
          photoKey: 'inmobiliarias-es',
          alt: 'Agente inmobiliario en España grabando un vídeo vertical en un piso luminoso',
          caption: 'En el sector inmobiliario español, empezar el Reel con el dato clave de la vivienda y el barrio retiene al comprador real desde el segundo uno.',
          badge: 'Aplicado a sectores reales',
          callouts: [
            'Clínicas: «3 señales de que tu dolor de cabeza al despertar viene de apretar los dientes por la noche».',
            'Inmobiliarias: «Qué gastos aparte del precio del piso debes calcular antes de firmar arras en 2026».',
            'Restaurantes: «Así preparamos desde las 8:00 el fondo de nuestro arroz meloso para el servicio de mediodía».',
          ],
        },
      },
      {
        id: 'indicaciones-visuales',
        number: '03',
        heading: 'Por qué un guion sin indicaciones de plano no sirve para nada',
        lead: 'Entregar solo un párrafo de texto en un documento de Word deja al cliente paralizado frente al móvil sin saber cómo moverse ni qué enseñar.',
        paragraphs: [
          'Cada guion que entregamos en nuestros paquetes mensuales incluye dos columnas: a la izquierda, la frase exacta que vas a pronunciar con tus palabras naturales; a la derecha, la indicación visual de qué debe verse en pantalla durante esos segundos.',
          'De esta forma sabes de antemano si en la segunda frase tienes que sostener un alineador dental en la mano, señalar una radiografía de muestra o simplemente hablar mirando a la lente mientras nosotros insertamos un vídeo de recurso encima.',
        ],
        figure: {
          photoKey: 'restaurantes-es',
          alt: 'Grabación de planos cortos gastronómicos con el móvil en un restaurante de España',
          caption: 'Cuando el guion especifica qué planos cortos de 3 segundos grabar en cocina o sala, la edición posterior multiplica la retención.',
          badge: 'Guion técnico bicolumna',
          callouts: [
            'Columna de audio: frases de menos de 14 palabras para respirar con comodidad.',
            'Columna visual: plano medio hablado + lista de 3 planos de detalle (B-roll).',
            'Columna de rótulo en pantalla: el titular de 5 palabras que verá quien navegue sin sonido.',
          ],
        },
      },
      {
        id: 'cierre-y-conversion',
        number: '04',
        heading: 'Cómo cerrar el vídeo para llevar al espectador a WhatsApp sin parecer agresivo',
        lead: 'El objetivo final de un Reel en una pyme local no es acumular corazones, sino iniciar una conversación privada con quien ya está listo para comprar o reservar.',
        paragraphs: [
          'Si al final del vídeo pides cuatro acciones distintas, el usuario no hace ninguna. Elige una sola llamada a la acción por pieza y altérnala a lo largo del calendario mensual según el objetivo de cada semana.',
          'En dos de los vídeos del mes pedimos guardar o compartir la publicación (para ganar alcance orgánico entre gente de tu zona), y en los otros dos invitamos directamente a escribir por mensaje directo o pulsar el botón de WhatsApp del perfil.',
        ],
      },
    ],
    comparisonTable: {
      title: 'Ejemplos de guiones flojos vs. Guiones orientados a negocio (España)',
      subtitle: 'Cómo transformamos una idea genérica en un guion que filtra clientes reales:',
      headers: ['Sector en España', 'Gancho genérico (que todo el mundo ignora)', 'Gancho Feediasocial (0–3 s)', 'Cierre de conversión (22–30 s)'],
      rows: [
        {
          col1: 'Clínica dental / estética',
          col2: '«Hoy os explicamos qué es la ortodoncia invisible y sus ventajas…»',
          col3: '«La pregunta que más nos hacéis antes de empezar con alineadores transparentes es si duelen al comer.»',
          col4: '«Escríbenos VALORACIÓN por WhatsApp y revisamos tu mordida en consulta.»',
        },
        {
          col1: 'Agencia inmobiliaria',
          col2: '«Os enseñamos este bonito piso recién reformado en el centro…»',
          col3: '«Terraza exterior de 18 m² a 6 minutos andando del metro: mira cómo entra la luz a las cinco de la tarde.»',
          col4: '«¿Quieres el plano acotado y el precio con gastos? Pídelo en el enlace del perfil.»',
        },
        {
          col1: 'Gimnasio / Estudio fitness',
          col2: '«Recuerda que hacer ejercicio de fuerza es muy importante para tu salud…»',
          col3: '«Si tienes más de 40 años y nunca has pisado una sala de pesas, así es tu primera sesión guiada con nosotros.»',
          col4: '«Reserva tu semana de prueba en grupos reducidos desde nuestro WhatsApp.»',
        },
      ],
    },
    checklist: {
      title: 'Test de calidad de 5 puntos antes de dar un guion por bueno',
      subtitle: 'Revisa cada texto con este filtro antes de encender la cámara:',
      items: [
        'La primera frase no contiene saludos («Hola a todos») ni presentaciones de marca.',
        'Al leer el texto completo en voz alta a ritmo normal tardas menos de 32 segundos.',
        'Cualquier cliente de la calle entiende todas las palabras sin diccionario técnico.',
        'El guion anota al menos 2 planos visuales de apoyo para no mostrar un plano fijo aburrido.',
        'El cierre pide una única acción concreta y medible.',
      ],
    },
    faqs: [
      {
        q: '¿Tengo que aprenderme el guion de memoria palabra por palabra?',
        a: 'Para nada. Escribimos los guiones en frases cortas independientes para que leas una línea, mires al objetivo y la expreses con tus propias palabras sin sonar robótico.',
      },
      {
        q: '¿Cuántos guiones de Reels incluís en los paquetes de España?',
        a: 'El paquete Esencial (349 €/mes) incluye 2 Reels con guion y edición; Crecimiento (649 €/mes) incluye 4 Reels; y Pro (990 €/mes) incluye 8 Reels completos cada mes.',
      },
      {
        q: '¿Puedo pedir cambios en los guiones antes de mi sesión de grabación?',
        a: 'Sí. Te enviamos la propuesta de guiones y calendario antes de que grabes para que ajustes cualquier matiz técnico o comercial de tu negocio.',
      },
      {
        q: '¿Los mismos guiones sirven para Instagram Reels, TikTok y YouTube Shorts?',
        a: 'Sí. La estructura vertical de 25 a 35 segundos con gancho en los tres primeros segundos funciona de forma nativa en las tres plataformas.',
      },
      {
        q: '¿Hacéis una prueba gratuita de guiones para mi sector?',
        a: 'Sí: desde cualquier página de la web puedes pedir nuestra mini-auditoría gratuita y te enviamos por WhatsApp 3 ideas de Reels con gancho pensadas para tu cuenta.',
      },
    ],
    relatedRoutes: ['comoTrabajamos', 'servicios', 'precios', 'nichoInmobiliarias', 'nichoGimnasios'],
    waMessage:
      'Hola, he leído vuestra guía de estructura de guiones para Reels en España y me gustaría recibir 3 ideas de guion para mi negocio [REF:blog-guiones-es]',
    waCta: 'Pedir 3 ideas de guion gratis por WhatsApp',
  },
  {
    id: 'metricool',
    slug: 'como-organizar-calendario-redes-metricool',
    routeKey: 'blogMetricool',
    country: 'es',
    category: 'Organización mensual',
    eyebrow: 'Guía de planificación · España',
    title: 'Cómo organizar y aprobar el calendario de redes de tu negocio en 10 minutos al mes con Metricool',
    metaTitle: 'Cómo Organizar tu Calendario de Redes en Metricool | Feediasocial España',
    metaDescription:
      'Aprende a estructurar un calendario editorial mensual en Metricool para tu pyme en España: equilibrio de formatos, revisión visual y programación automática.',
    cardSummary:
      'Cómo pasar del caos de «qué publico hoy» a tener las cuatro semanas del mes programadas, equilibradas y aprobadas en diez minutos de reloj.',
    intent: 'comercial',
    targetKeyword: 'calendario de contenidos redes sociales metricool',
    author: 'Equipo Editorial Feediasocial',
    authorRole: 'Planificación y Analítica (España)',
    pubDate: '2026-10-20',
    updatedDate: '2026-10-25',
    readingTime: '6 min de lectura',
    heroPhotoKey: 'servicios-ia',
    heroPhotoAlt: 'Vista de pantalla con calendario editorial de redes sociales organizado por semanas y colores',
    heroPhotoCaption:
      'Escena editorial ilustrativa: centralizar carruseles, Reels y stories en un calendario visual evita las semanas en blanco.',
    heroSticker: '10 MIN / MES',
    intro:
      'La diferencia entre una cuenta de empresa que genera confianza y una que parece abandonada no es la genialidad de un post suelto, sino la constancia durante 52 semanas al año. Organizar el calendario mensual en Metricool permite ver de un vistazo qué días educas a tu audiencia, qué días muestras casos o producto y qué días invitas directamente a reservar cita, dedicando apenas 10 minutos al mes a validar las publicaciones antes de que salgan solas.',
    tldrTitle: 'En 30 segundos · La regla 40 / 40 / 20 para el calendario de una pyme',
    keyFacts: [
      { label: '40 % Contenido de autoridad', value: 'Resuelve dudas frecuentes y demuestra que dominas tu oficio' },
      { label: '40 % Prueba y cercanía', value: 'Proceso por dentro, equipo, instalaciones y casos explicados' },
      { label: '20 % Oferta directa', value: 'Recordatorio claro de servicios, plazas o cómo reservar por WhatsApp' },
      { label: 'Tiempo de revisión mensual', value: '10 minutos desde el móvil o el ordenador antes de empezar el mes' },
    ],
    pullQuote: {
      text: 'Si el martes a las nueve de la mañana estás pensando qué foto subir hoy a Instagram, ya vas tres semanas tarde en tu estrategia.',
      context: 'Método de planificación mensual anticipada de Feediasocial',
    },
    sections: [
      {
        id: 'regla-pilares-mensuales',
        number: '01',
        heading: 'Por qué publicar ofertas todos los días vacía tu alcance orgánico',
        lead: 'Cuando el 100 % de tus publicaciones son carteles de «Pide cita» o «Descuento del 10 %», tus seguidores dejan de interactuar y el algoritmo reduce la visibilidad de tu cuenta.',
        paragraphs: [
          'Un calendario mensual sano para una pyme en España combina tres funciones distintas cada semana. Primero, los Reels educativos o de descubrimiento que llegan a personas de tu ciudad que todavía no te conocen. Segundo, los carruseles y posts explicativos que resuelven las objeciones de quien ya está comparando opciones.',
          'Y tercero, las stories y publicaciones de conversión directa que facilitan el paso a WhatsApp o a tu web sin que el cliente tenga que rebuscar dónde estás ni cómo trabajas.',
        ],
        bullets: [
          'Lunes / Martes: Carrusel educativo o comparativa que la gente quiera guardar.',
          'Miércoles / Jueves: Reel en vídeo con gancho claro para atraer alcance nuevo.',
          'Viernes / Fin de semana: Caso práctico, detrás de cámaras del equipo o llamada a reserva.',
        ],
      },
      {
        id: 'flujo-aprobacion-metricool',
        number: '02',
        heading: 'Cómo funciona nuestro sistema de aprobación en 10 minutos con Metricool',
        lead: 'Muchos dueños de negocios en España temen delegar sus redes porque en el pasado tuvieron que perseguir archivos sueltos por correo electrónico o grupos de WhatsApp interminables.',
        paragraphs: [
          'En Feediasocial eliminamos las hojas de cálculo confusas. Una vez editados tus Reels y diseñados tus carruseles del mes, subimos todas las piezas a tu calendario de Metricool con el día, la hora óptima de tu audiencia en España, la portada y el texto completo.',
          'Tú recibes un aviso, abres la vista mensual y revisas en 10 minutos cómo queda el mes entero. Si una frase necesita un retoque de precio o de horario, nos lo indicas sobre la propia pieza, lo ajustamos al instante y el mes queda programado en piloto automático.',
        ],
        figure: {
          photoKey: 'sin-camara',
          alt: 'Diseño de carruseles y piezas gráficas organizadas sobre mesa de trabajo editorial',
          caption: 'Combinar Reels grabados en tu local con carruseles estratégicos mantiene el perfil activo incluso en las semanas de más carga de trabajo.',
          badge: 'Vista global del mes',
          callouts: [
            'Previsualización real de cómo se verá cada post, carrusel y Reel antes de publicarse.',
            'Programación en las franjas horarias de mayor actividad de tu público en España.',
            'Informe mensual sencillo en una sola página sin métricas infladas ni tecnicismos vacíos.',
          ],
        },
      },
      {
        id: 'que-hacer-semanas-sin-tiempo',
        number: '03',
        heading: 'El colchón de seguridad: cómo no dejar nunca una semana en blanco',
        lead: 'En cualquier negocio real hay meses con festivos, puentes, vacaciones del equipo o picos de trabajo donde es imposible parar a pensar en redes.',
        paragraphs: [
          'Trabajar a mes vista con un calendario cerrado te da un colchón de seguridad de cuatro semanas. Incluso si un mes no puedes grabar nuevos vídeos por una reforma en el local o un viaje, activamos piezas en formato carrusel y gráficos con IA dentro del mismo calendario para que tu escaparate digital no se detenga.',
        ],
        figure: {
          photoKey: 'gimnasios-es',
          alt: 'Entrenador en estudio deportivo de España grabando contenido planificado con el móvil',
          caption: 'Tener el calendario mensual cerrado permite anticipar campañas estacionales (septiembre, enero, verano) sin prisas de última hora.',
          badge: 'Constancia anual',
          callouts: [
            'Planificación anticipada de campañas clave en España (vuelta de septiembre, Navidad, primavera).',
            'Equilibrio garantizado entre posts de feed, stories de cercanía y vídeo vertical.',
            'Propiedad 100 % tuya: tus cuentas siempre están a tu nombre y bajo tu control.',
          ],
        },
      },
      {
        id: 'metricas-que-importan',
        number: '04',
        heading: 'Las 3 únicas métricas que debes mirar en el informe de fin de mes',
        lead: 'No necesitas un PDF de cuarenta páginas lleno de gráficos incomprensibles para saber si tus redes están ayudando a tu negocio.',
        paragraphs: [
          'Al cerrar cada mes en Metricool, nuestro informe se centra en tres indicadores accionables: cuántas veces se han guardado o compartido tus contenidos (señal de utilidad real), qué guiones de Reels han retenido mejor la atención y cuántos clics ha recibido el enlace de tu perfil o botón de contacto.',
          'Con esos tres datos ajustamos los guiones del mes siguiente: repetimos los ángulos que más dudas han despertado en tus clientes y descartamos lo que no aporta negocio.',
        ],
      },
    ],
    comparisonTable: {
      title: 'Estructura tipo de una semana en el paquete Crecimiento (España · 649 €/mes)',
      subtitle: 'Así se reparten las 12 publicaciones de feed, 12 stories y 4 Reels a lo largo de cada semana:',
      headers: ['Día de la semana', 'Formato programado', 'Objetivo de la pieza', 'Intervención del cliente'],
      rows: [
        {
          col1: 'Martes',
          col2: 'Carrusel educativo (5 a 7 láminas)',
          col3: 'Autoridad: resolver una duda de precio, proceso o cuidado',
          col4: '0 min (redactado y diseñado por nosotros)',
        },
        {
          col1: 'Jueves',
          col2: 'Reel con guion y edición (25–30 s)',
          col3: 'Alcance: atraer nuevas personas de tu ciudad o sector',
          col4: 'Grabado en tu sesión mensual de 30 min',
        },
        {
          col1: 'Sábado / Domingo',
          col2: 'Post de caso / servicio + secuencia de 3 Stories',
          col3: 'Conversión: mostrar resultado real y enlace directo a WhatsApp',
          col4: '0 min (programado en Metricool)',
        },
      ],
    },
    checklist: {
      title: 'Lo que revisas en tus 10 minutos de aprobación mensual',
      subtitle: 'Nuestro protocolo para que validar el calendario no te quite energía:',
      items: [
        'Comprobar que los datos prácticos (precios, horarios o nombres de servicios) son exactos.',
        'Verificar que las 4 semanas alternan educación, prueba real y llamada a contacto.',
        'Confirmar las fechas de festivos locales o cierres por vacaciones de tu negocio.',
        'Dar el visto bueno por WhatsApp para que todo el mes quede programado automáticamente.',
      ],
    },
    faqs: [
      {
        q: '¿Tengo que pagar yo una suscripción aparte de Metricool?',
        a: 'No es necesario para empezar: gestionamos la programación y los informes mensuales dentro de nuestro flujo de trabajo sin que tengas que aprender a configurar la herramienta desde cero.',
      },
      {
        q: '¿Qué pasa si a mitad de mes surge una novedad en mi negocio y quiero subir algo urgente?',
        a: 'Tu cuenta sigue siendo 100 % tuya en todo momento. Puedes subir cualquier story espontánea del día a día cuando quieras, mientras el calendario programado mantiene la base constante de la semana.',
      },
      {
        q: '¿En qué redes sociales dejáis programado el calendario mensual?',
        a: 'Nos enfocamos donde tus clientes toman decisiones hoy: Instagram (Feed, Carruseles, Reels y Stories) y TikTok, pudiendo replicar las piezas en Facebook o YouTube Shorts según tu sector.',
      },
      {
        q: '¿Cuánto tardáis en tener listo el primer calendario desde que empezamos?',
        a: 'Tras la llamada inicial de onboarding de 45 minutos, en un plazo de 5 a 7 días laborables te entregamos la primera propuesta de estrategia, guiones y estructura mensual.',
      },
      {
        q: '¿Hay compromiso de permanencia anual al contratar un paquete?',
        a: 'No. Trabajamos mes a mes porque sabemos que la única forma de que sigas con nosotros es que el sistema te ahorre tiempo real cada semana.',
      },
    ],
    relatedRoutes: ['precios', 'comoFunciona', 'intencionPrecio', 'intencionComparativa', 'contacto'],
    waMessage:
      'Hola, he leído vuestra guía sobre cómo organizar el calendario en Metricool en España y quiero ver cómo quedaría para mi negocio [REF:blog-metricool-es]',
    waCta: 'Ver cómo organizar mi calendario por WhatsApp',
  },
];
