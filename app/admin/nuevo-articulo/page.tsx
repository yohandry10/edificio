"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function NuevoArticulo() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [authorName, setAuthorName] = useState("Casa Grande");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  function slugify(text: string) {
    return (
      text
        .toString()
        .normalize("NFD")
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .toLowerCase() || "articulo"
    );
  }

  const handleImageUpload = async (): Promise<string> => {
    if (!imageFile) return "";
    const fileExt = imageFile.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const { error: uploadError } = await supabase.storage
      .from("articulos")
      .upload(fileName, imageFile);
    if (uploadError) {
      setError("Error al subir la imagen");
      return "";
    }
    const { data: urlData } = supabase.storage
      .from("articulos")
      .getPublicUrl(fileName);
    return urlData.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        throw new Error("Debes iniciar sesión para publicar artículos");
      }

      const tagsArray = tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t);

      let finalImageUrl = imageUrl;
      if (imageFile) {
        finalImageUrl = await handleImageUpload();
      }

      const baseSlug = slugify(title);
      let slug = baseSlug;
      let count = 1;
      let exists = true;
      let attempts = 0;
      while (exists && attempts < 100) {
        const { data: existing, error: slugError } = await supabase
          .from("articulos")
          .select("id")
          .eq("slug", slug)
          .limit(1);
        if (slugError) throw new Error("Error comprobando slug único");
        exists = !!(existing && existing.length > 0);
        if (exists) {
          count++;
          slug = `${baseSlug}-${count}`;
        }
        attempts++;
      }
      if (attempts >= 100) {
        throw new Error(
          "No se pudo generar un slug único. Intenta con otro título."
        );
      }

      const { error: insertError } = await supabase.from("articulos").insert({
        title,
        slug,
        excerpt,
        content,
        cover_image: finalImageUrl || null,
        author_name: authorName,
        tags: tagsArray,
        category,
        published: true,
      });
      if (insertError) throw insertError;

      setSuccess("Artículo publicado correctamente");
      setTitle("");
      setExcerpt("");
      setContent("");
      setCategory("General");
      setImageUrl("");
      setImageFile(null);
      setTags("");

      setTimeout(() => {
        router.push("/admin/dashboard");
      }, 1500);
    } catch (err: any) {
      setError(err.message || "Error al publicar el artículo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-16 pb-10">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Nuevo Artículo</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Título */}
          <div>
            <label htmlFor="title" className="block mb-1 font-medium">
              Título
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* Resumen */}
          <div>
            <label htmlFor="excerpt" className="block mb-1 font-medium">
              Resumen
            </label>
            <textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full border rounded px-3 py-2"
              rows={3}
            />
          </div>

          {/* Contenido */}
          <div>
            <label htmlFor="content" className="block mb-1 font-medium">
              Contenido
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border rounded px-3 py-2"
              rows={8}
              required
            />
          </div>

          {/* Categoría */}
          <div>
            <label htmlFor="category" className="block mb-1 font-medium">
              Categoría
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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

          {/* Imagen de portada */}
          <div>
            <label htmlFor="imageUrl" className="block mb-1 font-medium">
              Imagen de portada (URL)
            </label>
            <input
              id="imageUrl"
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-2"
              placeholder="https://..."
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImageFile(e.target.files ? e.target.files[0] : null)
              }
              className="w-full"
            />
          </div>

          {/* Autor */}
          <div>
            <label htmlFor="authorName" className="block mb-1 font-medium">
              Autor
            </label>
            <input
              id="authorName"
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* Etiquetas */}
          <div>
            <label htmlFor="tags" className="block mb-1 font-medium">
              Etiquetas (separadas por comas)
            </label>
            <input
              id="tags"
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="administración, edificios, mantenimiento"
            />
          </div>

          {/* Botones */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => router.push("/admin/dashboard")}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 rounded text-white ${
                loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {loading ? "Publicando..." : "Publicar Artículo"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
