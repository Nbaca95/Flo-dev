export interface NavLink {
  label: string;
  href: string;
}

export interface Dictionary {
  meta: {
    siteName: string;
    defaultTitle: string;
    defaultDescription: string;
  };
  nav: {
    home: string;
    services: string;
    solutions: string;
    about: string;
    projects: string;
    blog: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
  };
  themeToggle: {
    switchToLight: string;
    switchToDark: string;
  };
  whatsapp: {
    label: string;
    ariaLabel: string;
    message: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badge: string;
  };
  valueProposition: {
    title: string;
    subtitle: string;
    pillars: { title: string; description: string }[];
  };
  servicesPreview: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    learnMore: string;
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { number: string; title: string; description: string }[];
  };
  stats: {
    title: string;
    items: { value: string; label: string }[];
    disclaimer: string;
  };
  ctaSection: {
    title: string;
    text: string;
    button: string;
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    categories: Record<string, string>;
    benefitsLabel: string;
    includesLabel: string;
    techLabel: string;
    ctaLabel: string;
  };
  solutionsPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    solutionLabel: string;
    items: { problem: string; solution: string; description: string }[];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    intro: string;
    founderRole: string;
    founderBio: string;
    missionTitle: string;
    mission: string;
    visionTitle: string;
    vision: string;
    valuesTitle: string;
    values: { title: string; description: string }[];
  };
  projectsPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    comingSoonTitle: string;
    comingSoonText: string;
    client: string;
    problem: string;
    solution: string;
    tech: string;
    results: string;
  };
  blogPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    readingTime: string;
    relatedTitle: string;
    backToBlog: string;
    empty: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      company: string;
      service: string;
      servicePlaceholder: string;
      budget: string;
      budgetPlaceholder: string;
      message: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
      requiredError: string;
      emailError: string;
    };
    infoTitle: string;
    infoText: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    servicesTitle: string;
    contactTitle: string;
    rights: string;
  };
  common: {
    goHome: string;
    notFoundTitle: string;
    notFoundText: string;
  };
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  domain: string;
  founder: {
    name: string;
    role: { es: string; en: string };
    photo: string;
  };
  contact: {
    email: string;
    whatsappEnvVar: string;
    mapEmbedUrl?: string;
  };
  social: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    tiktok?: string;
    linkedin?: string;
  };
  logos: {
    light: string;
    dark: string;
  };
}

export type ServiceCategory =
  | 'diseno'
  | 'desarrollo'
  | 'automatizacion'
  | 'consultoria'
  | 'soporte';

export interface Service {
  slug: string;
  icon: string;
  category: ServiceCategory;
  title: { es: string; en: string };
  shortDescription: { es: string; en: string };
  description: { es: string; en: string };
  benefits: { es: string[]; en: string[] };
  includes: { es: string[]; en: string[] };
  technologies: string[];
}

export interface Project {
  slug: string;
  name: string;
  client: string;
  category: string;
  image?: string;
  problem: { es: string; en: string };
  solution: { es: string; en: string };
  technologies: string[];
  results: { es: string; en: string };
  link?: string;
}