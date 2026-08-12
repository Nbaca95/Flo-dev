export const blogCategoryLabels: Record<string, { es: string; en: string }> = {
  tecnologia: { es: 'Tecnología', en: 'Technology' },
  diseno: { es: 'Diseño', en: 'Design' },
  'desarrollo-web': { es: 'Desarrollo Web', en: 'Web Development' },
  automatizacion: { es: 'Automatización', en: 'Automation' },
  'inteligencia-artificial': { es: 'Inteligencia Artificial', en: 'Artificial Intelligence' },
  productividad: { es: 'Productividad', en: 'Productivity' },
  seguridad: { es: 'Seguridad', en: 'Security' },
  'soporte-tecnico': { es: 'Soporte Técnico', en: 'Technical Support' },
};

export function estimateReadingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
