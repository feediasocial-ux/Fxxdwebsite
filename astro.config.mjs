// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL se puede sobrescribir por variable de entorno (p. ej. previews).
const SITE_URL = process.env.SITE_URL || 'https://feediasocial.com';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // CSS crítico pequeño en línea, el resto enlazado.
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
