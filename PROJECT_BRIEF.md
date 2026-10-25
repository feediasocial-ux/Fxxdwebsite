# PROJECT BRIEF — Feediasocial (España + México)

## 1. Rol y objetivo
Sitio web de **Feediasocial** (`https://feediasocial.com`), agencia de contenido para redes sociales que opera 100 % en remoto para **España (`/es/`) y México (`/mx/`)**, con arquitectura lista para añadir más países después.

- **Objetivo de negocio:** 6–10 clientes recurrentes en 6 meses.
- **Conversión principal:** clic a WhatsApp (`+52 55 3440 2921`) con mensaje precargado y código de origen (`ref: mx-home-hero`, etc.).
- **Conversión secundaria:** formulario corto de mini-auditoría gratuita (nombre, Instagram, WhatsApp, país).

## 2. Oferta y precios iniciales (`src/content/pricing.ts`)
**Promesa:** *"Tu contenido para redes, listo cada mes: guiones, tendencias, edición y calendario. Tú solo grabas con el móvil/celular."*

| Paquete | Incluye | España | México |
|---|---|---|---|
| **Esencial** | 8 posts + 8 stories/historias + 2 reels con guion y edición, calendario en Metricool | 349 €/mes | 3.900 MXN/mes |
| **Crecimiento** | 12 posts + 12 stories/historias + 4 reels con guion y edición, informe/reporte, 1 llamada/mes | 649 €/mes | 7.500 MXN/mes |
| **Pro** | Todo Crecimiento + 8 reels, estrategia de anuncios, gestión de comentarios | 990 €/mes | 12.900 MXN/mes |

- Nota obligatoria: *"Inversión en anuncios no incluida"*.
- En México: *"Precios en MXN, IVA según corresponda"* (`[PENDIENTE: facturación/CFDI]`).
- **Plan B sin cámara:** carruseles y gráficos con IA para clientes que no graban.

## 3. Arquitectura de URLs e internacionalización
- Dominio único: `https://feediasocial.com`.
- Raíz `/` = selector ligero de país (`hreflang="x-default"`), sin redirección automática por IP ni idioma; cookie `fs_country` solo para sugerir visualmente.
- Carpetas `/es/` (`es-ES`) y `/mx/` (`es-MX`) con hreflang recíproco, canonical autorreferenciado y sitemaps separados (`/es/sitemap.xml`, `/mx/sitemap.xml`, `/sitemap-index.xml`).

## 4. Tokens de diseño y presupuesto de rendimiento
- `--cream: #FFF6E5`, `--ink: #1B1B1F`, `--coral: #FF5A36`, `--lemon: #E8F05A`, `--sky: #BFE3FF`, `--maroon: #5A2530`.
- Tipografía auto-alojada (`woff2`, `font-display: swap`): **Anton** (display, preload) + **DM Sans Variable** (texto).
- Adaptación por nicho con `data-theme="vivid | sober"`.
- Presupuesto: LCP < 2,5 s, INP < 200 ms, CLS < 0,1, Hero ≤ 150 KB AVIF/WebP, JS < 70 KB gzip, Lighthouse móvil ≥ 95 / 100 / 100 / 100.
