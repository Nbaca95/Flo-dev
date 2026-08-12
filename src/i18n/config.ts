export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'es';

export const LOCALE_LABELS: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
};

export const LOCALE_NAMES: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
};

/**
 * Devuelve el prefijo de ruta para un locale.
 * El español vive en la raíz ("/"), el inglés vive bajo "/en".
 */
export function localePath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  if (locale === DEFAULT_LOCALE) {
    return `/${clean}`;
  }
  return `/${locale}/${clean}`.replace(/\/+$/, '/').replace(/([^:])\/\/+/g, '$1/');
}

/**
 * Mapa de slugs equivalentes entre idiomas para las páginas cuyo slug cambia
 * de un idioma a otro (ej. "sobre-flo-de" en ES vs "about" en EN).
 * "" representa el inicio; "blog" es igual en ambos idiomas.
 */
const ROUTE_SLUG_MAP: { es: string; en: string }[] = [
  { es: '', en: '' },
  { es: 'servicios', en: 'services' },
  { es: 'soluciones', en: 'solutions' },
  { es: 'sobre-flo-de', en: 'about' },
  { es: 'proyectos', en: 'projects' },
  { es: 'contacto', en: 'contact' },
  { es: 'blog', en: 'blog' },
];

/**
 * Dado un pathname actual, devuelve la ruta equivalente en el otro idioma,
 * traduciendo el slug de la sección (no solo el prefijo /en) según ROUTE_SLUG_MAP.
 * Se usa en el LanguageSwitcher para no perder la página actual al cambiar de idioma.
 */
export function swapLocaleInPath(pathname: string, target: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  const isEn = segments[0] === 'en';
  const rest = isEn ? segments.slice(1) : segments;
  const currentSlug = rest[0] ?? '';

  // Un artículo de blog individual (ej. /blog/mi-articulo) tiene un slug propio
  // por idioma que no podemos adivinar aquí, así que llevamos al listado del blog.
  if (currentSlug === 'blog' && rest.length > 1) {
    return target === 'en' ? '/en/blog' : '/blog';
  }

  const match = ROUTE_SLUG_MAP.find((r) => (isEn ? r.en : r.es) === currentSlug);
  const targetSlug = match ? (target === 'en' ? match.en : match.es) : currentSlug;

  if (target === 'en') {
    return `/en/${targetSlug}`.replace(/\/+$/, '') || '/en';
  }
  return `/${targetSlug}` || '/';
}