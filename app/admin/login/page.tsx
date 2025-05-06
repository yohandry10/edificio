"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState<string | null>(null);
  const [loading, setLoading]   = useState(false);
  const router                  = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      if (!data?.session) throw new Error("Sin sesión");

      /* 👉  Paso extra: enviamos los tokens al handler
       *     para que escriba las cookies en el servidor
       */
      await fetch("/api/auth/set", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_token:  data.session.access_token,
          refresh_token: data.session.refresh_token,
        }),
      });

      router.push("/admin/dashboard");
    } catch {
      setError("Credenciales inválidas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Panel de Administración
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Acceso exclusivo para el administrador
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="Email"
                className="appearance-none rounded-none relative block w-full
                           px-3 py-2 border border-gray-300 placeholder-gray-500
                           text-gray-900 rounded-t-md focus:outline-none
                           focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input
                id="password"
                type="password"
                required
                placeholder="Contraseña"
                className="appearance-none rounded-none relative block w-full
                           px-3 py-2 border border-gray-300 placeholder-gray-500
                           text-gray-900 rounded-b-md focus:outline-none
                           focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-2 px-4
                          border border-transparent text-sm font-medium rounded-md text-white
                          ${loading ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700"}
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
