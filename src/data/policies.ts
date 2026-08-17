import type { PolicyItem } from '../types';

/**
 * Políticas/documentos institucionales de FLO-De.
 * Mientras un ítem no tenga "url", la tarjeta se muestra deshabilitada con la
 * etiqueta "Próximamente" en vez de inventar un enlace que no existe.
 * En cuanto tengas el documento real, agrega su URL aquí y el enlace se activa solo.
 */
export const policies: PolicyItem[] = [
  {
    slug: 'codigo-etica',
    icon: '⚖️',
    label: { es: 'Código de Ética', en: 'Code of Ethics' },
    url: 'https://tu-dominio.com/certificados/iso-27001.pdf', // ← agregar esto
  },
  {
    slug: 'calidad-ambiente',
    icon: '🌱',
    label: { es: 'Calidad y Ambiente', en: 'Quality & Environment' },
    url: 'https://tu-dominio.com/certificados/iso-27001.pdf', // ← agregar esto
  },
  {
    slug: 'datos-personales',
    icon: '🛡️',
    label: { es: 'Datos Personales', en: 'Personal Data' },
    url: 'https://tu-dominio.com/certificados/iso-27001.pdf', // ← agregar esto
  },
  {
    slug: 'iso-27001',
    icon: '🎖️',
    label: { es: 'ISO-27001', en: 'ISO-27001' },
    url: 'https://tu-dominio.com/certificados/iso-27001.pdf', // ← agregar esto
  },
];