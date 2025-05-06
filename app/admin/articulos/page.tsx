"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { deleteArticle } from "@/lib/articles";

export default function ArticulosAdmin() {
  const [posts, setPosts]   = useState<any[]>([]);
  const [loading, setLoad]  = useState(true);

  useEffect(() => {
    supabase
      .from("articulos")
      .select("id,title,category,created_at")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setPosts(data ?? []);
        setLoad(false);
      });
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("¿Eliminar definitivamente?")) return;
    await deleteArticle(id);
    setPosts((p) => p.filter((a) => a.id !== id));
  };

  if (loading) return <p className="p-8">Cargando…</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Artículos</h1>

      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b font-medium">
            <th className="py-1">Título</th>
            <th className="py-1">Categoría</th>
            <th className="py-1">Fecha</th>
            <th className="py-1 w-32" />
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p.id} className="border-b">
              <td className="py-1">{p.title}</td>
              <td className="py-1">{p.category}</td>
              <td className="py-1">
                {new Date(p.created_at).toLocaleDateString()}
              </td>
              <td className="py-1 flex gap-3">
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
  );
}
