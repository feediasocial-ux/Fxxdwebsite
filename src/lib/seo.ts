import { COUNTRIES, COUNTRY_KEYS, type CountryKey } from './i18n';
import { ROUTES, type RouteKey } from './routes';
import { PACKAGES } from '@/content/pricing';

export const BRAND = {
  name: 'Feediasocial',
  legalName: 'Feediasocial',
  founderName: 'Daniela',
  url: import.meta.env.SITE || 'https://feediasocial.com',
  logoPath: '/favicon.svg',
  sameAs: [] as string[],
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

export function ogSlugForPath(path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, '').replace(/\//g, '-');
  return clean ? `/og/${clean}.png` : '/og/default.png';
}

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
    if (input.title.length > 68) console.warn(`[seo] title largo (${input.title.length}): ${input.title}`);
    if (input.description.length > 165) console.warn(`[seo] description larga (${input.description.length}): ${input.path}`);
  }

  const c = input.country ? COUNTRIES[input.country] : null;
  return {
    title: input.title,
    description: input.description,
    canonical: abs(input.path),
    alternates,
    robots: input.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large',
    ogImage: abs(input.ogImage || ogSlugForPath(input.path)),
    ogLocale: c?.ogLocale || 'es_ES',
    lang: c?.locale || 'es',
  };
}

/* ---------------- JSON-LD (SEO & GEO) ---------------- */

export function orgJsonLd() {
  return {
    '@type': 'Organization',
    '@id': abs('/#organization'),
    name: BRAND.name,
    url: abs('/'),
    logo: abs(BRAND.logoPath),
    founder: {
      '@type': 'Person',
      name: BRAND.founderName,
      jobTitle: 'Fundadora · Especialista en Social Media, SEO, Branding, Foto y Video',
    },
    areaServed: [
      { '@type': 'Country', name: 'Spain' },
      { '@type': 'Country', name: 'Mexico' },
    ],
    knowsAbout: [
      'Gestión de redes sociales para pymes',
      'Manejo de redes sociales para negocios',
      'Guiones para Instagram Reels y TikTok',
      'Edición de video vertical para negocios locales',
      'Planificación editorial en Metricool',
      'Marketing de contenidos para clínicas, restaurantes, inmobiliarias y gimnasios',
    ],
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
 * ProfessionalService + Service + OfferCatalog JSON-LD para páginas de servicios, nichos e intenciones.
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
  const currency = COUNTRIES[opts.country].currency;
  const offers = PACKAGES.map((pkg) => ({
    '@type': 'Offer',
    name: `Paquete ${pkg.name} (${opts.country === 'es' ? 'España' : 'México'})`,
    description: pkg.features[opts.country].join(' · '),
    price: String(pkg.price[opts.country]),
    priceCurrency: currency,
    url: abs(ROUTES.precios.paths[opts.country]!),
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: String(pkg.price[opts.country]),
      priceCurrency: currency,
      unitText: 'MONTH',
    },
  }));

  return [
    {
      '@type': 'ProfessionalService',
      '@id': abs(`${opts.path}#professional-service`),
      name: `${BRAND.name} (${opts.country === 'es' ? 'España' : 'México'})`,
      url: abs(opts.path),
      areaServed: area,
      priceRange: opts.country === 'es' ? '300 € - 650 € / mes' : '$6,300 - $13,650 MXN / mes',
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
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `Paquetes mensuales de contenido (${currency})`,
        itemListElement: offers,
      },
    },
    {
      '@type': 'WebPage',
      '@id': abs(`${opts.path}#webpage`),
      url: abs(opts.path),
      name: opts.name,
      inLanguage: COUNTRIES[opts.country].hreflang,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '[data-speakable="true"]'],
      },
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
  keywords?: string;
}) {
  return {
    '@type': 'Article',
    '@id': abs(`${opts.path}#article`),
    headline: opts.headline,
    description: opts.description,
    url: abs(opts.path),
    image: abs(ogSlugForPath(opts.path)),
    inLanguage: COUNTRIES[opts.country].hreflang,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    ...(opts.keywords ? { keywords: opts.keywords } : {}),
    author: {
      '@type': 'Person',
      name: opts.authorName,
    },
    publisher: { '@id': abs('/#organization') },
    mainEntityOfPage: abs(opts.path),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '[data-speakable="true"]'],
    },
  };
}

/** Une nodos en un único @graph. */
export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
