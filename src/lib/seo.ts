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

/**
 * ProfessionalService + Service JSON-LD para páginas de servicios y landings de nicho.
 * NUNCA usa LocalBusiness con dirección inventada (opera 100 % en remoto).
 */
export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  country: CountryKey;
  serviceType: string;
}) {
  const area = opts.country === 'es' ? { '@type': 'Country', name: 'Spain' } : { '@type': 'Country', name: 'Mexico' };
  return [
    {
      '@type': 'ProfessionalService',
      '@id': abs(`${opts.path}#professional-service`),
      name: `${BRAND.name} (${opts.country === 'es' ? 'España' : 'México'})`,
      url: abs(opts.path),
      areaServed: area,
      parentOrganization: { '@id': abs('/#organization') },
    },
    {
      '@type': 'Service',
      '@id': abs(`${opts.path}#service`),
      name: opts.name,
      description: opts.description,
      serviceType: opts.serviceType,
      provider: { '@id': abs('/#organization') },
      areaServed: area,
      url: abs(opts.path),
    },
  ];
}

export function faqPageJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

export function articleJsonLd(opts: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  country: CountryKey;
}) {
  return {
    '@type': 'Article',
    '@id': abs(`${opts.path}#article`),
    headline: opts.headline,
    description: opts.description,
    url: abs(opts.path),
    inLanguage: COUNTRIES[opts.country].hreflang,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    author: {
      '@type': 'Person',
      name: opts.authorName,
    },
    publisher: { '@id': abs('/#organization') },
  };
}

/** Une nodos en un único @graph. */
export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
