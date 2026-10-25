import type { CountryKey } from '@/lib/i18n';
import type { CorePagesCopy, UiCopy } from './types.ts';
import type { Phase4Copy } from './phase4-types.ts';
import { ui as esES } from './es-ES/ui.ts';
import { ui as esMX } from './es-MX/ui.ts';
import { pages as pagesES } from './es-ES/pages.ts';
import { pages as pagesMX } from './es-MX/pages.ts';
import { phase4ES } from './es-ES/phase4.ts';
import { phase4MX } from './es-MX/phase4.ts';

const COPY: Record<CountryKey, UiCopy> = { es: esES, mx: esMX };
const PAGES: Record<CountryKey, CorePagesCopy> = { es: pagesES, mx: pagesMX };
const PHASE4: Record<CountryKey, Phase4Copy> = { es: phase4ES, mx: phase4MX };

export function getUi(country: CountryKey): UiCopy {
  return COPY[country];
}

export function getCorePages(country: CountryKey): CorePagesCopy {
  return PAGES[country];
}

export function getPhase4(country: CountryKey): Phase4Copy {
  return PHASE4[country];
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

export const notFoundCopy = {
  title: '404 · Esta toma se nos ha caído del guion | Feediasocial',
  description: 'La página que buscas no existe o ha cambiado de ruta. Vuelve al inicio de España o México.',
  badge: 'Error 404 · Toma descartada',
  h1: 'Esta página se ha quedado fuera del montaje final',
  intro:
    'La dirección que has abierto no existe o ha cambiado de ubicación. Elige tu país para volver al calendario principal o escríbenos por WhatsApp si buscabas algo concreto.',
  ctaEs: 'Ir a España (/es/)',
  ctaMx: 'Ir a México (/mx/)',
  ctaRoot: 'Selector de país (/)',
  photoAlt: 'Ilustración editorial de un trípode y teléfono móvil en pausa sobre fondo crema y coral',
};
