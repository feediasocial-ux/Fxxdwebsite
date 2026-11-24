# TODO — Pendientes reales y validaciones de negocio

> Regla del proyecto: **prohibido inventar datos reales**. Todo elemento pendiente de validación o material real del equipo se lista aquí y lleva un marcador `[PENDIENTE: ...]` en el código.

## 1. Identidad, contacto y negocio
- [ ] `[PENDIENTE: logo definitivo]` Sustituir el logotipo tipográfico provisional (`src/components/Logo.astro`) cuando exista archivo vectorial definitivo.
- [ ] `[PENDIENTE: número español]` Añadir un número de WhatsApp con prefijo `+34` en `PUBLIC_WA_NUMBER_ES` (actualmente usa `+52 55 3440 2921` para ambos países).
- [ ] `[PENDIENTE: configurar URL definitiva de Calendly en PUBLIC_CALENDLY_URL]` Sustituir el enlace provisional (`https://calendly.com/feediasocial/15min`) en `.env` / GitHub Actions Variables (`PUBLIC_CALENDLY_URL`) cuando el usuario facilite su enlace definitivo de Calendly.
- [x] `[PENDIENTE: validar precios definitivos]` Precios unificados y validados: Esencial (300 € / $6,300 MXN), Crecimiento (450 € / $9,450 MXN) y Pro (650 € / $13,650 MXN) en `src/content/pricing.ts`.
- [ ] `[PENDIENTE: definir política de permanencia]` Confirmar si todos los paquetes son mes a mes sin permanencia/plazo forzoso.
- [ ] `[PENDIENTE: perfiles de redes]` Añadir URLs reales de Instagram/TikTok/LinkedIn en `BRAND.sameAs` (`src/lib/seo.ts`).

## 2. Fiscal, legal y mercado
- [ ] `[PENDIENTE: razón social]` Nombre o razón social, NIF/CIF (España) y RFC (México), domicilio fiscal y correo legal (`hola@feediasocial.com`, `privacidad@feediasocial.com`) en `/es/aviso-legal/`, `/es/privacidad/`, `/mx/aviso-legal/` y `/mx/aviso-de-privacidad/`.
- [ ] `[PENDIENTE: facturación/CFDI]` Confirmar con contador en México el desglose de IVA y emisión de CFDI (`src/content/es-MX/ui.ts`, `src/content/es-MX/pages.ts`, `src/content/intents/mx.ts`).
- [ ] `[PENDIENTE: confirmar con asesoría fiscal]` Confirmar régimen de IVA/operación intracomunitaria o exterior para clientes de España (`src/content/es-ES/ui.ts`, `src/content/es-ES/pages.ts`, `src/content/intents/es.ts`).
- [ ] `[PENDIENTE: revisión legal]` Revisión final con abogado de los textos de RGPD/LSSI (`/es/`) y del Aviso de Privacidad Integral actualizado al marco mexicano 2025 (`/mx/`).
- [ ] `[PENDIENTE: validar fuente de mercado]` Confirmar con estudio sectorial las horquillas orientativas de tarifas de mercado en `/es/precio-community-manager/` y `/mx/precio-manejo-redes-sociales/`.
- [ ] `[PENDIENTE: verificar Kit Digital]` No publicar páginas ni promesas sobre Kit Digital en España sin verificar vigencia y requisitos actuales.

## 3. Fotos, equipo y pruebas reales (prohibido usar IA como prueba)
- [ ] `[FOTO: fundadores en acción]` y `[PENDIENTE: Nombre fundadora/or 1 y 2]` Sustituir los placeholders en `Hero.astro`, `HomePage.astro` y `SobreNosotrosPage.astro` por fotos reales, nombres y biografías de las dos personas fundadoras.
- [ ] `[PENDIENTE: aportar capturas reales de Metricool y casos piloto con permiso]` Añadir capturas reales de calendarios en Metricool y documentar los primeros casos piloto reales con autorización escrita del cliente en `/es/como-trabajamos/` y `/mx/como-trabajamos/`.
- [ ] Sustituir progresivamente las escenas editoriales ilustrativas (`src/assets/photos/CREDITS.md`) por fotografía propia del equipo.
- [ ] `[PENDIENTE: vídeo demo AI Twin / Avatar 9:16]` Subir MP4 vertical (15–20 s) en `public/videos/demo-ai-twin.mp4` para reemplazar el `VideoPlaceholder` en `/es/contenido-redes-sin-salir-en-camara/` y `/mx/contenido-redes-sin-salir-en-camara/`.
- [ ] `[PENDIENTE: vídeo showreel Reels 9:16]` Subir MP4 vertical (20–30 s) en `public/videos/showreel-reels.mp4` para reemplazar el `VideoPlaceholder` en `/es/como-trabajamos/` y `/mx/como-trabajamos/`.

## 4. Formularios, analítica y comprobación manual en dispositivos reales
- [ ] `[PENDIENTE: crear cuenta Formspree y pegar endpoint]` Configurar `PUBLIC_FORM_ENDPOINT` en GitHub Actions Variables.
- [ ] `[PENDIENTE: GA4_ID]` Configurar `PUBLIC_GA4_ID` (`G-XXXXXXXXXX`) y registrar las dimensiones personalizadas (`country`, `page`, `placement`, `niche`) según `MEASUREMENT.md`.
- [ ] `[PENDIENTE: CLARITY_ID]` Configurar `PUBLIC_CLARITY_ID` con enmascaramiento de campos activo.
- [ ] `[PENDIENTE: GSC_VERIFICATION]` Verificar propiedades de dominio, `/es/` y `/mx/` en Google Search Console y enviar `/sitemap-index.xml`, `/es/sitemap.xml` y `/mx/sitemap.xml`.
- [ ] `[PENDIENTE: prueba manual en iPhone y Android reales]` Abrir la web publicada desde un iPhone (Safari iOS) y un Android (Chrome), pulsar los botones de WhatsApp en `/es/` y `/mx/` y confirmar que abre la app de WhatsApp con el mensaje precargado y el código `(ref: ...)` correcto.
