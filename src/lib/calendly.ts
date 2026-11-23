import type { CountryKey } from './i18n';
import { BUSINESS_CONFIG } from '@/content/business-config';

/**
 * Enlace centralizado para agendar llamada de descubrimiento de 15 min (Calendly).
 * Se configura mediante `PUBLIC_CALENDLY_URL` o en `src/content/business-config.ts`.
 */
export function getCalendlyBaseUrl(): string {
  return BUSINESS_CONFIG.calendlyUrl;
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
