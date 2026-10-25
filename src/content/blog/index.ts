import type { CountryKey } from '../../lib/i18n.ts';
import { BLOG_ES } from './es.ts';
import { BLOG_MX } from './mx.ts';
import type { EditorialBlogArticle } from './types.ts';

export type { EditorialBlogArticle, BlogArticleSection } from './types.ts';

export const BLOG_BY_COUNTRY: Record<CountryKey, EditorialBlogArticle[]> = {
  es: BLOG_ES,
  mx: BLOG_MX,
};

export const ALL_BLOG_ARTICLES: EditorialBlogArticle[] = [...BLOG_ES, ...BLOG_MX];

export function getBlogArticlesByCountry(country: CountryKey): EditorialBlogArticle[] {
  return BLOG_BY_COUNTRY[country];
}
