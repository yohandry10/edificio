"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function NuevoArticulo() {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [authorName, setAuthorName] = useState('Casa Grande');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  // Generar slug automáticamente desde el título
  function slugify(text: string) {
    return text
      .toString()
      .normalize('NFD')
      .replace(/[^\w\s-]/g, '') // Solo letras, números, guiones y espacios
      .trim()
      .replace(/\s+/g, '-') // Espacios por guion
      .replace(/-+/g, '-') // Varios guiones juntos por uno
      .toLowerCase() || 'articulo'; // fallback si queda vacío
  }

  const handleImageUpload = async () => {
    if (!imageFile) return '';
    const fileExt = imageFile.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const { data, error } = await supabase.storage
      .from('articulos')
      .upload(fileName, imageFile);
    if (error) {
      setError('Error al subir la imagen');
      return '';
    }
    const { data: urlData } = supabase.storage.from('articulos').getPublicUrl(fileName);
    return urlData.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Comprobar si el usuario está autenticado
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        throw new Error('Debes iniciar sesión para publicar artículos');
      }

      // Preparar los tags como array
      const tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag);

      // Subir imagen si hay archivo
      let finalImageUrl = imageUrl;
      if (imageFile) {
        finalImageUrl = await handleImageUpload();
      }

      // Generar slug automáticamente y asegurarse que sea único
      const baseSlug = slugify(title);
      let slug = baseSlug;
      let count = 1;
      let intentos = 0;
      let exists = true;
      while (exists && intentos < 100) {
        const { data: existing, error: slugError } = await supabase
          .from('articulos')
          .select('id')
          .eq('slug', slug)
          .limit(1);
        if (slugError) throw new Error('Error comprobando slug único');
        exists = existing && existing.length > 0;
        if (exists) {
          count++;
          slug = `${baseSlug}-${count}`;
        }
        intentos++;
      }
      if (intentos >= 100) throw new Error('No se pudo generar un slug único. Intenta con otro título.');

      // Insertar el artículo en Supabase
      const { data, error: insertError } = await supabase
        .from('articulos')
        .insert({
          title,
          slug,
          excerpt,
          content,
          cover_image: finalImageUrl || null,
          author_name: authorName,
          tags: tagsArray,
          published: true
        });

      if (insertError) throw insertError;
      setSuccess('Artículo publicado correctamente');
      setTitle('');
      setExcerpt('');
      setContent('');
      setImageUrl('');
      setImageFile(null);
      setTags('');
      setTimeout(() => {
        router.push('/admin/dashboard');
      }, 2000);
    } catch (error: any) {
      setError(error.message || 'Error al publicar el artículo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Nuevo Artículo</h1>
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Título
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="excerpt">
                Resumen
              </label>
              <textarea
                id="excerpt"
                value={excerpt}
                onChange={e => setExcerpt(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                Contenido
              </label>
              <textarea
                id="content"
                value={content}
                onChange={e => setContent(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={10}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
                Imagen de portada (opcional)
              </label>
              <input
                id="imageUrl"
                type="url"
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                placeholder="Pega una URL de imagen o sube una imagen abajo"
              />
              <input
                type="file"
                accept="image/*"
                onChange={e => setImageFile(e.target.files ? e.target.files[0] : null)}
                className="mt-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="authorName">
                Autor
              </label>
              <input
                id="authorName"
                type="text"
                value={authorName}
                onChange={e => setAuthorName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
                Etiquetas (separadas por comas)
              </label>
              <input
                id="tags"
                type="text"
                value={tags}
                onChange={e => setTags(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="administración, edificios, mantenimiento"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => router.push('/admin/dashboard')}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
              >
                {loading ? 'Publicando...' : 'Publicar Artículo'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 