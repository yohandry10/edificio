"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Llamar a la API route de logout
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Limpiar localStorage como medida adicional
      if (typeof window !== 'undefined') {
        Object.keys(localStorage).forEach(key => {
          if (key.startsWith('sb-') || key.includes('supabase')) {
            localStorage.removeItem(key);
          }
        });
        localStorage.removeItem('user');
      }
      
      // Redirigir al login
      router.push("/admin/login");
      
    } catch (error) {
      console.error('Error during logout:', error);
      
      // Limpiar localStorage incluso si hay error
      if (typeof window !== 'undefined') {
        Object.keys(localStorage).forEach(key => {
          if (key.startsWith('sb-') || key.includes('supabase')) {
            localStorage.removeItem(key);
          }
        });
        localStorage.removeItem('user');
      }
      
      // Forzar redirección
      router.push("/admin/login");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
    >
      Cerrar Sesión
    </button>
  );
} 