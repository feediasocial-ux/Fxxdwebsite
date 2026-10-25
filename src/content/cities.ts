import type { CountryKey } from '@/lib/i18n';

/**
 * REGLA ANTI-DOORWAY (OBLIGATORIA):
 * Prohibido generar páginas por ciudad en serie con texto casi idéntico.
 * El sistema queda preparado a nivel de tipos y validador, pero DESACTIVADO (`CITY_LANDINGS_ENABLED = false`).
 * Una página de ciudad solo puede activarse si aporta datos reales, ejemplos locales verificables y clientes reales con permiso.
 */
export const CITY_LANDINGS_ENABLED = false;

export type CityLandingData = {
  enabled: boolean;
  country: CountryKey;
  citySlug: string;
  cityName: string;
  /** Datos locales verificables obligatorios antes de publicar */
  verifiedLocalInsights: string[];
  /** Casos reales en esa ciudad con permiso explícito */
  verifiedLocalCases: { businessName: string; permissionGranted: boolean; summary: string }[];
};

export const CITY_LANDINGS: CityLandingData[] = [];

export function getActiveCityLandings(): CityLandingData[] {
  if (!CITY_LANDINGS_ENABLED) return [];
  return CITY_LANDINGS.filter(
    (c) =>
      c.enabled &&
      c.verifiedLocalInsights.length >= 3 &&
      c.verifiedLocalCases.length >= 1 &&
      c.verifiedLocalCases.every((k) => k.permissionGranted)
  );
}
