import type { CountryKey } from './i18n';

/**
 * Mapa de equivalencias entre países. Cada clave = una página "conceptual".
 * hreflang, selector de país y sitemaps se generan desde aquí.
 * `live: false` = la página aún no existe (no se enlaza ni entra en sitemap).
 */
type RouteDef = { live: boolean; paths: Partial<Record<CountryKey, string>> };

export const ROUTES = {
  home: { live: true, paths: { es: '/es/', mx: '/mx/' } },
  servicios: { live: true, paths: { es: '/es/servicios/', mx: '/mx/servicios/' } },
  precios: { live: true, paths: { es: '/es/precios/', mx: '/mx/precios/' } },
  comoFunciona: { live: true, paths: { es: '/es/como-funciona/', mx: '/mx/como-funciona/' } },
  comoTrabajamos: { live: true, paths: { es: '/es/como-trabajamos/', mx: '/mx/como-trabajamos/' } },
  sobreNosotros: { live: true, paths: { es: '/es/sobre-nosotros/', mx: '/mx/sobre-nosotros/' } },
  contacto: { live: true, paths: { es: '/es/contacto/', mx: '/mx/contacto/' } },
  blog: { live: true, paths: { es: '/es/blog/', mx: '/mx/blog/' } },
  blogGrabacion: {
    live: true,
    paths: {
      es: '/es/blog/como-grabar-reels-en-30-minutos-con-movil/',
      mx: '/mx/blog/como-grabar-reels-en-30-minutos-con-celular/',
    },
  },
  blogGuiones: {
    live: true,
    paths: {
      es: '/es/blog/estructura-guiones-reels-negocios-locales/',
      mx: '/mx/blog/estructura-guiones-reels-negocios-locales/',
    },
  },
  blogMetricool: {
    live: true,
    paths: {
      es: '/es/blog/como-organizar-calendario-redes-metricool/',
      mx: '/mx/blog/como-organizar-calendario-redes-metricool/',
    },
  },
  blogCarruseles: {
    live: true,
    paths: {
      es: '/es/blog/como-disenar-carruseles-instagram-que-convierten/',
      mx: '/mx/blog/como-hacer-carruseles-instagram-para-vender/',
    },
  },
  blogTiktokVsReels: {
    live: true,
    paths: {
      es: '/es/blog/tiktok-vs-instagram-reels-para-pymes-espana/',
      mx: '/mx/blog/tiktok-vs-instagram-reels-para-negocios-mexico/',
    },
  },
  nichoClinicas: { live: true, paths: { es: '/es/redes-sociales-clinicas/', mx: '/mx/manejo-redes-sociales-clinicas/' } },
  nichoRestaurantes: { live: true, paths: { es: '/es/redes-sociales-restaurantes/', mx: '/mx/manejo-redes-sociales-restaurantes/' } },
  nichoInmobiliarias: { live: true, paths: { es: '/es/redes-sociales-inmobiliarias/', mx: '/mx/manejo-redes-sociales-inmobiliarias/' } },
  nichoGimnasios: { live: true, paths: { es: '/es/redes-sociales-gimnasios/', mx: '/mx/manejo-redes-sociales-gimnasios/' } },
  nichoAbogados: {
    live: true,
    paths: {
      es: '/es/redes-sociales-abogados-asesorias/',
      mx: '/mx/manejo-redes-sociales-abogados-contadores/',
    },
  },
  nichoBelleza: {
    live: true,
    paths: {
      es: '/es/redes-sociales-peluquerias-salones-belleza/',
      mx: '/mx/manejo-redes-sociales-salones-belleza-spas/',
    },
  },
  intencionPrecio: { live: true, paths: { es: '/es/precio-community-manager/', mx: '/mx/precio-manejo-redes-sociales/' } },
  intencionComparativa: { live: true, paths: { es: '/es/agencia-vs-community-manager-vs-freelancer/', mx: '/mx/agencia-vs-community-manager/' } },
  intencionSinCamara: { live: true, paths: { es: '/es/contenido-redes-sin-salir-en-camara/', mx: '/mx/contenido-redes-sin-salir-en-camara/' } },
  avisoLegal: { live: true, paths: { es: '/es/aviso-legal/', mx: '/mx/aviso-legal/' } },
  privacidad: { live: true, paths: { es: '/es/privacidad/', mx: '/mx/aviso-de-privacidad/' } },
  cookies: { live: true, paths: { es: '/es/cookies/', mx: '/mx/cookies/' } },
} satisfies Record<string, RouteDef>;

export type RouteKey = keyof typeof ROUTES;

export function pathFor(key: RouteKey, country: CountryKey): string | undefined {
  const r: RouteDef = ROUTES[key];
  return r.paths[country];
}

/** Ruta equivalente en otro país; si no existe o no está publicada, su home. */
export function equivalentPath(key: RouteKey | undefined, to: CountryKey): string {
  if (key) {
    const r: RouteDef = ROUTES[key];
    const p = r.paths[to];
    if (r.live && p) return p;
  }
  return ROUTES.home.paths[to];
}

/** Enlace interno seguro: si la página aún no existe, apunta a la home del país. */
export function linkTo(key: RouteKey, country: CountryKey): string {
  return equivalentPath(key, country);
}
