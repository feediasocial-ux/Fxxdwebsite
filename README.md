# Feediasocial (`feediasocial.com`) — Web España (`/es/`) + México (`/mx/`)

Sitio estático ultrarrápido construido con **Astro + TypeScript + Tailwind CSS v4**, sin frameworks JS en el cliente y con todo el copy localizado por país.

## Requisitos
- Node.js `>= 20` (probado en Node 25 / npm 11)

## Comandos principales

```bash
npm install            # Instala dependencias
npm run dev            # Servidor local en http://localhost:4321
npm run check          # Verificación de tipos (astro check + TypeScript strict)
npm run build          # Genera el sitio estático en ./dist
npm run preview        # Sirve ./dist localmente
npm run validate       # Valida hreflang, canonical, 1×H1, alt de imágenes y contraste AA
```

## Estructura del repositorio

```text
/src
  /assets/photos       # Escenas editoriales ilustrativas (AVIF/WebP en build) + CREDITS.md
  /content             # Copy localizado: es-ES/, es-MX/, pricing.ts, types.ts
  /components          # Sistema de diseño: Hero, Marquee, Sticker, PackageCard, NicheCard, FAQ...
  /layouts             # BaseLayout.astro (SEO, hreflang, JSON-LD, preload de fuentes)
  /pages               # / (selector x-default), /es/, /mx/, /styleguide/ (noindex), sitemaps
  /lib                 # seo.ts, i18n.ts, routes.ts, whatsapp.ts, sitemap.ts
  /styles              # global.css (tokens CSS en :root + tema sober)
/scripts               # check-hreflang.ts, check-contrast.ts, screenshots.ts
/public                # CNAME, robots.txt, favicon.svg
```

## Despliegue en GitHub Pages
El workflow `.github/workflows/deploy.yml` compila y publica automáticamente `./dist` en GitHub Pages con dominio personalizado `feediasocial.com` (`public/CNAME`). Configura las variables públicas en **Settings → Secrets and variables → Actions → Variables** según `.env.example`.
