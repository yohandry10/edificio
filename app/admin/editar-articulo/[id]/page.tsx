"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { updateArticle, deleteArticle } from "@/lib/articles";

export default function EditarArticulo() {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    supabase
      .from("articulos")
      .select("*")
      .eq("id", id!)
      .single()
      .then(({ data }) => setPost(data));
  }, [id]);

  if (!post) return <p className="p-8">Cargando…</p>;

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      console.log("🔍 Datos completos del post:", post);
      
      // Preparar solo los campos que queremos actualizar
      const updateData = {
        title: post.title,
        excerpt: post.excerpt || '',
        content: post.content,
        category: post.category || 'General',
        tags: Array.isArray(post.tags) ? post.tags : [],
        cover_image: post.cover_image || null,
      };
      
      console.log("🔍 Datos específicos a actualizar:", updateData);
      console.log("🔍 ID del artículo:", id);
      
      await updateArticle(id!, updateData);
      
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
    if (!confirm("¿Eliminar definitivamente?")) return;
    await deleteArticle(id!);
    router.push("/admin/articulos");
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
            Título
          </label>
          <input
            id="title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Resumen */}
        <div>
          <label htmlFor="excerpt" className="block mb-1 font-medium">
            Resumen
          </label>
          <textarea
            id="excerpt"
            value={post.excerpt ?? ""}
            onChange={(e) =>
              setPost({ ...post, excerpt: e.target.value })
            }
            rows={3}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Contenido */}
        <div>
          <label htmlFor="content" className="block mb-1 font-medium">
            Contenido
          </label>
          <textarea
            id="content"
            value={post.content}
            onChange={(e) =>
              setPost({ ...post, content: e.target.value })
            }
            rows={10}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Categoría */}
        <div>
          <label htmlFor="category" className="block mb-1 font-medium">
            Categoría
          </label>
          <select
            id="category"
            value={post.category}
            onChange={(e) =>
              setPost({ ...post, category: e.target.value })
            }
            className="w-full border rounded px-3 py-2"
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
            value={
              Array.isArray(post.tags) ? post.tags.join(", ") : post.tags || ""
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
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Imagen de portada */}
        <div>
          <label htmlFor="cover_image" className="block mb-1 font-medium">
            URL Imagen de portada
          </label>
          <input
            id="cover_image"
            value={post.cover_image || ""}
            onChange={(e) =>
              setPost({ ...post, cover_image: e.target.value })
            }
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Botones */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleDelete}
            className="text-red-600 hover:underline"
          >
            Eliminar artículo
          </button>
          <button
            type="submit"
            disabled={saving}
            className={`px-4 py-2 rounded text-white ${
              saving ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {saving ? "Guardando…" : "Guardar cambios"}
          </button>
        </div>
      </form>
    </div>
  );
}
