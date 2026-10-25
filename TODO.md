# TODO — Pendientes reales y validaciones de negocio

> Regla del proyecto: **prohibido inventar datos reales**. Todo elemento pendiente de validación o material real del equipo se lista aquí y lleva un marcador `[PENDIENTE: ...]` en el código.

## 1. Identidad, contacto y negocio
- [ ] `[PENDIENTE: logo definitivo]` Sustituir el logotipo tipográfico provisional (`src/components/Logo.astro`) cuando exista archivo vectorial definitivo.
- [ ] `[PENDIENTE: número español]` Añadir un número de WhatsApp con prefijo `+34` en `PUBLIC_WA_NUMBER_ES` (actualmente usa `+52 55 3440 2921` para ambos países).
- [ ] `[PENDIENTE: validar precios definitivos]` Confirmar los importes de Esencial (349 € / 3.900 MXN), Crecimiento (649 € / 7.500 MXN) y Pro (990 € / 12.900 MXN) en `src/content/pricing.ts`.
- [ ] `[PENDIENTE: definir política de permanencia]` Confirmar si todos los paquetes son mes a mes sin permanencia/plazo forzoso.
- [ ] `[PENDIENTE: perfiles de redes]` Añadir URLs reales de Instagram/TikTok/LinkedIn en `BRAND.sameAs` (`src/lib/seo.ts`).

## 2. Fiscal y legal
- [ ] `[PENDIENTE: razón social]` Nombre o razón social, NIF/RFC, domicilio fiscal y correo legal para Aviso Legal y Privacidad.
- [ ] `[PENDIENTE: facturación/CFDI]` Confirmar con contador en México el desglose de IVA y emisión de CFDI.
- [ ] `[PENDIENTE: confirmar con asesoría fiscal]` Confirmar régimen de IVA/operación intracomunitaria o exterior para clientes de España.
- [ ] `[PENDIENTE: revisión legal]` Revisar textos de RGPD/LSSI (`/es/`) y de la nueva Ley Federal de Protección de Datos Personales en Posesión de los Particulares vigente desde marzo de 2025 (`/mx/`).
- [ ] `[PENDIENTE: verificar Kit Digital]` No publicar páginas ni promesas sobre Kit Digital en España sin verificar vigencia y requisitos actuales.

## 3. Fotos y pruebas reales (no usar IA como prueba)
- [ ] `[FOTO: fundadores en acción]` Sustituir placeholders de las dos personas fundadoras en Hero y Sobre Nosotros por fotos reales y nombres/bios reales.
- [ ] `[CAPTURA: reel propio de muestra]` y `[PENDIENTE: aportar ejemplo propio]` Añadir capturas reales de calendarios en Metricool y guiones propios del equipo.
- [ ] **6 fotos ilustrativas IA pendientes por cuota del modelo** (programado reintento automático):
  - `src/assets/photos/proceso-03-edicion.jpg`
  - `src/assets/photos/proceso-grabacion-checklist.jpg`
  - `src/assets/photos/servicios-tendencias.jpg`
  - `src/assets/photos/error-404.jpg`
  - `src/assets/photos/niches/restaurantes-mx.jpg`
  - `src/assets/photos/niches/gimnasios-mx.jpg`
- [ ] Sustituir progresivamente las fotos ilustrativas IA (`src/assets/photos/CREDITS.md`) por fotografía real del equipo y de clientes con permiso.

## 4. Formularios y medición
- [ ] `[PENDIENTE: crear cuenta Formspree y pegar endpoint]` Configurar `PUBLIC_FORM_ENDPOINT` en GitHub Actions Variables.
- [ ] `[PENDIENTE: GA4_ID]` Configurar `PUBLIC_GA4_ID` (`G-XXXXXXXXXX`).
- [ ] `[PENDIENTE: CLARITY_ID]` Configurar `PUBLIC_CLARITY_ID`.
- [ ] `[PENDIENTE: GSC_VERIFICATION]` Verificar propiedades `/es/` y `/mx/` en Google Search Console.
