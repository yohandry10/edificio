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
    '/ruido-molesto-en-edificios',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  // 2. URLs dinámicas (del blog)
  const { data: articles, error } = await supabase
    .from('articulos')
    .select('slug, updated_at');
  
  if (error) {
    console.error("Error fetching articles for sitemap:", error);
  }

  const blogRoutes = articles?.map(({ slug, updated_at }) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: updated_at || new Date().toISOString(),
  })) ?? [];

  return [...staticRoutes, ...blogRoutes];
} 