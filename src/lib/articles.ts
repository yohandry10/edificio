import { supabase } from './supabase'

export interface DynamicArticle {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  cover_image: string
  author_name: string
  created_at: string
  tags: string[]
  published: boolean
}

export async function getDynamicArticles(): Promise<DynamicArticle[]> {
  const { data, error } = await supabase
    .from('articulos')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching articles:', error)
    return []
  }

  return data || []
} 