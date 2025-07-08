# Edificio - Plataforma de Gestión y Sitio Web

## Descripción General

Este proyecto es una plataforma web desarrollada con **Next.js** y **React** para la gestión de edificios y la administración de contenido. Incluye un sitio público corporativo, un blog, formularios de contacto y un panel de administración protegido para gestionar artículos y FAQs. Utiliza **Supabase** como backend para autenticación y almacenamiento de datos, y **Tailwind CSS** para estilos modernos y responsivos.

---

## Tabla de Contenidos
- [Tecnologías Principales](#tecnologías-principales)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Configuración](#instalación-y-configuración)
- [Comandos Útiles](#comandos-útiles)
- [Arquitectura y Funcionalidades](#arquitectura-y-funcionalidades)
- [Supabase y Migraciones](#supabase-y-migraciones)
- [Buenas Prácticas y Convenciones](#buenas-prácticas-y-convenciones)
- [Contacto y Soporte](#contacto-y-soporte)

---

## Tecnologías Principales
- **Next.js** 15 (App Router, SSR, rutas protegidas)
- **React** 19
- **Supabase** (auth, base de datos, API)
- **Tailwind CSS** (con plugins y utilidades)
- **Radix UI** (componentes accesibles y personalizables)
- **Framer Motion** (animaciones)
- **React Hook Form** y **Zod** (formularios y validación)
- **TypeScript**
- **Nodemailer** (envío de emails desde el backend)
- **Otras**: date-fns, recharts, remark-gfm, rehype-raw, etc.

---

## Estructura del Proyecto

```
edificio/
├── app/                # Todas las rutas y páginas (Next.js App Router)
│   ├── admin/          # Panel de administración (artículos, FAQs, login, dashboard)
│   ├── blog/           # Blog público con rutas dinámicas por slug
│   ├── contacto/       # Página de contacto
│   ├── nuestros-servicios/ # Página de servicios
│   ├── quienes-somos/  # Página institucional
│   ├── api/            # Endpoints API (auth, contacto)
│   └── ...             # Otros endpoints y páginas
├── components/         # Componentes compartidos (navbar, footer, hero-slider, etc.)
│   └── ui/             # Componentes UI reutilizables (botones, formularios, tablas, etc.)
├── lib/                # Lógica de negocio y utilidades (Supabase, artículos, posts, etc.)
├── src/                # Componentes y lógica adicional
│   ├── components/     # Ej: DynamicArticles
│   └── lib/            # Ej: articles.ts
├── styles/             # Estilos globales
├── public/             # Imágenes y recursos estáticos
├── scripts/            # Scripts de migración y utilidades (ej: migrate-to-new-supabase.js)
├── tailwind.config.ts  # Configuración de Tailwind
├── tsconfig.json       # Configuración de TypeScript
├── package.json        # Dependencias y scripts
└── ...
```

---

## Instalación y Configuración

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repo>
   cd edificio
   ```
2. **Instala las dependencias:**
   ```bash
   pnpm install
   # o
   npm install
   # o
   yarn install
   ```
3. **Configura las variables de entorno:**
   - Crea un archivo `.env.local` en la raíz con las credenciales de Supabase y otros secretos necesarios.
   - Ejemplo:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=...
     NEXT_PUBLIC_SUPABASE_ANON_KEY=...
     SUPABASE_SERVICE_ROLE_KEY=...
     # Otros secretos si aplica
     ```
4. **Ejecuta el proyecto en desarrollo:**
   ```bash
   pnpm dev
   # o
   npm run dev
   # o
   yarn dev
   ```

---

## Comandos Útiles

- `pnpm dev` / `npm run dev` / `yarn dev`: Inicia el servidor de desarrollo.
- `pnpm build` / `npm run build` / `yarn build`: Compila la aplicación para producción.
- `pnpm start` / `npm run start` / `yarn start`: Inicia la app en modo producción.
- `pnpm lint` / `npm run lint` / `yarn lint`: Ejecuta el linter.

---

## Arquitectura y Funcionalidades

### Sitio Público
- **Landing Page:** Página principal con slider, beneficios, servicios y presentación de la empresa.
- **Blog:** Listado de artículos y posts, con rutas dinámicas (`/blog/[slug]`).
- **Contacto:** Formulario de contacto que envía datos a un endpoint API y/o correo vía Nodemailer.
- **Secciones informativas:** Servicios, quienes somos, etc.

### Panel de Administración (`/admin`)
- **Login:** Autenticación de administrador usando Supabase Auth.
- **Dashboard:** Vista general y acceso rápido a gestión de contenido.
- **Artículos:** CRUD de artículos (crear, editar, listar, eliminar).
- **FAQs:** CRUD de preguntas frecuentes.
- **Protección de rutas:** Solo usuarios autenticados pueden acceder al admin.

### API Interna (`/app/api`)
- **/api/auth/logout:** Cierre de sesión.
- **/api/auth/set:** Configuración de sesión.
- **/api/contact:** Recepción de mensajes de contacto (puede usar Nodemailer).

### Componentes UI
- Gran cantidad de componentes reutilizables en `components/ui/` (botones, formularios, tablas, menús, modales, etc.), basados en Radix UI y personalizados con Tailwind.
- Componentes globales: Navbar, Footer, HeroSlider, Preloader, etc.

### Lógica de Negocio y Utilidades
- **lib/** y **src/lib/**: Funciones para interactuar con Supabase, manejar artículos, posts, utilidades varias.
- **Supabase:** Autenticación, almacenamiento y consultas a la base de datos.

---

## Supabase y Migraciones
- El proyecto utiliza Supabase para autenticación y base de datos.
- Hay scripts como `migrate-to-new-supabase.js` y `create-table.js` para facilitar la migración y creación de tablas.
- Las credenciales y claves deben estar en `.env.local`.
- Para migrar datos o crear tablas, ejecuta los scripts correspondientes desde la terminal.

---

## Buenas Prácticas y Convenciones
- **TypeScript** en todo el proyecto.
- **Componentización**: Usa componentes pequeños y reutilizables.
- **Separación de lógica y presentación**: Utiliza `lib/` para lógica y utilidades.
- **Validación robusta**: Usa Zod y React Hook Form para formularios.
- **Estilos**: Tailwind CSS y clases utilitarias.
- **Accesibilidad**: Componentes Radix UI y buenas prácticas de accesibilidad.
- **Animaciones**: Framer Motion para transiciones suaves.
- **Convenciones de nombres**: Usa nombres descriptivos y consistentes para archivos, carpetas y variables.

---

## Contacto y Soporte

Para dudas técnicas, sugerencias o soporte, contacta al responsable del proyecto o abre un issue en el repositorio.

---

**¡Feliz desarrollo!** 