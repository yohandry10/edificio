"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { updateArticle, deleteArticle } from "@/lib/articles";

export default function EditarArticulo({
  params,
}: {
  params: { id: string };
}) {
  const { id }       = params;
  const [post, setPost] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  // carga inicial
  useEffect(() => {
    supabase
      .from("articulos")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data }) => setPost(data));
  }, [id]);

  if (!post) return <p className="p-8">Cargando…</p>;

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await updateArticle(id, post);
    router.push("/admin/articulos");
  };

  const handleDelete = async () => {
    if (!confirm("¿Eliminar definitivamente?")) return;
    await deleteArticle(id);
    router.push("/admin/articulos");
  };

  return (
    <form onSubmit={handleSave} className="max-w-4xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Editar artículo</h1>

      <input
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        className="w-full border p-2 rounded"
      />

      <textarea
        value={post.excerpt ?? ""}
        onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
        rows={3}
        className="w-full border p-2 rounded"
      />

      <textarea
        value={post.content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
        rows={10}
        className="w-full border p-2 rounded"
      />

      {/* puedes añadir más campos (imagen, tags, etc.) */}

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={saving}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {saving ? "Guardando…" : "Guardar"}
        </button>

        <button
          type="button"
          onClick={handleDelete}
          className="text-red-600 px-4 py-2"
        >
          Eliminar
        </button>
      </div>
    </form>
  );
}
