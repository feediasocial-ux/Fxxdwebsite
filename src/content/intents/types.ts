import type { CountryKey } from '@/lib/i18n';
import type { RouteKey } from '@/lib/routes';

export type IntentId = 'precio' | 'comparativa' | 'sin-camara';

export type IntentLandingData = {
  id: IntentId;
  country: CountryKey;
  slug: string;
  routeKey: Extract<RouteKey, 'intencionPrecio' | 'intencionComparativa' | 'intencionSinCamara'>;
  shortTitle: string;
  cardSummary: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  /** Respuesta directa en las primeras 100 palabras. */
  intro: string;
  pendingNote?: string;
  comparisonTable: {
    title: string;
    subtitle: string;
    headers: [string, string, string, string];
    rows: {
      label: string;
      col1: string;
      col2: string;
      col3: string;
    }[];
  };
  pillarsTitle: string;
  pillars: [
    { badge: string; title: string; text: string; bullets: string[]; color: 'coral' | 'lemon' | 'sky' | 'cream-deep' },
    { badge: string; title: string; text: string; bullets: string[]; color: 'coral' | 'lemon' | 'sky' | 'cream-deep' },
    { badge: string; title: string; text: string; bullets: string[]; color: 'coral' | 'lemon' | 'sky' | 'cream-deep' },
  ];
  whenToChooseTitle: string;
  whenToChoose: [
    { profile: string; recommendation: string; honestVerdict: string },
    { profile: string; recommendation: string; honestVerdict: string },
    { profile: string; recommendation: string; honestVerdict: string },
  ];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  waMessage: string;
  waCta: string;
};
