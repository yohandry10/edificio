import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.administracionedificiosperu.com';

  // 1. URLs estáticas
  const staticRoutes = [
    '',
    '/quienes-somos',
    '/nuestros-servicios',
    '/blog',
    '/contacto',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  // 2. URLs dinámicas (del blog - solo Supabase)
  const { data: articles, error } = await supabase
    .from('articulos')
    .select('slug, created_at')
    .eq('published', true);
  
  if (error) {
    console.error("Error fetching articles for sitemap:", error);
  }

  const blogRoutes = articles?.map(({ slug, created_at }) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: created_at || new Date().toISOString(),
  })) ?? [];

  return [...staticRoutes, ...blogRoutes];
} 