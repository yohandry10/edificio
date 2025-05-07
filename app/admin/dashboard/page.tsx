"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold">Panel de Administración</h1>
          {/* ⇢ futuro botón logout */}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-2">¡Bienvenido!</h2>
          <p className="text-gray-600">
            Gestiona el contenido de tu sitio: crea, edita o elimina artículos.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/admin/nuevo-articulo" className="block">
            <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-1">Nuevo artículo</h3>
              <p className="text-gray-600">Crear y publicar un artículo</p>
            </article>
          </Link>

          <Link href="/admin/articulos" className="block">
            <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-1">Ver / Editar</h3>
              <p className="text-gray-600">
                Lista completa para editar o eliminar entradas
              </p>
            </article>
          </Link>

          <Link href="/admin/faqs" className="block">
            <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-1">Preguntas Frecuentes</h3>
              <p className="text-gray-600">
                Gestionar preguntas y respuestas para la página de contacto
              </p>
            </article>
          </Link>
        </section>
      </main>
    </div>
  );
}
