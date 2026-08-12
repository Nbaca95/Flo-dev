# FLO-De — Sitio web corporativo

Sitio web corporativo de **FLO-De**, agencia tecnológica especializada en diseño UI/UX, desarrollo web, sistemas digitales, CRM/ERP, automatización de procesos, automatización con IA, consultoría y soporte técnico.

Construido con **Astro**, **React**, **TypeScript** y **Tailwind CSS**. Sitio estático, multilenguaje (ES/EN), con modo claro/oscuro y listo para producción.

## Tecnologías

- [Astro](https://astro.build) 4.x — framework principal, generación estática
- [React](https://react.dev) — solo para el formulario de contacto (isla interactiva)
- [TypeScript](https://www.typescriptlang.org) — tipado estricto en todo el proyecto
- [Tailwind CSS](https://tailwindcss.com) — sistema de diseño y estilos
- Astro Content Collections — blog
- `@astrojs/sitemap` — sitemap.xml automático

## Requisitos

- Node.js 18.20.8 o superior (recomendado 20 LTS)
- npm 9+

## Instalación

```bash
npm install
```

## Variables de entorno

Copia `.env.example` a `.env` y completa los valores:

```bash
cp .env.example .env
```

| Variable | Descripción |
|---|---|
| `PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp en formato internacional sin "+" (ej: `51987654321`). Si se deja vacío, el botón flotante de WhatsApp no se muestra. |
| `PUBLIC_CONTACT_EMAIL` | Correo mostrado en el sitio (también editable en `src/data/company.ts`). |
| `PUBLIC_CONTACT_FORM_ENDPOINT` | URL a la que se envía el formulario de contacto (Formspree, un webhook de n8n, una función serverless con Resend, etc.). Si se deja vacío, el formulario simula el envío en desarrollo sin enviar datos a ningún lado. |
| `PUBLIC_SITE_URL` | URL de producción del sitio, usada para SEO (canonical, hreflang, Open Graph). |
| `PUBLIC_GA_ID` | Opcional. ID de Google Analytics si decides integrarlo. |

No se incluyen claves ni secretos en el código: todo lo sensible vive en `.env` (que no debe subirse al repositorio).

## Ejecución en desarrollo

```bash
npm run dev
```

El sitio queda disponible en `http://localhost:4321`.

## Build para producción

```bash
npm run build
```

Los archivos generados quedan en `dist/`.

Para previsualizar el build de producción localmente:

```bash
npm run preview
```

## Estructura del proyecto

```
src/
├── components/
│   ├── layout/       Header, Footer, LanguageSwitcher, ThemeToggle
│   ├── ui/            Button, Badge, SectionHeading, ServiceCard, Icon...
│   ├── home/          Secciones de la página de inicio
│   ├── services/      Página y tarjetas de servicios
│   ├── solutions/      Página de soluciones
│   ├── about/         Página "Sobre FLO-De" y sección del founder
│   ├── projects/      Página de proyectos / casos de estudio
│   ├── blog/          Tarjetas del blog
│   ├── contact/       Formulario de contacto (React) e info de contacto
│   └── global/        WhatsAppButton
├── content/
│   └── blog/          Artículos del blog (Markdown, Content Collections)
├── data/
│   ├── company.ts     Configuración centralizada de la empresa
│   ├── services.ts    Catálogo de los 13 servicios
│   ├── projects.ts    Casos de estudio (vacío hasta tener proyectos reales)
│   └── blogCategories.ts
├── i18n/
│   ├── config.ts       Locales soportados y helpers de rutas
│   ├── es.ts / en.ts   Diccionarios de traducción
│   └── utils.ts
├── layouts/
│   └── BaseLayout.astro  SEO, hreflang, tema, Header/Footer/WhatsApp
├── pages/
│   ├── index.astro, servicios.astro, soluciones.astro, sobre-flo-de.astro,
│   │   proyectos.astro, contacto.astro, blog/
│   └── en/              Mismas páginas en inglés
├── styles/global.css
├── types/index.ts
└── utils/               SEO, Schema.org, iconos
```

## Cómo cambiar el número de WhatsApp

Edita `PUBLIC_WHATSAPP_NUMBER` en tu archivo `.env`. El mensaje inicial y la etiqueta del botón se traducen automáticamente según el idioma activo (`src/i18n/es.ts` y `src/i18n/en.ts`, sección `whatsapp`).

## Cómo cambiar la información de FLO-De

Todo vive en `src/data/company.ts`: nombre, founder, correo, logos, redes sociales. Edita ese archivo y el cambio se refleja en todo el sitio (Header, Footer, página "Sobre FLO-De", Schema.org).

Para reemplazar los logos, sustituye los archivos en `public/images/brand/logo-light-bg.png` (uso sobre fondos claros) y `public/images/brand/logo-dark-bg.png` (uso sobre fondos oscuros), manteniendo los mismos nombres, o actualiza las rutas en `company.ts`.

Para reemplazar la fotografía del founder, sustituye `public/images/founder/norman-baca-flores.jpg` o actualiza la ruta en `company.ts`.

## Cómo agregar un servicio

Añade un nuevo objeto al arreglo en `src/data/services.ts` siguiendo la interfaz `Service` (`src/types/index.ts`). Aparecerá automáticamente en la página de Servicios y podrá destacarse en la home ajustando `ServicesPreview.astro`.

## Cómo agregar un proyecto / caso de estudio

Añade un objeto al arreglo `projects` en `src/data/projects.ts` siguiendo la interfaz `Project`. En cuanto el arreglo tenga al menos un elemento, la página de Proyectos deja de mostrar el estado "próximamente" y muestra las tarjetas automáticamente.

## Cómo agregar un artículo al blog

Crea un archivo Markdown en `src/content/blog/` con el frontmatter definido en `src/content/config.ts` (`title`, `description`, `lang`, `category`, `publishDate`, `translationSlug` opcional, `draft`). Los artículos en español aparecen en `/blog`, los artículos en inglés en `/en/blog`. Usa `translationSlug` para enlazar la versión del mismo artículo en el otro idioma si decides implementarlo en el template.

## Cómo cambiar de idioma / agregar un idioma

El español vive en la raíz del sitio (`/`) y el inglés bajo `/en`. Los textos de la interfaz están centralizados en `src/i18n/es.ts` y `src/i18n/en.ts`, ambos implementando la interfaz `Dictionary` (`src/types/index.ts`).

Para agregar un nuevo idioma:

1. Agrega el código de idioma a `LOCALES` en `src/i18n/config.ts`.
2. Crea `src/i18n/<codigo>.ts` implementando `Dictionary`.
3. Regístralo en `src/i18n/utils.ts`.
4. Duplica las páginas bajo `src/pages/<codigo>/` reutilizando los mismos componentes de contenido (`*PageContent.astro`).

## Despliegue

El sitio es completamente estático (`npm run build` genera `dist/`), por lo que puede desplegarse en cualquier hosting estático:

- **Vercel / Netlify**: conecta el repositorio, comando de build `npm run build`, carpeta de salida `dist`.
- **Cloudflare Pages**: mismo comando de build y carpeta de salida.
- Cualquier hosting estático (S3 + CloudFront, GitHub Pages, etc.) sirviendo el contenido de `dist/`.

Recuerda configurar las variables de entorno (`PUBLIC_WHATSAPP_NUMBER`, `PUBLIC_CONTACT_FORM_ENDPOINT`, etc.) en el panel del proveedor de hosting, no solo en tu `.env` local.

## Notas

- No se incluyen testimonios, clientes, certificaciones ni estadísticas inventadas. Los datos de alcance en la sección de estadísticas de la home (`src/i18n/es.ts` / `en.ts`, sección `stats`) están pensados para editarse conforme el negocio crece.
- El artículo de blog incluido es contenido de demostración, claramente identificado como tal al final del texto.
