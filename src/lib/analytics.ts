/**
 * Contratos de eventos de analítica (GA4 + Consent Mode v2 + Clarity).
 * La ejecución en el navegador se inyecta de forma ligera en BaseLayout.astro
 * y NO carga ningún script de terceros antes del consentimiento explícito.
 */
export const CONSENT_COOKIE = 'fs_consent_v2';
export const UTM_STORAGE_KEY = 'fs_utm_params';

export type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  ts: number;
};

export type AnalyticsEventMap = {
  click_whatsapp: {
    page: string;
    country: string;
    niche?: string;
    placement: string;
  };
  form_submit: {
    page: string;
    country: string;
  };
  scroll_75: {
    page: string;
    country: string;
  };
  select_country: {
    from_page: string;
    to_country: string;
  };
  view_pricing: {
    page: string;
    country: string;
  };
};
