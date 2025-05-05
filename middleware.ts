import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Permitir acceso libre al login
  if (req.nextUrl.pathname === '/admin/login') {
    return res;
  }

  // Para todas las demás rutas de admin, verificar autenticación
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  return res;
}

// Configurar las rutas que deben pasar por el middleware
export const config = {
  matcher: ['/admin/:path*']
};

