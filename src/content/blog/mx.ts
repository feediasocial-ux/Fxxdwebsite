import type { EditorialBlogArticle } from './types.ts';

export const BLOG_MX: EditorialBlogArticle[] = [
  {
    id: 'grabacion',
    slug: 'como-grabar-reels-en-30-minutos-con-celular',
    routeKey: 'blogGrabacion',
    country: 'mx',
    category: 'Grabación con celular',
    eyebrow: 'Guía práctica · México',
    title: 'Cómo grabar los 4 Reels del mes en 30 minutos con tu celular sin frenar tu negocio',
    metaTitle: 'Cómo Grabar 4 Reels en 30 Minutos con tu Celular | Feediasocial México',
    metaDescription:
      'Sistema práctico para dueños de negocios en México: cómo grabar los videos verticales de todo el mes con tu celular en media hora usando luz natural.',
    cardSummary:
      'El protocolo paso a paso para dueños de consultorios, restaurantes, desarrollos inmobiliarios y gimnasios en México que quieren delegar la edición sin perder la mañana.',
    intent: 'informacional',
    targetKeyword: 'cómo grabar reels rápido con el celular',
    author: 'Equipo Editorial Feediasocial',
    authorRole: 'Dirección de Producción Remota (México)',
    pubDate: '2026-10-15',
    updatedDate: '2026-10-25',
    readingTime: '7 min de lectura',
    heroPhotoKey: 'hero-mx',
    heroPhotoAlt: 'Emprendedor mexicano grabando un video vertical con su celular en un local con luz cálida natural',
    heroPhotoCaption:
      'Escena editorial ilustrativa: media hora al mes con tu propio celular basta cuando tienes la lista exacta de tomas antes de encender la cámara.',
    heroSticker: '30 MIN / MES',
    intro:
      'Grabar los cuatro videos verticales de todo el mes en media hora con tu celular es totalmente viable cuando dejas de improvisar frente al lente. Si llegas a la sesión con los guiones divididos por renglones cortos y una lista de tomas agrupada por zona de tu consultorio o negocio, resuelves el material mensual antes de recibir al primer cliente de la mañana.',
    tldrTitle: 'En 30 segundos · Datos clave para negocios en México',
    keyFacts: [
      { label: 'Tiempo invertido por ti', value: '25 a 30 minutos una sola vez al mes' },
      { label: 'Equipo requerido', value: 'Tu celular actual (cámara trasera en 1080p) + luz de ventana' },
      { label: 'Material que obtienes', value: '4 Reels hablados + 10 a 12 tomas cortas de apoyo (B-roll)' },
      { label: 'Inversión si delegas en Feediasocial', value: 'Desde $6,300 MXN/mes (Esencial) o $9,450 MXN/mes (Crecimiento)' },
    ],
    pullQuote: {
      text: 'Lo que te quita tres horas no es grabar con el celular: es querer inventar el tema, acomodar el tripié y editar el video el mismo día.',
      context: 'Método de grabación por bloques de Feediasocial México',
    },
    sections: [
      {
        id: 'bloqueo-frente-al-celular',
        number: '01',
        heading: 'Por qué un video de 25 segundos termina quitándote toda la tarde',
        lead: 'En la operación diaria de una pyme en México —entre proveedores, citas, tráfico y atención por WhatsApp— intentar grabar sin guion es garantía de frustración.',
        paragraphs: [
          'Cuando prendes la cámara del celular pensando «ahorita veo cómo lo explico», repites la entrada ocho veces, sientes que hablas raro y terminas posponiendo la publicación para la siguiente semana.',
          'Nuestra metodología separa las tareas: nosotros redactamos los guiones con tus palabras habituales y armamos una hoja de ruta para que tú únicamente tengas que leer una línea, mirar al lente tres segundos y soltar la idea con naturalidad.',
        ],
        bullets: [
          'Graba oración por oración dejando dos segundos en silencio entre cada bloque.',
          'Si te trabas en una palabra, no apagues el celular: respira y repite solo ese renglón.',
          'Usa dos camisas o chamarras distintas a mitad de la media hora para dar variedad visual al mes.',
        ],
        figure: {
          photoKey: 'proceso-01',
          alt: 'Planeación previa de tomas y guiones antes de grabar con el celular',
          caption: 'Cinco minutos de orden antes de prender la cámara ahorran cuarenta minutos de tomas repetidas.',
          badge: 'Alistamiento · Minutos 0 a 5',
          callouts: [
            'Pasa un paño de microfibra por el lente trasero de tu celular antes de la primera toma.',
            'Pon el teléfono en modo «No molestar» para que las notificaciones de WhatsApp no corten el video.',
            'Fija el enfoque y la luz tocando dos segundos tu rostro en la pantalla.',
          ],
        },
      },
      {
        id: 'luz-natural-y-sonido',
        number: '02',
        heading: 'Cómo aprovechar la luz de tu local y lograr audio nítido sin equipo caro',
        lead: 'En Instagram y TikTok en México, el usuario desliza de inmediato si el audio suena hueco o con eco de salón vacío, aunque la imagen sea ultra nítida.',
        paragraphs: [
          'Olvídate de los aros de luz que reflejan círculos blancos en los lentes. Ubícate cerca de una ventana o entrada de luz natural de tu consultorio, oficina o terraza, colocándote de frente o ligeramente de lado a la ventana, jamás a contraluz.',
          'Para que tu voz se escuche cercana y clara, coloca el celular a una distancia de entre 50 y 70 centímetros. Si cuentas con un micrófono inalámbrico de solapa para el puerto de tu teléfono, conéctalo; si no, graba en una oficina con muebles o cortinas y nosotros limpiamos el ruido ambiente en edición.',
        ],
        scriptBox: {
          title: 'Ajustes recomendados en la cámara de tu celular',
          badge: 'Listo en 1 minuto',
          items: [
            { label: 'Usa el lente principal trasero', text: 'Capta mucha más luz y detalle que la cámara frontal y evita que te distraigas viéndote en la pantalla.' },
            { label: 'Formato 1080p a 30 cuadros (fps)', text: 'Da una textura natural y sube rapidísimo a la carpeta compartida sin saturar tu memoria.' },
            { label: 'Líneas de guía encendidas', text: 'Alinea tus ojos en el tercio superior de la pantalla para mantener un encuadre limpio.' },
          ],
        },
      },
      {
        id: 'reloj-de-media-hora',
        number: '03',
        heading: 'Así se reparten los 30 minutos de tu sesión mensual',
        lead: 'El secreto para terminar en media hora es grabar primero todas las frases habladas y dejar para el final las tomas mudas de apoyo.',
        paragraphs: [
          'Durante los primeros veinte minutos grabas únicamente los cuatro guiones hablados en dos puntos distintos de tu negocio (por ejemplo, dos sentado en tu escritorio y dos de pie junto al área de trabajo).',
          'Los últimos ocho minutos son para grabar clips cortos de 4 segundos sin hablar: atendiendo a alguien de espaldas, preparando material, mostrando un platillo recién salido o recorriendo un departamento. Esas tomas son las que nuestro equipo inserta sobre tu voz para que el Reel sea dinámico de principio a fin.',
        ],
        figure: {
          photoKey: 'clinicas-mx',
          alt: 'Fisioterapeuta en México grabando una demostración corta con celular en su consultorio',
          caption: 'En consultorios y clínicas en México, combinar una explicación breve con dos tomas demostrando el procedimiento genera confianza inmediata.',
          badge: 'Rodaje · Minutos 5 a 30',
          callouts: [
            'Minutos 5–15: Grabación de los Reels 1 y 2 en la primera ubicación.',
            'Minutos 15–22: Cambio rápido de ubicación o prenda para los Reels 3 y 4.',
            'Minutos 22–30: 10 tomas verticales de 4 segundos mostrando manos, equipo e instalaciones.',
          ],
        },
      },
      {
        id: 'entrega-y-edicion',
        number: '04',
        heading: 'Tú subes los videos en crudo; nosotros hacemos todo el trabajo pesado',
        lead: 'El verdadero cuello de botella de cualquier dueño de negocio en México no es hablar tres minutos a cámara, sino sentarse horas a editar.',
        paragraphs: [
          'Intentar recortar silencios, acomodar subtítulos sin faltas de ortografía y redactar textos persuasivos desde una aplicación en el celular te consume fácilmente todo el domingo.',
          'Con Feediasocial terminas tu media hora, subes los videos desde tu celular a la carpeta en la nube que te compartimos y sigues con tu día. Nosotros editamos, ponemos subtítulos dinámicos, diseñamos portadas y programamos todo tu calendario mensual en Metricool.',
        ],
      },
    ],
    comparisonTable: {
      title: 'Hacerlo tú solo cada semana vs. Sistema por bloques en México',
      subtitle: 'Comparativa real de tiempo mensual para mantener activo el Instagram y TikTok de tu negocio:',
      headers: ['Etapa del mes', 'Grabando al día sin plan', 'Por bloques por tu cuenta', 'Con Feediasocial (desde $6,300 MXN/mes)'],
      rows: [
        {
          col1: 'Búsqueda de tendencias y guiones',
          col2: '3 a 4 h/mes buscando ideas',
          col3: '1.5 h/mes redactando',
          col4: '0 min (recibes guiones listos para leer)',
        },
        {
          col1: 'Sesión de grabación con celular',
          col2: '4 tardes interrumpidas (3.5 h)',
          col3: '30 min en una sola mañana',
          col4: '30 min con lista exacta de tomas',
        },
        {
          col1: 'Edición de video y subtítulos',
          col2: '6 h/mes en apps móviles',
          col3: '4.5 h/mes editando tú',
          col4: '0 min (edición profesional incluida)',
        },
        {
          col1: 'Copy, diseño de post y programación',
          col2: '2.5 h/mes subiendo a mano',
          col3: '1 h/mes programando',
          col4: '10 min al mes para autorizar tu calendario',
        },
      ],
    },
    checklist: {
      title: 'Checklist de 6 pasos antes de iniciar tu media hora',
      subtitle: 'Revisa estos puntos en tu celular dos minutos antes de arrancar:',
      items: [
        'Lente trasero limpio para evitar luces barridas o imagen opaca.',
        'Batería arriba del 40 % y espacio libre suficiente en el celular.',
        'Notificaciones silenciadas durante los 30 minutos de rodaje.',
        'Luz natural de frente o a 45 grados (apaga focos amarillos o fluorescentes encima de tu cabeza).',
        'Pausa de dos segundos mirando al lente al empezar y al terminar cada oración.',
        'Mínimo 8 clips cortos en vertical de tu trabajo diario para vestir la edición.',
      ],
    },
    faqs: [
      {
        q: '¿Necesito el iPhone más nuevo para que mis Reels se vean profesionales?',
        a: 'No. Cualquier celular de gama media o alta de los últimos 4 años (Android o iPhone) entrega excelente calidad en 1080p si grabas con la cámara trasera y buena luz de ventana.',
      },
      {
        q: '¿Qué pasa si me equivoco varias veces al decir una frase?',
        a: 'Dejas correr el video, haces una pausa de dos segundos y repites únicamente esa oración. Nuestro equipo de edición recorta las pausas para que el resultado final fluya sin cortes bruscos.',
      },
      {
        q: '¿Por dónde les mando los videos grabados sin que WhatsApp les baje la calidad?',
        a: 'Te asignamos una carpeta privada en la nube (Google Drive / Dropbox) a la que subes los archivos originales directo desde el carrete de tu celular en un par de toques.',
      },
      {
        q: '¿Y si prefiero no aparecer hablando frente a la cámara?',
        a: 'Contamos con el Plan B sin salir en cámara: armamos tu calendario con carruseles estratégicos, diseño asistido por IA y videos de detalle de tu producto o instalaciones.',
      },
      {
        q: '¿En cuánto tiempo quedan listos los Reels después de que envío mis tomas?',
        a: 'En un plazo de 5 a 7 días hábiles posteriores a tu envío tienes todas las piezas editadas y cargadas en tu calendario mensual de Metricool para tu visto bueno.',
      },
    ],
    relatedRoutes: ['comoFunciona', 'intencionSinCamara', 'precios', 'nichoClinicas', 'nichoRestaurantes'],
    waMessage:
      'Hola, acabo de leer su guía de cómo grabar 4 Reels en 30 minutos con el celular en México y quiero aplicarlo en mi negocio [REF:blog-grabacion-mx]',
    waCta: 'Pedir mi lista de tomas por WhatsApp',
  },
  {
    id: 'guiones',
    slug: 'estructura-guiones-reels-negocios-locales',
    routeKey: 'blogGuiones',
    country: 'mx',
    category: 'Guiones estratégicos',
    eyebrow: 'Guía de guiones · México',
    title: 'Estructura de guiones para Reels de negocios en México: gancho, desarrollo y cierre con ejemplos',
    metaTitle: 'Guiones para Reels de Negocios en México (Ejemplos) | Feediasocial',
    metaDescription:
      'Aprende la fórmula de 3 bloques para redactar guiones de Reels que generan mensajes de clientes reales en México: ganchos efectivos y llamados a la acción.',
    cardSummary:
      'El método de 3 bloques que usamos en México para escribir guiones de Reels que convierten visualizaciones en mensajes de WhatsApp para tu negocio.',
    intent: 'comercial',
    targetKeyword: 'guiones para reels de negocios en mexico',
    author: 'Equipo Editorial Feediasocial',
    authorRole: 'Estrategia y Copywriting (México)',
    pubDate: '2026-10-18',
    updatedDate: '2026-10-25',
    readingTime: '8 min de lectura',
    heroPhotoKey: 'proceso-02',
    heroPhotoAlt: 'Escritorio de planeación con calendario editorial y guiones por bloques para redes sociales en México',
    heroPhotoCaption:
      'Escena editorial ilustrativa: un guion efectivo separa el gancho de 3 segundos, la explicación práctica y el llamado a WhatsApp.',
    heroSticker: 'FÓRMULA 3 BLOQUES',
    intro:
      'En México, un Reel que le sirve a tu negocio no es el que suma vistas vacías con bailes, sino el que hace que un cliente potencial en tu ciudad diga «justo eso me está pasando» y te mande un WhatsApp para cotizar o agendar cita. Para lograrlo de forma repetible cada mes, estructuramos cada guion en tres bloques cronometrados: gancho filtro en los primeros 3 segundos, explicación clara de 3 a 22 segundos y cierre con una sola instrucción de 22 a 30 segundos.',
    tldrTitle: 'En 30 segundos · Radiografía de un guion que vende en México',
    keyFacts: [
      { label: 'Extensión ideal del guion', value: '25 a 32 segundos hablados (entre 65 y 80 palabras)' },
      { label: 'Segundos 0 a 3 (Gancho)', value: 'Nombra la duda exacta o el error que comete tu cliente' },
      { label: 'Segundos 3 a 22 (Cuerpo)', value: 'Explica la solución en 2 pasos simples sin tecnicismos' },
      { label: 'Segundos 22 a 30 (Cierre)', value: 'Invitación directa a enviar palabra clave por WhatsApp o DM' },
    ],
    pullQuote: {
      text: 'Si empiezas tu video diciendo «Hola amigos, bienvenidos a nuestra página…», el 60 % de las personas ya cambió de video antes de escuchar a qué te dedicas.',
      context: 'Regla de oro de retención en Feediasocial México',
    },
    sections: [
      {
        id: 'tres-bloques-del-guion',
        number: '01',
        heading: 'Cómo funcionan los 3 bloques de un Reel pensado para atraer clientes',
        lead: 'La gente entra a Instagram y TikTok con prisa: tienes menos de tres segundos para demostrar que el video habla de un problema que a ellos les importa.',
        paragraphs: [
          'El primer bloque (el gancho) funciona como un filtro: en vez de saludar, lanzas una pregunta o desmientes un mito común de tu giro. Así retienes únicamente a las personas que realmente podrían contratarte.',
          'El segundo bloque entrega una respuesta concreta y honesta en menos de veinte segundos. Y el tercer bloque le dice al espectador exactamente qué paso dar a continuación para hablar contigo sin rodeos.',
        ],
        scriptBox: {
          title: 'Estructura base de 70 palabras lista para adaptar a tu giro',
          badge: 'Plantilla práctica',
          items: [
            {
              label: '00–03 s · Gancho directo',
              text: '«Antes de contratar o pagar [servicio/producto de tu giro] en tu ciudad, revisa estos dos puntos para no gastar doble.»',
            },
            {
              label: '03–22 s · Desarrollo claro',
              text: '«Lo primero es verificar [criterio práctico 1], porque si falla pasa [problema común]. Lo segundo es pedir siempre [criterio práctico 2] desde el día uno.»',
            },
            {
              label: '22–30 s · Llamado a la acción',
              text: '«Si quieres que revisemos tu caso o te mandemos la tabla de costos por WhatsApp, entra al enlace de nuestro perfil.»',
            },
          ],
        },
      },
      {
        id: 'ejemplos-reales-mexico',
        number: '02',
        heading: 'Ejemplos de ganchos para clínicas, restaurantes, inmobiliarias y gimnasios en México',
        lead: 'No hablamos igual en un consultorio dental en Monterrey que en una taquería o terraza en la Roma: el guion debe sonar 100 % natural en tu sector.',
        paragraphs: [
          'En servicios médicos, dentales o de fisioterapia, el gancho debe transmitir calma, ética profesional y claridad. En cambio, en gastronomía o fitness el arranque debe ser visual, enérgico y directo al antojo o a la meta física.',
          'Por eso en cada paquete mensual redactamos tus guiones con los términos reales de tu mercado en México (preventa, escrituración, enganche, valoración inicial, comanda, entrenamiento funcional).',
        ],
        figure: {
          photoKey: 'inmobiliarias-mx',
          alt: 'Asesora inmobiliaria en México grabando un recorrido en video vertical con su celular',
          caption: 'En bienes raíces en México, abrir el Reel mostrando la estancia principal y diciendo el monto de enganche filtra de inmediato a compradores reales.',
          badge: 'Ejemplos por sector en México',
          callouts: [
            'Clínicas: «¿Por qué te sigue doliendo la espalda baja aunque descanses todo el fin de semana?».',
            'Inmobiliarias: «3 gastos notariales que casi nadie contempla al comprar departamento en preventa».',
            'Restaurantes: «Así sale de la parrilla nuestro corte estrella para las mesas del viernes por la noche».',
          ],
        },
      },
      {
        id: 'guion-con-tomas-de-apoyo',
        number: '03',
        heading: 'Qué mostrar en pantalla mientras hablas para que el video no sea monótono',
        lead: 'Un buen guion no solo dice qué vas a hablar: también indica qué tomas cortas de 3 segundos vamos a colocar encima de tu voz.',
        paragraphs: [
          'En nuestros entregables mensuales de México, cada guion viene acompañado de su indicación visual. Así sabes exactamente cuándo mirar fijo al lente y cuándo grabar un acercamiento de tus manos, de tu equipo de trabajo o del producto terminado.',
          'Durante la edición, nuestro equipo combina tu toma principal con esas imágenes de apoyo y rótulos en pantalla para que el video se entienda incluso si el usuario lleva el celular en silencio.',
        ],
        figure: {
          photoKey: 'restaurantes-mx',
          alt: 'Preparación gastronómica en México grabada en formato vertical con celular',
          caption: 'Alternar la voz del dueño o chef con tomas cerradas de preparación a fuego vivo multiplica el tiempo de visualización del Reel.',
          badge: 'Ritmo visual cada 3 segundos',
          callouts: [
            'Texto hablado: oraciones breves de 12 a 15 palabras pensadas para el español de México.',
            'Tomas de apoyo (B-roll): 3 clips mudos de 4 segundos indicados en el mismo documento.',
            'Titular en portada: texto claro para que quien visite tu perfil encuentre el tema al instante.',
          ],
        },
      },
      {
        id: 'cierre-hacia-whatsapp',
        number: '04',
        heading: 'El cierre: cómo llevar interesados reales a tu WhatsApp Business',
        lead: 'En México, la venta de servicios y las reservaciones se cierran por WhatsApp; tu Reel debe ser el puente más corto hacia esa conversación.',
        paragraphs: [
          'Evita terminar tus videos con frases vagas como «síguenos para más consejos». Si el Reel resolvió una duda importante sobre precios, tiempos o tratamientos, invita a la persona a dar el siguiente paso lógico.',
          'Alternamos llamados de alcance («guarda este video para cuando vayas a cotizar») con llamados directos de negocio («mándanos un mensaje con la palabra CITA o toca el link del perfil para hablar por WhatsApp»).',
        ],
      },
    ],
    comparisonTable: {
      title: 'Comparativa: Guiones improvisados vs. Guiones estratégicos en México',
      subtitle: 'Cómo cambia la respuesta del público cuando estructuras los primeros 3 segundos:',
      headers: ['Giro del negocio', 'Arranque improvisado (baja retención)', 'Gancho Feediasocial (0–3 s)', 'Llamado a la acción final'],
      rows: [
        {
          col1: 'Consultorio / Clínica',
          col2: '«Hola, buenas tardes, hoy les quiero platicar de nuestros tratamientos…»',
          col3: '«Si notas sensibilidad al tomar algo frío, estas son las 2 causas más comunes que vemos en consulta.»',
          col4: '«Agenda tu valoración inicial desde el botón de WhatsApp en nuestro perfil.»',
        },
        {
          col1: 'Inmobiliaria / Desarrolladora',
          col2: '«Miren esta bonita casa que tenemos disponible en venta…»',
          col3: '«Con cuánto enganche apartas hoy un departamento de 2 recámaras con terraza en esta zona.»',
          col4: '«Escríbenos FICHA por mensaje directo y te enviamos planos y corrida financiera.»',
        },
        {
          col1: 'Gimnasio / Estudio fitness',
          col2: '«Los invitamos a conocer nuestras clases y horarios de esta semana…»',
          col3: '«Cómo empezar a entrenar fuerza en 45 minutos si llevas más de un año sin pisar un gimnasio.»',
          col4: '«Mándanos WhatsApp para apartar tu clase muestra de esta semana.»',
        },
      ],
    },
    checklist: {
      title: 'Lista de verificación de 5 puntos para cada guion del mes',
      subtitle: 'Aplica este filtro rápido antes de pasar a grabar:',
      items: [
        'Cero saludos largos en los primeros 3 segundos: entra directo al tema.',
        'Una sola idea central por video (si tienes tres temas, tienes tres Reels distintos).',
        'Lenguaje natural de México, como le explicarías el tema a un cliente frente a tu escritorio.',
        'Al menos 2 indicaciones de tomas de apoyo (B-roll) anotadas junto al texto.',
        'Un único llamado a la acción claro al final del video.',
      ],
    },
    faqs: [
      {
        q: '¿Tengo que memorizar todo el guion antes de grabar con mi celular?',
        a: 'No. Redactamos los guiones por bloques de una sola oración para que puedas leerla rápido, mirar al lente de tu celular y decirla con naturalidad.',
      },
      {
        q: '¿Cuántos guiones mensuales incluye cada paquete en México?',
        a: 'El paquete Esencial ($6,300 MXN/mes) incluye 4 Reels con guion y edición; Crecimiento ($9,450 MXN/mes) incluye 8 Reels; y Pro ($13,650 MXN/mes) incluye 15 Reels completos al mes.',
      },
      {
        q: '¿Puedo revisar y ajustar los guiones antes de mi sesión de grabación?',
        a: 'Por supuesto. Te enviamos los guiones con anticipación para que valides precios, términos de tu giro o promociones antes de grabar.',
      },
      {
        q: '¿Estos guiones funcionan tanto en Instagram como en TikTok?',
        a: 'Sí. La estructura vertical de 25 a 30 segundos con gancho inicial está diseñada para retener audiencia tanto en Instagram Reels como en TikTok y Facebook Reels.',
      },
      {
        q: '¿Puedo ver cómo escribirían 3 ideas de Reels para mi negocio antes de contratar?',
        a: 'Sí: solicita nuestra mini-auditoría gratuita desde la web o por WhatsApp y te preparamos 3 ideas de Reels con gancho específicas para tu cuenta sin costo.',
      },
    ],
    relatedRoutes: ['comoTrabajamos', 'servicios', 'precios', 'nichoInmobiliarias', 'nichoGimnasios'],
    waMessage:
      'Hola, leí su guía de estructura de guiones para Reels en México y quiero pedir mis 3 ideas gratuitas para mi negocio [REF:blog-guiones-mx]',
    waCta: 'Pedir 3 ideas de guion gratis por WhatsApp',
  },
  {
    id: 'metricool',
    slug: 'como-organizar-calendario-redes-metricool',
    routeKey: 'blogMetricool',
    country: 'mx',
    category: 'Calendario y constancia',
    eyebrow: 'Guía de organización · México',
    title: 'Cómo organizar y autorizar el calendario de redes de tu negocio en 10 minutos al mes con Metricool',
    metaTitle: 'Cómo Organizar el Calendario de Redes en Metricool | Feediasocial México',
    metaDescription:
      'Guía práctica para pymes en México: cómo estructurar, revisar y dejar programado un mes completo de Instagram y TikTok en Metricool en solo 10 minutos.',
    cardSummary:
      'Cómo dejar atrás la urgencia de publicar al día y revisar todo el mes de contenido de tu negocio en una sola vista clara.',
    intent: 'comercial',
    targetKeyword: 'calendario de redes sociales metricool mexico',
    author: 'Equipo Editorial Feediasocial',
    authorRole: 'Planeación y Operaciones (México)',
    pubDate: '2026-10-20',
    updatedDate: '2026-10-25',
    readingTime: '6 min de lectura',
    heroPhotoKey: 'servicios-ia',
    heroPhotoAlt: 'Pantalla con planeación visual mensual de publicaciones y videos para redes sociales',
    heroPhotoCaption:
      'Escena editorial ilustrativa: visualizar las cuatro semanas completas en Metricool garantiza constancia sin depender de tener tiempo libre cada día.',
    heroSticker: '10 MIN / MES',
    intro:
      'La razón principal por la que las redes sociales de un negocio en México se quedan pausadas durante semanas no es falta de ganas: es querer decidir cada mañana qué subir mientras atiendes clientes y resuelves la operación del día. Al trabajar con un calendario mensual en Metricool, concentras la revisión de todos tus posts, carruseles, stories y Reels en una sola sesión de 10 minutos antes de arrancar el mes.',
    tldrTitle: 'En 30 segundos · Mezcla ideal de contenido mensual en México',
    keyFacts: [
      { label: '40 % Contenido útil y educativo', value: 'Responde las dudas que tus clientes siempre preguntan antes de comprar' },
      { label: '40 % Confianza y proceso real', value: 'Muestra tu equipo, instalaciones, preparación y casos reales' },
      { label: '20 % Invitación comercial directa', value: 'Explica paquetes, horarios, promociones de temporada y cómo agendar' },
      { label: 'Tiempo de autorización del dueño', value: '10 minutos al mes desde tu celular o computadora' },
    ],
    pullQuote: {
      text: 'La constancia en redes no se logra teniendo más tiempo libre entre semana, sino dejando el mes entero programado antes del día primero.',
      context: 'Sistema de planeación anticipada de Feediasocial México',
    },
    sections: [
      {
        id: 'equilibrio-semanal',
        number: '01',
        heading: 'Cómo equilibrar las publicaciones del mes para no saturar ni aburrir',
        lead: 'Si solo subes flyers con precios, la gente deja de seguirte; pero si solo subes datos curiosos sin decir qué vendes, nadie te pide informes por WhatsApp.',
        paragraphs: [
          'Un calendario mensual bien armado alterna formatos y objetivos dentro de la misma semana. Los Reels cortos abren la puerta a personas nuevas en tu ciudad; los carruseles de varias láminas explican a detalle por qué tu servicio vale lo que cuesta; y las secuencias de stories mantienen el contacto diario y llevan tráfico directo a tu WhatsApp.',
          'Además, en México es clave anticipar las fechas comerciales y quincenas del calendario anual (Buen Fin, Día de las Madres, regreso a clases, cierres de mes) al menos con tres semanas de margen.',
        ],
        bullets: [
          'Inicio de semana: Carrusel informativo que resuelve una objeción frecuente de tus clientes.',
          'Mitad de semana: Reel dinámico con gancho en los primeros 3 segundos.',
          'Jueves a sábado: Publicación de caso real, detrás de cámaras o llamado directo a reservar.',
        ],
      },
      {
        id: 'revision-en-diez-minutos',
        number: '02',
        heading: 'El fin de los archivos sueltos: cómo apruebas tu mes en 10 minutos',
        lead: 'Revisar diseños y videos perdidos en cadenas de correos o en un chat de WhatsApp donde se mezclan audios y facturas hace que cualquier dueño pierda el control.',
        paragraphs: [
          'En nuestro flujo de trabajo en México, cargamos todas las piezas del mes directamente en Metricool con su diseño final, video editado, portada, copy redactado y horario óptimo de publicación para tu audiencia local.',
          'Tú entras a la vista mensual, revisas las cuatro semanas de corrido en 10 minutos y, si necesitas cambiar un dato de precio o fecha, nos avisas. Hacemos el ajuste de inmediato y todo el mes queda programado para publicarse puntualmente.',
        ],
        figure: {
          photoKey: 'sin-camara',
          alt: 'Composición de carruseles y piezas gráficas para calendario mensual de redes sociales',
          caption: 'Tener los carruseles, gráficos con IA y Reels listos desde el inicio de mes evita cualquier hueco en semanas de alta carga operativa.',
          badge: 'Control total sin fricción',
          callouts: [
            'Vista previa exacta de cada publicación antes de que salga al aire.',
            'Programación automática en los horarios donde tu público en México está conectado.',
            'Tus cuentas siempre son tuyas: nunca retenemos accesos ni perfiles.',
          ],
        },
      },
      {
        id: 'continuidad-sin-pausas',
        number: '03',
        heading: 'Qué pasa en las semanas pesadas cuando no tienes ni un minuto libre',
        lead: 'La gran ventaja de trabajar con calendario anticipado es que tus redes siguen atendiendo y dando presencia aunque tú estés en junta, de viaje o cerrando mes.',
        paragraphs: [
          'Si en un mes particular tienes saturación de trabajo y no puedes grabar videos hablados, combinamos material de archivo de tu negocio con carruseles editoriales y gráficos asistidos por IA (nuestro Plan B sin cámara) para que tu perfil mantenga el ritmo sin interrupciones.',
        ],
        figure: {
          photoKey: 'gimnasios-mx',
          alt: 'Entrenador en gimnasio de México grabando contenido planificado con celular',
          caption: 'Planear con cuatro semanas de anticipación permite preparar lanzamientos de quincena y temporadas altas con total tranquilidad.',
          badge: 'Cero semanas en blanco',
          callouts: [
            'Planeación anticipada de quincenas y fechas clave del calendario comercial mexicano.',
            'Combinación equilibrada de Reels, posts de feed y secuencias de stories.',
            'Soporte cercano por WhatsApp en tu mismo huso horario.',
          ],
        },
      },
      {
        id: 'reporte-mensual-claro',
        number: '04',
        heading: 'Un reporte mensual en español claro para mejorar el mes siguiente',
        lead: 'Al terminar el mes no te mandamos gráficas incomprensibles, sino un resumen ejecutivo de qué funcionó y qué haremos el mes entrante.',
        paragraphs: [
          'Revisamos qué temas generaron más guardados, qué Reels tuvieron mejor retención completa y qué publicaciones detonaron más clics hacia tu WhatsApp o perfil. Con esa información afinamos los guiones del siguiente ciclo mensual.',
        ],
      },
    ],
    comparisonTable: {
      title: 'Ejemplo de semana programada en el paquete Crecimiento (México · $9,450 MXN/mes)',
      subtitle: 'Distribución semanal de los 12 posts, 12 stories y 4 Reels incluidos en el paquete:',
      headers: ['Día', 'Pieza programada', 'Función dentro del embudo', 'Tiempo requerido de tu parte'],
      rows: [
        {
          col1: 'Martes',
          col2: 'Carrusel explicativo (5 a 7 láminas)',
          col3: 'Confianza: aclarar dudas de proceso, costos o garantías',
          col4: '0 min (investigado y diseñado por nuestro equipo)',
        },
        {
          col1: 'Jueves',
          col2: 'Reel con guion y edición (25–30 s)',
          col3: 'Descubrimiento: llegar a nuevos prospectos en tu ciudad',
          col4: 'Grabado dentro de tu sesión mensual de 30 min',
        },
        {
          col1: 'Viernes / Sábado',
          col2: 'Post de servicio/caso + 3 Stories con link',
          col3: 'Conversión: invitar a cotizar o agendar cita por WhatsApp',
          col4: '0 min (programado automáticamente en Metricool)',
        },
      ],
    },
    checklist: {
      title: 'Los 4 puntos que validas en tus 10 minutos al mes',
      subtitle: 'Así de simple es autorizar tu calendario mensual con nosotros:',
      items: [
        'Confirmar que precios en MXN, horarios o promociones vigentes sean correctos.',
        'Revisar que los temas reflejen el servicio o producto prioritario de ese mes.',
        'Avisar si habrá algún día inhábil o evento especial en tu local o consultorio.',
        'Dar tu autorización por WhatsApp para dejar todo el mes programado.',
      ],
    },
    faqs: [
      {
        q: '¿Debo pagar una licencia adicional de Metricool por mi cuenta?',
        a: 'No. Nosotros incluimos la configuración, carga del calendario y reporte mensual dentro de tu paquete sin cargos ocultos de software.',
      },
      {
        q: '¿Puedo seguir subiendo historias espontáneas desde mi celular aunque el mes esté programado?',
        a: 'Claro que sí. Tu cuenta permanece 100 % abierta en tu celular para que compartas momentos del día a día cuando gustes, sabiendo que la base profesional de la semana ya está cubierta.',
      },
      {
        q: '¿Qué pasa si quiero cambiar un post a mitad de mes por una promoción nueva?',
        a: 'Nos escribes por WhatsApp y ajustamos la pieza en el calendario de Metricool sin burocracia ni tickets lentos.',
      },
      {
        q: '¿Cuánto tardan en entregarme el primer calendario después del onboarding?',
        a: 'Después de nuestra videollamada inicial de 45 minutos, en 5 a 7 días hábiles recibes tu primera ruta de guiones y estructura mensual.',
      },
      {
        q: '¿Tienen contratos forzosos a 6 o 12 meses en México?',
        a: 'No. Trabajamos mes a mes sin plazos forzosos: te quedas porque el sistema te quita un peso de encima y mantiene tus redes impecables.',
      },
    ],
    relatedRoutes: ['precios', 'comoFunciona', 'intencionPrecio', 'intencionComparativa', 'contacto'],
    waMessage:
      'Hola, leí su guía sobre cómo organizar el calendario de redes en Metricool en México y me gustaría ver cómo aplicarlo a mi negocio [REF:blog-metricool-mx]',
    waCta: 'Ver cómo organizar mi calendario por WhatsApp',
  },
  {
    id: 'carruseles',
    slug: 'como-hacer-carruseles-instagram-para-vender',
    routeKey: 'blogCarruseles',
    country: 'mx',
    category: 'Carruseles y Plan B sin cámara',
    eyebrow: 'Guía visual · México',
    title: 'Cómo armar carruseles de Instagram en 7 láminas que generan guardados y prospectos por WhatsApp en México',
    metaTitle: 'Cómo Hacer Carruseles de Instagram para Negocios | Feediasocial México',
    metaDescription:
      'Aprende la estructura de 7 láminas para diseñar carruseles de Instagram que convierten seguidores en mensajes de WhatsApp para tu negocio en México.',
    cardSummary:
      'La fórmula visual de 7 láminas que usamos en México para que tu negocio eduque, demuestre autoridad y cierre citas sin necesidad de salir siempre a cuadro.',
    intent: 'comercial',
    targetKeyword: 'como hacer carruseles de instagram para negocios mexico',
    author: 'Equipo Editorial Feediasocial',
    authorRole: 'Diseño Editorial y Conversión (México)',
    pubDate: '2026-10-22',
    updatedDate: '2026-10-25',
    readingTime: '7 min de lectura',
    heroPhotoKey: 'sin-camara',
    heroPhotoAlt: 'Composición de carruseles educativos e infografías para redes sociales sobre mesa de trabajo en México',
    heroPhotoCaption:
      'Escena editorial ilustrativa: un carrusel de 7 láminas explica a detalle lo que un prospecto en México necesita saber antes de mandarte WhatsApp.',
    heroSticker: '7 LÁMINAS CLAVE',
    intro:
      'En México, los Reels sirven para que gente nueva de tu ciudad descubra que existes, pero los carruseles de Instagram son los que terminan de convencer al cliente que está comparando precios, revisando qué incluye tu servicio o decidiendo en qué consultorio o negocio agendar. Un buen carrusel no es un flyer saturado de letras chiquitas: es una ruta visual de 7 láminas que responde dudas reales y cierra con un paso claro hacia tu WhatsApp.',
    tldrTitle: 'En 30 segundos · Anatomía de un carrusel de 7 láminas en México',
    keyFacts: [
      { label: 'Lámina 1 (Portada)', value: 'Titular directo de máximo 9 palabras con promesa útil para tu cliente' },
      { label: 'Láminas 2 a 5 (Valor)', value: '1 sola idea por imagen con letra grande que se lea fácil en el celular' },
      { label: 'Lámina 6 (Para guardar)', value: 'Tabla resumen o checklist que el usuario quiera conservar en su teléfono' },
      { label: 'Lámina 7 (Cierre a WhatsApp)', value: 'Invitación clara a pedir cotización o agendar cita desde el link del perfil' },
    ],
    pullQuote: {
      text: 'Un flyer tradicional pide que te compren sin haber dado nada antes; un carrusel de 7 láminas resuelve una duda real y se gana el mensaje de WhatsApp.',
      context: 'Criterio de diseño consultivo en Feediasocial México',
    },
    sections: [
      {
        id: 'doble-oportunidad-instagram',
        number: '01',
        heading: 'La ventaja oculta de los carruseles: Instagram los muestra dos veces gratis',
        lead: 'Cuando subes una sola imagen estática y tu seguidor pasa de largo, esa publicación muere ahí. Con un carrusel ocurre exactamente lo contrario.',
        paragraphs: [
          'Si un usuario en México ve la primera lámina de tu carrusel en la mañana pero no interactúa, el algoritmo de Instagram vuelve a mostrarle tu publicación más tarde abriendo directamente en la segunda lámina.',
          'Además, cada segundo que el prospecto pasa deslizando de la lámina 1 a la 7 le indica a la plataforma que tu cuenta entrega información valiosa, impulsando tu alcance orgánico frente a tu competencia local.',
        ],
        bullets: [
          'Proporción vertical 4:5 (1080 × 1350 px) para aprovechar toda la pantalla del celular.',
          'Menos de 35 palabras por lámina con alto contraste visual.',
          'Flecha o acento gráfico que invite a deslizar hacia la siguiente tarjeta.',
        ],
      },
      {
        id: 'estructura-siete-laminas-mexico',
        number: '02',
        heading: 'Qué poner en cada una de las 7 láminas para que la gente llegue hasta el final',
        lead: 'El secreto para que el lector deslice hasta la séptima imagen es no soltar toda la información de golpe en la portada.',
        paragraphs: [
          'En la lámina 1 planteamos la pregunta o el error común que le cuesta dinero o tiempo a tu cliente en México. En la lámina 2 explicamos por qué pasa eso y en las láminas 3, 4 y 5 desglosamos la solución paso a paso en español claro.',
          'La lámina 6 concentra un resumen visual listo para guardar o tomar captura de pantalla, y la lámina 7 indica cómo escribirte por WhatsApp para cotizar o agendar.',
        ],
        scriptBox: {
          title: 'Ejemplo de secuencia de 7 láminas para un negocio en México',
          badge: 'Fórmula paso a paso',
          items: [
            {
              label: 'Láminas 1 y 2 · El gancho',
              text: 'Lámina 1: «3 cosas que debes revisar antes de firmar contrato de preventa o servicio». Lámina 2: «Por qué fijarte solo en la mensualidad más baja sale caro».',
            },
            {
              label: 'Láminas 3 a 5 · Explicación',
              text: 'Un punto por lámina con ejemplos reales en pesos mexicanos (MXN) y lenguaje directo de tu giro.',
            },
            {
              label: 'Láminas 6 y 7 · Cierre',
              text: 'Lámina 6: «Checklist de 4 puntos antes de decidir». Lámina 7: «Mándanos WhatsApp desde el link del perfil y revisamos tu caso».',
            },
          ],
        },
        figure: {
          photoKey: 'proceso-02',
          alt: 'Planeación de carruseles y calendario mensual para negocios en México',
          caption: 'Alineamos los carruseles de cada semana con los servicios o productos que más te interesa mover en el mes.',
          badge: 'Copy + Diseño incluido',
          callouts: [
            'Jerarquía visual limpia para que se entienda en 3 segundos desde el celular.',
            'Gráficos e ilustraciones asistidos por IA personalizados con los colores de tu marca.',
            'Cero plantillas genéricas repetidas entre distintos negocios.',
          ],
        },
      },
      {
        id: 'solucion-sin-salir-en-camara',
        number: '03',
        heading: 'La base de nuestro Plan B cuando prefieres no aparecer en video',
        lead: 'Si en tu consultorio, despacho o empresa en México nadie quiere hablar frente al celular, los carruseles estratégicos mantienen tus redes vendiendo todo el año.',
        paragraphs: [
          'En nuestro Plan B sin salir en cámara combinamos carruseles profundos, fotos de tus instalaciones o platillos y diseño gráfico con IA para que tu perfil proyecte confianza y orden semana tras semana.',
        ],
        figure: {
          photoKey: 'servicios-ia',
          alt: 'Diseño de piezas gráficas editoriales asistidas por IA',
          caption: 'Combinamos dirección de arte editorial con herramientas de IA para crear láminas únicas que destacan en el feed.',
          badge: 'Plan B sin cámara',
          callouts: [
            'Adaptado a la personalidad de tu giro (sobrio para despachos y clínicas; vibrante para restaurantes y salones).',
            'Redactado 100 % en español de México por nuestro equipo.',
            'Cargado y programado en Metricool para tu autorización en 10 minutos.',
          ],
        },
      },
      {
        id: 'guardados-y-conversion',
        number: '04',
        heading: 'Cómo los guardados de hoy se convierten en las citas de la próxima quincena',
        lead: 'Muchas personas en México ven tu publicación entre semana y guardan el carrusel para escribirte por WhatsApp el fin de semana o en día de quincena.',
        paragraphs: [
          'Por eso en el reporte mensual de Metricool medimos con lupa qué carruseles generaron más guardados y compartidos, reforzando esos temas en el calendario del mes siguiente.',
        ],
      },
    ],
    comparisonTable: {
      title: 'Flyer promocional vs. Carrusel consultivo de 7 láminas en México',
      subtitle: 'Comparativa real de impacto en la cuenta de una pyme mexicana:',
      headers: ['Aspecto clave', 'Flyer tradicional de oferta', 'Imagen suelta con texto largo', 'Carrusel de 7 láminas Feediasocial'],
      rows: [
        {
          col1: 'Exposición en el feed',
          col2: '1 sola oportunidad',
          col3: '1 sola oportunidad',
          col4: 'Doble exposición automática (lámina 1 y lámina 2)',
        },
        {
          col1: 'Confianza que transmite',
          col2: 'Baja (parece anuncio invasivo)',
          col3: 'Media (cansa la vista en el celular)',
          col4: 'Alta (educa y demuestra dominio de tu giro)',
        },
        {
          col1: 'Guardados y envíos por DM',
          col2: 'Casi nulos',
          col3: 'Bajos',
          col4: 'Altos gracias a la lámina 6 de resumen',
        },
        {
          col1: 'Tiempo invertido por ti',
          col2: 'Horas peleando con programas de diseño',
          col3: '2 horas redactando y armando',
          col4: '0 minutos (entregado listo en tu paquete mensual)',
        },
      ],
    },
    checklist: {
      title: 'Checklist de 5 reglas para que un carrusel funcione en México',
      subtitle: 'Los puntos que cuidamos en cada pieza de tu calendario:',
      items: [
        'Portada con titular directo que hable del problema o meta de tu cliente.',
        'Segunda lámina diseñada para atrapar a quien no deslizó en el primer vistazo.',
        'Tipografía clara con contraste verificado para leerse fácil en cualquier celular.',
        'Lámina 6 con tabla, costos orientativos en MXN o pasos clave para guardar.',
        'Lámina 7 con llamado directo a tu WhatsApp Business o enlace de perfil.',
      ],
    },
    faqs: [
      {
        q: '¿Cuántos posts y carruseles incluye cada paquete mensual en México?',
        a: 'El paquete Esencial ($6,300 MXN/mes) incluye 9 posts/carruseles; Crecimiento ($9,450 MXN/mes) incluye 12; y Pro ($13,650 MXN/mes) incluye 15 publicaciones mensuales.',
      },
      {
        q: '¿Yo tengo que escribir el contenido de cada lámina o lo hacen ustedes?',
        a: 'Lo investigamos y redactamos nosotros por completo en español de México. Tú únicamente revisas el resultado final en Metricool antes de que se programe.',
      },
      {
        q: '¿Estos mismos carruseles sirven para TikTok y Facebook?',
        a: 'Sí. En TikTok el formato de carrusel deslizable tiene excelente alcance orgánico en México, y en Facebook mantiene activa la página de tu negocio.',
      },
      {
        q: '¿Respetan los colores y el logotipo de mi negocio?',
        a: 'Claro. Desde el onboarding configuramos tu línea gráfica para que cada carrusel se vea 100 % propio de tu marca.',
      },
      {
        q: '¿Puedo pedir una muestra de cómo enfocarían el contenido de mi cuenta?',
        a: 'Sí: escríbenos por WhatsApp o llena el formulario de mini-auditoría gratuita y te enviamos 3 ideas aterrizadas a tu giro en menos de 24 horas hábiles.',
      },
    ],
    relatedRoutes: ['intencionSinCamara', 'servicios', 'precios', 'nichoAbogados', 'nichoClinicas'],
    waMessage:
      'Hola, leí su guía de cómo hacer carruseles de Instagram en México y me gustaría ver cómo aplicarlo a mi negocio [REF:blog-carruseles-mx]',
    waCta: 'Ver cómo aplicar carruseles a mi negocio por WhatsApp',
  },
  {
    id: 'tiktok-vs-reels',
    slug: 'tiktok-vs-instagram-reels-para-negocios-mexico',
    routeKey: 'blogTiktokVsReels',
    country: 'mx',
    category: 'Estrategia en video',
    eyebrow: 'Comparativa 2026 · México',
    title: 'TikTok vs. Instagram Reels para negocios en México en 2026: cuál trae mejores clientes por WhatsApp',
    metaTitle: 'TikTok vs Instagram Reels para Negocios en México | Feediasocial',
    metaDescription:
      'Comparativa práctica entre TikTok e Instagram Reels para pymes, consultorios y negocios en México: dónde está tu cliente y cómo cubrir ambas en 30 minutos.',
    cardSummary:
      'Analizamos cómo compra el consumidor mexicano en 2026 en Instagram y TikTok, y cómo aprovechar tus 30 minutos mensuales de celular para dominar las dos redes.',
    intent: 'comparativa',
    targetKeyword: 'tiktok vs instagram reels para negocios mexico',
    author: 'Equipo Editorial Feediasocial',
    authorRole: 'Estrategia y Crecimiento Orgánico (México)',
    pubDate: '2026-10-24',
    updatedDate: '2026-10-25',
    readingTime: '7 min de lectura',
    heroPhotoKey: 'contacto-chat',
    heroPhotoAlt: 'Celular mostrando mensajes de clientes interesados en servicios de un negocio local en México',
    heroPhotoCaption:
      'Escena editorial ilustrativa: con un solo video vertical limpio en 9:16 cubres simultáneamente Instagram Reels y TikTok en México.',
    heroSticker: '1 VIDEO · 2 REDES',
    intro:
      'Para un negocio, consultorio o despacho en México en 2026, no tienes que elegir entre TikTok o Instagram Reels ni grabar el doble de tiempo: TikTok es hoy el buscador local donde miles de personas en tu ciudad te descubren sin seguirte, mientras que Instagram es el catálogo de confianza donde revisan tus historias destacadas, tus carruseles y tocan el botón para escribirte por WhatsApp.',
    tldrTitle: 'En 30 segundos · Qué aporta cada plataforma a tu negocio en México',
    keyFacts: [
      { label: 'Rol de Instagram en México', value: 'Validación de confianza, portafolio en carruseles y cierre por WhatsApp / DM' },
      { label: 'Rol de TikTok en México', value: 'Alcance masivo en tu ciudad y búsquedas por giro + colonia o zona' },
      { label: 'Tiempo adicional de rodaje', value: '0 minutos extra (el mismo video editado sin marcas de agua sirve en ambas)' },
      { label: 'Público con poder de compra', value: 'Usuarios de 25 a 55 años activos a diario en ambas aplicaciones' },
    ],
    pullQuote: {
      text: 'Hoy en CDMX, Monterrey, Guadalajara o Querétaro la gente busca en TikTok e Instagram desde dónde ir a cenar hasta qué dentista, abogado o inmobiliaria contratar.',
      context: 'Hábitos de búsqueda social en México (2026)',
    },
    sections: [
      {
        id: 'como-compra-el-usuario-mexicano',
        number: '01',
        heading: 'Cómo se complementan TikTok e Instagram en el proceso de compra en México',
        lead: 'Pensar que TikTok es solo para entretenimiento juvenil hace que muchos negocios en México dejen ir el canal de alcance orgánico más rápido que existe.',
        paragraphs: [
          'En TikTok, el algoritmo muestra tus videos a personas ubicadas en tu misma ciudad e interesadas en tu tema aunque tu cuenta sea nueva. Es el canal ideal para que un video de 25 segundos respondiendo una duda frecuente llegue a cientos de prospectos locales.',
          'Por su parte, Instagram funciona como la recepción digital de tu negocio: quien te descubre en un Reel entra a tu perfil, revisa tus historias destacadas de precios o ubicación, lee un carrusel y te manda mensaje directo o WhatsApp.',
        ],
        bullets: [
          'TikTok te pone frente a ojos nuevos de tu ciudad todas las semanas.',
          'Instagram ordena tu oferta en carruseles e historias para cerrar la cita.',
          'Ambas plataformas posicionan tus videos cuando alguien busca tu servicio más el nombre de tu ciudad.',
        ],
      },
      {
        id: 'una-sesion-dos-redes',
        number: '02',
        heading: 'Cómo publicar tus mismos Reels en TikTok sin perder calidad ni alcance',
        lead: 'El error que frena las vistas de muchos negocios es subir a Instagram un video descargado con el sello de agua de TikTok (o al revés).',
        paragraphs: [
          'En Feediasocial editamos tus videos a partir de las tomas originales que subes desde tu celular y generamos un archivo maestro limpio en alta definición.',
          'Así dejamos programado en Metricool tanto tu Instagram Reel (con portada editorial para tu feed) como tu publicación de TikTok (con palabras clave locales en el texto para aparecer en las búsquedas de tu zona en México).',
        ],
        figure: {
          photoKey: 'restaurantes-mx',
          alt: 'Grabación de video vertical con celular en un restaurante mexicano',
          caption: 'Una sola sesión de 30 minutos al mes con tu celular alimenta al mismo tiempo tu perfil de Instagram y tu canal de TikTok.',
          badge: 'Doble rendimiento mensual',
          callouts: [
            'Exportación en 1080p sin logos ni marcas de agua de otras aplicaciones.',
            'Subtítulos centrados en zona segura para que se lean perfecto en ambas pantallas.',
            'Textos descriptivos pensados para el buscador de Instagram y TikTok en México.',
          ],
        },
      },
      {
        id: 'diferencias-por-giro-mexico',
        number: '03',
        heading: 'Qué plataforma genera más citas según el giro de tu negocio en México',
        lead: 'Aunque publicar el video vertical en ambas redes no te toma ni un minuto extra, cada giro vive un comportamiento distinto.',
        paragraphs: [
          'En restaurantes, cafeterías, salones de belleza, spas y gimnasios, TikTok genera un flujo constante de visitas nuevas en sucursal gracias a lo visual del producto. En consultorios médicos/dentales, inmobiliarias y despachos contables o legales, Instagram suele concentrar el cierre de citas de mayor ticket.',
        ],
        figure: {
          photoKey: 'belleza-mx',
          alt: 'Especialista en salón de belleza en México grabando resultado en formato vertical',
          caption: 'Mostrar resultados reales y explicar procesos en 25 segundos posiciona a tu negocio por encima de cuentas que solo suben flyers.',
          badge: 'Posicionamiento por giro',
          callouts: [
            'Gastronomía y belleza: tomas dinámicas del proceso y resultado final con audio limpio.',
            'Clínicas y despachos: explicaciones claras que resuelven las 3 dudas más comunes del cliente.',
            'Inmobiliarias: recorridos verticales diciendo zona, metraje y monto de enganche en los primeros 3 segundos.',
          ],
        },
      },
      {
        id: 'recomendacion-practica',
        number: '04',
        heading: 'La regla de oro: constancia mensual antes que complicarte la vida',
        lead: 'No necesitas volverte creador de contenido de tiempo completo para tener presencia impecable en ambas redes.',
        paragraphs: [
          'Con nuestros paquetes mensuales en México (desde $6,300 MXN/mes) grabas una sola vez al mes durante 30 minutos con tu celular y recibes todo tu sistema de guiones, edición, carruseles y calendario programado.',
        ],
      },
    ],
    comparisonTable: {
      title: 'Instagram Reels vs. TikTok para pymes y negocios en México (2026)',
      subtitle: 'Comparativa directa para aprovechar las dos plataformas sin trabajar doble:',
      headers: ['Criterio comercial', 'Instagram (Reels + Carruseles + Historias)', 'TikTok (Video vertical + Carrusel)', 'Sistema combinado Feediasocial'],
      rows: [
        {
          col1: 'Descubrimiento de gente que no te sigue',
          col2: 'Alto mediante Reels recomendados',
          col3: 'Muy alto en tu ciudad desde la primera semana',
          col4: 'Multiplicas alcance usando el mismo video limpio',
        },
        {
          col1: 'Generación de mensajes a WhatsApp',
          col2: 'Muy alta (perfil completo + historias destacadas)',
          col3: 'Media-alta (impulsa búsquedas de tu marca)',
          col4: 'Embudo completo desde la vista hasta el WhatsApp',
        },
        {
          col1: 'Búsqueda local (ej. «dentista en…»)',
          col2: 'Buena por nombre y biografía',
          col3: 'Excelente motor de búsqueda por palabras clave',
          col4: 'Copy optimizado con términos reales de tu giro en México',
        },
        {
          col1: 'Tiempo requerido del dueño al mes',
          col2: '30 minutos grabando con tu celular',
          col3: '0 minutos adicionales',
          col4: '30 minutos totales al mes + 10 min para aprobar en Metricool',
        },
      ],
    },
    checklist: {
      title: 'Los 5 puntos clave para publicar el mismo video en Instagram y TikTok',
      subtitle: 'Así cuidamos tus entregas mensuales en México:',
      items: [
        'Usar siempre el archivo original editado sin marcas de agua de otras aplicaciones.',
        'Colocar los subtítulos en el área central segura para que no se tapen con los botones.',
        'Cuidar que la música o el audio sea apto para cuentas comerciales.',
        'Incluir el giro del negocio y la ciudad o colonia en la descripción del video.',
        'Tener activo el enlace directo a tu WhatsApp con mensaje precargado en tu perfil.',
      ],
    },
    faqs: [
      {
        q: '¿Tengo que hacer bailes o trends cómicos para que mi negocio funcione en TikTok México?',
        a: 'Para nada. Los videos que atraen clientes reales que pagan son aquellos donde muestras tu trabajo, respondes dudas frecuentes en 30 segundos y hablas como experto en tu giro.',
      },
      {
        q: '¿Tengo que grabar dos veces cada video para subirlo a Instagram y a TikTok?',
        a: 'No. Grabas una sola toma en vertical (9:16) durante tu sesión de 30 minutos al mes y nosotros preparamos el archivo limpio para ambas redes.',
      },
      {
        q: '¿Qué pasa si mi negocio apenas va a abrir su cuenta de TikTok desde cero?',
        a: 'Es una excelente ventaja porque en TikTok no necesitas tener seguidores previos para que un buen video bien guionizado llegue a personas de tu ciudad.',
      },
      {
        q: '¿En cuánto empiezan los paquetes mensuales en México?',
        a: 'El paquete Esencial cuesta $6,300 MXN/mes, el paquete Crecimiento $9,450 MXN/mes y el paquete Pro $13,650 MXN/mes.',
      },
      {
        q: '¿Cómo puedo recibir las 3 ideas de Reels gratuitas para mi cuenta?',
        a: 'Mándanos un mensaje por WhatsApp o llena el formulario corto de mini-auditoría en la web y en menos de 24 horas hábiles te enviamos 3 ideas pensadas para tu negocio.',
      },
    ],
    relatedRoutes: ['servicios', 'precios', 'intencionComparativa', 'nichoRestaurantes', 'nichoBelleza'],
    waMessage:
      'Hola, leí su comparativa de TikTok vs Instagram Reels en México y quiero ver qué estrategia me recomiendan para mi negocio [REF:blog-tiktok-reels-mx]',
    waCta: 'Consultar estrategia para mi negocio por WhatsApp',
  },
];
