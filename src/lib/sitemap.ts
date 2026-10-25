import { COUNTRIES, COUNTRY_KEYS, type CountryKey } from './i18n';
import { ROUTES } from './routes';
import { abs } from './seo';

export function buildCountrySitemapXml(country: CountryKey): string {
  const entries = Object.values(ROUTES).filter((r) => r.live && r.paths[country]);

  const urls = entries
    .map((r) => {
      const loc = abs(r.paths[country]!);
      const links = COUNTRY_KEYS.filter((k) => r.paths[k])
        .map(
          (k) =>
            `    <xhtml:link rel="alternate" hreflang="${COUNTRIES[k].hreflang}" href="${abs(r.paths[k]!)}" />`
        )
        .join('\n');
      const xDefault =
        r.paths.es === '/es/'
          ? `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${abs('/')}" />`
          : '';
      return `  <url>
    <loc>${loc}</loc>
${links}${xDefault}
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
}
