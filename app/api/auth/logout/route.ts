import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST() {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    
    // Hacer logout en Supabase
    await supabase.auth.signOut();
    
    // Crear respuesta que borre las cookies
    const response = NextResponse.json({ success: true });
    
    // Borrar todas las cookies de autenticación
    const cookieStore = cookies();
    cookieStore.getAll().forEach(cookie => {
      if (cookie.name.includes('supabase') || cookie.name.includes('sb-')) {
        response.cookies.delete(cookie.name);
      }
    });

    return response;
  } catch (error) {
    console.error('Error during logout:', error);
    
    // Incluso si hay error, borramos las cookies
    const response = NextResponse.json({ success: true });
    const cookieStore = cookies();
    cookieStore.getAll().forEach(cookie => {
      if (cookie.name.includes('supabase') || cookie.name.includes('sb-')) {
        response.cookies.delete(cookie.name);
      }
    });
    
    return response;
  }
} 