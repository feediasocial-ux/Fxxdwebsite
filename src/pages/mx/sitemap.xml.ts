import type { APIRoute } from 'astro';
import { buildCountrySitemapXml } from '@/lib/sitemap';

export const GET: APIRoute = () =>
  new Response(buildCountrySitemapXml('mx'), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
