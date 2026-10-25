# MEASUREMENT.md — Guía de Analítica, Search Console y Embudo (Feediasocial)

> **Regla de privacidad obligatoria:** Todo el seguimiento analítico y publicitario respeta **Google Consent Mode v2** con estado por defecto `denied` (`analytics_storage: 'denied'`, `ad_storage: 'denied'`, `ad_user_data: 'denied'`, `ad_personalization: 'denied'`). Ni GA4 ni Microsoft Clarity inyectan su script en el navegador hasta que el usuario acepta la categoría `analytics` en el banner de cookies (`src/components/CookieBanner.astro` + `src/lib/analytics.ts`).

---

## 1. Variables de entorno (`.env` / GitHub Secrets)

Configura estas variables en el repositorio de GitHub (**Settings → Secrets and variables → Actions → Variables**):

| Variable | Descripción | Valor actual / Ejemplo |
|---|---|---|
| `SITE_URL` | Dominio canónico de producción | `https://feediasocial.com` |
| `PUBLIC_WA_NUMBER_MX` | Número de WhatsApp para `/mx/` (solo dígitos con prefijo de país) | `525534402921` |
| `PUBLIC_WA_NUMBER_ES` | Número de WhatsApp para `/es/` (mientras no exista línea `+34`, usa el de MX) | `525534402921` `[PENDIENTE: número +34]` |
| `PUBLIC_GA4_ID` | ID de flujo de datos de Google Analytics 4 | `G-XXXXXXXXXX` `[PENDIENTE]` |
| `PUBLIC_CLARITY_ID` | ID de proyecto de Microsoft Clarity | `xxxxxxxxxx` `[PENDIENTE]` |
| `PUBLIC_FORM_ENDPOINT` | Endpoint de Formspree / Web3Forms para el formulario de mini-auditoría | `https://formspree.io/f/xxxxxx` `[PENDIENTE]` |

---

## 2. Google Analytics 4 (GA4)

### 2.1 Eventos personalizados instrumentados en `src/lib/analytics.ts`

Todos los eventos se envían automáticamente cuando `analytics_storage` pasa a `granted`:

| Nombre del evento | Cuándo se dispara | Parámetros enviados | ¿Marcar como Evento Clave (Conversión)? |
|---|---|---|---|
| `click_whatsapp` | Clic en cualquier botón de WhatsApp (header, hero, tarjetas de paquetes, Plan B, botón flotante móvil, CTA final) | `country` (`es` \| `mx`), `page` (ej. `home`, `nicho-clinicas`, `intencion-precio`), `placement` (`hero`, `float`, `pricing-crecimiento`, etc.), `niche`, `utm` | **SÍ (Conversión principal)** |
| `form_submit` | Envío del formulario corto de mini-auditoría gratuita | `country` (`es` \| `mx`), `page`, `method` (`endpoint` \| `whatsapp_fallback`), `utm` | **SÍ (Conversión secundaria)** |
| `view_pricing` | Cuando la sección `#paquetes` entra al 35 % en el viewport del usuario | `country`, `page` | No (micro-conversión de embudo) |
| `scroll_75` | Cuando el usuario supera el 75 % de lectura vertical de una página | `country`, `page` | No (compromiso de lectura) |
| `select_country` | Cuando el usuario elige o cambia de país en `/` o en el `CountrySwitcher` del header/footer | `country` (`es` \| `mx`), `from_page` | No |

### 2.2 Dimensiones personalizadas a dar de alta en GA4
En **Administrar → Visualización de datos → Definiciones personalizadas → Crear dimensión personalizada** (ámbito: **Evento**):
1. `country` (Parámetro: `country`) — Permite separar España (`es`) y México (`mx`) en todos los informes.
2. `page` (Parámetro: `page`) — Identificador limpio de plantilla/página (`home`, `precios`, `nicho-clinicas`, etc.).
3. `placement` (Parámetro: `placement`) — Permite saber qué ubicación de botón convierte más (`hero`, `float`, `pricing-crecimiento`, `final-cta`).
4. `niche` (Parámetro: `niche`) — Permite comparar la conversión entre `clinicas`, `restaurantes`, `inmobiliarias` y `gimnasios`.

---

## 3. Microsoft Clarity (Mapas de calor y grabaciones sin PII)

1. Crea un proyecto en [clarity.microsoft.com](https://clarity.microsoft.com) para `https://feediasocial.com`.
2. Activa **Masking → Balanced / Strict** para ocultar automáticamente cualquier texto que el usuario escriba en los campos del formulario (`name`, `instagram`, `whatsapp`).
3. Copia el ID del proyecto en `PUBLIC_CLARITY_ID`.
4. Qué revisar cada dos semanas en Clarity:
   - **Rage clicks / Dead clicks** en móvil (390 px) en las landings de nicho.
   - Profundidad de scroll hasta la tabla comparativa en `/es/precios/`, `/mx/precios/` y las 6 landings de intención comercial.
   - Interacción con las preguntas frecuentes (`<details>`) antes de pulsar WhatsApp.

---

## 4. Google Search Console (Propiedad de dominio + `/es/` y `/mx/`)

Para aislar el rendimiento orgánico de España y México sin mezclar impresiones ni CTR:

1. **Propiedad de Dominio (visión global):**
   - Añade `feediasocial.com` mediante verificación DNS TXT en el proveedor de dominio.
   - Envía el índice de sitemaps: `https://feediasocial.com/sitemap-index.xml`.
2. **Propiedad de Prefijo de URL para España (`/es/`):**
   - Añade `https://feediasocial.com/es/` (se verifica automáticamente al tener la propiedad de dominio).
   - Envía el sitemap exclusivo de España: `https://feediasocial.com/es/sitemap.xml`.
3. **Propiedad de Prefijo de URL para México (`/mx/`):**
   - Añade `https://feediasocial.com/mx/`.
   - Envía el sitemap exclusivo de México: `https://feediasocial.com/mx/sitemap.xml`.

---

## 5. Cuadro de mando mensual en Looker Studio (Embudo de 1 página)

Conecta dos fuentes de datos gratuitas en [lookerstudio.google.com](https://lookerstudio.google.com): **Google Search Console** y **Google Analytics 4**.

### Estructura del informe (1 sola página con filtro superior por País `/es/` vs `/mx/`):

1. **Fila 1 · Visibilidad orgánica (Search Console):**
   - Impresiones totales (`es` vs `mx`).
   - Clics orgánicos y CTR medio.
   - Posición media para las páginas de nicho (`clinicas`, `restaurantes`, `inmobiliarias`, `gimnasios`) y las 3 páginas de intención comercial (`precio`, `comparativa`, `sin-camara`).
2. **Fila 2 · Embudo de comportamiento (GA4):**
   - Sesiones totales → Eventos `scroll_75` → Eventos `view_pricing` → Conversiones (`click_whatsapp` + `form_submit`).
3. **Fila 3 · Qué páginas traen clientes reales (Tabla GA4):**
   - Dimensión: `page` y `placement`.
   - Métricas: Sesiones, `click_whatsapp`, `form_submit`, Tasa de conversión a contacto (`(click_whatsapp + form_submit) / Sesiones`).
4. **Criterio de decisión mensual:**
   - Si una landing de nicho tiene **> 200 sesiones** y **`view_pricing` alto** pero **`click_whatsapp` < 1,5 %**, revisar la oferta de entrada o las 3 ideas de reels de muestra de ese nicho.
   - Si una consulta en Search Console tiene **> 500 impresiones** en posición 6–15, ampliar la sección de respuesta directa (primeras 100 palabras) o añadir una FAQ específica en esa landing.
