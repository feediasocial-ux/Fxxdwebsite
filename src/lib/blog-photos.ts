import type { ImageMetadata } from 'astro';
import heroEs from '@/assets/photos/hero-es.jpg';
import heroMx from '@/assets/photos/hero-mx.jpg';
import proceso01 from '@/assets/photos/proceso-01-onboarding.jpg';
import proceso02 from '@/assets/photos/proceso-02-guiones-calendario.jpg';
import sinCamara from '@/assets/photos/sin-camara.jpg';
import serviciosIa from '@/assets/photos/servicios-ia-graficos.jpg';
import contactoChat from '@/assets/photos/contacto-chat.jpg';
import clinicasEs from '@/assets/photos/niches/clinicas-es.jpg';
import clinicasMx from '@/assets/photos/niches/clinicas-mx.jpg';
import restaurantesEs from '@/assets/photos/niches/restaurantes-es.jpg';
import restaurantesMx from '@/assets/photos/niches/restaurantes-mx.jpg';
import inmobiliariasEs from '@/assets/photos/niches/inmobiliarias-es.jpg';
import inmobiliariasMx from '@/assets/photos/niches/inmobiliarias-mx.jpg';
import gimnasiosEs from '@/assets/photos/niches/gimnasios-es.jpg';
import gimnasiosMx from '@/assets/photos/niches/gimnasios-mx.jpg';

export type EditorialPhotoKey =
  | 'hero-es'
  | 'hero-mx'
  | 'proceso-01'
  | 'proceso-02'
  | 'sin-camara'
  | 'servicios-ia'
  | 'contacto-chat'
  | 'clinicas-es'
  | 'clinicas-mx'
  | 'restaurantes-es'
  | 'restaurantes-mx'
  | 'inmobiliarias-es'
  | 'inmobiliarias-mx'
  | 'gimnasios-es'
  | 'gimnasios-mx';

export const EDITORIAL_PHOTOS: Record<EditorialPhotoKey, ImageMetadata> = {
  'hero-es': heroEs,
  'hero-mx': heroMx,
  'proceso-01': proceso01,
  'proceso-02': proceso02,
  'sin-camara': sinCamara,
  'servicios-ia': serviciosIa,
  'contacto-chat': contactoChat,
  'clinicas-es': clinicasEs,
  'clinicas-mx': clinicasMx,
  'restaurantes-es': restaurantesEs,
  'restaurantes-mx': restaurantesMx,
  'inmobiliarias-es': inmobiliariasEs,
  'inmobiliarias-mx': inmobiliariasMx,
  'gimnasios-es': gimnasiosEs,
  'gimnasios-mx': gimnasiosMx,
};
