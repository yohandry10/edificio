import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const { access_token, refresh_token } = await request.json();

  if (!access_token || !refresh_token) {
    return NextResponse.json(
      { error: "Faltan tokens" },
      { status: 400 }
    );
  }

  const supabase = createRouteHandlerClient({ cookies });

  // Graba la sesión en cookies de TU dominio
  await supabase.auth.setSession({
    access_token,
    refresh_token,
  });

  return NextResponse.json({ ok: true });
}
