import type { CountryKey } from './i18n';

/**
 * Enlace centralizado para agendar llamada de descubrimiento de 15 min (Calendly).
 * Se configura mediante `PUBLIC_CALENDLY_URL` en `.env` (fallback limpio hasta recibir el enlace definitivo).
 */
const DEFAULT_CALENDLY_URL = 'https://calendly.com/feediasocial/15min';

export function getCalendlyBaseUrl(): string {
  const envUrl = import.meta.env.PUBLIC_CALENDLY_URL as string | undefined;
  return envUrl && envUrl.trim().length > 0 ? envUrl.trim() : DEFAULT_CALENDLY_URL;
}

export interface BookCallLinkOpts {
  country: CountryKey;
  page: string;
  placement?: string;
  niche?: string;
}

export function bookCallLink({ country, page, placement = 'cta', niche }: BookCallLinkOpts): string {
  const base = getCalendlyBaseUrl();
  try {
    const url = new URL(base);
    url.searchParams.set('utm_source', 'feediasocial_web');
    url.searchParams.set('utm_medium', 'book_call_15m');
    url.searchParams.set('utm_campaign', `${country}_${page}`);
    url.searchParams.set('utm_content', niche ? `${placement}_${niche}` : placement);
    return url.toString();
  } catch {
    return base;
  }
}
