import type { CountryKey } from '@/lib/i18n';
import type { RouteKey } from '@/lib/routes';

export type NicheId = 'clinicas' | 'restaurantes' | 'inmobiliarias' | 'gimnasios';

export type NichePhotoKey =
  | 'clinicas-es'
  | 'clinicas-mx'
  | 'restaurantes-es'
  | 'restaurantes-mx'
  | 'inmobiliarias-es'
  | 'inmobiliarias-mx'
  | 'gimnasios-es'
  | 'gimnasios-mx';

export type NicheLandingData = {
  id: NicheId;
  country: CountryKey;
  slug: string;
  routeKey: RouteKey;
  /** Tema visual: 'sober' para clínicas (más crema y tinta, burdeos, sin pegatinas decorativas), 'vivid' para el resto. */
  theme: 'vivid' | 'sober';
  photoKey: NichePhotoKey;
  photoAlt: string;
  /** Nombre corto para migas de pan y tarjetas de relacionados. */
  shortTitle: string;
  cardSummary: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  /** Respuesta corta y directa en las primeras ~100 palabras. */
  intro: string;
  /** Vocabulario propio del nicho y del país presente en la landing. */
  nicheVocabulary: [string, string, string, string, string, string];
  /** 3 dolores específicos del nicho en ese país. */
  painsTitle: string;
  pains: [
    { title: string; text: string },
    { title: string; text: string },
    { title: string; text: string },
  ];
  /** 3 objeciones reales con respuesta directa. */
  objectionsTitle: string;
  objections: [
    { objection: string; answer: string },
    { objection: string; answer: string },
    { objection: string; answer: string },
  ];
  /** Ideas de reels de ejemplo reales para ese nicho (elemento único 1). */
  reelIdeasTitle: string;
  reelIdeasSubtitle: string;
  reelIdeas: [
    { title: string; hook: string; visual: string; goal: string },
    { title: string; hook: string; visual: string; goal: string },
    { title: string; hook: string; visual: string; goal: string },
  ];
  /** Ejemplo de calendario mensual de 4 semanas para ese nicho (elemento único 2). */
  calendarTitle: string;
  calendarSubtitle: string;
  sampleCalendar: [
    { week: string; focus: string; pieces: [string, string, string] },
    { week: string; focus: string; pieces: [string, string, string] },
    { week: string; focus: string; pieces: [string, string, string] },
    { week: string; focus: string; pieces: [string, string, string] },
  ];
  /** FAQ propias del nicho (entre 5 y 8 preguntas). */
  faqTitle: string;
  faqs: { q: string; a: string }[];
  /** Mensaje de WhatsApp precargado (se le concatena el código de origen). */
  waMessage: string;
  waCta: string;
};
