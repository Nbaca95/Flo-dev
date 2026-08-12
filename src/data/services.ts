import type { Service } from '../types';

/**
 * Catálogo de servicios de FLO-De.
 * Para agregar un nuevo servicio, añade un objeto siguiendo esta misma estructura.
 * "icon" usa nombres de iconos de la librería lucide-react (https://lucide.dev/icons).
 */
export const services: Service[] = [
  {
    slug: 'diseno-ui-ux',
    icon: 'PenTool',
    category: 'diseno',
    title: { es: 'Diseño UI/UX', en: 'UI/UX Design' },
    shortDescription: {
      es: 'Diseñamos interfaces intuitivas, atractivas y enfocadas en la experiencia del usuario.',
      en: 'We design intuitive, appealing interfaces focused on user experience.',
    },
    description: {
      es: 'Investigamos, prototipamos y diseñamos interfaces que resuelven problemas reales de tus usuarios, cuidando cada detalle de la experiencia.',
      en: 'We research, prototype and design interfaces that solve real problems for your users, taking care of every detail of the experience.',
    },
    benefits: {
      es: ['Interfaces más fáciles de usar', 'Mayor conversión y retención', 'Consistencia visual de marca'],
      en: ['Easier-to-use interfaces', 'Higher conversion and retention', 'Consistent brand visuals'],
    },
    includes: {
      es: ['Investigación de usuarios', 'Wireframes y prototipos', 'Sistema de diseño', 'Pruebas de usabilidad'],
      en: ['User research', 'Wireframes and prototypes', 'Design system', 'Usability testing'],
    },
    technologies: ['Figma', 'Design Tokens', 'Storybook'],
  },
  {
    slug: 'desarrollo-web',
    icon: 'Code2',
    category: 'desarrollo',
    title: { es: 'Desarrollo Web', en: 'Web Development' },
    shortDescription: {
      es: 'Creamos sitios web modernos, rápidos, responsive y optimizados para convertir visitantes en clientes.',
      en: 'We build modern, fast, responsive websites optimized to convert visitors into clients.',
    },
    description: {
      es: 'Construimos sitios y aplicaciones web con tecnología moderna, priorizando el rendimiento, el SEO y la escalabilidad del proyecto.',
      en: 'We build websites and web apps with modern technology, prioritizing performance, SEO and long-term scalability.',
    },
    benefits: {
      es: ['Tiempos de carga optimizados', 'Mejor posicionamiento SEO', 'Código mantenible a futuro'],
      en: ['Optimized load times', 'Better SEO positioning', 'Maintainable codebase'],
    },
    includes: {
      es: ['Sitios corporativos', 'Landing pages', 'Aplicaciones web', 'Integración con CMS'],
      en: ['Corporate websites', 'Landing pages', 'Web applications', 'CMS integration'],
    },
    technologies: ['Astro', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    slug: 'desarrollo-de-sistemas',
    icon: 'Layers',
    category: 'desarrollo',
    title: { es: 'Sistemas y Soluciones Digitales', en: 'Systems & Digital Solutions' },
    shortDescription: {
      es: 'Desarrollamos herramientas adaptadas a las necesidades de tu negocio.',
      en: 'We build tools tailored to your business needs.',
    },
    description: {
      es: 'Diseñamos y desarrollamos sistemas a medida cuando las soluciones genéricas del mercado no se ajustan a tu operación.',
      en: 'We design and build custom systems when off-the-shelf solutions don\'t fit the way your business operates.',
    },
    benefits: {
      es: ['Herramientas hechas para tu proceso', 'Menos dependencia de hojas de cálculo', 'Escalable a futuro'],
      en: ['Tools built for your process', 'Less dependency on spreadsheets', 'Built to scale'],
    },
    includes: {
      es: ['Levantamiento de requerimientos', 'Diseño de arquitectura', 'Desarrollo del sistema', 'Documentación técnica'],
      en: ['Requirements gathering', 'Architecture design', 'System development', 'Technical documentation'],
    },
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    slug: 'crm',
    icon: 'Users',
    category: 'desarrollo',
    title: { es: 'Implementación de CRM', en: 'CRM Implementation' },
    shortDescription: {
      es: 'Implementamos y personalizamos plataformas para mejorar la gestión de clientes.',
      en: 'We implement and customize platforms to improve customer management.',
    },
    description: {
      es: 'Configuramos e integramos un CRM adaptado a tu equipo comercial, con los campos, flujos y reportes que realmente necesitas.',
      en: 'We configure and integrate a CRM adapted to your sales team, with the fields, workflows and reports you actually need.',
    },
    benefits: {
      es: ['Visibilidad completa del embudo comercial', 'Menos oportunidades perdidas', 'Reportes claros para tomar decisiones'],
      en: ['Full visibility of your sales pipeline', 'Fewer missed opportunities', 'Clear reports to support decisions'],
    },
    includes: {
      es: ['Configuración inicial', 'Migración de datos', 'Automatizaciones básicas', 'Capacitación al equipo'],
      en: ['Initial setup', 'Data migration', 'Basic automations', 'Team training'],
    },
    technologies: ['HubSpot', 'Zoho', 'APIs personalizadas'],
  },
  {
    slug: 'erp',
    icon: 'Building2',
    category: 'desarrollo',
    title: { es: 'Implementación de ERP', en: 'ERP Implementation' },
    shortDescription: {
      es: 'Implementamos y personalizamos plataformas para mejorar la gestión de procesos internos.',
      en: 'We implement and customize platforms to improve internal process management.',
    },
    description: {
      es: 'Acompañamos la implementación de un ERP adaptado a tus áreas operativas: inventario, finanzas, compras y más.',
      en: 'We support ERP implementation tailored to your operational areas: inventory, finance, purchasing and more.',
    },
    benefits: {
      es: ['Procesos internos centralizados', 'Menos errores manuales', 'Información en tiempo real'],
      en: ['Centralized internal processes', 'Fewer manual errors', 'Real-time information'],
    },
    includes: {
      es: ['Análisis de procesos', 'Configuración de módulos', 'Integraciones', 'Acompañamiento post-implementación'],
      en: ['Process analysis', 'Module configuration', 'Integrations', 'Post-implementation support'],
    },
    technologies: ['Odoo', 'APIs personalizadas', 'PostgreSQL'],
  },
  {
    slug: 'automatizacion-de-procesos',
    icon: 'Workflow',
    category: 'automatizacion',
    title: { es: 'Automatización de Procesos', en: 'Process Automation' },
    shortDescription: {
      es: 'Conectamos herramientas y automatizamos procesos para ahorrar tiempo y aumentar la eficiencia.',
      en: 'We connect tools and automate processes to save time and boost efficiency.',
    },
    description: {
      es: 'Identificamos tareas repetitivas en tu operación y las convertimos en flujos automáticos entre las herramientas que ya usas.',
      en: 'We identify repetitive tasks in your operation and turn them into automated workflows between the tools you already use.',
    },
    benefits: {
      es: ['Horas ahorradas cada semana', 'Menos errores humanos', 'Procesos más consistentes'],
      en: ['Hours saved every week', 'Fewer human errors', 'More consistent processes'],
    },
    includes: {
      es: ['Mapeo de procesos', 'Diseño de flujos', 'Implementación', 'Monitoreo y ajustes'],
      en: ['Process mapping', 'Workflow design', 'Implementation', 'Monitoring and adjustments'],
    },
    technologies: ['n8n', 'Make', 'Zapier', 'APIs'],
  },
  {
    slug: 'automatizacion-con-ia',
    icon: 'Sparkles',
    category: 'automatizacion',
    title: { es: 'Automatización con Inteligencia Artificial', en: 'AI Automation' },
    shortDescription: {
      es: 'Aplicamos inteligencia artificial para automatizar tareas y potenciar decisiones.',
      en: 'We apply artificial intelligence to automate tasks and support decisions.',
    },
    description: {
      es: 'Integramos modelos de inteligencia artificial en tus flujos de trabajo para clasificar información, responder consultas o generar contenido.',
      en: 'We integrate AI models into your workflows to classify information, answer inquiries or generate content.',
    },
    benefits: {
      es: ['Respuestas más rápidas a clientes', 'Tareas de análisis aceleradas', 'Equipos enfocados en lo estratégico'],
      en: ['Faster responses to customers', 'Faster analysis tasks', 'Teams focused on strategic work'],
    },
    includes: {
      es: ['Diagnóstico de casos de uso', 'Integración de modelos de IA', 'Pruebas y ajuste', 'Documentación de uso'],
      en: ['Use case diagnosis', 'AI model integration', 'Testing and tuning', 'Usage documentation'],
    },
    technologies: ['Claude', 'OpenAI', 'APIs de IA', 'n8n'],
  },
  {
    slug: 'integraciones-y-apis',
    icon: 'Plug',
    category: 'automatizacion',
    title: { es: 'Integraciones entre Plataformas y APIs', en: 'Platform Integrations & APIs' },
    shortDescription: {
      es: 'Conectamos tus sistemas para que la información fluya sin fricción.',
      en: 'We connect your systems so information flows without friction.',
    },
    description: {
      es: 'Desarrollamos integraciones entre las plataformas que ya usas para eliminar la doble digitación y mantener tus datos sincronizados.',
      en: 'We build integrations between the platforms you already use to eliminate double data entry and keep your data in sync.',
    },
    benefits: {
      es: ['Datos siempre sincronizados', 'Menos trabajo manual entre sistemas', 'Procesos más confiables'],
      en: ['Always in-sync data', 'Less manual work between systems', 'More reliable processes'],
    },
    includes: {
      es: ['Análisis de sistemas a conectar', 'Desarrollo de integraciones', 'Pruebas', 'Monitoreo'],
      en: ['Analysis of systems to connect', 'Integration development', 'Testing', 'Monitoring'],
    },
    technologies: ['REST APIs', 'Webhooks', 'n8n'],
  },
  {
    slug: 'consultoria-tecnologica',
    icon: 'Compass',
    category: 'consultoria',
    title: { es: 'Consultoría Tecnológica', en: 'Technology Consulting' },
    shortDescription: {
      es: 'Analizamos tu negocio y te ayudamos a tomar mejores decisiones tecnológicas.',
      en: 'We analyze your business and help you make better technology decisions.',
    },
    description: {
      es: 'Evaluamos tu situación actual y te acompañamos a definir el camino tecnológico más adecuado para tus objetivos de negocio.',
      en: 'We assess your current situation and help you define the right technology path for your business goals.',
    },
    benefits: {
      es: ['Decisiones tecnológicas más informadas', 'Priorización clara de inversiones', 'Reducción de riesgos técnicos'],
      en: ['More informed technology decisions', 'Clear investment prioritization', 'Reduced technical risk'],
    },
    includes: {
      es: ['Diagnóstico inicial', 'Plan de recomendaciones', 'Roadmap tecnológico', 'Seguimiento'],
      en: ['Initial diagnosis', 'Recommendations plan', 'Technology roadmap', 'Follow-up'],
    },
    technologies: ['Auditoría técnica', 'Roadmapping'],
  },
  {
    slug: 'arquitectura-tecnologica',
    icon: 'Building2',
    category: 'consultoria',
    title: { es: 'Arquitectura Tecnológica', en: 'Technology Architecture' },
    shortDescription: {
      es: 'Diseñamos la base técnica de tus sistemas para que crezcan sin fricción.',
      en: 'We design the technical foundation of your systems so they can grow smoothly.',
    },
    description: {
      es: 'Definimos la arquitectura de tus sistemas y plataformas, pensando en escalabilidad, seguridad y facilidad de mantenimiento.',
      en: 'We define the architecture of your systems and platforms with scalability, security and maintainability in mind.',
    },
    benefits: {
      es: ['Sistemas preparados para crecer', 'Menor deuda técnica', 'Bases sólidas para nuevos desarrollos'],
      en: ['Systems ready to grow', 'Lower technical debt', 'Solid foundations for new development'],
    },
    includes: {
      es: ['Diagnóstico de arquitectura actual', 'Diseño de arquitectura objetivo', 'Documentación técnica', 'Acompañamiento a equipos'],
      en: ['Current architecture assessment', 'Target architecture design', 'Technical documentation', 'Team support'],
    },
    technologies: ['Cloud', 'Microservicios', 'APIs'],
  },
  {
    slug: 'soporte-tecnico',
    icon: 'LifeBuoy',
    category: 'soporte',
    title: { es: 'Soporte Técnico', en: 'Technical Support' },
    shortDescription: {
      es: 'Brindamos acompañamiento, mantenimiento y resolución de incidencias tecnológicas.',
      en: 'We provide ongoing support, maintenance and technical incident resolution.',
    },
    description: {
      es: 'Acompañamos tu operación diaria resolviendo incidencias, dudas y solicitudes relacionadas con tus sistemas y plataformas.',
      en: 'We support your daily operation by resolving incidents, questions and requests related to your systems and platforms.',
    },
    benefits: {
      es: ['Menos tiempo de inactividad', 'Respuesta rápida a incidencias', 'Tranquilidad operativa'],
      en: ['Less downtime', 'Fast incident response', 'Operational peace of mind'],
    },
    includes: {
      es: ['Monitoreo básico', 'Resolución de incidencias', 'Mantenimiento preventivo', 'Reportes periódicos'],
      en: ['Basic monitoring', 'Incident resolution', 'Preventive maintenance', 'Periodic reports'],
    },
    technologies: ['Monitoreo', 'Ticketing'],
  },
  {
    slug: 'help-desk',
    icon: 'Headset',
    category: 'soporte',
    title: { es: 'Help Desk', en: 'Help Desk' },
    shortDescription: {
      es: 'Atendemos las solicitudes de soporte de tu equipo de forma organizada.',
      en: 'We handle your team\'s support requests in an organized way.',
    },
    description: {
      es: 'Implementamos un canal de Help Desk para que tu equipo reciba soporte rápido y ordenado ante cualquier incidencia tecnológica.',
      en: 'We implement a Help Desk channel so your team gets fast, organized support for any technology issue.',
    },
    benefits: {
      es: ['Solicitudes centralizadas', 'Tiempos de respuesta medibles', 'Historial de incidencias'],
      en: ['Centralized requests', 'Measurable response times', 'Incident history'],
    },
    includes: {
      es: ['Configuración de canal de soporte', 'Definición de niveles de atención', 'Base de conocimiento', 'Reportes'],
      en: ['Support channel setup', 'Service level definition', 'Knowledge base', 'Reports'],
    },
    technologies: ['Ticketing', 'Base de conocimiento'],
  },
  {
    slug: 'mantenimiento-y-optimizacion',
    icon: 'Wrench',
    category: 'soporte',
    title: { es: 'Mantenimiento y Optimización de Sistemas', en: 'System Maintenance & Optimization' },
    shortDescription: {
      es: 'Mantenemos y optimizamos tus sistemas para que sigan rindiendo al máximo.',
      en: 'We maintain and optimize your systems so they keep performing at their best.',
    },
    description: {
      es: 'Revisamos periódicamente tus sistemas para detectar oportunidades de mejora en rendimiento, seguridad y estabilidad.',
      en: 'We periodically review your systems to find opportunities to improve performance, security and stability.',
    },
    benefits: {
      es: ['Sistemas más rápidos y estables', 'Menor riesgo de fallas', 'Mejor experiencia para usuarios finales'],
      en: ['Faster, more stable systems', 'Lower risk of failure', 'Better experience for end users'],
    },
    includes: {
      es: ['Revisión de rendimiento', 'Actualizaciones y parches', 'Optimización de consultas y procesos', 'Informe de hallazgos'],
      en: ['Performance review', 'Updates and patches', 'Query and process optimization', 'Findings report'],
    },
    technologies: ['Monitoreo', 'Profiling', 'Cloud'],
  },
];

export function getServicesByCategory(category?: string): Service[] {
  if (!category || category === 'todos' || category === 'all') return services;
  return services.filter((s) => s.category === category);
}
