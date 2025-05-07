"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

// Definir tipo para las FAQs
interface FAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
  created_at: string;
}

export default function FAQsAdmin() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFaqs();
  }, []);

  // Cargar preguntas frecuentes
  const loadFaqs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("faqs")
      .select("*")
      .order("order", { ascending: true });
    
    if (error) {
      console.error("Error cargando FAQs:", error);
    } else {
      setFaqs(data || []);
    }
    setLoading(false);
  };

  // Eliminar pregunta
  const handleDelete = async (id: string) => {
    if (!confirm("¿Eliminar definitivamente esta pregunta?")) return;
    
    const { error } = await supabase
      .from("faqs")
      .delete()
      .eq("id", id);
    
    if (error) {
      console.error("Error eliminando FAQ:", error);
      alert("Error al eliminar la pregunta");
    } else {
      setFaqs((prev) => prev.filter((faq) => faq.id !== id));
    }
  };

  // Cambiar orden
  const handleReorder = async (id: string, direction: "up" | "down") => {
    const currentIndex = faqs.findIndex(faq => faq.id === id);
    if (
      (direction === "up" && currentIndex === 0) || 
      (direction === "down" && currentIndex === faqs.length - 1)
    ) {
      return; // No se puede mover más arriba/abajo
    }

    const newIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
    const swapFaq = faqs[newIndex];
    
    // Intercambiar órdenes
    const { error: error1 } = await supabase
      .from("faqs")
      .update({ order: swapFaq.order })
      .eq("id", id);
      
    const { error: error2 } = await supabase
      .from("faqs")
      .update({ order: faqs[currentIndex].order })
      .eq("id", swapFaq.id);
    
    if (error1 || error2) {
      console.error("Error al reordenar:", error1 || error2);
      alert("Error al cambiar el orden");
    } else {
      loadFaqs(); // Recargar para obtener el nuevo orden
    }
  };

  if (loading) return <p className="p-8">Cargando…</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Preguntas Frecuentes</h1>
        <Link href="/admin/nueva-faq">
          <Button className="bg-green-600 hover:bg-green-700">Nueva Pregunta</Button>
        </Link>
      </div>

      {faqs.length === 0 ? (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
          <p className="text-yellow-800">
            No hay preguntas frecuentes. Haz clic en "Nueva Pregunta" para crear la primera.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600 line-clamp-2">{faq.answer}</p>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    disabled={faqs.indexOf(faq) === 0}
                    onClick={() => handleReorder(faq.id, "up")}
                  >
                    ↑
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    disabled={faqs.indexOf(faq) === faqs.length - 1}
                    onClick={() => handleReorder(faq.id, "down")}
                  >
                    ↓
                  </Button>
                  <Link href={`/admin/editar-faq/${faq.id}`}>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-red-600 border-red-200 hover:bg-red-50"
                    onClick={() => handleDelete(faq.id)}
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 