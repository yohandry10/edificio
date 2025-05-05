// Script para crear la tabla 'articulos' en Supabase
const { createClient } = require('@supabase/supabase-js');

// Obtener variables de entorno del archivo .env.local
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Error: Variables de entorno de Supabase no encontradas');
  process.exit(1);
}

// Crear cliente Supabase con clave de servicio para tener permisos completos
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createArticulosTable() {
  try {
    console.log('Verificando si la tabla articulos existe...');
    
    // Verificar si la tabla ya existe
    const { data: existingTables, error: listError } = await supabase
      .from('pg_tables')
      .select('tablename')
      .eq('schemaname', 'public')
      .eq('tablename', 'articulos');
    
    if (listError) {
      throw new Error(`Error al verificar tablas existentes: ${listError.message}`);
    }
    
    // Si la tabla ya existe, no hacer nada
    if (existingTables && existingTables.length > 0) {
      console.log('La tabla articulos ya existe. No se necesita crear.');
      return;
    }
    
    console.log('Creando tabla articulos...');
    
    // SQL para crear la tabla
    const { error: createError } = await supabase.rpc('execute_sql', {
      query: `
        CREATE TABLE public.articulos (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
          title TEXT NOT NULL,
          slug TEXT NOT NULL UNIQUE,
          excerpt TEXT,
          content TEXT NOT NULL,
          cover_image TEXT,
          author_name TEXT DEFAULT 'Casa Grande',
          author_image TEXT,
          tags TEXT[],
          published BOOLEAN DEFAULT false
        );
        
        -- Crear índice para búsquedas rápidas por slug
        CREATE INDEX articulos_slug_idx ON public.articulos(slug);
        
        -- Crear política para permitir lectura a todos
        CREATE POLICY "Permitir lectura pública" 
          ON public.articulos 
          FOR SELECT 
          USING (true);
        
        -- Política para inserción/edición solo para usuarios autenticados
        CREATE POLICY "Permitir inserción a usuarios autenticados" 
          ON public.articulos 
          FOR INSERT 
          WITH CHECK (auth.role() = 'authenticated');
        
        CREATE POLICY "Permitir actualización a usuarios autenticados" 
          ON public.articulos 
          FOR UPDATE 
          USING (auth.role() = 'authenticated');
        
        CREATE POLICY "Permitir eliminación a usuarios autenticados" 
          ON public.articulos 
          FOR DELETE 
          USING (auth.role() = 'authenticated');
          
        -- Habilitar RLS en la tabla
        ALTER TABLE public.articulos ENABLE ROW LEVEL SECURITY;
      `
    });
    
    if (createError) {
      throw new Error(`Error al crear la tabla: ${createError.message}`);
    }
    
    console.log('✅ Tabla articulos creada exitosamente');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Ejecutar la función
createArticulosTable(); 