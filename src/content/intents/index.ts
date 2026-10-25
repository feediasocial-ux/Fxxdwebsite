import type { CountryKey } from '@/lib/i18n';
import type { IntentId, IntentLandingData } from './types.ts';
import { intentsES } from './es.ts';
import { intentsMX } from './mx.ts';

export const ALL_INTENTS: IntentLandingData[] = [...intentsES, ...intentsMX];

const BY_COUNTRY: Record<CountryKey, IntentLandingData[]> = {
  es: intentsES,
  mx: intentsMX,
};

export function getIntentsByCountry(country: CountryKey): IntentLandingData[] {
  return BY_COUNTRY[country];
}

export function getIntent(country: CountryKey, id: IntentId): IntentLandingData | undefined {
  return BY_COUNTRY[country].find((i) => i.id === id);
}

export type * from './types.ts';
