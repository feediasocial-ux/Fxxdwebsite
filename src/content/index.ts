import type { CountryKey } from '@/lib/i18n';
import type { CorePagesCopy, UiCopy } from './types';
import { ui as esES } from './es-ES/ui';
import { ui as esMX } from './es-MX/ui';
import { pages as pagesES } from './es-ES/pages';
import { pages as pagesMX } from './es-MX/pages';

const COPY: Record<CountryKey, UiCopy> = { es: esES, mx: esMX };
const PAGES: Record<CountryKey, CorePagesCopy> = { es: pagesES, mx: pagesMX };

export function getUi(country: CountryKey): UiCopy {
  return COPY[country];
}

export function getCorePages(country: CountryKey): CorePagesCopy {
  return PAGES[country];
}

/** Copy neutro de la raíz (selector de país). */
export const rootCopy = {
  title: 'Feediasocial · Contenido para redes en España y México',
  description:
    'Agencia de contenido para redes sociales: guiones, tendencias, edición y calendario cada mes. Elige tu país para ver servicios y precios.',
  h1: 'Elige tu país',
  intro: 'Mismo equipo, precios y forma de hablar de cada país. Elige el tuyo:',
  countries: {
    es: { name: 'España', detail: 'Precios en € · móvil, vídeo y vosotros' },
    mx: { name: 'México', detail: 'Precios en MXN · celular, video y ustedes' },
  },
  suggestion: 'Tu última visita',
  note: 'No te redirigimos automáticamente: tú eliges.',
};
