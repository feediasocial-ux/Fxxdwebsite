import { COUNTRIES, COUNTRY_KEYS, type CountryKey } from './i18n';
import { ROUTES, type RouteKey } from './routes';

export const BRAND = {
  name: 'Feediasocial',
  legalName: '[PENDIENTE: razón social]',
  url: import.meta.env.SITE || 'https://feediasocial.com',
  logoPath: '/favicon.svg',
  sameAs: [] as string[], // [PENDIENTE: perfiles de redes]
};

export type Alternate = { hreflang: string; href: string };

export type SeoInput = {
  title: string;
  description: string;
  /** Ruta absoluta del sitio, p. ej. "/mx/precios/" */
  path: string;
  routeKey?: RouteKey;
  country?: CountryKey;
  noindex?: boolean;
  ogImage?: string;
  /** Incluir x-default apuntando al selector raíz */
  xDefault?: boolean;
};

export type SeoOutput = {
  title: string;
  description: string;
  canonical: string;
  alternates: Alternate[];
  robots: string;
  ogImage: string;
  ogLocale: string;
  lang: string;
};

export const abs = (path: string) => new URL(path, BRAND.url).toString();

export function buildSeo(input: SeoInput): SeoOutput {
  const alternates: Alternate[] = [];
  if (input.routeKey && !input.noindex) {
    const r = ROUTES[input.routeKey] as { live: boolean; paths: Partial<Record<CountryKey, string>> };
    for (const k of COUNTRY_KEYS) {
      const p = r.paths[k];
      if (p) alternates.push({ hreflang: COUNTRIES[k].hreflang, href: abs(p) });
    }
    if (input.xDefault ?? input.routeKey === 'home') alternates.push({ hreflang: 'x-default', href: abs('/') });
  }

  if (import.meta.env.DEV) {
    if (input.title.length > 62) console.warn(`[seo] title largo (${input.title.length}): ${input.title}`);
    if (input.description.length > 160) console.warn(`[seo] description larga (${input.description.length}): ${input.path}`);
  }

  const c = input.country ? COUNTRIES[input.country] : null;
  return {
    title: input.title,
    description: input.description,
    canonical: abs(input.path),
    alternates,
    robots: input.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large',
    ogImage: abs(input.ogImage || '/og/default.png'),
    ogLocale: c?.ogLocale || 'es_ES',
    lang: c?.locale || 'es',
  };
}

/* ---------------- JSON-LD ---------------- */

export function orgJsonLd() {
  return {
    '@type': 'Organization',
    '@id': abs('/#organization'),
    name: BRAND.name,
    url: abs('/'),
    logo: abs(BRAND.logoPath),
    ...(BRAND.sameAs.length ? { sameAs: BRAND.sameAs } : {}),
  };
}

export function websiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': abs('/#website'),
    name: BRAND.name,
    url: abs('/'),
    inLanguage: ['es-ES', 'es-MX'],
    publisher: { '@id': abs('/#organization') },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

/** Une nodos en un único @graph. */
export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
