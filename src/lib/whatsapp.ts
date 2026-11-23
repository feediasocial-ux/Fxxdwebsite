import { COUNTRIES, type CountryKey } from './i18n';
import { BUSINESS_CONFIG } from '@/content/business-config';

/** Números por país desde `BUSINESS_CONFIG` (solo dígitos). */
const NUMBERS: Record<CountryKey, string> = BUSINESS_CONFIG.whatsappNumbers;

export type WaOrigin = {
  country: CountryKey;
  /** Página de origen, p. ej. "home", "clinicas" */
  page: string;
  /** Ubicación del botón: header | hero | float | section | footer… */
  placement: string;
};

/** Código de origen legible en el chat: p. ej. "mx-clinicas-hero" */
export function originCode({ country, page, placement }: WaOrigin): string {
  return `${country}-${page}-${placement}`;
}

/**
 * Enlace wa.me con mensaje precargado + código de origen.
 * El texto del mensaje viene SIEMPRE del archivo de copy del país.
 */
export function waLink(message: string, origin: WaOrigin): string {
  const text = `${message} (ref: ${originCode(origin)})`;
  return `https://wa.me/${NUMBERS[origin.country]}?text=${encodeURIComponent(text)}`;
}

export function waNumberDisplay(country: CountryKey): string {
  const n = NUMBERS[country];
  if (country === 'es' && n.startsWith('52')) {
    return 'Línea directa España ↔ México';
  }
  // +52 55 3440 2921
  if (n.startsWith('52') && n.length === 12) return `+52 ${n.slice(2, 4)} ${n.slice(4, 8)} ${n.slice(8)}`;
  if (n.startsWith('34') && n.length === 11) return `+34 ${n.slice(2, 5)} ${n.slice(5, 8)} ${n.slice(8)}`;
  return `+${n}`;
}

export { COUNTRIES };
