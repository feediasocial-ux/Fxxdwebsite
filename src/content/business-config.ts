import type { CountryKey } from '@/lib/i18n';

/**
 * Panel único de configuración de negocio (Fase 4 del Masterplan 2.0).
 * Centraliza todos los datos operativos y marcadores `[PENDIENTE]` en un solo archivo
 * para que actualizar Calendly, WhatsApp, fundadores o datos fiscales sea instantáneo en las 57+ páginas.
 */
export const BUSINESS_CONFIG = {
  brandName: 'Feediasocial',
  siteUrl: (import.meta.env.SITE_URL as string | undefined) || 'https://feediasocial.com',

  /** Enlace de Calendly para videollamadas de descubrimiento de 15 min */
  calendlyUrl:
    (import.meta.env.PUBLIC_CALENDLY_URL as string | undefined)?.trim() ||
    'https://calendly.com/feediasocial/15min',

  /** Números de WhatsApp por país (solo dígitos con prefijo internacional) */
  whatsappNumbers: {
    mx: ((import.meta.env.PUBLIC_WA_NUMBER_MX as string | undefined) || '525534402921').replace(/\D/g, ''),
    es: (
      (import.meta.env.PUBLIC_WA_NUMBER_ES as string | undefined) ||
      (import.meta.env.PUBLIC_WA_NUMBER_MX as string | undefined) ||
      '525534402921'
    ).replace(/\D/g, ''),
  } satisfies Record<CountryKey, string>,

  /** Correos oficiales de contacto y privacidad */
  emails: {
    contact: 'hola@feediasocial.com',
    privacy: 'privacidad@feediasocial.com',
  },

  /** Perfiles oficiales de redes sociales (dejar vacío hasta publicar las cuentas reales) */
  socialProfiles: [] as string[],

  /** Estado de elementos pendientes de confirmación final */
  pendingFlags: {
    calendlyConfirmed: Boolean(import.meta.env.PUBLIC_CALENDLY_URL),
    spanishPhoneConfirmed: Boolean(import.meta.env.PUBLIC_WA_NUMBER_ES),
    foundersPhotosReady: true,
    fiscalDataConfirmed: false,
  },
} as const;
