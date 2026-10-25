import type { ImageMetadata } from 'astro';
import type { NichePhotoKey } from '@/content/niches/types';

import clinicasEs from '@/assets/photos/niches/clinicas-es.jpg';
import clinicasMx from '@/assets/photos/niches/clinicas-mx.jpg';
import restaurantesEs from '@/assets/photos/niches/restaurantes-es.jpg';
import restaurantesMx from '@/assets/photos/niches/restaurantes-mx.jpg';
import inmobiliariasEs from '@/assets/photos/niches/inmobiliarias-es.jpg';
import inmobiliariasMx from '@/assets/photos/niches/inmobiliarias-mx.jpg';
import gimnasiosEs from '@/assets/photos/niches/gimnasios-es.jpg';
import gimnasiosMx from '@/assets/photos/niches/gimnasios-mx.jpg';

export const NICHE_PHOTOS: Record<NichePhotoKey, ImageMetadata> = {
  'clinicas-es': clinicasEs,
  'clinicas-mx': clinicasMx,
  'restaurantes-es': restaurantesEs,
  'restaurantes-mx': restaurantesMx,
  'inmobiliarias-es': inmobiliariasEs,
  'inmobiliarias-mx': inmobiliariasMx,
  'gimnasios-es': gimnasiosEs,
  'gimnasios-mx': gimnasiosMx,
};
