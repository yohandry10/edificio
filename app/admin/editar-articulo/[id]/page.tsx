"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { updateArticle, deleteArticle } from "@/lib/articles";

export default function EditarArticulo() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [post, setPost] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!id) return;
    
    const loadArticle = async () => {
      try {
        const { data, error } = await supabase
          .from("articulos")
          .select("*")
          .eq("id", id)
          .single();
          
        if (error) {
          console.error("Error loading article:", error);
          alert("Error al cargar el artículo");
          return;
        }
        
        console.log("📄 Artículo cargado:", data);
        setPost(data);
      } catch (error) {
        console.error("Error:", error);
        alert("Error al cargar el artículo");
      } finally {
        setLoading(false);
      }
    };
    
    loadArticle();
  }, [id]);

  if (loading) return <p className="p-8">Cargando…</p>;
  if (!post) return <p className="p-8">Artículo no encontrado</p>;

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!id) {
      alert("Error: ID del artículo no válido");
      return;
    }
    
    setSaving(true);
    try {
      console.log("🔍 Guardando artículo con ID:", id);
      console.log("🔍 Datos completos del post:", post);
      
      // Preparar los datos para la actualización
      const updateData = {
        title: post.title?.trim() || '',
        excerpt: post.excerpt?.trim() || '',
        content: post.content?.trim() || '',
        category: post.category || 'General',
        tags: Array.isArray(post.tags) ? post.tags.filter((tag: string) => tag.trim()) : [],
        cover_image: post.cover_image?.trim() || null,
      };
      
      console.log("🔍 Datos a actualizar:", updateData);
      
      // Validar datos obligatorios
      if (!updateData.title) {
        alert("El título es obligatorio");
        return;
      }
      
      if (!updateData.content) {
        alert("El contenido es obligatorio");
        return;
      }
      
      await updateArticle(id as string, updateData);
      
      console.log("✅ Artículo guardado exitosamente");
      alert("Artículo guardado correctamente");
      router.push("/admin/articulos");
    } catch (error) {
      console.error("❌ Error al guardar:", error);
      alert("Error al guardar el artículo: " + (error as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("¿Estás seguro de que quieres eliminar este artículo? Esta acción no se puede deshacer.")) return;
    
    if (!id) {
      alert("Error: ID del artículo no válido");
      return;
    }
    
    try {
      await deleteArticle(id as string);
      alert("Artículo eliminado correctamente");
      router.push("/admin/articulos");
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Error al eliminar el artículo");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-16 pb-10">
      <form
        onSubmit={handleSave}
        className="max-w-4xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow"
      >
        <h1 className="text-2xl font-bold">Editar artículo</h1>

        {/* Título */}
        <div>
          <label htmlFor="title" className="block mb-1 font-medium">
            Título *
          </label>
          <input
            id="title"
            type="text"
            required
            value={post.title || ''}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Título del artículo"
          />
        </div>

        {/* Resumen */}
        <div>
          <label htmlFor="excerpt" className="block mb-1 font-medium">
            Resumen
          </label>
          <textarea
            id="excerpt"
            value={post.excerpt || ''}
            onChange={(e) =>
              setPost({ ...post, excerpt: e.target.value })
            }
            rows={3}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Breve descripción del artículo"
          />
        </div>

        {/* Contenido */}
        <div>
          <label htmlFor="content" className="block mb-1 font-medium">
            Contenido *
          </label>
          <textarea
            id="content"
            required
            value={post.content || ''}
            onChange={(e) =>
              setPost({ ...post, content: e.target.value })
            }
            rows={10}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Contenido completo del artículo"
          />
        </div>

        {/* Categoría */}
        <div>
          <label htmlFor="category" className="block mb-1 font-medium">
            Categoría
          </label>
          <select
            id="category"
            value={post.category || 'General'}
            onChange={(e) =>
              setPost({ ...post, category: e.target.value })
            }
            className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="General">General</option>
            <option value="Mantenimiento">Mantenimiento</option>
            <option value="Propiedad Horizontal">Propiedad Horizontal</option>
            <option value="Legal">Legal</option>
            <option value="Finanzas">Finanzas</option>
            <option value="Seguridad">Seguridad</option>
            <option value="Administración de Edificios">
              Administración de Edificios
            </option>
          </select>
        </div>

        {/* Etiquetas */}
        <div>
          <label htmlFor="tags" className="block mb-1 font-medium">
            Etiquetas (separadas por comas)
          </label>
          <input
            id="tags"
            type="text"
            value={
              Array.isArray(post.tags) ? post.tags.join(", ") : (post.tags || "")
            }
            onChange={(e) =>
              setPost({
                ...post,
                tags: e.target.value
                  .split(",")
                  .map((t) => t.trim())
                  .filter((t) => t),
              })
            }
            className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="administración, edificios, propietarios"
          />
        </div>

        {/* Imagen de portada */}
        <div>
          <label htmlFor="cover_image" className="block mb-1 font-medium">
            URL Imagen de portada
          </label>
          <input
            id="cover_image"
            type="url"
            value={post.cover_image || ""}
            onChange={(e) =>
              setPost({ ...post, cover_image: e.target.value })
            }
            className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="https://ejemplo.com/imagen.jpg"
          />
        </div>

        {/* Botones */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleDelete}
            className="text-red-600 hover:bg-red-50 px-4 py-2 rounded transition-colors"
          >
            Eliminar artículo
          </button>
          <button
            type="submit"
            disabled={saving}
            className={`px-6 py-2 rounded text-white font-medium transition-colors ${
              saving 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {saving ? "Guardando…" : "Guardar cambios"}
          </button>
        </div>
      </form>
    </div>
  );
}
