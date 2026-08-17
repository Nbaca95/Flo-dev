import type { CompanyInfo } from '../types';

/**
 * Configuración centralizada de FLO-De.
 * Edita este archivo para actualizar datos de la empresa en todo el sitio.
 * No incluyas aquí claves ni datos sensibles: usa variables de entorno (.env).
 */
export const company: CompanyInfo = {
  name: 'FLO-Dev',
  legalName: 'FLO-Dev',
  domain: 'flo-dev.com',
  founder: {
    name: 'Norman Adrian Baca Flores',
    role: {
      es: 'Fundador · Ingeniero en Sistemas',
      en: 'Founder · Systems Engineer',
    },
    photo: '/images/founder/norman-baca-flores.jpg',
  },
  contact: {
    // El correo mostrado en el sitio. Cámbialo aquí si es necesario.
    email: 'info@flo-dev.com',
    // El número real de WhatsApp se define en la variable de entorno PUBLIC_WHATSAPP_NUMBER (.env)
    whatsappEnvVar: 'PUBLIC_WHATSAPP_NUMBER',
    // URL del "src" del iframe de Google Maps (Google Maps > Compartir > Insertar un mapa > copiar el src).
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.979771146738!2d-84.09355249017193!3d9.935640874099482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e38e821b12d9%3A0x29f32212706035e0!2sT%26TA%20de%20Centroamerica!5e0!3m2!1ses!2scr!4v1786482366285!5m2!1ses!2scr',
  },
  social: {
  instagram: 'https://instagram.com/tu_usuario',
  facebook: 'https://facebook.com/tu_pagina',
  twitter: 'https://x.com/tu_usuario',
  tiktok: 'https://tiktok.com/@tu_usuario',
  linkedin: 'https://linkedin.com/company/tu_empresa',
},
  logos: {
    light: '/images/brand/logo-light-bg.png',
    dark: '/images/brand/logo-dark-bg.png',
  },
};

/** Número de WhatsApp leído desde variables de entorno públicas de Astro. */
export const whatsappNumber = import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '';