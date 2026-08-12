import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['es', 'en']),
    category: z.enum([
      'tecnologia',
      'diseno',
      'desarrollo-web',
      'automatizacion',
      'inteligencia-artificial',
      'productividad',
      'seguridad',
      'soporte-tecnico',
    ]),
    publishDate: z.coerce.date(),
    // slug hermano en el otro idioma, para enlazar la traducción del mismo artículo
    translationSlug: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
