import type { CountryKey } from '@/lib/i18n';

/**
 * Paquetes y precios — ÚNICA fuente de verdad. Valores iniciales a validar.
 * [PENDIENTE: validar precios definitivos con el equipo]
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
    price: { es: 349, mx: 3900 },
    features: {
      es: ['8 posts al mes', '8 stories', '2 reels con guion y edición', 'Calendario en Metricool'],
      mx: ['8 posts al mes', '8 historias', '2 reels con guion y edición', 'Calendario en Metricool'],
    },
  },
  {
    id: 'crecimiento',
    name: 'Crecimiento',
    featured: true,
    color: 'coral',
    price: { es: 649, mx: 7500 },
    features: {
      es: ['12 posts al mes', '12 stories', '4 reels con guion y edición', 'Informe con recomendaciones', '1 llamada al mes'],
      mx: ['12 posts al mes', '12 historias', '4 reels con guion y edición', 'Reporte con recomendaciones', '1 llamada al mes'],
    },
  },
  {
    id: 'pro',
    name: 'Pro',
    color: 'maroon',
    price: { es: 990, mx: 12900 },
    features: {
      es: ['Todo lo de Crecimiento', '8 reels al mes', 'Estrategia de anuncios', 'Gestión de comentarios'],
      mx: ['Todo lo de Crecimiento', '8 reels al mes', 'Estrategia de anuncios', 'Respuesta a comentarios'],
    },
  },
];
