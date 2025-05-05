"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      // Limpiar cualquier estado local si es necesario
      localStorage.removeItem('user');
      
      // Redirigir al login
      router.push("/admin/login");
      router.refresh(); // Forzar actualización de la página
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
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