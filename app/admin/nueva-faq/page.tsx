"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function NuevaFAQ() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Comprobar si el usuario está autenticado
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        throw new Error('Debes iniciar sesión para publicar preguntas frecuentes');
      }

      // Obtener el último orden para agregar esta pregunta al final
      const { data: existingFaqs, error: orderError } = await supabase
        .from('faqs')
        .select('order')
        .order('order', { ascending: false })
        .limit(1);

      const nextOrder = existingFaqs && existingFaqs.length > 0 
        ? (existingFaqs[0].order + 1) 
        : 1;

      // Insertar la nueva pregunta frecuente
      const { error: insertError } = await supabase
        .from('faqs')
        .insert({
          question,
          answer,
          order: nextOrder
        });

      if (insertError) throw insertError;
      
      setSuccess('Pregunta frecuente creada correctamente');
      setQuestion('');
      setAnswer('');
      
      // Redireccionar después de 2 segundos
      setTimeout(() => {
        router.push('/admin/faqs');
      }, 2000);
    } catch (error: any) {
      setError(error.message || 'Error al crear la pregunta frecuente');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Nueva Pregunta Frecuente</h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          
          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
              <span className="block sm:inline">{success}</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question">
                Pregunta
              </label>
              <Input
                id="question"
                type="text"
                value={question}
                onChange={e => setQuestion(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="answer">
                Respuesta
              </label>
              <Textarea
                id="answer"
                value={answer}
                onChange={e => setAnswer(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={5}
                required
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Button
                type="button"
                onClick={() => router.push('/admin/faqs')}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
              >
                {loading ? 'Guardando...' : 'Guardar Pregunta'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 