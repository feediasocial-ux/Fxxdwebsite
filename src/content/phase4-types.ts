import type { CountryKey } from '@/lib/i18n';
import type { RouteKey } from '@/lib/routes';

export type BlogArticleData = {
  slug: string;
  country: CountryKey;
  title: string;
  description: string;
  intent: 'informacional' | 'comercial' | 'comparativa';
  targetKeyword: string;
  author: string;
  pubDate: string;
  updatedDate?: string;
  readingTime: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
  relatedRoutes: RouteKey[];
  waMessage: string;
  waCta: string;
};

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalPageCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lastUpdated: string;
  pendingNotice: string;
  intro: string;
  sections: LegalSection[];
  showCookieReopen?: boolean;
  cookieReopenCta?: string;
};

export type Phase4Copy = {
  comoTrabajamos: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    intro: string;
    honestyBanner: {
      badge: string;
      title: string;
      text: string;
    };
    samplesTitle: string;
    samplesSubtitle: string;
    scriptSamples: {
      nicheBadge: string;
      title: string;
      duration: string;
      hook: string;
      body: string[];
      cta: string;
      shotNote: string;
      color: 'coral' | 'lemon' | 'sky';
    }[];
    calendarShowcaseTitle: string;
    calendarShowcaseSubtitle: string;
    calendarWeeks: {
      week: string;
      goal: string;
      deliverables: { day: string; format: string; piece: string }[];
    }[];
    pilotCtaTitle: string;
    pilotCtaText: string;
    waMessage: string;
    waCta: string;
  };
  blog: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    intro: string;
    editorialPromiseTitle: string;
    editorialPromiseText: string;
    editorialRules: string[];
    guidesSectionTitle: string;
    guidesSectionSubtitle: string;
    upcomingBadge: string;
    upcomingTitle: string;
    upcomingText: string;
    upcomingTopics: { category: string; title: string; summary: string }[];
    waMessage: string;
    waCta: string;
  };
  legales: {
    avisoLegal: LegalPageCopy;
    privacidad: LegalPageCopy;
    cookies: LegalPageCopy;
  };
};
