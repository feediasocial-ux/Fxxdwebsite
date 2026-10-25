# AGENTS.md — Reglas permanentes de Feediasocial

- **Stack:** Astro (static output) + TypeScript + Tailwind CSS v4. Cero frameworks JS en el cliente salvo que sea imprescindible. Islas interactivas solo con `client:visible` o `client:idle`.
- **Copy por locale:** Todo el copy vive en archivos de datos por locale (`src/content/es-ES`, `src/content/es-MX`). Nunca textos hardcodeados en componentes.
- **Localización nativa:** Nunca traducir: localizar. España (`es-ES`): "móvil", "vídeo", tú/vosotros, precios en €. México (`es-MX`): "celular", "video", tú/ustedes, precios en MXN. Ver `GLOSSARY.md`.
- **Veracidad estricta:** Prohibido inventar testimonios, cifras, logos de clientes, casos de éxito, reseñas, direcciones o números de clientes. Si falta un dato real, usa un placeholder visible `[PENDIENTE: ...]` y lístalo en `TODO.md`. Las imágenes generadas con IA son escenas ilustrativas registradas en `src/assets/photos/CREDITS.md` y nunca deben presentarse como equipo o casos reales.
- **Promesa honesta:** Prohibido prometer seguidores, ventas o viralidad. Prometemos sistema y constancia.
- **Originalidad visual:** Prohibido copiar layouts, assets, textos o marcas de los sitios de referencia. Se toma el lenguaje visual, no el diseño.
- **SEO y rendimiento:** Cada página nueva debe cumplir la checklist SEO y el presupuesto de rendimiento (LCP < 2,5 s, INP < 200 ms, CLS < 0,1, JS < 70 KB gzip, Lighthouse móvil ≥ 95 / 100 / 100 / 100).
- **Accesibilidad:** Contraste WCAG AA, foco visible, `prefers-reduced-motion`, HTML semántico, un solo H1 por página.
- **Flujo por fases:** Commits pequeños y descriptivos. Después de cada fase: ejecuta build, Lighthouse CI (móvil) y valida hreflang/sitemaps; reporta resultados.
