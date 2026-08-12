import { localePath, type Locale } from '../i18n/config';

export const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://flo-de.com';

/**
 * Construye las URLs absolutas de canonical y hreflang para una ruta dada.
 * `route` debe ser la ruta "neutra" sin prefijo de idioma, ej: "servicios" o "".
 */
export function buildAlternates(route: string) {
  const es = `${SITE_URL}${localePath('es', route)}`.replace(/([^:])\/\/+/g, '$1/');
  const en = `${SITE_URL}${localePath('en', route)}`.replace(/([^:])\/\/+/g, '$1/');
  return { es, en };
}

export function canonicalFor(locale: Locale, route: string) {
  const alternates = buildAlternates(route);
  return locale === 'en' ? alternates.en : alternates.es;
}
