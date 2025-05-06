// lib/articles.ts
import { supabase } from "./supabase";

export type Article = {
  id:          string;
  title:       string;
  excerpt:     string | null;
  content:     string;
  cover_image: string | null;
  category:    string;
  tags:        string[] | null;
  published:   boolean;
  created_at:  string;
};

/* ▸ Actualiza campos parciales por id */
export async function updateArticle(id: string, payload: Partial<Article>) {
  const { error } = await supabase
    .from("articulos")
    .update(payload)
    .eq("id", id);
  if (error) throw error;
}

/* ▸ Elimina un artículo por id */
export async function deleteArticle(id: string) {
  const { error } = await supabase
    .from("articulos")
    .delete()
    .eq("id", id);
  if (error) throw error;
}
