import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient(
    { req, res },
    {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    }
  );

  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname === "/favicon.ico"
  ) {
    return res;
  }

  if (req.nextUrl.pathname === "/admin/login") {
    return res;
  }

  if (req.nextUrl.pathname.startsWith("/admin")) {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error || !session) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return res;
}

export const config = {
  matcher: ["/admin/:path*"],
};
