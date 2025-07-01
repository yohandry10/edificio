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
  console.log("🔍 updateArticle - ID:", id);
  console.log("🔍 updateArticle - Payload completo:", payload);
  console.log("🔍 updateArticle - Campos a actualizar:", Object.keys(payload));
  
  const { data, error } = await supabase
    .from("articulos")
    .update(payload)
    .eq("id", id)
    .select(); // Agregar select para ver qué se actualizó
    
  console.log("🔍 updateArticle - Respuesta de Supabase:", data);
  
  if (error) {
    console.error("❌ updateArticle - Error de Supabase:", error);
    throw error;
  }
  
  console.log("✅ updateArticle - Actualización exitosa");
}

/* ▸ Elimina un artículo por id */
export async function deleteArticle(id: string) {
  const { error } = await supabase
    .from("articulos")
    .delete()
    .eq("id", id);
  if (error) throw error;
}
