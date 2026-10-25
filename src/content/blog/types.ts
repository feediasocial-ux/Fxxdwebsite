import type { CountryKey } from '../../lib/i18n.ts';
import type { RouteKey } from '../../lib/routes.ts';
import type { EditorialPhotoKey } from '../../lib/blog-photos.ts';

export type BlogArticleSection = {
  id: string;
  number: string;
  heading: string;
  lead: string;
  paragraphs: string[];
  bullets?: string[];
  figure?: {
    photoKey: EditorialPhotoKey;
    alt: string;
    caption: string;
    badge: string;
    callouts: string[];
  };
  scriptBox?: {
    title: string;
    badge: string;
    items: { label: string; text: string }[];
  };
};

export type EditorialBlogArticle = {
  id: 'grabacion' | 'guiones' | 'metricool' | 'carruseles' | 'tiktok-vs-reels';
  slug: string;
  routeKey: 'blogGrabacion' | 'blogGuiones' | 'blogMetricool' | 'blogCarruseles' | 'blogTiktokVsReels';
  country: CountryKey;
  category: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  cardSummary: string;
  intent: 'informacional' | 'comercial' | 'comparativa';
  targetKeyword: string;
  author: string;
  authorRole: string;
  pubDate: string;
  updatedDate: string;
  readingTime: string;
  heroPhotoKey: EditorialPhotoKey;
  heroPhotoAlt: string;
  heroPhotoCaption: string;
  heroSticker: string;
  intro: string;
  tldrTitle: string;
  keyFacts: { label: string; value: string }[];
  pullQuote: {
    text: string;
    context: string;
  };
  sections: BlogArticleSection[];
  comparisonTable: {
    title: string;
    subtitle: string;
    headers: [string, string, string, string];
    rows: { col1: string; col2: string; col3: string; col4: string }[];
  };
  checklist: {
    title: string;
    subtitle: string;
    items: string[];
  };
  faqs: { q: string; a: string }[];
  relatedRoutes: RouteKey[];
  waMessage: string;
  waCta: string;
};
