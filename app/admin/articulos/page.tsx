"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { deleteArticle } from "@/lib/articles";

export default function ArticulosAdmin() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("articulos")
      .select("id,title,category,created_at")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setPosts(data ?? []);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("¿Eliminar definitivamente?")) return;
    await deleteArticle(id);
    setPosts((prev) => prev.filter((a) => a.id !== id));
  };

  if (loading) return <p className="p-8">Cargando…</p>;

  return (
    <div className="min-h-screen bg-gray-100 pt-16 pb-10">
      <div className="max-w-6xl mx-auto p-6 space-y-4">
        <h1 className="text-2xl font-bold">Artículos</h1>
        <table className="w-full text-left text-sm bg-white rounded-lg overflow-hidden shadow mt-4">
          <thead className="bg-gray-200">
            <tr className="font-medium">
              <th className="py-2 px-3">Título</th>
              <th className="py-2 px-3">Categoría</th>
              <th className="py-2 px-3">Fecha</th>
              <th className="py-2 px-3 w-32">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="py-2 px-3">{p.title}</td>
                <td className="py-2 px-3">{p.category}</td>
                <td className="py-2 px-3">
                  {new Date(p.created_at).toLocaleDateString("es-ES")}
                </td>
                <td className="py-2 px-3 flex gap-4">
                  <Link
                    href={`/admin/editar-articulo/${p.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="text-red-600 hover:underline"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
);
}
