import { createClient } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Cliente básico de Supabase para operaciones generales
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

// Cliente específico para componentes que necesitan autenticación
export const supabaseAuth = createClientComponentClient();

// Helper para verificar si el usuario está autenticado
export async function isAuthenticated(): Promise<boolean> {
  try {
    const { data: { session } } = await supabaseAuth.auth.getSession();
    return !!session;
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false;
  }
}

// Helper para obtener la sesión actual
export async function getCurrentSession() {
  try {
    const { data: { session } } = await supabaseAuth.auth.getSession();
    return session;
  } catch (error) {
    console.error('Error getting session:', error);
    return null;
  }
}
