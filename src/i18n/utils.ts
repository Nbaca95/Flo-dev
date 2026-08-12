import { es } from './es';
import { en } from './en';
import { DEFAULT_LOCALE, type Locale } from './config';
import type { Dictionary } from '../types';

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

/**
 * Resuelve el locale a partir de la URL actual de Astro.
 * "/en/..." => "en"; cualquier otra ruta => "es" (idioma por defecto).
 */
export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return first === 'en' ? 'en' : DEFAULT_LOCALE;
}
