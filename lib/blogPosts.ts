// lib/blogPosts.ts
//-------------------------------------------------------------
// SOLO SUPABASE - NO MÁS ARTÍCULOS ESTÁTICOS
//-------------------------------------------------------------
import { supabase } from "./supabase";

//-------------------------------------------------------------
// Tipo de dato para el blog
//-------------------------------------------------------------
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string | null;
  author: string;
  date: string;
  category: string;
  tags?: string[];
  created_at?: string;
}

//-------------------------------------------------------------
// FUNCIÓN PARA OBTENER POSTS SOLO DE SUPABASE
//-------------------------------------------------------------
export async function getCombinedBlogPosts(): Promise<BlogPost[]> {
  let supabasePosts: BlogPost[] = [];

  const { data, error } = await supabase
    .from("articulos")
    .select(`
      id,
      title,
      slug,
      excerpt,
      content,
      cover_image,
      author_name,
      created_at,
      tags,
      category
    `)
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase error:", error.message ?? error);
  } else if (data) {
    supabasePosts = data.map((p: any): BlogPost => ({
      id: String(p.id),
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt ?? "",
      content: p.content ?? "",
      image: p.cover_image ?? null,
      author: p.author_name ?? "Casa Grande",
      date: new Date(p.created_at).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      category: typeof p.category === "string" ? p.category : "General",
      tags: Array.isArray(p.tags) ? p.tags : [],
      created_at: p.created_at,
    }));
  }

  return supabasePosts;
} 