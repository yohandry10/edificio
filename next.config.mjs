/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Redirigir dominio .com.pe a .com
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'administracionedificios.com.pe',
          },
        ],
        destination: 'https://www.administracionedificiosperu.com/:path*',
        permanent: true,
      },
      
      // Redirigir dominio sin www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'administracionedificiosperu.com',
          },
        ],
        destination: 'https://www.administracionedificiosperu.com/:path*',
        permanent: true,
      },

      // === REDIRECCIONES DE MIGRACIÓN BLOGGER → NEXT.JS ===
      
      // 1. Posts antiguos .html → /blog/slug
      {
        source: '/:year(\\d{4})/:month(\\d{2})/:slug*.html',
        destination: '/blog/:slug*',
        permanent: true,
      },

      // 2. Archivos por año y mes → /blog
      {
        source: '/:year(\\d{4})/:month(\\d{2})/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/:year(\\d{4})/:month(\\d{2})',
        destination: '/blog',
        permanent: true,
      },

      // 3. Archivos solo por año → /blog  
      {
        source: '/:year(\\d{4})/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/:year(\\d{4})',
        destination: '/blog',
        permanent: true,
      },

      // 4. Archivos con parámetros → /blog (corregido)
      {
        source: '/:year(\\d{4})',
        has: [
          {
            type: 'query',
            key: 'm',
          },
        ],
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/:year(\\d{4})/:month(\\d{2})',
        has: [
          {
            type: 'query',
            key: 'm',
          },
        ],
        destination: '/blog',
        permanent: true,
      },

      // 5. Búsquedas por etiquetas → /blog
      {
        source: '/search/label/:label*',
        destination: '/blog',
        permanent: true,
      },

      // 6. Página genérica /p/ → página principal
      {
        source: '/p/:path*',
        destination: '/',
        permanent: true,
      },

      // 7. Posts específicos conocidos (algunos ejemplos)
      {
        source: '/2010/03/ley-27157.html',
        destination: '/blog/ley-de-propiedad-horizontal-en-peru-lo-que-todo-propietario-debe-conocer',
        permanent: true,
      },

      // 8. Redirección catch-all para cualquier URL con .html
      {
        source: '/:path*.html',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
