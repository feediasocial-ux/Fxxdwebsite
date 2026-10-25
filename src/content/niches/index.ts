import type { CountryKey } from '@/lib/i18n';
import type { NicheId, NicheLandingData } from './types.ts';
import { nichesES } from './es.ts';
import { nichesMX } from './mx.ts';

export const ALL_NICHES: NicheLandingData[] = [...nichesES, ...nichesMX];

const BY_COUNTRY: Record<CountryKey, NicheLandingData[]> = {
  es: nichesES,
  mx: nichesMX,
};

export function getNichesByCountry(country: CountryKey): NicheLandingData[] {
  return BY_COUNTRY[country];
}

export function getNiche(country: CountryKey, id: NicheId): NicheLandingData | undefined {
  return BY_COUNTRY[country].find((n) => n.id === id);
}

export type * from './types.ts';
