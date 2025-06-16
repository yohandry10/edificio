import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('🚀 API Contact: Iniciando procesamiento con EmailJS');
  
  try {
    console.log('📥 API Contact: Extrayendo datos del request');
    const body = await request.json();
    console.log('📋 API Contact: Body completo recibido:', body);
    
    const { nombre, apellido, email, mensaje } = body;
    
    console.log('📋 API Contact: Datos recibidos:', {
      nombre: nombre || 'VACÍO',
      apellido: apellido || 'VACÍO', 
      email: email || 'VACÍO',
      mensaje: mensaje ? `${mensaje.substring(0, 50)}...` : 'VACÍO'
    });

    // Validar que todos los campos requeridos estén presentes
    if (!nombre || !apellido || !email || !mensaje) {
      console.log('❌ API Contact: Validación fallida - campos faltantes');
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }
    
    console.log('✅ API Contact: Validación exitosa, todos los campos presentes');

    // Preparar datos para EmailJS
    const templateParams = {
      from_name: `${nombre} ${apellido}`,
      reply_to: email,
      message: mensaje,
      to_email: 'a_santacruz@administracionedificiosperu.com'
    };

    console.log('📧 API Contact: Preparando datos para EmailJS:', templateParams);

    // Enviar email usando EmailJS REST API
    console.log('🚀 API Contact: Enviando correo via EmailJS...');
    
    const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
             body: JSON.stringify({
         service_id: 'service_uem9wwe',
         template_id: 'template_pgyoqbh',
         user_id: 'S_A_4TS8viFEP5UVIW',
         template_params: templateParams
       })
    });

    console.log('📡 API Contact: Respuesta de EmailJS:', emailjsResponse.status);

    if (emailjsResponse.ok) {
      console.log('✅ API Contact: Correo enviado exitosamente via EmailJS!');
      return NextResponse.json(
        { 
          success: true, 
          message: 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.' 
        },
        { status: 200 }
      );
    } else {
      const errorText = await emailjsResponse.text();
      console.log('❌ API Contact: Error de EmailJS:', errorText);
      throw new Error(`EmailJS error: ${errorText}`);
    }

  } catch (error) {
    console.error('❌ API Contact: Error completo:', error);
    console.error('❌ API Contact: Tipo de error:', typeof error);
    console.error('❌ API Contact: Mensaje de error:', error instanceof Error ? error.message : String(error));
    
    return NextResponse.json(
      { 
        error: 'Error interno del servidor. Por favor, intenta nuevamente más tarde.' 
      },
      { status: 500 }
    );
  }
} 