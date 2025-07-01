const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

// === CONFIGURACIÓN ORIGEN (cuenta actual) ===
const ORIGEN_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ORIGEN_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// === CONFIGURACIÓN DESTINO (nueva cuenta) ===
// CAMBIAR ESTAS POR LAS DE TU NUEVA CUENTA
const DESTINO_URL = 'https://tu-nuevo-proyecto.supabase.co';
const DESTINO_KEY = 'tu-nueva-service-role-key';

const supabaseOrigen = createClient(ORIGEN_URL, ORIGEN_KEY);
const supabaseDestino = createClient(DESTINO_URL, DESTINO_KEY);

async function crearTablas() {
  console.log('🏗️ Creando tablas en la nueva cuenta...');
  
  // Crear tabla articulos
  const { error: articulosError } = await supabaseDestino.rpc('exec', {
    sql: `
      CREATE TABLE IF NOT EXISTS public.articulos (
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
        category TEXT DEFAULT 'General',
        published BOOLEAN DEFAULT false
      );
      
      CREATE INDEX IF NOT EXISTS articulos_slug_idx ON public.articulos(slug);
      CREATE INDEX IF NOT EXISTS articulos_category_idx ON public.articulos(category);
      
      ALTER TABLE public.articulos ENABLE ROW LEVEL SECURITY;
      
      CREATE POLICY IF NOT EXISTS "Permitir lectura pública" 
        ON public.articulos FOR SELECT USING (true);
      
      CREATE POLICY IF NOT EXISTS "Permitir escritura a autenticados" 
        ON public.articulos FOR ALL USING (auth.role() = 'authenticated');
    `
  });

  if (articulosError) {
    console.error('❌ Error creando tabla articulos:', articulosError);
    return false;
  }

  // Crear tabla faqs
  const { error: faqsError } = await supabaseDestino.rpc('exec', {
    sql: `
      CREATE TABLE IF NOT EXISTS public.faqs (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
        question TEXT NOT NULL,
        answer TEXT NOT NULL,
        "order" INTEGER DEFAULT 1
      );
      
      CREATE INDEX IF NOT EXISTS faqs_order_idx ON public.faqs("order");
      
      ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
      
      CREATE POLICY IF NOT EXISTS "Permitir lectura pública faqs" 
        ON public.faqs FOR SELECT USING (true);
      
      CREATE POLICY IF NOT EXISTS "Permitir escritura a autenticados faqs" 
        ON public.faqs FOR ALL USING (auth.role() = 'authenticated');
    `
  });

  if (faqsError) {
    console.error('❌ Error creando tabla faqs:', faqsError);
    return false;
  }

  console.log('✅ Tablas creadas exitosamente');
  return true;
}

async function migrarArticulos() {
  console.log('📝 Migrando artículos...');
  
  // Obtener todos los artículos del origen
  const { data: articulos, error: fetchError } = await supabaseOrigen
    .from('articulos')
    .select('*')
    .order('created_at', { ascending: true });

  if (fetchError) {
    console.error('❌ Error obteniendo artículos:', fetchError);
    return false;
  }

  if (!articulos || articulos.length === 0) {
    console.log('ℹ️ No hay artículos para migrar');
    return true;
  }

  // Insertar artículos en el destino (en lotes de 100)
  const batchSize = 100;
  for (let i = 0; i < articulos.length; i += batchSize) {
    const batch = articulos.slice(i, i + batchSize);
    
    const { error: insertError } = await supabaseDestino
      .from('articulos')
      .insert(batch);

    if (insertError) {
      console.error(`❌ Error insertando lote ${i/batchSize + 1}:`, insertError);
      return false;
    }
    
    console.log(`✅ Migrados ${Math.min(i + batchSize, articulos.length)}/${articulos.length} artículos`);
  }

  console.log(`✅ ${articulos.length} artículos migrados exitosamente`);
  return true;
}

async function migrarFaqs() {
  console.log('❓ Migrando FAQs...');
  
  // Obtener todas las FAQs del origen
  const { data: faqs, error: fetchError } = await supabaseOrigen
    .from('faqs')
    .select('*')
    .order('order', { ascending: true });

  if (fetchError) {
    console.error('❌ Error obteniendo FAQs:', fetchError);
    return false;
  }

  if (!faqs || faqs.length === 0) {
    console.log('ℹ️ No hay FAQs para migrar');
    return true;
  }

  // Insertar FAQs en el destino
  const { error: insertError } = await supabaseDestino
    .from('faqs')
    .insert(faqs);

  if (insertError) {
    console.error('❌ Error insertando FAQs:', insertError);
    return false;
  }

  console.log(`✅ ${faqs.length} FAQs migradas exitosamente`);
  return true;
}

async function verificarMigracion() {
  console.log('🔍 Verificando migración...');
  
  // Verificar artículos
  const { data: articulosOrigen } = await supabaseOrigen.from('articulos').select('id').eq('published', true);
  const { data: articulosDestino } = await supabaseDestino.from('articulos').select('id').eq('published', true);
  
  console.log(`📊 Artículos publicados - Origen: ${articulosOrigen?.length || 0}, Destino: ${articulosDestino?.length || 0}`);
  
  // Verificar FAQs
  const { data: faqsOrigen } = await supabaseOrigen.from('faqs').select('id');
  const { data: faqsDestino } = await supabaseDestino.from('faqs').select('id');
  
  console.log(`📊 FAQs - Origen: ${faqsOrigen?.length || 0}, Destino: ${faqsDestino?.length || 0}`);
  
  if ((articulosOrigen?.length || 0) === (articulosDestino?.length || 0) && 
      (faqsOrigen?.length || 0) === (faqsDestino?.length || 0)) {
    console.log('✅ Migración completada exitosamente');
    return true;
  } else {
    console.log('⚠️ Posibles diferencias en la migración');
    return false;
  }
}

async function ejecutarMigracion() {
  console.log('🚀 Iniciando migración de Supabase...\n');
  
  try {
    // Paso 1: Crear tablas
    if (!await crearTablas()) {
      throw new Error('Error creando tablas');
    }
    
    console.log('');
    
    // Paso 2: Migrar artículos
    if (!await migrarArticulos()) {
      throw new Error('Error migrando artículos');
    }
    
    console.log('');
    
    // Paso 3: Migrar FAQs
    if (!await migrarFaqs()) {
      throw new Error('Error migrando FAQs');
    }
    
    console.log('');
    
    // Paso 4: Verificar migración
    await verificarMigracion();
    
    console.log('\n🎉 ¡Migración completada exitosamente!');
    console.log('\n📋 Próximos pasos:');
    console.log('1. Actualizar las variables de entorno (.env.local)');
    console.log('2. Crear el usuario admin en la nueva cuenta');
    console.log('3. Verificar que todo funcione correctamente');
    
  } catch (error) {
    console.error('\n💥 Error durante la migración:', error.message);
    process.exit(1);
  }
}

// Ejecutar migración
ejecutarMigracion(); 