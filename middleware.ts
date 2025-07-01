import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Verificar si la ruta requiere autenticación
  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin') && 
                      !req.nextUrl.pathname.startsWith('/admin/login');

  if (isAdminRoute) {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      // Redirigir al login si no hay sesión
      const redirectUrl = new URL('/admin/login', req.url);
      return NextResponse.redirect(redirectUrl);
    }
  }

  return res;
}

export const config = {
  matcher: [
    '/admin/:path*'
  ],
};
