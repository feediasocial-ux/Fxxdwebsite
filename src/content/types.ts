/** Contrato del copy por país. Ambos locales deben implementarlo completo. */
export type UiCopy = {
  countryName: string;
  meta: {
    homeTitle: string;
    homeDescription: string;
  };
  a11y: {
    skipLink: string;
    mainNav: string;
    openWhatsApp: string;
    countrySwitcher: string;
    marqueePaused: string;
    breadcrumb: string;
    logoHome: string;
  };
  header: {
    waCta: string;
    waCtaShort: string;
    nav: { label: string; route: import('@/lib/routes').RouteKey }[];
  };
  whatsapp: {
    /** Mensaje base; se le añade el código de origen automáticamente. */
    defaultMessage: string;
    floatLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    promise: string;
    ctaPrimary: string;
    ctaSecondary: string;
    photoAlt: string;
    founderPlaceholder: string;
    stickers: [string, string];
  };
  marquee: string[];
  problem: {
    eyebrow: string;
    title: string;
    points: { title: string; text: string }[];
  };
  stepsSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaMore: string;
  };
  steps: { title: string; text: string }[];
  servicesSection: {
    eyebrow: string;
    title: string;
    ctaMore: string;
  };
  services: { title: string; text: string; color: 'coral' | 'lemon' | 'sky' }[];
  nichesSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cardCta: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    perMonth: string;
    cta: string;
    popular: string;
    adsNote: string;
    taxNote: string;
    waMessage: string;
    planBTitle: string;
    planBText: string;
    planBCta: string;
    planBGuideCta: string;
    planBWaMessage: string;
  };
  proofSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pendingBadge: string;
    ctaMore: string;
    sampleScriptTitle: string;
    sampleScriptMeta: string;
    sampleScriptHook: string;
    sampleScriptBody: string[];
    sampleScriptCta: string;
    sampleCalendarTitle: string;
    sampleCalendarItems: { day: string; format: string; topic: string; color: 'coral' | 'lemon' | 'sky' }[];
  };
  aboutTeaser: {
    eyebrow: string;
    title: string;
    text: string;
    bullets: string[];
    cta: string;
    founder1Placeholder: string;
    founder2Placeholder: string;
  };
  faqSection: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
    waMessage: string;
  };
  auditForm: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    igLabel: string;
    igPlaceholder: string;
    waLabel: string;
    waPlaceholder: string;
    countryLabel: string;
    countryOptions: { es: string; mx: string };
    submitLabel: string;
    submittingLabel: string;
    privacyNote: string;
    successTitle: string;
    successText: string;
    fallbackWaCta: string;
    honeypotLabel: string;
  };
  cookieBanner: {
    title: string;
    text: string;
    acceptAll: string;
    rejectOptional: string;
    configure: string;
    savePrefs: string;
    categories: {
      necessary: { title: string; desc: string; badge: string };
      analytics: { title: string; desc: string };
      marketing: { title: string; desc: string };
    };
    reopenLabel: string;
  };
  footer: {
    tagline: string;
    legalNav: string;
    legal: { label: string; route: import('@/lib/routes').RouteKey }[];
    countryLabel: string;
    rights: string;
  };
  countrySwitcher: {
    label: string;
    suggestion: string;
  };
};

/** Contrato del copy para las páginas interiores de Fase 2 y 3. */
export type CorePagesCopy = {
  servicios: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    intro: string;
    blocksTitle: string;
    blocks: {
      badge: string;
      title: string;
      text: string;
      bullets: string[];
      color: 'coral' | 'lemon' | 'sky' | 'cream-deep';
    }[];
    nichesTitle: string;
    nichesSubtitle: string;
    nicheCtaLabel: string;
    waMessage: string;
    waCta: string;
  };
  precios: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    intro: string;
    comparisonTitle: string;
    comparisonRows: { feature: string; esencial: string; crecimiento: string; pro: string }[];
    includedTitle: string;
    includedItems: { title: string; text: string }[];
    faqTitle: string;
    faqs: { q: string; a: string }[];
  };
  comoFunciona: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    intro: string;
    processSteps: {
      num: string;
      who: string;
      duration: string;
      title: string;
      text: string;
      deliverable: string;
      color: 'lemon' | 'coral' | 'sky' | 'cream-deep';
    }[];
    whoRecordsTitle: string;
    whoRecordsIntro: string;
    whoRecordsCols: { who: string; badge: string; items: string[]; color: 'lemon' | 'coral' }[];
    shotListTitle: string;
    shotListSubtitle: string;
    shotListItems: { clip: string; duration: string; instruction: string }[];
    planBTitle: string;
    planBText: string;
    waMessage: string;
    waCta: string;
  };
  sobreNosotros: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    intro: string;
    storyTitle: string;
    storyParagraphs: string[];
    foundersTitle: string;
    founders: {
      name: string;
      role: string;
      bio: string;
      placeholder: string;
      color: 'lemon' | 'sky';
    }[];
    whyTwoCountriesTitle: string;
    whyTwoCountriesText: string;
    valuesTitle: string;
    values: { title: string; text: string; color: 'coral' | 'lemon' | 'sky' }[];
    waMessage: string;
    waCta: string;
  };
  contacto: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    intro: string;
    waCardTitle: string;
    waCardText: string;
    waCardCta: string;
    waMessage: string;
    responseGuarantee: string;
    photoAlt: string;
    expectationsTitle: string;
    expectations: string[];
  };
};
