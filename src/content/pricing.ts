import type { CountryKey } from '@/lib/i18n';

/**
 * Paquetes y precios — ÚNICA fuente de verdad (España EUR y México MXN equivalentes al tipo de cambio).
 */
export type PackageId = 'esencial' | 'crecimiento' | 'pro';

export type Package = {
  id: PackageId;
  name: string;
  featured?: boolean;
  color: 'cream' | 'coral' | 'maroon';
  price: Record<CountryKey, number>;
  features: Record<CountryKey, string[]>;
};

export const PACKAGES: Package[] = [
  {
    id: 'esencial',
    name: 'Esencial',
    color: 'cream',
    price: { es: 300, mx: 6300 },
    features: {
      es: [
        '9 posts y/o carruseles al mes',
        '15–20 stories al mes',
        '4 reels con guion y edición',
        'Calendario en Metricool',
      ],
      mx: [
        '9 posts y/o carruseles al mes',
        '15–20 historias al mes',
        '4 reels con guion y edición',
        'Calendario en Metricool',
      ],
    },
  },
  {
    id: 'crecimiento',
    name: 'Crecimiento',
    featured: true,
    color: 'coral',
    price: { es: 450, mx: 9450 },
    features: {
      es: [
        '12 posts y/o carruseles al mes',
        '20–25 stories al mes',
        '8 reels con guion y edición',
        'Informe con recomendaciones',
        '1 llamada al mes',
      ],
      mx: [
        '12 posts y/o carruseles al mes',
        '20–25 historias al mes',
        '8 reels con guion y edición',
        'Reporte con recomendaciones',
        '1 llamada al mes',
      ],
    },
  },
  {
    id: 'pro',
    name: 'Pro',
    color: 'maroon',
    price: { es: 650, mx: 13650 },
    features: {
      es: [
        'Publicación diaria todo el mes',
        '15 posts y/o carruseles al mes',
        '30 stories al mes',
        '15 reels con guion y edición',
        'Estrategia de anuncios y gestión de comentarios',
      ],
      mx: [
        'Publicación diaria todo el mes',
        '15 posts y/o carruseles al mes',
        '30 historias al mes',
        '15 reels con guion y edición',
        'Estrategia de anuncios y respuesta a comentarios',
      ],
    },
  },
];
