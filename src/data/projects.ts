import type { Project } from '../types';

/**
 * Casos de estudio de FLO-De.
 * Este arreglo está vacío intencionalmente: no se inventan clientes ni proyectos.
 * Cuando exista un proyecto real, agrégalo aquí siguiendo la interfaz `Project`
 * (ver src/types/index.ts) y aparecerá automáticamente en /proyectos y /en/projects.
 *
 * Ejemplo:
 * {
 *   slug: 'nombre-del-proyecto',
 *   name: 'Nombre del proyecto',
 *   client: 'Nombre del cliente',
 *   category: 'Desarrollo web',
 *   image: '/images/projects/nombre-del-proyecto.jpg',
 *   problem: { es: '...', en: '...' },
 *   solution: { es: '...', en: '...' },
 *   technologies: ['Astro', 'React'],
 *   results: { es: '...', en: '...' },
 *   link: 'https://...',
 * }
 */
export const projects: Project[] = [];
