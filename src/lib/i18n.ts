/**
 * Configuración de países/locales. Para añadir un país: nueva entrada aquí,
 * carpeta de copy en src/content/<locale>/ y rutas en routes.ts.
 */
export const COUNTRIES = {
  es: {
    key: 'es',
    locale: 'es-ES',
    hreflang: 'es-ES',
    ogLocale: 'es_ES',
    basePath: '/es/',
    currency: 'EUR',
    flag: '🇪🇸',
  },
  mx: {
    key: 'mx',
    locale: 'es-MX',
    hreflang: 'es-MX',
    ogLocale: 'es_MX',
    basePath: '/mx/',
    currency: 'MXN',
    flag: '🇲🇽',
  },
} as const;

export type CountryKey = keyof typeof COUNTRIES;
export type Country = (typeof COUNTRIES)[CountryKey];
export const COUNTRY_KEYS = Object.keys(COUNTRIES) as CountryKey[];

/** Cookie propia para *sugerir* país (nunca para redirigir). */
export const COUNTRY_COOKIE = 'fs_country';

export function isCountryKey(v: string | undefined | null): v is CountryKey {
  return !!v && v in COUNTRIES;
}

/** Deduce el país a partir de una ruta (/es/..., /mx/...). */
export function countryFromPath(pathname: string): CountryKey | null {
  const seg = pathname.split('/').filter(Boolean)[0];
  return isCountryKey(seg) ? seg : null;
}

export function formatPrice(amount: number, country: CountryKey): string {
  const c = COUNTRIES[country];
  return new Intl.NumberFormat(c.locale, {
    style: 'currency',
    currency: c.currency,
    maximumFractionDigits: 0,
    currencyDisplay: c.currency === 'MXN' ? 'code' : 'symbol',
  }).format(amount);
}
