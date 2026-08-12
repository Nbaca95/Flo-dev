import { SITE_URL } from './seo';
import { company } from '../data/company';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: SITE_URL,
    logo: `${SITE_URL}${company.logos.dark}`,
    email: company.contact.email,
  };
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: company.name,
    url: SITE_URL,
    image: `${SITE_URL}${company.logos.dark}`,
    email: company.contact.email,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: company.name,
    url: SITE_URL,
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: company.founder.name,
    jobTitle: company.founder.role.es,
    worksFor: {
      '@type': 'Organization',
      name: company.name,
    },
    image: `${SITE_URL}${company.founder.photo}`,
  };
}
