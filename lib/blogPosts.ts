// lib/blogPosts.ts
//-------------------------------------------------------------
// 1. Import Supabase client
//-------------------------------------------------------------
import { supabase } from "./supabase";


//-------------------------------------------------------------
// 2. Tipo de dato – debe reflejar lo que usa el front‑end
//-------------------------------------------------------------
export interface BlogPost {
  id:        string;
  title:     string;
  slug:      string;
  excerpt:   string;
  content:   string;
  image:     string | null; // cover_image       (puede ser nulo)
  author:    string;        // author_name
  date:      string;        // creado → formateado
  category:  string;
  tags?:     string[];
  // Campos extra por si luego quieres ordenar / filtrar
  created_at?: string;
}

//-------------------------------------------------------------
// 3. Entradas estáticas (pégalas completas aquí)
//-------------------------------------------------------------
export const staticBlogPosts: BlogPost[] = [
    {
      id: "1",
      title: "¿CUÁNTO SABES SOBRE ADMINISTRACIÓN DE EDIFICIOS?",
      slug: "cuanto-sabes-sobre-administracion-edificios",
      excerpt: "Es conveniente como copropietario tener un conocimiento mínimo, el cual se puede adquirir mediante lectura, investigación o asesoría.",
      content: `Es conveniente como copropietario tener un conocimiento mínimo, el cual se puede adquirir mediante lectura, investigación o asesoría.
  
  ## Test de Conocimientos
  
  ### 1. ¿Qué es un plan estratégico en la gestión administrativa de un edificio?
     a. Un calendario de actividades mensuales.
     b. Un plan para manejar emergencias.
     c. Una estrategia a largo plazo para alcanzar los objetivos del edificio.
  
  ### 2. ¿Cuál es una responsabilidad común de la administración de edificios?
     a. El mantenimiento al interior de los departamentos de los residentes.
     b. La contratación de proveedores de servicios.
     c. Ayudar a gestionar el alquiler Airbnb del dpto. de un residente.
  
  ### 3. ¿Qué es un presupuesto en la gestión administrativa de un edificio?
     a. Una lista de tareas a realizar.
     b. Una proyección de los ingresos y gastos del edificio.
     c. Un informe de las reparaciones realizadas.
  
  ### 4. ¿Cómo se deben manejar las situaciones de emergencia en un edificio?
     a. Confiar en que se resuelvan solas.
     b. Desarrollar un plan de acción en caso de emergencia y comunicarlo a los residentes.
     c. Llamar a los residentes para informarles de la situación.
  
  ### 5. ¿Por qué es importante la comunicación entre la administración y los residentes en un edificio?
     a. Para que los residentes se sientan importantes.
     b. Para fomentar un ambiente de colaboración y participación de los residentes.
     c. Para evitar que los residentes hagan preguntas.
  
  ## Respuestas Correctas
  
  1. c) Una estrategia a largo plazo para alcanzar los objetivos del edificio.
  2. b) La contratación de proveedores de servicios.
  3. b) Una proyección de los ingresos y gastos del edificio.
  4. b) Tener un plan de acción en caso de emergencia y comunicarlo a los residentes.
  5. b) Para fomentar un ambiente de colaboración y participación de los residentes.
  
  ---
  
  👉👉 En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios logren la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/blog1.webp",
      author: "Casa Grande",
      date: "13/03/2010",
      category: "Administración de Edificios",
      tags: ["Convivencia Edificios", "Junta Propietarios"],
    },
    
    
  
    {
      id: "5",
      title: "DERECHOS LABORALES DEL PORTERO EN UN EDIFICIO",
      slug: "derechos-laborales-portero",
      excerpt: "Los porteros cumplen un papel fundamental en la administración de edificios y condominios. Conoce sus derechos laborales y beneficios según la legislación peruana.",
      content: `# Derechos Laborales del Portero en un Edificio
  
  ## Introducción
  
  Los porteros cumplen un papel fundamental en la administración de edificios y condominios, garantizando la seguridad, el orden y la atención a los residentes. Es esencial conocer sus derechos laborales y los beneficios que les corresponden según la legislación peruana.
  
  ## Base Legal 📜
  
  ### Marco Normativo Principal
  - Decreto Supremo N° 003-97-TR: Regula derechos laborales en régimen privado
  - Decreto Supremo N° 009-2010-TR: Específico para trabajadores en microempresas
  - Reglamento Interno de cada Edificio o Condominio
  
  ### Régimen Laboral
  Los porteros son considerados trabajadores bajo el régimen de la actividad privada, gozando de todos los derechos laborales correspondientes.
  
  ## Derechos Laborales Fundamentales 👨‍💼
  
  ### 1. Jornada Laboral y Horarios ⏰
  - Jornada máxima: 8 horas diarias o 48 horas semanales
  - Trabajo en turnos rotativos con recargo nocturno
  - Descanso semanal remunerado obligatorio
  
  ### 2. Remuneración y Beneficios 💰
  - Sueldo mínimo vital: S/1,130.00
  - Gratificaciones en julio y diciembre
  - CTS (Compensación por Tiempo de Servicios)
  - 30 días de vacaciones pagadas anuales
  
  ### 3. Seguridad Social y Pensiones 🏥
  - Afiliación obligatoria a EsSalud
  - Sistema de pensiones (AFP u ONP)
  - Seguro Complementario de Trabajo de Riesgo (SCTR) cuando aplique
  
  ### 4. Horas Extras y Trabajo Nocturno 🌙
  - 25% adicional por hora extra
  - 35% adicional en horario nocturno (10:00 p.m. - 6:00 a.m.)
  
  ### 5. Protección contra Despido ⚖️
  - Indemnización por despido arbitrario
  - 1.5 sueldos por año trabajado como compensación
  - Derecho a presentar denuncias ante SUNAFIL
  
  ## Obligaciones del Empleador 📋
  
  ### Responsabilidades de la Junta de Propietarios
  1. Registro en planilla
  2. Pago puntual de beneficios laborales
  3. Cumplimiento de jornada establecida
  4. Garantizar condiciones de seguridad
  
  ### Consecuencias del Incumplimiento
  - Multas por parte de SUNAFIL
  - Procesos laborales
  - Sanciones administrativas
  
  ## Régimen REMYPE 📊
  
  Si la Junta de Propietarios está inscrita en el régimen de microempresa:
  - Beneficios pueden reducirse
  - Mantienen derechos fundamentales
  - Requiere registro formal en REMYPE
  
  ## Procedimiento ante Vulneración de Derechos ⚠️
  
  ### Pasos a Seguir
  1. Comunicación directa con administración
  2. Presentación de reclamo formal
  3. Denuncia ante SUNAFIL
  4. Asesoría legal especializada
  
  ### Canales de Denuncia
  - Ministerio de Trabajo
  - SUNAFIL
  - Poder Judicial (vía laboral)
  
  ## Recomendaciones para Juntas de Propietarios 💡
  
  1. Mantener documentación actualizada
  2. Realizar contratos formales
  3. Cumplir con pagos y beneficios
  4. Establecer horarios claros
  5. Proporcionar condiciones laborales adecuadas
  
  ## Conclusiones
  
  El cumplimiento de los derechos laborales del portero no solo es una obligación legal, sino también una responsabilidad ética que contribuye al buen funcionamiento del edificio y al bienestar de todos los residentes.
  
  ---
  
  ¿Necesitas asesoría sobre la gestión laboral de tu personal de portería? En Casa Grande te ayudamos a cumplir con todas las normativas vigentes. ¡Contáctanos! 📞`,
      image: "/e3.webp",
      author: "Casa Grande",
      date: "14/03/2025",
      category: "Legal",
      tags: ["Derecho Laboral", "Portero"],
    },
    {
      id: "6",
      title: "¿Tu edificio ya tiene Presupuesto para este 2025?",
      slug: "presupuesto-edificio-2025",
      excerpt: "La planificación del presupuesto anual es clave para la sostenibilidad y el buen funcionamiento de las áreas comunes de un edificio.",
      content: `# Presupuesto del Edificio para 2025: Guía Completa
  
  ## Introducción
  
  La planificación del presupuesto anual es una tarea crucial para la administración eficiente de un edificio. Un presupuesto bien estructurado garantiza el mantenimiento adecuado de las instalaciones y servicios comunes, evitando problemas financieros y técnicos a futuro.
  
  ## ¿Por Qué es Importante un Presupuesto Anual? 📊
  
  Un presupuesto bien planificado permite:
  - Prever gastos futuros
  - Mantener cuotas de mantenimiento estables
  - Evitar derramas extraordinarias
  - Garantizar el buen estado del edificio
  - Mantener el valor de las propiedades
  
  ## Componentes Principales del Presupuesto 🏗️
  
  ### 1. Gastos Fijos Mensuales
  - Servicios básicos (agua, luz)
  - Limpieza y mantenimiento regular
  - Sueldos del personal
  - Seguros del edificio
  - Servicios de administración
  
  ### 2. Gastos Variables
  - Reparaciones imprevistas
  - Mantenimientos especiales
  - Mejoras en áreas comunes
  - Eventos comunitarios
  
  ### 3. Fondo de Reserva
  - Emergencias y contingencias
  - Proyectos futuros de mejora
  - Reemplazos de equipos mayores
  
  ## ¿Cómo Calcular el Presupuesto? 💰
  
  ### 1. Análisis de Gastos Históricos
  - Revisar gastos del año anterior
  - Identificar patrones de consumo
  - Detectar áreas de ahorro potencial
  
  ### 2. Proyección de Incrementos
  - Inflación estimada
  - Aumentos en servicios básicos
  - Ajustes salariales previstos
  
  ### 3. Planificación de Proyectos
  - Mantenimientos programados
  - Mejoras planificadas
  - Renovaciones necesarias
  
  ## Distribución Recomendada del Presupuesto 📈
  
  - **60%** Gastos operativos
  - **25%** Mantenimiento preventivo
  - **15%** Fondo de reserva
  
  ## Errores Comunes a Evitar ⚠️
  
  1. No considerar la inflación
  2. Ignorar el mantenimiento preventivo
  3. Prescindir del fondo de reserva
  4. Subestimar gastos variables
  5. No actualizar cuotas regularmente
  
  ## Tips para Optimizar el Presupuesto 💡
  
  ### 1. Ahorro Energético
  - Iluminación LED
  - Sensores de movimiento
  - Temporizadores
  
  ### 2. Negociación con Proveedores
  - Contratos anuales
  - Descuentos por pronto pago
  - Servicios integrados
  
  ### 3. Mantenimiento Preventivo
  - Programar revisiones regulares
  - Anticipar reemplazos
  - Documentar intervenciones
  
  ### 4. Control de Gastos
  - Sistema de registro detallado
  - Comparativas mensuales
  - Auditorías periódicas
  
  ## Pasos para Elaborar el Presupuesto 2025 📝
  
  1. **Recopilación de Información:** Gastos históricos, cotizaciones, proyectos.
  2. **Análisis y Proyección:** Calcular incrementos, evaluar nuevos servicios.
  3. **Presentación y Aprobación:** Informe detallado, convocar junta.
  4. **Implementación y Seguimiento:** Establecer control, monitorear, ajustar.
  
  ## Objetivos Financieros Recomendados 🎯
  
  - Mantener morosidad bajo 5%
  - Incrementar fondo de reserva
  - Optimizar gastos operativos
  - Implementar mejoras sostenibles
  - Evitar derramas extraordinarias
  
  ## Marco Legal a Considerar ⚖️
  
  - Ley N° 27157 - Régimen de propiedad horizontal
  - Reglamento interno del edificio
  - Normas municipales aplicables
  - Regulaciones de servicios públicos
  
  ## Conclusión
  
  Un presupuesto bien planificado es la base para una administración exitosa. No dejes para último momento esta importante tarea.
  
  ### ¿Cómo Puede Ayudar Casa Grande?
  - Elaboración de presupuesto 2025
  - Optimización de gastos
  - Implementación de controles
  - Gestión de proveedores
  - Planificación de mantenimientos
  
  ### Servicios Adicionales 💼
  - Auditoría de gastos
  - Asesoría financiera
  - Gestión de cobranzas
  - Reportes mensuales
  - Software de control
  
  ---
  
  ¡Contáctanos para una asesoría personalizada! Juntos podemos hacer que tu edificio sea financieramente sostenible. 🏢✨`,
      image: "/e4.webp",
      author: "Casa Grande",
      date: "04/01/2025",
      category: "Finanzas",
      tags: ["Presupuesto", "Finanzas Edificio"],
    },
    {
      id: "7",
      title: "LEY SOBRE PROBLEMAS TÉCNICOS Y COSTOS DE MANTENIMIENTO",
      slug: "ley-problemas-tecnicos-mantenimiento",
      excerpt: "En el régimen de propiedad horizontal, la ley establece que los costos de mantenimiento de áreas comunes son responsabilidad de todos los propietarios.",
      content: `# Ley Sobre Problemas Técnicos y Costos de Mantenimiento
  
  ## Introducción
  
  En el régimen de propiedad horizontal, los problemas técnicos y los costos de mantenimiento de las áreas y servicios comunes afectan a todos los propietarios. Esta responsabilidad compartida está regulada por la legislación peruana y es fundamental para garantizar el correcto funcionamiento del edificio.
  
  ## Marco Legal 📜
  
  - Ley N° 27157 - Ley de Regularización de Edificaciones
  - Decreto Supremo N° 035-2006-VIVIENDA
  - Código Civil Peruano - Artículos sobre Propiedad Horizontal
  - Reglamento Interno del Edificio
  
  ## ¿Qué son las Áreas y Servicios Comunes? 🏢
  
  Incluyen elementos estructurales, instalaciones y áreas de uso común:
  
  ### 1. Elementos Estructurales
  - Cimientos, columnas, muros portantes
  - Techos, fachadas
  
  ### 2. Instalaciones Comunes
  - Ascensores, bombas de agua
  - Sistema eléctrico común, sistema de gas
  - Cisterna y tanque elevado
  
  ### 3. Áreas de Uso Común
  - Lobby, pasillos, escaleras
  - Jardines, áreas recreativas
  - Estacionamientos comunes
  
  ## Distribución de Costos Según la Ley 💰
  
  La Ley N° 27157 establece:
  
  ### 1. Gastos Comunes Regulares
  - Distribuidos según porcentaje de participación
  - Obligatorios para todos los propietarios
  - Pagados mensualmente
  
  ### 2. Gastos Extraordinarios
  - Requieren aprobación de la Junta de Propietarios
  - Distribuidos según el mismo criterio
  - Pueden generar cuotas extraordinarias
  
  ## Obligaciones Legales de los Propietarios ⚖️
  
  ### 1. Pago de Cuotas
  - Cumplir con cuotas ordinarias y extraordinarias
  - Mantener pagos al día
  
  ### 2. Mantenimiento
  - Permitir acceso para reparaciones
  - Reportar problemas técnicos
  - Participar en decisiones comunes
  
  ### 3. Responsabilidad Solidaria
  - Compartir costos de reparaciones
  - Contribuir al fondo de reserva
  - Participar en mejoras necesarias
  
  ## Consecuencias del Incumplimiento 🚫
  
  ### 1. Sanciones Económicas
  - Intereses moratorios
  - Gastos de cobranza
  - Penalidades establecidas
  
  ### 2. Acciones Legales
  - Proceso de ejecución de garantías
  - Embargo de rentas
  - Inscripción en centrales de riesgo
  
  ### 3. Restricciones
  - Limitación de servicios comunes
  - Pérdida de derechos de voto
  - Imposibilidad de alquilar
  
  ## Procedimientos para Gastos Importantes 📋
  
  1. **Aprobación:** Convocatoria a Junta, presentación de presupuestos, votación.
  2. **Ejecución:** Contratación de servicios, supervisión, rendición de cuentas.
  3. **Distribución:** Cálculo de cuotas, notificación, establecimiento de plazos.
  
  ## Recomendaciones para la Gestión 💡
  
  ### 1. Mantenimiento Preventivo
  - Inspecciones regulares
  - Programación de servicios
  - Anticipación de problemas
  
  ### 2. Fondo de Reserva
  - Mantener un fondo adecuado
  - Actualizar aportes regularmente
  - Usar solo en emergencias
  
  ### 3. Comunicación Efectiva
  - Informar oportunamente
  - Documentar decisiones
  - Mantener transparencia
  
  ## Situaciones Especiales ⚠️
  
  ### 1. Emergencias
  - Procedimientos expeditos
  - Autorización inmediata
  - Distribución posterior de costos
  
  ### 2. Mejoras Opcionales
  - Votación específica
  - Participación voluntaria
  - Beneficios diferenciados
  
  ### 3. Daños por Terceros
  - Identificación de responsables
  - Gestión de seguros
  - Recuperación de costos
  
  ## Conclusión
  
  La ley es clara: los problemas técnicos y costos de mantenimiento de áreas comunes son responsabilidad de todos los propietarios. Esto garantiza:
  - Mantenimiento adecuado
  - Preservación del valor
  - Convivencia armoniosa
  - Seguridad de los residentes
  
  ---
  
  ### ¿Necesitas Ayuda Profesional? 💼
  
  En Casa Grande ofrecemos:
  - Asesoría legal especializada
  - Gestión de mantenimiento
  - Administración de fondos
  - Resolución de conflictos
  - Planificación de gastos
  
  ¡Contáctanos para una gestión profesional de tu edificio! 🏢✨`,
      image: "/e5.webp",
      author: "Casa Grande",
      date: "03/01/2025",
      category: "Legal",
      tags: ["Legal", "Mantenimiento", "Propiedad Horizontal"],
    },
    {
      id: "8",
      title: "¿Cómo Ahorrar Costos con una buena Administración de Edificios?",
      slug: "ahorrar-costos-buena-administracion",
      excerpt: "Una gestión eficiente permite mantener las áreas comunes, ahorrar costos y mejorar la convivencia. Descubre estrategias clave.",
      content: `# ¿Cómo Ahorrar Costos con una Buena Administración de Edificios?
  
  ## Introducción
  
  La administración de edificios puede ser un reto financiero si no se manejan adecuadamente los recursos. Una gestión eficiente no solo mantiene las áreas comunes en óptimas condiciones, sino que también ahorra costos y mejora la convivencia.
  
  ## 1. Mantenimiento Preventivo: La Clave del Ahorro 🔧
  
  No realizar mantenimientos preventivos regulares es un error costoso. Equipos como ascensores, bombas de agua, tableros eléctricos y pozos a tierra necesitan revisiones periódicas para evitar reparaciones mayores.
  
  ### Beneficios:
  - Reducción de gastos imprevistos por emergencias.
  - Prolongación de la vida útil de los equipos.
  - Ahorro en reparaciones costosas.
  
  ## 2. Optimización de Recursos Comunes 💡
  
  El uso eficiente de recursos es esencial. Implementar prácticas como luces LED y sistemas de ahorro de agua reduce facturas.
  
  ### Estrategias de Ahorro:
  - Sensores de movimiento para luces en pasillos y cocheras.
  - Sistemas de riego automáticos optimizados.
  - Fomentar el uso responsable de áreas comunes entre residentes.
  
  ## 3. Gestión Eficiente del Presupuesto 📊
  
  Una visión clara del presupuesto es fundamental. Revisar cuentas mensualmente, alinear gastos y renegociar contratos son clave.
  
  ### Acciones Recomendadas:
  - Elaborar un plan anual de gastos detallado.
  - Comparar proveedores y elegir la mejor relación calidad-precio.
  - Comprar suministros en grupo para obtener descuentos.
  
  ## 4. Control de la Morosidad 💸
  
  La morosidad desbalancea las cuentas. Implementar un sistema de cobro efectivo y seguir procesos legales ayuda a mantener los ingresos.
  
  ### Soluciones:
  - Políticas claras de notificación y seguimiento.
  - Incentivos para el pago puntual.
  - Recurrir a la vía judicial si es necesario.
  
  ## 5. Participación Activa de la Junta de Propietarios 👥
  
  Una Junta Directiva activa toma decisiones que favorecen el ahorro. La participación en asambleas permite discutir opciones, planificar mantenimientos y buscar alternativas.
  
  ---
  
  ## Conclusión
  
  Una buena administración optimiza recursos y asegura el bienestar. Implementar mantenimiento preventivo, control de gastos y gestión financiera responsable reduce costos y evita sorpresas.
  
  👉👉 En Casa Grande estamos comprometidos a ayudar a los copropietarios a lograr una vida segura, armónica y a revalorizar su propiedad.`,
      image: "/e6.webp",
      author: "Casa Grande",
      date: "02/01/2025",
      category: "Administración de Edificios",
      tags: ["Administración", "Ahorro", "Costos"],
    },
    {
      id: "12",
      title: "¿CUÁNDO RENOVAR EL SISTEMA DE BOMBAS HIDRONEUMÁTICAS?",
      slug: "renovar-bombas-hidroneumaticas",
      excerpt: "Evita cortes de agua: identifica síntomas, estima costos y planifica el reemplazo de bombas hidroneumáticas.",
      content: `# Renovación de Bombas Hidroneumáticas: Evita Cortes de Agua
  
  ## Introducción
  
  El 85% de las emergencias por falta de agua en edificios se debe a bombas que superan su vida útil (aproximadamente 10 años) sin mantenimiento mayor. Renovar a tiempo es crucial.
  
  ## Signos de Alerta 🚩
  
  - **Vibraciones y ruidos:** Metálicos inusuales durante el funcionamiento.
  - **Caídas de presión:** Especialmente notorias en horas pico.
  - **Arranques frecuentes:** Indican un posible fallo en el control.
  - **Fugas visibles:** De aceite o agua en sellos y empaques.
  
  ## Plan de Renovación 🔄
  
  1. **Diagnóstico Técnico:** Realizar ensayo de caudal y presión.
  2. **Comparativa:** Evaluar costos entre reparación mayor vs. bomba nueva.
  3. **Aprobación:** Presupuesto y decisión en Junta (mayoría simple).
  4. **Cronograma:** Instalación estimada en 48 horas, usando bypass temporal.
  5. **Capacitación:** Instruir al portero para monitorear los tableros.
  
  ## Costos de Referencia 💰
  
  - Bomba vertical 5 HP Inox: S/ 14,900
  - Variador de frecuencia y tablero soft-start: S/ 7,600
  - Instalación y pruebas: S/ 2,800
  
  *Costos aproximados y sujetos a evaluación técnica.*
  
  ## Ahorro Energético 📊
  
  El uso de variadores de frecuencia puede generar hasta un **30% de ahorro** en el consumo eléctrico mensual asociado a las bombas.
  
  ---
  
  **¡Evita emergencias!** Solicita a Casa Grande una inspección gratuita de tu sistema de bombas y previene cortes imprevistos que generan quejas y problemas.`,
      image: "/e22.webp",
      author: "Casa Grande",
      date: "22/03/2025",
      category: "Mantenimiento",
      tags: ["Bombas de Agua", "Mantenimiento Preventivo"],
    },
    {
      id: "13",
      title: "Cuál debe ser la actitud y comportamiento del Portero?",
      slug: "actitud-comportamiento-portero-edificio",
      excerpt: "Conoce las cualidades esenciales que debe tener un buen portero de edificio y cómo su actitud profesional impacta en la seguridad y convivencia.",
      content: `# Cuál debe ser la actitud y comportamiento del Portero?
  
  ## Introducción
  
  El portero es mucho más que la persona que abre la puerta; representa la primera línea de seguridad y la imagen del edificio. Su comportamiento y actitud son fundamentales para mantener un ambiente seguro y cordial para todos los residentes.
  
  ## Características Esenciales 🔑
  
  ### 1. Profesionalismo y Presentación
  
  - **Puntualidad:** Llegar con anticipación para recibir el turno adecuadamente.
  - **Uniforme:** Mantenerlo limpio y en buen estado en todo momento.
  - **Higiene personal:** Presentación impecable, afeitado y con cabello ordenado.
  - **Postura:** Mantenerse erguido, alerta y atento en su puesto de trabajo.
  
  ### 2. Actitud de Servicio
  
  - **Cordialidad:** Saludar amablemente a todos los residentes y visitantes.
  - **Respeto:** Tratar a todos por igual, independientemente de su posición o departamento.
  - **Disponibilidad:** Mostrar disposición para ayudar dentro de sus funciones.
  - **Paciencia:** Mantener la calma ante residentes o visitantes difíciles.
  
  ### 3. Comunicación Efectiva
  
  - **Claridad:** Expresarse de forma concisa y comprensible.
  - **Escucha activa:** Prestar atención a las necesidades de los residentes.
  - **Discreción:** No comentar asuntos privados de los propietarios o inquilinos.
  - **Registro:** Documentar adecuadamente incidencias en el libro de ocurrencias.
  
  ### 4. Vigilancia y Seguridad
  
  - **Atención constante:** Evitar distracciones (celular, televisión, visitantes personales).
  - **Proactividad:** Anticiparse a posibles situaciones de riesgo.
  - **Protocolos:** Seguir estrictamente los procedimientos de seguridad establecidos.
  - **Control de accesos:** Verificar rigurosamente la identidad de visitantes y proveedores.
  
  ## Situaciones Críticas y Cómo Manejarlas 🚨
  
  ### Manejo de Conflictos
  
  1. **Mantener la calma:** Nunca elevar la voz ni perder la compostura.
  2. **Distancia profesional:** No involucrarse personalmente en discusiones entre vecinos.
  3. **Documentar:** Registrar cualquier altercado en el libro de ocurrencias.
  4. **Escalamiento:** Saber cuándo contactar a la administración o autoridades.
  
  ### Emergencias
  
  1. **Conocer protocolos:** Tener claros los procedimientos para incendios, accidentes o robos.
  2. **Números de emergencia:** Mantener a mano contactos de bomberos, policía y ambulancias.
  3. **Primeros auxilios:** Conocimientos básicos para situaciones urgentes.
  4. **Evacuación:** Familiarizarse con las rutas y procedimientos de evacuación del edificio.
  
  ## Lo que NO debe hacer un Portero ❌
  
  - **Abandono de puesto:** Nunca dejar la recepción sin autorización o relevo.
  - **Consumo de alcohol:** Prohibido en cualquier cantidad durante el turno.
  - **Familiaridad excesiva:** Evitar conversaciones demasiado personales o íntimas con residentes.
  - **Favoritismos:** No dar trato preferencial a ciertos propietarios o inquilinos.
  - **Aceptar propinas:** Especialmente a cambio de saltarse protocolos de seguridad.
  
  ## Evaluación de Desempeño ⭐
  
  Un buen portero debe ser evaluado periódicamente considerando:
  
  1. Puntualidad y asistencia
  2. Presentación personal
  3. Conocimiento de procedimientos
  4. Manejo de situaciones críticas
  5. Feedback de los residentes
  
  ---
  
  **¿Problemas con el servicio de portería en tu edificio?** Casa Grande ofrece capacitación especializada para personal de seguridad y portería, incluyendo simulacros y evaluaciones periódicas que garantizan un servicio profesional y seguro.`,
      image: "/e8.webp",
      author: "Casa Grande",
      date: "10/03/2025",
      category: "Seguridad",
      tags: ["Portería", "Seguridad", "Personal", "Protocolos"],
    },
    {
      id: "14",
      title: "Según Sunarp como gestionar situaciones de emergencia en Edificios",
      slug: "gestionar-emergencias-edificios-sunarp",
      excerpt: "La Resolución N.º 233-2021-SUNARP establece directrices para gestionar situaciones de emergencia en edificios, definiendo responsabilidades de la Junta de Propietarios.",
      content: `# Según Sunarp como gestionar situaciones de emergencia en Edificios
  
  ## Introducción
  
  La Resolución N.º 233-2021-SUNARP, introduce directrices para gestionar situaciones de emergencia en edificios bajo este régimen. Esta normativa busca asegurar que las propiedades exclusivas y comunes respondan adecuadamente ante emergencias, estableciendo responsabilidades específicas para la Junta de Propietarios.
  
  ## ALCANCES PRINCIPALES
  
  ### 1. Creación de Protocolos de Emergencia
  
  La resolución exige a las Juntas de Propietarios crear y difundir un protocolo de respuesta ante emergencias como desastres naturales o crisis sanitarias. Este protocolo debe estar alineado con el modelo aprobado por el Viceministerio de Vivienda y Urbanismo y ser accesible para todos los residentes y personal del edificio.
  
  ### 2. Obligación de Colaboración
  
  Establece que los bienes comunes del edificio, tales como extintores, botiquines y otros elementos de seguridad, deben estar disponibles para la respuesta ante cualquier emergencia. También promueve la colaboración con autoridades cuando la situación lo requiera, facilitando la entrada de servicios de emergencia al edificio.
  
  ## Ejemplos Prácticos
  
  Por ejemplo, en la práctica, si se presentara un sismo o una emergencia sanitaria, la Junta de Propietarios tendría la responsabilidad de activar el protocolo y coordinar con las autoridades. Por ejemplo, si ocurre un incendio, los extintores y botiquines ubicados en las áreas comunes deben estar plenamente operativos y disponibles para su uso por los residentes y el personal de emergencia.
  
  ## Aplicación en la Propiedad Horizontal
  
  Esta resolución enfatiza la importancia de tener una Junta de Propietarios organizada y consciente de sus obligaciones en situaciones críticas. Además, asegura que los residentes de edificios multifamiliares cuenten con medidas de seguridad y una respuesta rápida en caso de emergencias, mejorando así la convivencia y seguridad de todos los habitantes en propiedades horizontales.
  
  ---
  
  **¿Necesitas ayuda para implementar protocolos de emergencia en tu edificio?** Casa Grande ofrece asesoría especializada para la creación e implementación de protocolos de emergencia según la normativa SUNARP, garantizando la seguridad de todos los residentes.`,
      image: "/e9.webp",
      author: "Casa Grande",
      date: "27/12/2024",
      category: "Administracion de Edificios",
      tags: ["SUNARP", "Emergencias", "Protocolos", "Seguridad"],
    },
    {
      id: "15",
      title: "Manual de Funciones (estándar) para Portero de Edificio Residencial",
      slug: "manual-funciones-portero-edificio",
      excerpt: "Conoce las responsabilidades y tareas esenciales que debe cumplir el portero de un edificio residencial para garantizar seguridad y buen funcionamiento.",
      content: `# Manual de Funciones (estándar) para Portero de Edificio Residencial
  
  ## Introducción
  
  El portero de un edificio residencial es una pieza fundamental para mantener la seguridad y el buen funcionamiento de los edificios. Siguiendo las funciones descritas en este manual, se garantiza un ambiente seguro, ordenado y agradable para todos los copropietarios y visitantes.
  
  Este Manual de Funciones define básicamente las responsabilidades y tareas que debe cumplir el portero de un edificio residencial. El objetivo es asegurar un entorno seguro y confortable para los residentes mediante una gestión eficiente de la seguridad, el control de acceso y el mantenimiento de una comunicación proactiva con el Administrador del Edificio.
  
  ## 1. Control de Acceso y Seguridad
  
  - Supervisar el ingreso y salida de personas al edificio, garantizando la seguridad de los copropietarios y visitantes. Esto incluye registrar a todas las visitas en el libro de control y verificar la identidad de los proveedores.
  - Monitorear las cámaras de seguridad y reportar cualquier actividad sospechosa a la Administración o a la Junta de Propietarios.
  - Realizar rondas periódicas por las áreas comunes para detectar situaciones de riesgo y asegurar que todas las puertas y ventanas estén debidamente cerradas.
  
  ## 2. Atención Cordial a los Residentes
  
  - Brindar atención cordial y respetuosa a todos los residentes, respondiendo a sus consultas y ofreciendo asistencia cuando sea necesario.
  - Facilitar el ingreso de servicios de delivery y coordinar la recepción de paquetes o correspondencia, asegurando que cada entrega llegue a su destinatario.
  
  ## 3. Comunicación Proactiva con la Administración
  
  - Mantener una comunicación fluida con la Administración del Edificio, informando de manera oportuna cualquier incidente, problema o sugerencia que pueda afectar el bienestar de los residentes.
  - Comprometerse con la revisión y seguimiento de la operatividad eficiente de los equipos garantizando así, la seguridad y mantenimiento del edificio.
  
  ## 4. Reporte de Averías o Fallas de Equipos
  
  - Identificar y reportar cualquier falla en los equipos del edificio, como el ascensor, puertas de cochera, bombas de agua y sistemas de iluminación. Esto permite que la Administración de Edificios coordine el mantenimiento preventivo y correctivo necesario.
  - En caso de emergencia, notificar inmediatamente a la Administración y, si es necesario, a los servicios de emergencia locales.
  
  ## 5. Mantenimiento Básico y Orden de las Áreas Comunes
  
  - Realizar tareas básicas de limpieza y orden en su área, asegurando que el ingreso del edificio siempre presente un aspecto limpio y ordenado.
  - Colaborar con el personal de limpieza en la organización de las áreas comunes cuando sea necesario, manteniendo siempre una actitud de servicio.
  
  ## 6. Reglas de Conducta
  
  - Mantener una actitud profesional y discreta en todo momento, respetando la privacidad de los residentes.
  - Evitar el uso de dispositivos personales durante el turno de trabajo para garantizar una vigilancia continua y efectiva.
  - Cumplir con los horarios establecidos y, en caso de ausencia o enfermedad, notificar a la Administración con suficiente antelación para asegurar un reemplazo adecuado.
  
  ---
  
  **👉👉 En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.**`,
      image: "/e3.webp",
      author: "Casa Grande",
      date: "24/12/2024",
      category: "Administracion de Edificios",
      tags: ["Portería", "Seguridad", "Manual", "Funciones"],
    },
    {
      id: "16",
      title: "5 CONSECUENCIAS SINO SE PAGA LA CUOTA DE MANTENIMIENTO",
      slug: "consecuencias-no-pagar-cuota-mantenimiento",
      excerpt: "Conoce las 5 principales consecuencias de no pagar la cuota de mantenimiento en un edificio, desde pérdida de derechos hasta acciones legales.",
      content: `# 5 CONSECUENCIAS SINO SE PAGA LA CUOTA DE MANTENIMIENTO
  
  ## Introducción
  
  Si eres propietario en un edificio o condominio, es esencial comprender la importancia de cumplir con el pago de la cuota de mantenimiento. Estas cuotas permiten cubrir los costos de mantenimiento de las áreas comunes, asegurando que los servicios estén en buen estado para todos los residentes. Sin embargo, no cumplir con esta obligación trae consecuencias que pueden afectar tanto a la convivencia como a los derechos de los propietarios.
  
  A continuación, te presentamos las 5 principales consecuencias de no pagar la cuota de mantenimiento en un edificio:
  
  ## 1. Pérdida del Derecho de Voto en las Asambleas
  
  Una de las primeras consecuencias de ser un propietario moroso es la pérdida del derecho a votar en las asambleas de la Junta de Propietarios. Esto significa que no podrás participar en decisiones importantes, como mejoras en el edificio, cambios en el reglamento interno, o la asignación de presupuestos. Esta medida busca fomentar la responsabilidad y el compromiso con la comunidad.
  
  ## 2. Multa por Retraso en el Pago
  
  Si el reglamento interno del edificio lo establece, los propietarios que no paguen a tiempo la cuota de mantenimiento pueden ser penalizados con una multa. Esta sanción es aprobada en asamblea y busca compensar el impacto financiero que genera la morosidad en el fondo común. Las multas aumentan el monto adeudado, lo que podría hacer aún más difícil ponerse al día.
  
  ## 3. Embargo de Bienes del Propietario Moroso
  
  La Junta Directiva del edificio tiene el derecho de iniciar un proceso judicial para exigir el pago de las cuotas de mantenimiento adeudadas. Esto puede incluir la solicitud de embargo de bienes del propietario moroso para garantizar la recuperación de la deuda. Para proceder, es necesario presentar un estado de cuenta detallado y los recibos de pago pendientes, junto con el acta de la asamblea que fija las cuotas de mantenimiento.
  
  ## 4. Rescisión del Contrato de Arrendamiento
  
  En el caso de propiedades alquiladas, la falta de pago de las cuotas de mantenimiento puede ser motivo para solicitar la resolución del contrato de arrendamiento. La Junta Directiva tiene la facultad de exigir el pago de las cuotas adeudadas al propietario, quien es legalmente responsable de cumplir con esta obligación, incluso si el inquilino no realiza los pagos.
  
  ## 5. Restricción del Uso de Áreas Comunes
  
  Los propietarios que no estén al día con sus cuotas de mantenimiento podrían perder el derecho a utilizar las áreas comunes del edificio, como el gimnasio, la piscina, la lavandería o el salón de eventos. Esto busca incentivar a los copropietarios a cumplir con sus obligaciones para garantizar el uso equitativo de los espacios compartidos.
  
  ## Ejemplo
  
  La Junta de Propietarios en un edificio en Miraflores enfrentaba un problema grave de morosidad que no permitía que se atendiera el mantenimiento correctivo de las bombas de agua y el sistema de seguridad. Gracias a la acción de la Administración que asesoró a la Junta Directiva, inscrita formalmente en SUNARP, se inició un PROCESO CONCILIATORIO contra un propietario que adeudaba varios meses de cuota de mantenimiento. Finalmente, la deuda fue recuperada, y los fondos se utilizaron para reparar los sistemas, garantizando un ambiente seguro para todos los residentes. Este caso demuestra la importancia de una administración de edificios organizada y con respaldo legal para actuar ante situaciones de morosidad.
  
  ## En conclusión:
  
  Cumplir con el pago de la cuota de mantenimiento es fundamental para la convivencia y el buen funcionamiento de cualquier edificio o condominio. Si eres propietario, estar al día con tus obligaciones no solo evita problemas legales, sino que también contribuye al bienestar de toda la comunidad. ¡Mantén la armonía y evita sanciones!
  
  Para más información sobre administración de edificios y condominios, no dudes en contactarnos. ¡Estamos aquí para ayudarte a lograr una convivencia más segura y organizada!`,
      image: "/e10.webp",
      author: "Casa Grande",
      date: "15/10/2024",
      category: "Administracion de Edificios",
      tags: ["Junta Propietarios", "Morosidad Edificios", "Cuotas", "Legal"],
    },
    {
      id: "17",
      title: "Administración de Edificios: Funciones, Responsabilidades y Rendición de Cuentas",
      slug: "administracion-edificios-funciones-responsabilidades",
      excerpt: "Conoce las funciones esenciales del administrador de edificios, sus responsabilidades y la importancia de la rendición de cuentas para una gestión transparente.",
      content: `# Administración de Edificios: Funciones, Responsabilidades y Rendición de Cuentas
  
  ## Introducción
  
  La administración de edificios en Lima es un aspecto crucial para garantizar el buen funcionamiento y la convivencia armoniosa en las propiedades multifamiliares. Esta labor, fundamental para el mantenimiento de las áreas comunes y el bienestar de los residentes, recae en la figura del administrador de edificios. Pero, ¿quién es este profesional y qué responsabilidades tiene? A continuación, desarrollaremos las funciones, la importancia de la rendición de cuentas y la documentación necesaria para esta labor. ¡Acompáñanos! 🏢✨
  
  ## 1. ¿Quién es el Administrador de Edificios?
  
  El administrador de un edificio es el encargado de gestionar todos los aspectos relacionados con el mantenimiento, seguridad y administración de los espacios comunes de una propiedad multifamiliar, como un edificio o condominio. Este rol puede ser desempeñado por una persona natural o jurídica, y su principal objetivo es velar por la buena convivencia y la correcta operatividad de todos los servicios del edificio.
  
  ## 2. Funciones del Administrador de Edificios
  
  Las funciones de un administrador de edificios son variadas y están orientadas a garantizar la comodidad y seguridad de los propietarios y residentes. Aquí destacamos las más importantes:
  
  ### Gestión de Mantenimiento
  Coordina y supervisa el mantenimiento preventivo y correctivo de todos los equipos y sistemas del edificio, como ascensores, bombas de agua, tableros eléctricos, sistemas contra incendios y pozos a tierra.
  
  ### Cobranza de Cuotas de Mantenimiento
  Se encarga de gestionar el cobro de las cuotas de mantenimiento de los propietarios. Esto incluye enviar notificaciones y, en caso de morosidad, tomar medidas legales de ser necesario.
  
  ### Gestión de Personal
  Administra al personal del edificio, como porteros, personal de limpieza y seguridad, garantizando el cumplimiento de sus derechos laborales conforme a la legislación vigente.
  
  ### Organización de Juntas de Propietarios
  Convoca y facilita las reuniones de la junta de propietarios, donde se discuten temas importantes como la aprobación de presupuestos, planes de mantenimiento y resoluciones de conflictos.
  
  ### Atención a los Residentes
  Resuelve inquietudes, quejas y sugerencias de los propietarios, actuando como un intermediario entre los residentes y la junta directiva del edificio.
  
  ## 3. La Rendición de Cuentas: Un Pilar Fundamental
  
  La rendición de cuentas es uno de los aspectos más relevantes de la administración de un edificio. Esto implica que el administrador debe presentar un informe detallado de la gestión de los recursos económicos, especificando en qué se han invertido las cuotas de mantenimiento y el estado financiero del edificio.
  
  Esta práctica es fundamental para asegurar la transparencia en la administración y la confianza de los propietarios en la gestión. Además, ayuda a mantener un control adecuado del presupuesto y a tomar decisiones informadas sobre futuras inversiones o reparaciones.
  
  ### Importancia de la Transparencia
  
  La rendición de cuentas permite a los propietarios tener una visión clara de cómo se utilizan los fondos del edificio, lo que contribuye a una relación de confianza entre ellos y el administrador. De acuerdo con las normativas locales y las directrices de la Superintendencia Nacional de Registros Públicos (SUNARP), es vital que toda junta de propietarios y su administración cumplan con los procesos de transparencia.
  
  ## 4. Documentación a Entregar en la Rendición de Cuentas
  
  Para garantizar una rendición de cuentas efectiva y conforme a la normativa, el administrador debe presentar varios documentos, entre los que se incluyen:
  
  ### Estado de Ingresos y Egresos
  Resumen de todas las cuotas de mantenimiento cobradas y los gastos realizados durante el periodo, como pagos a proveedores, gastos de mantenimiento y reparaciones.
  
  ### Informe de Mantenimiento
  Detalle de los trabajos de mantenimiento realizados, incluyendo costos y fechas de cada intervención, como mantenimiento de ascensores, reparaciones de bombas de agua, etc.
  
  ### Copia de Recibos y Facturas
  Comprobantes de pago de los servicios contratados y de las compras de materiales para el mantenimiento del edificio.
  
  ### Actas de Reuniones
  Registros de las decisiones tomadas en las reuniones de la junta de propietarios, especialmente aquellas que implican el uso de fondos del edificio.
  
  ### Presupuesto Anual
  Documento que presenta la proyección de gastos e ingresos esperados para el siguiente periodo, permitiendo una mejor planificación financiera.
  
  ## En CONCLUSIÓN
  
  La administración de edificios es una labor que exige responsabilidad, transparencia y un profundo conocimiento de las normativas locales. La rendición de cuentas es un proceso esencial para mantener la confianza de los propietarios y asegurar una gestión adecuada de los recursos. Si eres parte de una junta de propietarios, no dudes en exigir transparencia y claridad en la gestión de tu edificio. ¡Juntos, podemos asegurar un lugar seguro y confortable para vivir!`,
      image: "/e11.webp",
      author: "Casa Grande",
      date: "15/10/2024",
      category: "Administracion de Edificios",
      tags: ["Administración", "Junta Propietarios", "Rendición de Cuentas", "Transparencia"],
    },
    {
      id: "18",
      title: "¿CÓMO MANEJAR VECINOS MOROSOS EN LA ADMINISTRACIÓN DE EDIFICIOS? ESTRATEGIAS EFECTIVAS",
      slug: "piscina-comunitaria-costos-normas",
      excerpt: "Descubre cuánto cuesta realmente mantener la piscina de tu edificio y qué normas sanitarias (DIGESA) debes cumplir para evitar clausuras.",
      content: `1.- Identificación y Seguimiento de Vecinos Morosos
  El retraso en los pagos de las cuotas de mantenimiento puede ser un desafío significativo en la administración de edificios y condominios. Este artículo ofrece estrategias prácticas y legales para gestionar a los vecinos morosos de manera efectiva.
  
  Es fundamental contar con un sistema que permita identificar rápidamente a los vecinos morosos. Aquí se discuten las mejores prácticas para el seguimiento de pagos y cómo implementar recordatorios amistosos pero firmes.
  
   2.- Opciones de Resolución Amistosa
  Antes de tomar medidas drásticas, es recomendable intentar una resolución amistosa. Este apartado explora las diferentes estrategias de negociación y cómo estas pueden conducir a un acuerdo beneficioso para ambas partes.
  
   3.- Procedimientos Legales en Lima para Cobrar Deudas
  Si la resolución amistosa no es posible, la ley peruana ofrece varios mecanismos para reclamar deudas. Este artículo detalla los procedimientos legales disponibles, desde la mediación hasta la ejecución judicial, y cómo proceder de manera eficiente.
  
   4.- Impacto en la Comunidad y la Importancia de la Equidad
  La morosidad no solo afecta las finanzas del edificio, sino también el bienestar de la comunidad. Aquí se discute cómo manejar la situación para evitar tensiones entre los vecinos y mantener un ambiente armonioso.
  
  En conclusión, gestionar a los vecinos morosos es uno de los retos más delicados en la administración de edificios y condominios. Con las estrategias correctas, es posible encontrar soluciones que beneficien a todos y mantener la estabilidad financiera de la comunidad.
  
  👉👉 En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e12.webp",
      author: "Casa Grande",
      date: "12/01/2025",
      category: "Amenidades",
      tags: ["Piscina", "Mantenimiento", "Normativa", "Costos", "DIGESA"],
    },
    {
      id: "19",
      title: "¿PORQUE SURGEN LOS CONFLICTOS EN EDIFICIOS O CONDOMINIOS?",
      slug: "politicas-pet-friendly-edificio",
      excerpt: "Cómo permitir mascotas sin afectar higiene ni tranquilidad de los vecinos.",
      content: `Vivir en un edificio o condominio en Lima ofrece muchas oportunidades para disfrutar de una experiencia agradable y enriquecedora. Sin embargo, la convivencia entre vecinos puede volverse un desafío cuando aparecen conflictos. Si estos problemas no se abordan de manera adecuada y oportuna, pueden afectar la armonía y deteriorar la calidad de vida de todos los residentes. En este artículo, analizaremos las principales causas de los conflictos en los edificios, las consecuencias de no solucionarlos y cómo lograr una convivencia pacífica y equilibrada en nuestra comunidad.
  
  Razones Comunes de los Conflictos entre Vecinos
  Los problemas dentro de un edificio pueden tener diversas causas, desde situaciones insalubres hasta actitudes personales que afectan el ambiente comunitario. Aquí te detallamos algunas de las principales razones:
  
  1. Problemas Insalubres
  La falta de higiene y limpieza en las áreas comunes y privadas puede generar roces entre vecinos. Esto incluye:
  
  Acumulación de basura en pasillos o áreas comunes.
  Mal manejo de residuos, como sacar la basura fuera del horario establecido.
  Mascotas que no son cuidadas adecuadamente y generan malos olores o desechos en áreas comunes.
  2. Conductas Inmorales
  Ciertas conductas inapropiadas pueden alterar la tranquilidad del edificio:
  
  Realización de fiestas a altas horas de la noche que generan ruidos molestos.
  Comportamientos inapropiados en áreas comunes, como uso indebido de la piscina o gimnasio.
  Acciones que afectan la convivencia, como consumo de sustancias prohibidas en espacios comunes.
  3. Conflictos de Personalidad
  Los choques de personalidad son frecuentes y pueden generar tensiones continuas:
  
  Falta de empatía: Algunos residentes no consideran las necesidades de sus vecinos, como el respeto a los horarios de descanso.
  Mal genio: La actitud irritable y la poca tolerancia pueden transformar desacuerdos menores en conflictos serios.
  Falta de educación y cortesía: Pequeños gestos como no saludar o hacer comentarios despectivos pueden generar un ambiente de hostilidad.
  Consecuencias de No Resolver los Conflictos en la Comunidad
  Cuando estos conflictos no se abordan de manera adecuada, las consecuencias pueden ser graves para toda la comunidad del edificio. Entre los principales problemas destacan:
  
  Deterioro del ambiente de convivencia: Las tensiones no resueltas crean un ambiente negativo, lo que hace que las relaciones entre vecinos se deterioren y se pierda la sensación de comunidad.
  Descuido de áreas comunes: Un ambiente de conflicto puede llevar a que los propietarios pierdan interés en el cuidado de las áreas comunes, lo que afecta la apariencia y funcionalidad del edificio.
  Aumento de la morosidad: Un ambiente hostil puede desincentivar el pago de las cuotas de mantenimiento, ya que algunos propietarios consideran que no reciben un servicio adecuado o justo, lo que impacta directamente en el presupuesto del edificio.
  Recomendaciones para Evitar Conflictos entre Vecinos
  Para mantener una convivencia armoniosa en un edificio, es fundamental que cada propietario y residente tome conciencia de su papel dentro de la comunidad. Aquí algunos consejos para prevenir conflictos:
  
  Promover el respeto mutuo: Recordar que cada vecino tiene derecho a la tranquilidad y a disfrutar de su hogar en paz. Un saludo amable o un gesto de cortesía puede marcar la diferencia.
  Cumplir con el Reglamento Interno: Las reglas establecidas por la Junta de Propietarios ayudan a mantener el orden. Es esencial que todos los residentes las conozcan y las respeten.
  Participar en las asambleas: Esto permite estar al tanto de las decisiones y expresar preocupaciones de manera formal, evitando quejas informales que solo generan tensiones.
  Fomentar el diálogo: Antes de escalar un conflicto, es mejor hablar directamente con el vecino involucrado de forma respetuosa. A menudo, una conversación honesta y abierta puede resolver la situación.
  La Experiencia de Casa Grande en la Gestión de Conflictos
  En Casa Grande, contamos con amplia experiencia en la administración de edificios y condominios en Lima, gestionando de manera profesional la convivencia entre copropietarios. Sabemos que cada comunidad tiene sus particularidades, y nuestro enfoque siempre ha sido promover el diálogo y la armonía para garantizar un entorno seguro y cómodo para todos los residentes.
  
  Nuestro equipo de administración está preparado para intervenir y mediar en situaciones difíciles, asegurando que las normas de convivencia se respeten y que la tranquilidad de los vecinos prevalezca. Si necesitas ayuda para gestionar tu edificio y evitar conflictos, ¡no dudes en contactarnos! Estamos aquí para ayudarte a lograr una administración exitosa y una convivencia agradable para todos los residentes. 📞
  
  ¡Llámanos hoy mismo y construyamos juntos una mejor convivencia en tu edificio!`,
      image: "/e13.webp",
      author: "Casa Grande",
      date: "02/01/2025",
      category: "Convivencia",
      tags: ["Mascotas", "Reglamento Interno"],
    },
    {
      id: "20",
      title: "Requisitos para Constituir tu Junta de Propietarios e Inscribir su Junta Directiva",
      slug: "cctv-proteccion-datos-edificio",
      excerpt: "Instalar cámaras mejora la seguridad, pero si no señalizas correctamente puedes recibir fuertes multas.",
      content: `Administracion de Edificios, Junta Propietarios, Ley 27157, Morosidad Edificios
  La constitución de una Junta de Propietarios es esencial para la adecuada administración de edificios y condominios en Lima, Perú. Además de organizar y regular la convivencia entre copropietarios, permite tomar decisiones que beneficien a todos los residentes. En este artículo, exploraremos los pasos y requisitos para constituir tu Junta de Propietarios e inscribirla en SUNARP (Superintendencia Nacional de los Registros Públicos). También conocerás un caso de éxito que demuestra la importancia de realizar este trámite.Descripción de este bloque. Utiliza este espacio para describir tu bloque. Cualquier texto es válido. Descripción de este bloque. Puedes utilizar este espacio para describir tu bloque.
  
  Tener una Junta de Propietarios inscrita es fundamental para garantizar la legalidad y la correcta administración de un edificio o condominio. A continuación, algunos de los beneficios más destacados:
  
  ¿Por qué es importante tener una Junta de Propietarios inscrita en SUNARP?
  Facilita la toma de decisiones: La junta puede adoptar nuevas reglas de convivencia, gestionar el mantenimiento de las áreas comunes y tomar medidas frente a problemas que puedan surgir.
  Representación legal: La inscripción en SUNARP otorga a la junta la capacidad de representar al edificio o condominio ante terceros, lo que incluye la posibilidad de presentar demandas contra vecinos morosos.
  Acceso a financiamiento y contratos: Algunos bancos exigen que la Junta de Propietarios esté formalmente constituida e inscrita para otorgar financiamiento destinado a mejoras en el edificio.
  Resolución de conflictos: La junta puede mediar entre los copropietarios para resolver conflictos internos, como el uso de las áreas comunes o el incumplimiento de las normas del reglamento interno.
  Requisitos para constituir una Junta de Propietarios
  La formalización de la Junta de Propietarios implica cumplir con ciertos requisitos que garantizarán la correcta inscripción en SUNARP. A continuación, los principales documentos necesarios:
  
  Copia literal de cada unidad inmobiliaria (departamentos, estacionamientos, depósitos, etc.).
  Copia de la partida matriz de la edificación.
  Copia de DNI de todos los propietarios.
  Libro de Actas de Juntas, legalizado por un notario.
  Reglamento Interno del edificio, que regula el uso de las áreas comunes y los derechos y obligaciones de los copropietarios.
  Una vez reunida la documentación, se debe realizar una convocatoria formal a todos los propietarios para elegir al presidente de la Junta de Propietarios, quien liderará la inscripción en SUNARP.
  
  Pasos para inscribir la Junta Directiva en SUNARP
  Para inscribir la Junta Directiva en SUNARP, se deben seguir los siguientes pasos:
  
  Redactar y aprobar el Acta de Constitución de la Junta de Propietarios, que debe incluir la elección del presidente y la aprobación del reglamento interno.
  Legalizar el acta ante un notario público.
  Presentar una copia certificada del Acta de Constitución y del Reglamento Interno en cualquier oficina de SUNARP.
  Realizar el pago de los derechos registrales, cuyo costo varía según la cantidad de unidades inmobiliarias y la oficina registral.
  Caso de éxito: La importancia de una Junta inscrita en un edificio de Surco
  En el distrito de Santiago de Surco, uno de los más cotizados para la vida en edificios multifamiliares, la inscripción de la Junta de Propietarios fue clave para la resolución de un conflicto que involucraba a un propietario moroso. Al tener la Junta Directiva inscrita en SUNARP, se pudo gestionar de manera eficiente una demanda de cobranza por cuotas de mantenimiento impagas.
  
  Este proceso permitió al edificio no solo recuperar las cuotas adeudadas, sino también evitar que la morosidad afectara el fondo común destinado al mantenimiento de las áreas comunes. Además, la formalización de la Junta permitió acceder a un crédito bancario que se utilizó para renovar las bombas de agua y mejorar el sistema de seguridad, beneficiando a todos los residentes.
  
  La experiencia de este edificio de Surco resalta la importancia de la inscripción de la Junta de Propietarios en SUNARP. Gracias a ello, se fortaleció la administración del edificio y se garantizó la transparencia en la gestión de los fondos comunes.
  
  Inscribir la Junta de Propietarios en SUNARP es un paso esencial para la adecuada administración de edificios y condominios en Lima. Esto facilita la gestión de la propiedad, la resolución de conflictos y la representación legal ante cualquier eventualidad. Siguiendo los pasos mencionados, podrás formalizar tu Junta y asegurar una convivencia armoniosa y eficiente en tu edificio.
  ¡No esperes más para formalizar la administración de tu edificio! Si necesitas ayuda con los trámites o quieres conocer más sobre el proceso, no dudes en contactarnos. Estamos aquí para apoyarte en cada paso.`,
      image: "/e14.webp",
      author: "Casa Grande",
      date: "18/12/2024",
      category: "Seguridad",
      tags: ["CCTV", "Protección Datos"],
    },
    {
      id: "21",
      title: "¿Cuáles son las razones más comunes por las que algunos propietarios no pagan la cuota de mantenimiento en un edificio?",
      slug: "iluminacion-led-pasillos",
      excerpt: "Caso real: cambio de fluorescentes T8 a tubos LED y sensores de movimiento.",
      content: `Es común que en muchos edificios residenciales de Lima los administradores enfrenten problemas con propietarios morosos que no cumplen con el pago de la cuota de mantenimiento. Esta situación puede crear tensiones entre vecinos y afectar la calidad de vida en la propiedad. A continuación, analizamos algunas de las razones más frecuentes por las que algunos propietarios evitan o retrasan estos pagos:
  
  1. Malestar con la administración del edificio
  Algunos propietarios sienten que la administración del edificio no está cumpliendo adecuadamente con sus funciones. Esto puede incluir problemas como una mala gestión de los servicios, poca transparencia en el uso de los fondos comunes o una falta de comunicación eficaz entre la Junta de Propietarios y los residentes.
  
  Solución:
  Es fundamental que los administradores sean claros y transparentes en la gestión de los recursos y mantengan a todos los propietarios informados sobre el destino de las cuotas. Contar con una Junta de Propietarios debidamente inscrita en Sunarp ayuda a formalizar la gestión del edificio y facilita la toma de decisiones conjuntas​.
  
  2. Percepción de que se les cobra en exceso
  Un motivo común es que los propietarios consideran que el monto de la cuota de mantenimiento es excesivo o injustificado. Esto puede ser el resultado de una falta de comprensión de los costos reales de mantenimiento, o de la percepción de que los servicios contratados no justifican el monto cobrado.
  
  Solución:
  Elaborar presupuestos detallados y explicar de manera clara a los propietarios el destino de cada sol recaudado es clave para evitar este tipo de inconvenientes. Es recomendable que los administradores presenten informes financieros regulares y que se realicen asambleas para aprobar el presupuesto​.
  
  3. No hacen uso de todos los servicios
  Otro argumento es que algunos propietarios, especialmente aquellos que no residen permanentemente en el edificio, consideran que no deberían pagar por servicios que no utilizan, como el ascensor o las áreas comunes.
  
  Solución:
  Recordemos que, según la Ley de Propiedad Horizontal, todos los copropietarios deben contribuir al mantenimiento de las áreas comunes, independientemente de si las utilizan o no​​. Por tanto, es fundamental explicar que estos pagos son obligatorios y que benefician a todos, manteniendo la infraestructura del edificio en buenas condiciones.
  
  4. Resistencia al cobro
  Muchos propietarios simplemente se resisten al pago por diversas razones: desacuerdos con los vecinos, problemas económicos o incluso como respuesta a la morosidad de otros residentes. En algunos casos, esta resistencia se convierte en una forma de protesta silenciosa contra el sistema de administración del edificio.
  
  Solución:
  Para combatir la morosidad es esencial tener un proceso formal de cobro. Inscribir a la Junta de Propietarios en Sunarp es crucial, ya que otorga a la directiva las facultades legales necesarias para proceder con demandas judiciales o acuerdos de pago​. Esto incluye la posibilidad de inscribir la deuda en el Registro de Deudores Judiciales o realizar embargos​.
  
  ¿Cómo puede la administración mejorar esta situación?
  Es fundamental que la administración del edificio implemente buenas prácticas de gestión que fomenten la confianza y el cumplimiento de los pagos. Algunas recomendaciones clave incluyen:
  
  Transparencia en la gestión financiera: Publicar informes periódicos sobre el uso de los fondos comunes, explicando en detalle los gastos de mantenimiento y mejoras.
  Comunicación abierta y constante: Utilizar medios efectivos para informar a los propietarios de las decisiones de la Junta de Propietarios y asegurarse de que todos los residentes se sientan escuchados.
  Facilitar el pago: Ofrecer diferentes métodos de pago y facilitar acuerdos de refinanciamiento para aquellos propietarios que tengan dificultades económicas temporales.
  Legalizar la Junta de Propietarios: Es vital que la directiva esté inscrita en Sunarp para tener la capacidad legal de exigir el pago de cuotas de mantenimiento a través de medios judiciales si fuera necesario​.
  En conclusión, la falta de pago de las cuotas de mantenimiento es un problema que afecta tanto a la convivencia como a la sostenibilidad financiera de cualquier edificio residencial. Abordar este tema de manera profesional, legal y transparente, es clave para asegurar que todos los residentes disfruten de un ambiente seguro, limpio y funcional.
  
  👉👉 En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e15.webp",
      author: "Casa Grande",
      date: "05/12/2024",
      category: "Sostenibilidad",
      tags: ["Eficiencia Energética", "LED"],
    },
    {
      id: "22",
      title: "La importancia de los mantenimientos preventivos y correctivos en un edificio",
      slug: "elevadores-vehiculos-mantenimiento",
      excerpt: "Mitos, costos y checklist mensual para mantener operativo el montacoches.",
      content: `🔧 ¿Has revisado los mantenimientos de tu edificio recientemente? No dejes que una pequeña falla se convierta en un gran problema. ¡Planifica ahora y asegura el bienestar de todos los residentes!
  La gestión adecuada de los mantenimientos preventivos y correctivos es esencial para garantizar la seguridad, funcionalidad y valor de los bienes comunes en cualquier edificio. En este artículo, exploramos la importancia y las implicancias de llevar a cabo estos mantenimientos de manera regular y eficiente.
  
  1. Preservación de los activos comunes del edificio
  Uno de los principales beneficios de los mantenimientos preventivos es la preservación del valor de los activos del edificio. Las áreas comunes como ascensores, puertas de cochera, sistemas eléctricos y bombas de agua, entre otros, están en constante uso y, con el tiempo, pueden deteriorarse. Si se realizan revisiones periódicas, se pueden detectar problemas menores antes de que se conviertan en averías graves, reduciendo así la necesidad de costosas reparaciones correctivas​​.
  
  Por ejemplo, el Reglamento Nacional de Edificaciones de Perú exige que los edificios mantengan sus sistemas de seguridad y funcionamiento en óptimas condiciones, asegurando que sean seguros para los residentes​. Esto incluye el mantenimiento de sistemas de emergencia como alarmas contra incendios, luces de emergencia y ascensores​.
  
  2. Seguridad y prevención de riesgos
  El mantenimiento preventivo es clave para garantizar la seguridad de los residentes y del personal del edificio. Equipos como ascensores, sistemas eléctricos y tableros de distribución pueden representar un peligro si no se mantienen adecuadamente​. Los ascensores de pasajeros y monta vehículos, por ejemplo, deben ser revisados y certificados de manera periódica para evitar accidentes, como lo establece el Reglamento Nacional de Edificaciones​.
  
  Además, mantenimientos correctivos inmediatos son esenciales cuando ocurre una falla. Un ejemplo común es el mal funcionamiento de una bomba hidroneumática de agua, que puede dejar al edificio sin suministro de agua. Si no se atiende rápidamente, esto afectaría la calidad de vida de los residentes y podría generar conflictos dentro de la comunidad.
  
  3. Optimización de costos
  Aunque el costo inicial de los mantenimientos preventivos pueda parecer alto, a largo plazo resulta ser una inversión eficiente. Realizar mantenimientos correctivos de emergencia generalmente conlleva gastos significativamente mayores y tiempos de inactividad prolongados que afectan las operaciones del edificio​.
  
  Por ejemplo, la falta de supervisión en las puertas automáticas de cocheras o ascensores puede resultar en daños severos a los sistemas mecánicos y eléctricos, que podrían haber sido evitados con revisiones periódicas. En este sentido, las juntas de propietarios, en su rol de administradores, deben programar este tipo de mantenimientos con empresas especializadas para mitigar cualquier riesgo​.
  
  4. Cumplimiento de la normativa legal
  En Lima, es obligatorio que los edificios residenciales cumplan con ciertas normativas para garantizar la seguridad y buen funcionamiento de sus áreas comunes. Las normativas emitidas por SUNARP y el Reglamento Nacional de Edificaciones especifican la responsabilidad de los propietarios y la administración del edificio para mantener estos activos en buen estado​​.
  
  El Reglamento de Seguridad y Salud en el Trabajo también establece la obligación de mantener los equipos en condiciones óptimas para evitar accidentes laborales que puedan afectar tanto a los trabajadores del edificio como a los residentes​​.
  
  5. Mejora de la convivencia y satisfacción de los residentes
  Un edificio en buen estado contribuye significativamente a mejorar la convivencia entre los residentes. El buen funcionamiento de ascensores, puertas de cocheras, sistemas de agua y energía elimina una fuente frecuente de quejas y conflictos​.
  
  Además, los mantenimientos preventivos bien organizados y transparentes ayudan a que los residentes perciban que la administración del edificio está cumpliendo con su rol de manera eficiente, lo que genera confianza y mejora la participación de los propietarios en las asambleas​
  
  En Conclusión, como Administración de Edificios, programar y supervisar los mantenimientos preventivos y correctivos en un edificio no es sólo una buena práctica, sino una necesidad para preservar el valor del inmueble, garantizar la seguridad y optimizar los costos operativos. Al cumplir con las normativas locales y mantener una comunicación transparente con los residentes, la administración del edificio asegura una convivencia armoniosa y eficiente.
  
  👉👉 En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e16.webp",
      author: "Casa Grande",
      date: "22/11/2024",
      category: "Mantenimiento",
      tags: ["Montacoches", "Seguridad"],
    },
    {
      id: "23",
      title: "Manual de Convivencia",
      slug: "auditoria-cuentas-junta",
      excerpt: "Transparencia que genera confianza y reduce morosidad.",
      content: `Todo lo que Necesitas Saber para una Vida Armoniosa
  El Manual de Convivencia es una herramienta esencial para asegurar la buena convivencia en los edificios residenciales. Se trata de un conjunto de normas y pautas que regulan el comportamiento y las responsabilidades de los propietarios, inquilinos y cualquier persona que habite o visite el edificio. Este documento es clave para mantener un ambiente de respeto, seguridad y tranquilidad entre los vecinos.
  
  ¿Qué es el Manual de Convivencia?
  El Manual de Convivencia de un edificio residencial es un documento que detalla las reglas y normativas que deben seguir todos los residentes, incluyendo derechos y deberes, normas sobre el uso de áreas comunes, horarios, ruido, cuidado de mascotas, entre otros aspectos.
  
  Es más que un simple conjunto de normas; es una guía de comportamiento que ayuda a prevenir conflictos entre vecinos, evitando malentendidos y fomentando el respeto mutuo.
  
  ¿Por qué es tan importante el Manual de Convivencia?
  La vida en un edificio puede ser compleja. El compartir espacios comunes como pasillos, ascensores, jardines o estacionamientos requiere de reglas claras para garantizar que todos los vecinos respeten los derechos de los demás. Un buen Manual de Convivencia ayuda a:
  
  Evitar conflictos: Define claramente lo que está permitido y lo que no, lo que minimiza las disputas.
  Proteger las áreas comunes: Establece normas para el uso adecuado de los espacios compartidos.
  Fomentar el respeto mutuo: Inculca la idea de que vivir en comunidad implica respetar normas para el beneficio de todos.
  Mejorar la calidad de vida: Un ambiente ordenado y respetuoso se traduce en una mejor convivencia para todos los residentes.
  ¿Qué temas incluye un Manual de Convivencia?
  El contenido de un Manual de Convivencia puede variar según el edificio, pero en general, debe cubrir los siguientes puntos esenciales:
  
  1. Normas sobre el uso de áreas comunes
  Las áreas comunes de un edificio, como jardines, piscinas, gimnasios o salones de eventos, requieren un uso responsable para garantizar que todos los residentes puedan disfrutarlas. Algunas de las normas más comunes incluyen:
  
  Horarios de uso de las áreas recreativas.
  Reservas para el uso exclusivo de espacios como salones sociales.
  Normas de limpieza y cuidado de las áreas compartidas.
  Prohibición de fumar o ingerir bebidas alcohólicas en ciertas zonas.
  Un uso inadecuado de estos espacios puede generar conflictos y deterioro, por lo que estas normas son clave para preservar el bienestar colectivo.
  
  2. Reglas sobre el ruido y los horarios
  El ruido es una de las principales causas de conflictos en los edificios. Por ello, el Manual de Convivencia debe establecer claramente:
  
  Horarios permitidos para ruidos elevados, como fiestas o reparaciones.
  Prohibición de realizar actividades ruidosas fuera de los horarios establecidos.
  Consejos para mitigar ruidos molestos dentro de los departamentos (uso de alfombras, aislamientos, etc.).
  El respeto a estas normas es fundamental para garantizar la tranquilidad de todos los vecinos.
  
  3. Manejo de mascotas
  En muchos edificios, las mascotas forman parte de la vida familiar. Sin embargo, la tenencia responsable es esencial para evitar conflictos con otros vecinos. El Manual de Convivencia puede incluir:
  
  Normas sobre la cantidad de mascotas permitidas.
  Obligación de mantener las mascotas bajo control en áreas comunes.
  Limpieza de los desechos de las mascotas.
  Restricciones sobre el tipo o tamaño de mascotas permitidas en el edificio.
  Un manejo adecuado de las mascotas contribuye a una convivencia más armónica y respeta los derechos de quienes no son amantes de los animales.
  
  4. Normas de seguridad
  La seguridad es un tema prioritario en cualquier edificio. El Manual de Convivencia debe incluir reglas claras sobre:
  
  Uso de cámaras de seguridad y vigilancia.
  Normas para el ingreso de visitantes y proveedores.
  Protocolo de evacuación en casos de emergencia.
  Cuidado y mantenimiento de los sistemas de seguridad (como cerraduras, alarmas y puertas).
  Estos procedimientos son cruciales para proteger a los residentes y garantizar un entorno seguro.
  
  5. Obligaciones financieras: Cuotas y pagos
  El Manual de Convivencia también debe especificar las responsabilidades financieras de los propietarios e inquilinos. Esto incluye:
  
  Pago de las cuotas de mantenimiento del edificio en los plazos establecidos.
  Consecuencias por el incumplimiento en el pago de las cuotas (intereses, multas, restricciones).
  Responsabilidad financiera en caso de daños causados por negligencia a las áreas comunes o instalaciones del edificio.
  El cumplimiento de estas normas asegura que el edificio tenga los fondos necesarios para su mantenimiento y funcionamiento adecuado.
  
  6. Sanciones y medidas disciplinarias
  Finalmente, el Manual debe estipular qué acciones se tomarán si se violan las normas. Esto puede incluir:
  
  Advertencias escritas.
  Multas económicas.
  Restricción temporal del uso de áreas comunes.
  En casos graves, acciones legales.
  Las sanciones deben ser claras y justas para garantizar que todos los residentes comprendan las consecuencias de no respetar las reglas.
  
  ¿Cómo se elabora y aprueba el Manual de Convivencia?
  El Manual de Convivencia es redactado por la Junta de Propietarios del edificio y debe ser aprobado en una Asamblea General. Es fundamental que todos los residentes participen en su elaboración o, al menos, estén al tanto de su contenido y actualización periódica.
  
  Este proceso garantiza que las normas reflejen las necesidades y particularidades de la comunidad. Además, todos los residentes deben recibir una copia y comprometerse a respetarlo.
  
  El Manual de Convivencia como Pilar de la Vida en Comunidad
  Un buen Manual de Convivencia es la base de una convivencia pacífica y ordenada en un edificio residencial. Al definir claramente los derechos y deberes de cada residente, se evitan conflictos, se garantiza el respeto mutuo y se mejora la calidad de vida de todos los habitantes.
  
  Si vives en un edificio o formas parte de la Junta de Propietarios, asegúrate de contar con un Manual de Convivencia actualizado y que todos los residentes lo conozcan. ¡Es la mejor herramienta para disfrutar de un entorno seguro, armonioso y respetuoso!`,
      image: "/e17.webp",
      author: "Casa Grande",
      date: "08/11/2024",
      category: "Finanzas",
      tags: ["Auditoría", "Transparencia"],
    },
    {
      id: "24",
      title: "¿En tu edificio hay un vecino(a) «tóxico»?",
      slug: "jardin-vertical-fachada",
      excerpt: "De la licencia de obra menor al riego por goteo: guía paso a paso.",
      content: `Una vecina o vecino «tóxico» es aquel que, a través de su comportamiento recurrente, genera un ambiente negativo en la comunidad, afectando la convivencia y el bienestar de los demás residentes. Sus acciones pueden ser directas o sutiles, pero suelen tener un impacto desestabilizador, creando conflictos, malentendidos y tensiones en el edificio o condominio. Aquí te describo algunos de los comportamientos y características que definen a un vecino tóxico:
  
  Características de un vecino «tóxico»:
  Si uno de tus vecinos tiene 03 o más Características de las siguientes, se puede considerar como un vecino «tóxico»
  
  Crítico constante: Siempre está señalando lo que no le parece bien, pero nunca ofrece soluciones constructivas. Critica las decisiones de la Junta de Propietarios, las acciones del administrador, e incluso las costumbres o hábitos de otros vecinos.
  Chismoso y malintencionado: Suele propagar rumores o información falsa sobre otros residentes, creando divisiones y desconfianza entre los vecinos. Este tipo de comportamiento puede generar una atmósfera de intriga y conflicto.
  Generador de conflictos: No solo tiene desacuerdos, sino que los fomenta de manera constante. Busca imponer su opinión o sus deseos sin considerar el bienestar común. Se enfrenta regularmente con otros residentes, creando un ambiente hostil.
  Desconsiderado y ruidoso: Ignora las reglas del edificio o condominio, como respetar horarios de silencio o el uso adecuado de las áreas comunes. Puede organizar reuniones ruidosas, no cumplir con las normas de convivencia o hacer caso omiso a las solicitudes de otros vecinos.
  Incumplidor de sus obligaciones: Puede ser un vecino moroso, que no paga las cuotas de mantenimiento a tiempo, lo que afecta las finanzas del edificio. Su incumplimiento genera molestias en los demás, quienes deben cubrir los gastos atrasados​​.
  Rechaza el diálogo y la mediación: No está dispuesto a dialogar o buscar soluciones amigables. Se niega a participar en reuniones de la Junta de Propietarios o, cuando lo hace, lo hace de manera conflictiva y destructiva.
  Fomenta la desconfianza y la división: Intenta enfrentar a los vecinos entre sí, generando facciones dentro de la comunidad. Esto debilita la cohesión entre los propietarios y dificulta la toma de decisiones conjuntas.
  Actitudes pasivo-agresivas: Puede no ser abiertamente confrontativo, pero muestra su desaprobación con acciones como ignorar a otros vecinos, obstaculizar el acceso a zonas comunes o no cumplir con acuerdos establecidos de manera sutil.
  Falta de respeto a las normas de convivencia: Ignora el Reglamento Interno del Edificio​, ya sea con sus acciones o con la negativa a seguir las reglas. Este comportamiento genera malestar entre los residentes que sí respetan las normas.
  Ejemplo de comportamiento «tóxico»:
  Un vecino «tóxico» podría ser el que siempre tiene actitud negativa y crítica cuando participa en el chat de WhatsApp de los propietarios. Esta desconfianza afecta la cohesión entre los vecinos, dificultando la convivencia diaria y la toma de decisiones conjuntas.
  
  FRASES QUE USA UN VECINO TÓXICO:
  
  «¡No puedo creer que estén pensando en gastar tanto dinero en la pintura del edificio! Es un desperdicio.
  «Estoy seguro de que el administrador se está llevando algo con todos estos contratos. Todo está mal organizado y nada mejora.»
  «Parece que a algunos les encanta votar por cualquier cosa sin pensar. No entiendo cómo es posible que siempre estemos en esta situación.»
  ¿Por qué es importante abordar el problema?
  Un vecino «tóxico» puede afectar gravemente la armonía en un edificio o condominio, creando un entorno de incomodidad y desconfianza. Si no se gestiona adecuadamente, su comportamiento puede desmotivar la participación en las decisiones importantes del edificio, afectar el mantenimiento adecuado de las instalaciones y, en general, deteriorar la calidad de vida de todos los residentes.
  
  👉👉 En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e18.webp",
      author: "Casa Grande",
      date: "20/10/2024",
      category: "Sostenibilidad",
      tags: ["Jardines", "Arquitectura"],
    },
    {
      id: "25",
      title: "Morosidad en un Edificio: Cómo Perjudica a la Junta de Propietarios y Estrategias para Gestionarla",
      slug: "compostaje-azotea-edificio",
      excerpt: "Transforma 40 kg de residuos semanales en abono para tus áreas verdes.",
      content: `La MOROSIDAD no sólo genera tensiones entre los vecinos, sino que también compromete el mantenimiento del edificio y la convivencia.
  ¿Cómo Afecta la Morosidad a la Junta de Propietarios?
  Afecta el Presupuesto del Edificio La morosidad impacta directamente en el presupuesto mensual del edificio, afectando la capacidad de la Junta de Propietarios para cumplir con los gastos comunes. Estos gastos incluyen el mantenimiento de las áreas comunes, el pago de servicios como la limpieza, seguridad, y otros servicios esenciales como las bombas de agua o pozos a tierra.
  Compromete el Mantenimiento del Edificio Sin el pago de las cuotas por parte de todos los vecinos, se hace difícil realizar mantenimientos preventivos y correctivos en el edificio, lo que puede generar un deterioro progresivo de las instalaciones. Esto afecta la calidad de vida de todos los residentes y puede llevar a situaciones de emergencia.
  Genera Conflictos entre Vecinos La morosidad también puede causar tensiones o conflictos entre los residentes que sí cumplen con sus pagos y aquellos que no lo hacen. Esto erosiona la convivencia en el edificio, generando un ambiente de desconfianza y malestar.
  Aumenta el esfuerzo de la Junta Directiva y/o administración que deben invertir tiempo y esfuerzo en gestionar la cobranza a los vecinos morosos, lo que puede afectar su desempeño en otras áreas más estratégicas de la gestión del edificio.
  Consecuencias Legales y Económicas de la Morosidad
  En el Perú, los reglamentos de propiedad horizontal y la Ley N° 27157 establecen que los propietarios están obligados a contribuir con los gastos comunes. Si un vecino no cumple con sus pagos, la Junta de Propietarios tiene derecho a tomar acciones legales, incluyendo la cobranza judicial de la deuda. Sin embargo, los procesos legales son costosos y tardan en resolverse, lo que sigue afectando la estabilidad económica del edificio en el corto plazo.
  
  Estrategias para Gestionar la Morosidad en un Edificio
  Comunicación Transparente y Constante Una de las formas más efectivas de prevenir la morosidad es mantener una comunicación clara y constante con todos los propietarios. Informar regularmente sobre el estado financiero del edificio, los gastos comunes y los beneficios que se obtienen al tener al día las cuotas de mantenimiento puede concienciar a los vecinos sobre la importancia de sus aportes.
  Acuerdos Flexibles de Pago En algunos casos, los vecinos morosos pueden estar pasando por dificultades financieras. En estos casos, es importante ofrecer opciones flexibles de pago, como acuerdos de refinanciamiento de la deuda o facilidades para el pago a plazos. Esto no solo favorece el cobro de la deuda, sino que también mejora la relación con el propietario.
  Implementación de Sanciones El Reglamento Interno de cada edificio puede establecer sanciones para los vecinos morosos, como la suspensión del uso de ciertas áreas comunes o la imposición de intereses por mora. Sin embargo, es fundamental que estas medidas estén claramente estipuladas y comunicadas previamente a todos los propietarios.
  Cobranza Amistosa Antes de recurrir a medidas legales, la cobranza amistosa puede ser una herramienta eficaz. Esta incluye enviar recordatorios amables, hacer llamadas telefónicas y programar reuniones para discutir la situación con el vecino moroso. Muchas veces, una conversación abierta puede resolver el problema sin necesidad de conflictos.
  Cobranza Judicial Si las estrategias anteriores no funcionan, es posible recurrir a la cobranza judicial. Para ello, se debe contar con el respaldo legal adecuado, incluyendo el acuerdo de la Junta de Propietarios y el asesoramiento de un abogado especializado en propiedad horizontal. Este proceso puede demorar, pero asegura que se tomen medidas concretas contra el incumplimiento de los pagos.
  Caso de Éxito: Solución Creativa para la Gestión de Cobranza de Deuda
  En un edificio residencial de Surco, la Junta de Propietarios se enfrentaban a un caso complicado de morosidad. Uno de los propietarios, el Sr. Gutiérrez, acumulaba una deuda considerable de seis meses debido a problemas financieros personales. La Administración, antes de optar por medidas legales, decidió explorar una solución más flexible y creativa que beneficiara tanto al propietario moroso como a la comunidad.
  
  Casa Grande planteó al Sr. Gutiérrez que alquilara una de sus cocheras, la cual no estaba utilizando, y destinara ese ingreso mensual directamente al pago de su deuda con el edificio. Así, él no tendría que desembolsar dinero de su propio bolsillo inmediatamente y el edificio recibiría un ingreso constante que ayudaría a reducir progresivamente la deuda acumulada.
  
  Casa Grande ayudó al Sr. Gutiérrez a encontrar rápidamente un inquilino interesado en alquilar la cochera. Se redactó un contrato de alquiler, estipulando que los pagos mensuales del arrendamiento serían depositados directamente a la cuenta de la Junta de Propietarios hasta que la deuda fuera completamente saldada.
  
  Adicionalmente, la experiencia fue positiva para el inquilino de la cochera, quien no solo obtuvo un espacio seguro para su vehículo, sino que también ayudó indirectamente a mejorar el bienestar financiero del edificio.
  
  La Importancia de la Proactividad
  La morosidad es un problema que puede afectar gravemente la estabilidad financiera y la convivencia en un edificio, pero con una gestión adecuada y un enfoque proactivo, se puede mitigar. Desde la comunicación constante hasta la aplicación de sanciones o medidas legales, es importante que la Junta de Propietarios se mantenga firme en la cobranza y gestione este problema de manera eficiente.
  
  Si eres parte de una Junta de Propietarios y estás enfrentando dificultades con la morosidad en tu edificio, Casa Grande te ofrece asesoría especializada en la administración de edificios y en la implementación de estrategias efectivas para mejorar la convivencia y garantizar que todos los propietarios cumplan con sus responsabilidades financieras.`,
      image: "/e19.webp",
      author: "Casa Grande",
      date: "03/10/2024",
      category: "Medio Ambiente",
      tags: ["Residuos", "Compost"],
    },
    {
      id: "26",
      title: "Derecho del personal del edificio: Estar en planilla",
      slug: "senaletica-braille-edificios",
      excerpt: "Cumple la Norma A.120 y haz tu edificio inclusivo sin grandes inversiones.",
      content: `Es fundamental que el personal del edificio, como porteros y personal de limpieza, esté en planilla por varias razones clave, tanto legales como operativas:
  
  1. Cumplimiento de la Ley Laboral:
  La Constitución del Perú establece que los derechos laborales son irrenunciables. Los trabajadores en planilla gozan de beneficios como la seguridad social, gratificaciones, vacaciones pagadas, CTS (Compensación por Tiempo de Servicios), entre otros. Esto está regulado por leyes como el Decreto Supremo Nº 003-97-TR y la Ley de Productividad y Competitividad Laboral.
  
  2. Acceso a beneficios sociales:
  El personal en planilla tiene acceso a seguros de salud (SIS o EsSalud), pensiones (AFP u ONP), y seguro por accidentes de trabajo. Esto mejora su bienestar y la estabilidad del servicio prestado en el edificio.
  
  3. Prevención de sanciones:
  Si la Junta de Propietarios incumple con el registro de sus empleados, puede enfrentar sanciones de SUNAFIL, el ente fiscalizador laboral en Perú. Las multas por no cumplir con las obligaciones laborales pueden ser bastante severas.
  
  4. Seguridad y salud ocupacional:
  Al estar en planilla, los trabajadores cuentan con cobertura en caso de accidentes laborales o enfermedades profesionales, lo que garantiza una mayor protección tanto para ellos como para los residentes del edificio.
  
  5. Evitar problemas legales:
  La contratación informal puede generar conflictos legales. Por ejemplo, un trabajador que no está en planilla podría demandar a la Junta de Propietarios, lo que puede resultar en multas, pagos retroactivos y perjuicios a la administración del edificio.
  
  Tener al personal en planilla no solo cumple con la normativa vigente, sino que protege al edificio de problemas legales y asegura que los trabajadores reciban sus derechos.
  Si tienes dudas sobre si tu empleador te ha puesto en planilla o está cumpliendo con sus obligaciones laborales, puedes seguir estos pasos para verificarlo:
  
  1. Consulta a través de SUNAT
  La SUNAT tiene un servicio en línea para consultar si estás registrado en planilla. Para hacerlo:
  
  Ingresa al sitio web de la SUNAT (www.sunat.gob.pe).
  
  Accede a la opción Consulta de Trabajadores.
  
  Ingresa tu número de DNI o tu número de RUC si eres independiente.
  
  El sistema te mostrará si tu empleador ha realizado el registro correspondiente.
  
  2. Consulta en el portal de EsSalud
  Otra forma de verificar si estás en planilla es revisando tu estado en EsSalud, ya que todos los trabajadores en planilla deben estar afiliados a este sistema de salud. Para hacerlo:
  
  Visita el portal de EsSalud (www.essalud.gob.pe).
  
  Dirígete a la opción Consulta de Asegurados.
  
  Ingresa tu número de DNI.
  
  Si apareces como afiliado, es un indicio de que estás en planilla, ya que tu empleador está cumpliendo con realizar los aportes a EsSalud.
  
  3. Verifica en el sistema de AFP u ONP
  Si estás en una AFP o en la ONP, puedes consultar si tu empleador está realizando los aportes de pensiones. Para ello:
  
  AFP: Inicia sesión en la página de tu AFP y revisa los aportes que ha realizado tu empleador.
  
  ONP: Entra al portal de la ONP y consulta tu historial de aportes.
  
  4. Consulta en el Ministerio de Trabajo (SUNAFIL)
  Si sospechas que no estás en planilla y deseas hacer una denuncia o verificarlo de forma oficial, puedes acudir a la Superintendencia Nacional de Fiscalización Laboral (SUNAFIL):
  
  Puedes hacerlo a través de su plataforma virtual en su página web.
  
  SUNAFIL también permite hacer consultas y denuncias anónimas sobre incumplimientos laborales.
  
  5. Revisar tu Boleta de Pago
  Si ya recibes una boleta de pago, asegúrate de que en ella aparezcan detallados los aportes a EsSalud y AFP o ONP, además del descuento por CTS y gratificaciones. Estos son indicadores claros de que estás en planilla.
  
  6. Comunicación Directa con tu Empleador
  Si tienes dudas, puedes preguntar directamente a tu empleador o área de recursos humanos sobre tu situación laboral y exigir una copia de tu contrato o documento que confirme tu registro en planilla.
  
  7. Denuncia en caso de incumplimiento
  Si descubres que no estás en planilla, tienes derecho a presentar una denuncia ante SUNAFIL para que se investigue el incumplimiento por parte de tu empleador. SUNAFIL tiene la facultad de imponer sanciones a las empresas que no cumplan con sus obligaciones laborales.
  
  Siguiendo estos pasos, podrás saber si tu empleador está cumpliendo con inscribirte correctamente en la planilla y con los aportes correspondientes.
  
  👉👉 En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e20.webp",
      author: "Casa Grande",
      date: "15/09/2024",
      category: "Accesibilidad",
      tags: ["Inclusión", "Normativa"],
    },
    {
      id: "27",
      title: "El ABC de la Administración de Edificios",
      slug: "protocolo-ruidos-edificio",
      excerpt: "Define límites de decibeles y evita conflictos interminables por fiestas y taladros.",
      content: `Descubre el ABC de la administración de edificios. Aprende sobre aspectos legales, mantenimiento preventivo, gestión de conflictos y la importancia de una correcta administración.
  La administración de edificios es una tarea clave para garantizar el buen funcionamiento y convivencia en inmuebles multifamiliares. ¿Tienes dudas sobre cómo se lleva a cabo esta gestión o cuáles son las responsabilidades de un administrador? En este artículo, te explicamos el ABC de la administración de edificios, abarcando desde las funciones básicas hasta las normativas que se deben cumplir en Lima, Perú.
  
  A – Aspectos Legales y Normativos
  Uno de los pilares de la administración de edificios es el cumplimiento de las leyes y normativas locales. En Lima, estas son algunas de las principales regulaciones que debes conocer:
  
  1. Ley de Propiedad Horizontal
  
  La Ley N° 27157 regula la propiedad exclusiva y común en edificios y condominios. Esta normativa establece las reglas para la convivencia, el uso de áreas comunes y los derechos y obligaciones de cada copropietario.
  
  2. Inscripción de la Junta de Propietarios
  
  Una de las primeras acciones que debe tomar la comunidad de un edificio es formar una Junta de Propietarios e inscribirla en los Registros Públicos (SUNARP). Este proceso otorga a la junta la capacidad legal para gestionar los bienes comunes, contratar servicios y resolver conflictos.
  
  3. Reglamento Interno
  
  El Reglamento Interno es fundamental para garantizar una correcta convivencia. Este documento debe detallar las normas de uso de las áreas comunes, los horarios de silencio, la gestión de residuos, entre otros temas. Además, el reglamento debe ser aprobado por más del 50% de los propietarios.
  
  B – Beneficios de una Gestión Eficiente
  Una administración eficiente asegura no solo la buena convivencia, sino también la preservación del valor del inmueble. Aquí te explicamos los beneficios de una buena gestión:
  
  1. Mantenimiento Preventivo
  
  El mantenimiento preventivo es esencial para prolongar la vida útil de los activos del edificio, como los ascensores, bombas de agua, puertas de garaje y tableros eléctricos. Una administración competente programa revisiones periódicas para evitar fallas mayores.
  
  2. Control de Gastos y Presupuesto
  
  Uno de los mayores retos de la administración de edificios y condominios es la gestión del presupuesto. Esto incluye:
  
  Controlar el cobro de las cuotas de mantenimiento.
  Priorizar las inversiones necesarias en áreas comunes.
  Optimizar los gastos operativos (limpieza, seguridad, servicios de mantenimiento).
  3. Seguridad y Emergencias
  
  Un aspecto crucial es contar con planes de emergencia ante sismos, incendios u otras eventualidades. Las Juntas de Propietarios tienen la obligación de mantener protocolos de seguridad y colaborar con las autoridades en situaciones de riesgo.
  
  C – Convivencia y Resolución de Conflictos
  La convivencia entre vecinos es otro eje central en la administración de edificios. Una gestión adecuada debe fomentar un ambiente armónico y mediar en los conflictos que puedan surgir. Estos son algunos puntos clave:
  
  1. Vecinos Morosos
  
  Un problema recurrente es el impago de las cuotas de mantenimiento. El presidente de la Junta de Propietarios tiene la facultad legal de representar a la comunidad ante el Poder Judicial para exigir el cobro de estas deudas.
  
  2. Resolución de Conflictos
  
  El administrador debe actuar como mediador entre los copropietarios para resolver problemas relacionados con el uso de áreas comunes, molestias por ruido o incumplimiento de normas de convivencia. En casos más complejos, se pueden convocar asambleas generales para tomar decisiones.
  
  LA IMPORTANCIA DE UNA BUENA ADMINISTRACION
  La administración de edificios es un trabajo integral que abarca el cumplimiento de normas legales, la gestión financiera, el mantenimiento de infraestructuras y la resolución de conflictos. Contar con un buen administrador o una Junta de Propietarios eficiente garantiza una convivencia armónica y una correcta preservación del inmueble.
  
  Si buscas mejorar la administración de tu edificio o condominio, asegúrate de que se cumplan estos puntos básicos. ¡Una buena gestión hace la diferencia en la vida diaria de todos los residentes!
  
  👉👉 En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e21.webp",
      author: "Casa Grande",
      date: "30/08/2024",
      category: "Convivencia",
      tags: ["Ruido", "Reglamento Interno"],
    },
    {
      id: "28",
      title: "La Importancia del Respeto a las Decisiones de la Junta de Propietarios según la Ley de Propiedad Horizontal",
      slug: "seguro-todo-riesgo-areas-comunes",
      excerpt: "Cobertura contra sismo, incendio y responsabilidad civil: ¿qué póliza conviene a tu edificio?",
      content: `Vivir en un edificio implica compartir espacios y responsabilidades con otras personas. Este tipo de convivencia puede ser todo un reto si no se respetan ciertas normas básicas. La Ley de Propiedad Horizontal en Perú busca precisamente regular las relaciones entre los propietarios para garantizar una vida armoniosa y organizada. Hoy queremos centrarnos en uno de los artículos más importantes: el respeto a las decisiones de la Junta de Propietarios.
  
  ¿Qué dice la Ley de Propiedad Horizontal sobre las decisiones de la Junta de Propietarios?
  La Junta de Propietarios es el órgano encargado de tomar decisiones sobre la administración, el mantenimiento y la convivencia dentro del edificio. Según la Ley de Propiedad Horizontal, las decisiones que toma la Junta en asambleas ordinarias o extraordinarias son de carácter vinculante para todos los propietarios. Esto significa que, una vez aprobadas por mayoría (o los porcentajes requeridos según el tipo de decisión), todos los copropietarios deben respetarlas y cumplirlas, independientemente de si estuvieron de acuerdo o no en la votación.
  
  Interpretación clave: ¿Cómo ayuda esto a mejorar la convivencia?
  El respeto a las decisiones de la Junta de Propietarios es fundamental para evitar conflictos y garantizar el correcto funcionamiento de la comunidad. En este contexto, veamos cómo la aplicación adecuada de este artículo de la ley puede mejorar la convivencia en tu edificio:
  
  1. Promueve la convivencia pacífica
  Si cada propietario decidiera actuar por su cuenta o no respetara las decisiones tomadas en conjunto, vivir en un edificio sería una pesadilla. La unidad en las decisiones permite que se mantenga la paz y el orden en los asuntos comunes: como el uso de áreas comunes, la implementación de reglas para mascotas o el manejo de los fondos de mantenimiento.
  
  2. Evita gastos innecesarios
  Una de las decisiones más frecuentes de la Junta de Propietarios es la asignación de fondos para reparaciones, mantenimiento o mejoras del edificio. Si todos los propietarios no cumplen con estas decisiones, podría generarse un retraso en las obras o problemas mayores, lo que resultaría en costos adicionales para la comunidad.
  
  Por ejemplo, si se aprueba el mantenimiento de las bombas de agua y algunos propietarios se niegan a contribuir con la cuota, el sistema podría fallar, generando problemas de suministro y un gasto mayor para arreglar un problema más grave.
  
  3. Fomenta la responsabilidad compartida
  Vivir en una propiedad horizontal implica tener derechos, pero también deberes. Una interpretación clave de este artículo de la ley es que promueve la responsabilidad compartida. Todos deben aportar su parte, no solo económicamente, sino también cumpliendo las normativas establecidas por la Junta de Propietarios. Esto incluye respeto por los vecinos, cumplimiento de los horarios de uso de espacios comunes y otras reglas de convivencia.
  
  4. Solución a los problemas de los vecinos morosos
  Un problema recurrente en muchos edificios es la morosidad de algunos vecinos, lo que afecta el presupuesto general del condominio. La Junta de Propietarios, en cumplimiento de la Ley de Propiedad Horizontal, puede tomar decisiones para afrontar esta situación, como aplicar sanciones o incluso iniciar procesos legales. Al respetar estas decisiones, el resto de los propietarios aseguran que no se ponga en riesgo el bienestar de todos por la irresponsabilidad de unos pocos.
  
  5. Mejora la seguridad y el bienestar común
  Decisiones relacionadas con la seguridad del edificio, como el mantenimiento de los pozos a tierra, instalación de cámaras o contratación de personal de vigilancia, son esenciales para garantizar un entorno seguro para todos. Cuando estas decisiones son acatadas, se reducen los riesgos y se mejora la calidad de vida de los copropietarios.
  
  ¡Todos Ganamos Respetando las Decisiones!
  Respetar las decisiones de la Junta de Propietarios es una forma de construir una comunidad organizada, segura y donde se fomenten las buenas relaciones entre vecinos. La Ley de Propiedad Horizontal establece reglas claras que, si son acatadas, mejoran la calidad de vida de todos los copropietarios, ya que permite gestionar los recursos de manera eficiente y equitativa.
  
  Es importante que todos los propietarios comprendan que, aunque a veces no estén de acuerdo con ciertas decisiones, el bienestar común debe prevalecer sobre los intereses individuales. La clave está en participar activamente en las asambleas, expresar opiniones de manera constructiva y, sobre todo, cumplir con lo que se ha acordado en beneficio de todos.
  
  Este artículo no solo informa a los copropietarios sobre la importancia de respetar la Ley de Propiedad Horizontal, sino que también los motiva a participar activamente en su comunidad, algo esencial para mejorar la vida en edificios y condominios.
  
  👉👉 En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e22.webp",
      author: "Casa Grande",
      date: "14/08/2024",
      category: "Finanzas",
      tags: ["Seguro", "Riesgos"],
    },
    {
      id: "29",
      title: "¿Por qué buscar una Empresa de Administración de Edificios?",
      slug: "retrofit-ascensores-edificio",
      excerpt: "Guía de decisión cuando tu elevador supera los 20 años de uso.",
      content: `Los copropietarios de inmuebles en propiedad horizontal buscan los servicios de una empresa administradora por varias razones fundamentales que facilitan la convivencia, el mantenimiento de las áreas comunes y el cumplimiento de normativas. Algunas de las razones clave son:
  
  1. Gestión profesional de las áreas comunes
  Los edificios y condominios en propiedad horizontal tienen áreas comunes que requieren un manejo eficiente y constante, como los ascensores, bombas de agua, estacionamientos, pasillos, jardines, y más. Una empresa administradora cuenta con la experiencia para gestionar:
  
  Mantenimiento preventivo y correctivo de equipos esenciales.
  Supervisión del estado de las instalaciones y contratación de servicios técnicos.
  Gestión de recursos, como suministros y servicios, para mantener en buen estado las áreas comunes​.
  2. Cumplimiento de normativas legales
  En la propiedad horizontal, los copropietarios deben cumplir con diversas normativas locales, como las establecidas por el Reglamento Nacional de Edificaciones y las leyes de propiedad horizontal en Perú. Una empresa administradora facilita:
  
  Cumplimiento de las normativas municipales y de seguridad.
  Gestión de documentos legales, como la inscripción del presidente de la junta de propietarios en la Sunarp​.
  Asesoría en temas legales y la representación de los copropietarios ante entidades como SUNAFIL​.
  3. Mejora en la convivencia y resolución de conflictos
  Vivir en propiedad horizontal implica convivir con vecinos y compartir espacios. Una empresa administradora profesional ayuda a:
  
  Mediar en conflictos entre copropietarios por temas como ruidos, uso de áreas comunes o deudas.
  Facilitar la implementación de reglamentos internos, asegurando que todos los copropietarios conozcan y respeten las reglas de convivencia​.
  Organizar asambleas y reuniones de la Junta de Propietarios, gestionando eficientemente la toma de decisiones​.
  4. Cobro de cuotas de mantenimiento
  Una empresa administradora asegura la cobranza eficiente de las cuotas mensuales de mantenimiento, lo cual es esencial para cubrir los costos de servicios, reparaciones y mantenimiento de las áreas comunes. Además, facilita el proceso de cobro a morosos, incluso con posibilidad de interponer demandas en nombre de la Junta de Propietarios​.
  
  5. Optimización de tiempo y recursos
  Los copropietarios, generalmente, no tienen el tiempo ni la experiencia para gestionar todas las tareas administrativas y de mantenimiento que un edificio requiere. Una empresa administradora se encarga de:
  
  Coordinar proveedores y servicios de manera eficiente.
  Mantener una planificación de mantenimiento preventivo para evitar costos mayores por fallos en los equipos​.
  Manejar la contabilidad y la administración financiera del edificio.
  En resumen, los copropietarios contratan una empresa administradora para garantizar el adecuado funcionamiento y mantenimiento de las áreas comunes, cumplir con las normativas legales, evitar conflictos y asegurar una convivencia armónica y organizada dentro del edificio o condominio.
  
  👉👉 En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e23.webp",
      author: "Casa Grande",
      date: "01/08/2024",
      category: "Mantenimiento",
      tags: ["Ascensores", "Eficiencia"],
    },
    {
      id: "30",
      title: "EL EDIFICIO ES UNA MÁQUINA DE HABITAR",
      slug: "plan-evacuacion-sismo-edificio",
      excerpt: "Paso a paso para cumplir INDECI y certificar tu simulacro anual.",
      content: `Esta visión pragmática y funcionalista del diseño y la administración de edificios en propiedad horizontal asegura que cada componente del edificio funcione adecuadamente para el bienestar colectivo de todos los propietarios.
  La frase «El edificio es una máquina de habitar» proviene de una famosa idea del arquitecto suizo Le Corbusier, quien definía los edificios como estructuras funcionales diseñadas específicamente para facilitar la vida humana de manera eficiente. Desde la perspectiva de la administración de edificios y condominios, esta frase nos invita a reflexionar sobre la importancia de gestionar y mantener un edificio como si fuera una máquina bien aceitada, asegurando su funcionamiento óptimo en todo momento.
  
  FUNCIONALIDAD EN LA ADMINISTRACIÓN DE EDIFICIOS
  
  Al igual que una máquina, un edificio residencial está compuesto por diversos sistemas interrelacionados, como los sistemas eléctricos, hidráulicos y mecánicos, que deben funcionar en armonía para garantizar que los residentes puedan disfrutar de sus viviendas cómodamente. La administración de edificios debe supervisar el mantenimiento adecuado de estos sistemas para evitar problemas que afecten la calidad de vida de los propietarios.
  
  MANTENIMIENTO PREVENTIVO Y CORRECTIVO
  
  Como cualquier máquina, un edificio requiere mantenimiento preventivo regular. Los ascensores, bombas de agua, puertas de cochera, tableros eléctricos, y los sistemas de seguridad deben someterse a inspecciones y ajustes continuos para prevenir fallos. La correcta administración de condominios asegura que estos equipos se mantengan operativos y seguros, evitando costosas reparaciones correctivas que afecten el presupuesto de la junta de propietarios.
  
  OPTIMIZACIÓN DEL ESPACIO Y PROPIEDAD HORIZONTAL
  
  En un edificio, la optimización del espacio es clave. Las zonas privadas y comunes deben ser gestionadas eficientemente para que todos los propietarios disfruten de su uso sin interferir en la privacidad de los demás. Esto es un aspecto crucial en la propiedad horizontal, donde las decisiones de uso común son tomadas por la junta de propietarios, siguiendo las normativas establecidas en el Reglamento Interno.
  
  CONFORT Y SEGURIDAD EN EDIFICIOS
  
  Un edificio, como una «máquina de habitar», debe proporcionar un entorno seguro y confortable. Los sistemas contra incendios, las salidas de emergencia, y el suministro continuo de agua y electricidad son fundamentales para garantizar la seguridad de los residentes. En la administración de edificios, es esencial asegurarse de que estas instalaciones estén siempre en perfectas condiciones y cumplan con la normativa vigente.`,
      image: "/e24.webp",
      author: "Casa Grande",
      date: "18/07/2024",
      category: "Seguridad",
      tags: ["Sismo", "Emergencia"],
    },
    {
      id: "31",
      title: "El Reglamento Interno",
      slug: "cargadores-autos-electricos-condominio",
      excerpt: "Desde la selectora de carga hasta el cobro individual vía app.",
      content: `El Reglamento Interno de un inmueble sujeto a este régimen, debe contener obligatoriamente los porcentajes que corresponden a cada propietario en la propiedad de los bienes comunes (artículo 39 inc. d) de la Ley Nº 27157). Estos porcentajes serán la referencia:
  
  (I) Al pagar los gastos por servicios comunes, conservación, mantenimiento y administración de la edificación; y,
  
  (II) Para asistencia, votación y/o adoptar acuerdos en las sesiones de junta; en concordancia con el inc. e) del citado artículo.
  
  A veces existen dudas acerca de cómo proceder si a la sesión de junta solo asiste un cónyuge o un copropietario, sin carta poder del esposo o copropietario: ¿Se debe consignar su asistencia, pero no contabilizar su porcentaje para el cómputo del quorum? ¿Se divide en dos el porcentaje en caso de esposos y entre el número de copropietarios en caso de condóminos? Entre otras, son preguntas frecuentes.
  
  El control de asistencia o la votación dependerá de cada caso, en general, y del tema de agenda, en particular. Si esta involucra solo aspectos de administración (ejemplo: elegir directiva, etcétera.), podría participar cualquiera de los cónyuges o de los condóminos (uno de estos) sin requerir carta poder. Sin embargo, creo que no se les debería considerar en la asistencia y tampoco podrían votar, salvo que cuenten con poder especial (mediante carta o mandato inscrito en registro) para tales fines.
  
  Si es sociedad de gananciales, recordemos que este es un régimen de patrimonio común, administrado por ambos cónyuges, por lo que deberían ir y votar ambos “de manera conjunta” (artículo 315 C.C). Si es copropietario quien asiste, podría invocar la “administración de hecho” (973 CC), pero respecto al bien exclusivo, y ante acreditada imposibilidad de que participen los demás; pues una decisión (voto) vinculada a la administración del bien común en edificios, debería ser previo acuerdo por mayoría absoluta de los copropietarios. (artículo 971 inc. 2 del C.C) y contando con poder de representación para ello.
  
  Hacerlo sin esta formalidad lo obligaría al reembolso si un condómino reclamara, por ejemplo, que no autorizó pagar una cuota extraordinaria.
  
  Fuente: El Peruano
  
  👉👉 En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e25.webp",
      author: "Casa Grande",
      date: "29/06/2024",
      category: "Sostenibilidad",
      tags: ["Movilidad Eléctrica", "Infraestructura"],
    },
    {
      id: "32",
      title: "CONSULTA POR ESCRITO A LOS COPROPIETARIOS",
      slug: "gestion-morosidad-condominio",
      excerpt: "Recordatorios automáticos y reporte a centrales de riesgo: la dupla ganadora.",
      content: `¿CÓMO HACER UNA CONSULTA POR ESCRITO A LOS COPROPIETARIOS?
  
  En algunas situaciones, puede ser útil realizar una consulta por escrito a los copropietarios. Este mecanismo está estipulado en la Ley sobre Copropiedad Inmobiliaria, pero es válido solo en algunas circunstancias. ¿Conoces cuáles son? En este post te daremos todos los detalles sobre este tema.
  
  ¿CÓMO SE HACE UNA CONSULTA POR ESCRITO EN EL CONDOMINIO?
  
  La consulta por escrito es un mecanismo que establece la ley, sobre Copropiedad Inmobiliaria, para tomar decisiones sobre algunos temas en específico. La consulta debe ser entregada a los copropietarios de la misma forma que se realiza la citación a asamblea; es decir, mediante carta certificada dirigida al domicilio registrado para estos efectos en la oficina de la administración.
  
  Para la consulta se deben entregar antecedentes que faciliten la comprensión y el proyecto como tal. Para su aprobación, se necesita una aceptación por escrito y firmada por al menos el 75 por ciento de los copropietarios. En caso de rechazo, no podrá realizarse de nuevo en un plazo de 6 meses.
  
  ¿EN QUÉ CIRCUNSTANCIAS SE PUEDE HACER UNA CONSULTA POR ESCRITO?
  
  La consulta por escrito a la comunidad, se puede realizar solamente en las siguientes situaciones:
  
  Ø  Enajenación o arrendamiento de bienes de dominio común.
  Ø  Constitución de gravámenes sobre espacios comunes.
  Ø  Reconstrucción o demolición del condominio.
  Ø  Petición a la Dirección de Obras Municipales para que se deje sin efecto la declaración que acogió el condominio al régimen de copropiedad inmobiliaria, o su modificación.
  Ø  Cambio de destino de las unidades del condominio.
  Ø  Constitución de derechos de uso y goce exclusivos de bienes de dominio común a favor de uno o más copropietarios, u otras formas de aprovechamiento.
  Ø  Obras de alteración o ampliaciones del condominio o sus unidades.
  Ø  Construcciones en los bienes comunes, alteraciones y cambios de destino de dichos bienes, incluso de aquellos asignados en uso y goce exclusivo.
  Te invitamos a revisar también cuáles asuntos se deben tratar en asamblea ordinaria y cuáles deben ser resueltos en sesión extraordinaria.
  
  ¿CÓMO VALIDAR LA CONSULTA POR ESCRITO A LOS COPROPIETARIOS?
  
  Luego de realizada la consulta por escrito a la comunidad, la Ley de Copropiedad establece el siguiente mecanismo para su validación:
  
  “El acuerdo correspondiente deberá reducirse a escritura pública suscrita por el Presidente de la Junta Directiva y por el administrador del condominio, debiendo protocolizarse los antecedentes que respalden el acuerdo, dejándose constancia de dicha protocolización en la respectiva escritura”
  
  👉👉  En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e26.webp",
      author: "Casa Grande",
      date: "10/06/2024",
      category: "Finanzas",
      tags: ["Morosidad", "Cobranza"],
    },
    {
      id: "33",
      title: "CONSULTA POR ESCRITO A LOS COPROPIETARIOS",
      slug: "pintura-fachada-condominio",
      excerpt: "Siloxano, acrílico o elastomérico: ¿cuál resiste mejor la humedad limeña?",
      content: `¿CÓMO HACER UNA CONSULTA POR ESCRITO A LOS COPROPIETARIOS?
  
  En algunas situaciones, puede ser útil realizar una consulta por escrito a los copropietarios. Este mecanismo está estipulado en la Ley sobre Copropiedad Inmobiliaria, pero es válido solo en algunas circunstancias. ¿Conoces cuáles son? En este post te daremos todos los detalles sobre este tema.
  
  ¿CÓMO SE HACE UNA CONSULTA POR ESCRITO EN EL CONDOMINIO?
  
  La consulta por escrito es un mecanismo que establece la ley, sobre Copropiedad Inmobiliaria, para tomar decisiones sobre algunos temas en específico. La consulta debe ser entregada a los copropietarios de la misma forma que se realiza la citación a asamblea; es decir, mediante carta certificada dirigida al domicilio registrado para estos efectos en la oficina de la administración.
  
  Para la consulta se deben entregar antecedentes que faciliten la comprensión y el proyecto como tal. Para su aprobación, se necesita una aceptación por escrito y firmada por al menos el 75 por ciento de los copropietarios. En caso de rechazo, no podrá realizarse de nuevo en un plazo de 6 meses.
  
  ¿EN QUÉ CIRCUNSTANCIAS SE PUEDE HACER UNA CONSULTA POR ESCRITO?
  
  La consulta por escrito a la comunidad, se puede realizar solamente en las siguientes situaciones:
  
  Ø  Enajenación o arrendamiento de bienes de dominio común.
  Ø  Constitución de gravámenes sobre espacios comunes.
  Ø  Reconstrucción o demolición del condominio.
  Ø  Petición a la Dirección de Obras Municipales para que se deje sin efecto la declaración que acogió el condominio al régimen de copropiedad inmobiliaria, o su modificación.
  Ø  Cambio de destino de las unidades del condominio.
  Ø  Constitución de derechos de uso y goce exclusivos de bienes de dominio común a favor de uno o más copropietarios, u otras formas de aprovechamiento.
  Ø  Obras de alteración o ampliaciones del condominio o sus unidades.
  Ø  Construcciones en los bienes comunes, alteraciones y cambios de destino de dichos bienes, incluso de aquellos asignados en uso y goce exclusivo.
  Te invitamos a revisar también cuáles asuntos se deben tratar en asamblea ordinaria y cuáles deben ser resueltos en sesión extraordinaria.
  
  ¿CÓMO VALIDAR LA CONSULTA POR ESCRITO A LOS COPROPIETARIOS?
  
  Luego de realizada la consulta por escrito a la comunidad, la Ley de Copropiedad establece el siguiente mecanismo para su validación:
  
  “El acuerdo correspondiente deberá reducirse a escritura pública suscrita por el Presidente de la Junta Directiva y por el administrador del condominio, debiendo protocolizarse los antecedentes que respalden el acuerdo, dejándose constancia de dicha protocolización en la respectiva escritura”
  
  👉👉  En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e27.webp",
      author: "Casa Grande",
      date: "25/05/2024",
      category: "Mantenimiento",
      tags: ["Fachada", "Pintura"],
    },
    {
      id: "34",
      title: "Aspectos Fundamentales en la Administración de Edificios",
      slug: "control-plagas-ecologico-condominio",
      excerpt: "Trampas de feromonas y luz UV que extinguen cucarachas y polillas.",
      content: `Para desempeñar exitosamente la labor de administrador de edificios, es fundamental contar con una sólida base de conocimientos en diversas áreas. Aquí te proporciono una visión general de los aspectos clave en materia legal, contable, psicológica y económica:
  
  1. Materia Legal:
  
     – Derecho Inmobiliario: Conocimiento profundo de las leyes y regulaciones que rigen la Ley de Propiedad Horizontal N° 27157, los derechos y responsabilidades de los copropietarios, así como las normativas específicas relacionadas con la administración de edificios en Perú y la normativa municipal de Lima.
  
    – Derecho Laboral: Familiaridad con los derechos laborales del personal de servicio del edificio, regulaciones sobre contratación, remuneración, jornadas laborales, seguridad social, y procedimientos en caso de conflictos laborales.
  
  2. Materia Contable:
  
    – Contabilidad: Entender los principios contables, elaboración de presupuestos, manejo de planillas, balances financieros, gestión de cobranzas y pagos, así como la preparación de informes financieros para los copropietarios.
  
     – Administración de Presupuestos: Habilidad para establecer y gestionar presupuestos para mantenimiento, reparaciones, servicios y otros gastos relacionados con la operación del edificio.
  
  3. Materia Psicológica:
  
     – Relaciones Interpersonales: Habilidad para comunicarse eficazmente con los copropietarios, resolver conflictos de manera constructiva y fomentar la armonía y la convivencia pacífica entre los residentes.
  
    – Manejo de Conflictos: Capacidad para identificar, abordar y mediar en disputas entre vecinos, proveedores y personal de servicio, aplicando técnicas de negociación y resolución de problemas.
  
  4. Materia Económica:
  
   – Economía: Comprensión de los principios económicos básicos, análisis de costos y beneficios, evaluación de inversiones y toma de decisiones financieras orientadas al crecimiento sostenible del edificio.
  
     – Gestión de Ingresos y Gastos: Administración eficiente de las finanzas del edificio, asegurando el cumplimiento de las obligaciones financieras y la maximización de los recursos disponibles.
  
  Un administrador de edificios que posea un sólido conocimiento en estas áreas estará bien preparado para enfrentar los desafíos y cumplir con éxito sus responsabilidades en la gestión integral de un edificio.
  
  👉👉 En Casa Grande – administración de edificios estamos comprometidos a brindar información que ayude a los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e28.webp",
      author: "Casa Grande",
      date: "07/05/2024",
      category: "Salud",
      tags: ["Plagas", "Ecología"],
    },
    {
      id: "35",
      title: "REGLAMENTO INTERNO",
      slug: "wifi-areas-comunes-edificio",
      excerpt: "Convierte lobby y coworking en zonas conectadas sin saturar tu ancho de banda.",
      content: `Es sumamente importante que los propietarios lean y conozcan el REGLAMENTO INTERNO. En el que se precisan los deberes y derechos recíprocos de los propietarios de los departamentos, estacionamientos y de los depósitos si existieran.
  
  El reglamento interno de un edificio es un conjunto de normas y directrices establecidas para regular la convivencia y el uso de las instalaciones dentro de un edificio o complejo residencial. Este documento es fundamental para mantener el orden, la seguridad y la armonía entre los residentes.
  
  El reglamento interno generalmente aborda aspectos como:
  
   – Uso de áreas comunes: Establece las reglas para el uso de espacios compartidos como el gimnasio, la piscina, salones de usos múltiples, entre otros.
  
  – Procedimientos de seguridad: Detalla las medidas de seguridad del edificio, como el acceso de visitantes, protocolos de emergencia, entre otros.
  
  – Mantenimiento de las propiedades: Incluye directrices sobre el mantenimiento de las unidades residenciales y áreas comunes.
  
  – Ruidos y horas de silencio: Establece las horas durante las cuales se debe evitar hacer ruido.
  
  – Reglas de convivencia: Define comportamientos aceptables y no aceptables para promover la buena convivencia entre los residentes.
  
  – Gestión de residuos: Proporciona instrucciones sobre la eliminación adecuada de los residuos.
  
  Cada edificio o complejo residencial puede tener su propio reglamento interno, que debe ser respetado por todos los residentes. Habitualmente, el incumplimiento de estas normas puede resultar en sanciones o multas. 
  
  👉👉 En Casa Grande – administración de edificios estamos comprometidos a brindar información que ayude a los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e29.webp",
      author: "Casa Grande",
      date: "12/04/2024",
      category: "Tecnología",
      tags: ["Wi-Fi", "Redes"],
    },
    {
      id: "36",
      title: "CREANDO UNA MEJOR CONVIVENCIA",
      slug: "reglamento-areas-comunes",
      excerpt: "Del gimnasio al rooftop: cómo automatizar reservas y evitar sobreuso.",
      content: `Los 5 pequeños detalles que te harán ganar puntos con tus vecinos de al lado:
  
  Ø Por más prisa que tengas, procura saludarlos.
  
  Ø  Respeta siempre el lugar de estacionamiento de tus vecinos y dale el uso para el que fue construido – PARQUEO DE AUTOS
  
  Ø  Detén las puertas del elevador si notas que alguien corre hacia él.
  
  Ø  Si los ves en apuros, ayúdalos.
  
  Ø  Aún si vives en un edificio con muchos vecinos, trata de aprenderte el nombre de tus vecinos más cercanos.
  
  Ø  Ellos serán más atentos contigo cada vez que los encuentres.`,
      image: "/e30.webp",
      author: "Casa Grande",
      date: "26/03/2024",
      category: "Convivencia",
      tags: ["Reservas", "Áreas Comunes"],
    },
    {
      id: "37",
      title: "NUESTROS SERVICIOS",
      slug: "app-condominio-beneficios",
      excerpt: "Votaciones virtuales y notificaciones push que elevan el quorum al 85 %.",
      content: `NUESTROS SERVICIOS
  Nuestra empresa, ofrece ASESORIA LEGAL especializada en todos los temas que afectan a los intereses de los copropietarios en Propiedad Horizontal. Contar con este servicio brindado por nuestros expertos en derecho inmobiliario y registral puede resultar sumamente beneficioso para garantizar una convivencia armoniosa y resolver eficazmente cualquier situación legal que pueda surgir en su edificio.
  
  Contar con nuestra asesoría legal en temas de Propiedad Horizontal le brindará la tranquilidad y seguridad de tener a expertos en la materia velando por sus intereses y resolviendo cualquier situación legal de manera profesional y eficaz. No dude en contactarnos para obtener más información sobre nuestros servicios y cómo podemos ayudarle a resolver cualquier tema legal que afecte a los copropietarios en su edificio.
  
  Nuestra asesoría legal cubre una amplia gama de temas fundamentales para los copropietarios, tales como:
  
  
  Reglamento Interno y Manual de Convivencia
  Ofrecemos asesoramiento en la elaboración y actualización del Reglamento Interno y Manual de Convivencia, asegurando que se ajusten a la normativa vigente y contemplen las necesidades específicas de su edificio.
  
  
  Cobranza a Propietarios Morosos
  Nos encargamos de gestionar la cobranza a propietarios morosos de manera eficiente y legal, protegiendo los intereses de la comunidad de copropietarios y garantizando el cumplimiento de las obligaciones de cada propietario.
  
  
  Inscripción de Junta Directiva en Sunarp
  Brindamos asesoría en el proceso de inscripción de la Junta Directiva en Sunarp, asegurando que todos los trámites se realicen correctamente y de acuerdo con la normativa establecida.
  
  
  Conflictos entre Copropietarios
  Ayudamos a resolver conflictos entre copropietarios de manera pacífica y legal, buscando soluciones que beneficien a todas las partes involucradas y promuevan un ambiente de convivencia armoniosa.
  
  
  Cumplimiento de la Ley de Propiedad Horizontal y el Decreto Legislativo Nº 1568
  Garantizamos el cumplimiento de la Ley de Propiedad Horizontal y el Decreto Legislativo Nº 1568, asesorando a los copropietarios en sus derechos y obligaciones, y protegiendo sus intereses en todo momento.
  
  
  `,
      image: "/e31.webp",
      author: "Casa Grande",
      date: "11/03/2024",
      category: "Tecnología",
      tags: ["App", "Participación"],
    },
    {
      id: "38",
      title: "CONVENIOS DE PAGOS PARA PROPIETARIOS MOROSOS",
      slug: "iluminacion-led-inteligente",
      excerpt: "Sensores de presencia, fotoceldas y dimerización para pasillos y estacionamientos.",
      content: `Los residentes de edificios y condominios tienen ciertas obligaciones económicas que deben cumplir. Sin embargo, es bastante común que se presenten casos de morosidad. Esta situación no solo afecta a los residentes en mora, sino también a la estabilidad financiera de la comunidad en su conjunto, ya que disminuye el flujo de ingresos. Como resultado, se dispone de menos presupuesto para el mantenimiento, las reparaciones y las mejoras en las áreas comunes del condominio.
  
  LAS OBLIGACIONES ECONÓMICAS se refieren a todos los pagos monetarios que el copropietario debe realizar. Estos pueden incluir gastos comunes ordinarios y extraordinarios, aportes al fondo común de reserva o al fondo operacional inicial, multas, intereses, primas de seguros, entre otros, según lo estipulado en el reglamento de copropiedad correspondiente
  
  Entre ellas se incluyen la inelegibilidad para cargos de representación comunitaria y la incapacidad para votar en acuerdos comunitarios.
  
  En algunos casos, se puede suspender el suministro de servicios básicos como electricidad, calefacción o telecomunicaciones en su unidad.
  
  Los copropietarios que no cumplen con sus obligaciones económicas enfrentan varias consecuencias.
  
  También pueden ser objeto de demandas legales para exigir el pago de sus deudas.
  
  Sin embargo, tienen la opción de firmar un acuerdo de pago para regularizar su situación.
  
  CONVENIO DE PAGO
  
  Se trata de un instrumento legal que facilita la regularización de las deudas de obligaciones económicas de los copropietarios de un edificio o condominio. Este mecanismo establece pagos periódicos para saldar la totalidad de la deuda.
  
  REQUISITOS DEL CONVENIO DE PAGO
  
  Ø  Tener deudas de obligaciones económicas en el edificio/condominio
  
  Ø  Expresar la intención de regularizar las deudas mediante un convenio de pago.
  
  Ø  Facultad del administrador para celebrar el convenio de pago con previo acuerdo con la Junta Directiva.
  
  Ø  Pagar la primera cuota al momento de la suscripción del convenio de pago.
  
  CONTENIDO DEL CONVENIO DE PAGO
  
  Ø  Fecha de celebración del convenio de pago
  
  Ø  Se debe señalar entre quienes se celebrará el convenio de pago respectivo.
  
  Ø  Datos de ambas partes, el representante de la Junta de Propietarios y el propietario moroso.
  
  Ø  Mencionar la forma en que se realizarán los pagos de la deuda, valor de la primera cuota, el número de cuotas que se pactara el convenio.
  
  Ø  Fecha de pago de las cuotas respectivas.
  
  Ø  Señalar si establecerán una cláusula de aceleración, que se traduce en el cobro de la totalidad de la deuda en caso de incumplimiento en el pago de cuotas pactadas.
  
  ¿QUIÉN TIENE LA FACULTAD DE CELEBRAR CONVENIOS DE PAGO?
  
  El administrador estará facultado para celebrar convenios de pago con aquellos copropietarios que se encuentren morosos respecto de sus obligaciones económicas, pudiendo concederse cuotas con vencimientos mensuales para el pago de la deuda. Sin embargo, esta facultad del administrador de celebrar convenios de pago, debe ser con previo acuerdo con La Junta Directiva
  
  CONCLUSIONES
  
  La celebración de un convenio de pago permite a la comunidad reducir la morosidad de los residentes del edificio o condominio, lo que a su vez contribuye a mantener una estabilidad financiera, realizar mantenimientos constantes en las áreas comunes y fomentar una mejor convivencia en la comunidad. Además, aquellos copropietarios que hayan celebrado este convenio podrán seguir participando en las asambleas de copropietarios y formar parte de las decisiones tomadas en ellas. Esto demuestra la importancia de utilizar esta herramienta proporcionada por la Ley de Copropiedad Inmobiliaria, ya que resulta efectiva para regularizar la morosidad en los condominios del país.
  
  >> En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e32.webp",
      author: "Casa Grande",
      date: "23/02/2024",
      category: "Energía",
      tags: ["LED", "Eficiencia"],
    },
    {
      id: "39",
      title: "¿Qué dice la normativa de Lima sobre el uso de áreas comunes en edificios?",
      slug: "paneles-solares-condominio",
      excerpt: "Hasta 25 kWp sin licencia de obra: requisitos y estudio de sombras.",
      content: `La normativa sobre el uso de áreas comunes en edificios en Lima está regulada principalmente por la Ley N° 27157, que establece las disposiciones del régimen de propiedad exclusiva y común, y sus modificaciones. Según esta ley y sus normativas complementarias, como el Decreto Supremo N° 008-2000-MTC, los bienes destinados al uso común incluyen aquellos que son utilizados y disfrutados por todos los propietarios, tales como ascensores, escaleras, patios, áreas de esparcimiento, estacionamientos, entre otros.
  
  Principales aspectos del uso de áreas comunes:
  Propiedad y mantenimiento: Las áreas comunes son propiedad compartida de todos los copropietarios y su mantenimiento es responsabilidad de la Junta de Propietarios, la cual debe organizar y aprobar los presupuestos para cubrir los gastos de mantenimiento, seguridad y mejoras.
  Modificación y uso de las áreas comunes: Cualquier modificación en las áreas comunes, como obras o cambios de uso, debe ser aprobada por al menos dos tercios de los propietarios. Esto incluye decisiones sobre cesiones temporales o permanentes del uso de estas áreas.
  Protocolo ante emergencias: La Ley N° 31264 exige que las áreas comunes estén preparadas para situaciones de emergencia, como desastres naturales o emergencias sanitarias. La Junta de Propietarios debe adoptar un protocolo que contemple medidas preventivas, de evacuación y uso de las áreas comunes en estos casos.
  Normas de convivencia: La Junta de Propietarios puede establecer normas internas para regular el uso adecuado de las áreas comunes y resolver conflictos que surjan por su uso, siempre respetando los derechos de todos los propietarios.
  Estos lineamientos buscan garantizar una adecuada administración y conservación de los espacios comunes en los edificios de propiedad horizontal en Lima.
  
  >> En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e33.webp",
      author: "Casa Grande",
      date: "09/02/2024",
      category: "Sostenibilidad",
      tags: ["Solar", "Azotea"],
    },
    {
      id: "40",
      title: "La importancia del seguro de salud ESSALUD para los trabajadores",
      slug: "auditoria-energetica-condominio",
      excerpt: "Termografía y dataloggers para bajar tu recibo de luz un 18 %.",
      content: `En el Perú, la afiliación de los trabajadores a ESSALUD es un derecho fundamental que garantiza el acceso a la atención médica y protección ante enfermedades, accidentes o cualquier eventualidad que afecte su salud. El Seguro Social de Salud (ESSALUD) ofrece un conjunto de beneficios que no solo protegen la salud del trabajador, sino también la de su familia, proporcionando un respaldo económico en situaciones de incapacidad o enfermedad.
  
  Acreditación en ESSALUD
  Para acceder a los servicios de ESSALUD, los trabajadores deben estar correctamente acreditados.
  
  Además, la acreditación en ESSALUD garantiza que, en caso de un accidente laboral o una enfermedad profesional, el trabajador tenga acceso a tratamientos especializados y subsidios por incapacidad temporal, entre otros beneficios importantes.
  
  Multas por incumplimiento del pago a ESSALUD
  Es responsabilidad del empleador asegurar que sus trabajadores estén inscritos en ESSALUD y que se realicen las aportaciones correspondientes. En caso de incumplimiento, SUNAFIL (Superintendencia Nacional de Fiscalización Laboral) puede imponer sanciones. Según la normativa vigente, si un empleador no cumple con pagar el seguro social de un trabajador, se enfrenta a multas que varían dependiendo del tamaño de la empresa y del número de trabajadores afectados.
  
  Según la normativa vigente, SUNAFIL y ESSALUD pueden imponer sanciones económicas que varían en función del tamaño de la empresa y la gravedad de la infracción, dependiendo del número de trabajadores no asegurados y de la gravedad del incumplimiento​​.
  
  Para las microempresas, las multas pueden oscilar entre 0.23 y 0.46 UIT
  
  Acreditación Essalud
  Para que un trabajador esté acreditado en ESSALUD, el empleador debe realizar los siguientes pasos clave:
  
  1. Inscripción en planilla
  El empleador debe inscribir al trabajador en planilla. Esto es fundamental, ya que la acreditación en ESSALUD depende de la formalización del empleo y el pago de los aportes de seguridad social por parte de la empresa.
  
  2. Registro en ESSALUD
  Una vez inscrito en la planilla, el empleador debe realizar el registro del trabajador en el sistema de ESSALUD a través del T-Registro (Sistema de Planillas Electrónicas) que administra la SUNAT. Este registro es obligatorio y debe incluir todos los datos personales del trabajador y de sus derechohabientes (esposo(a), hijos, entre otros).
  
  3. Pago de aportes
  El empleador debe realizar el pago mensual del 9% del salario del trabajadora
  
  4. Acreditación en línea
  Una vez registrado y con los aportes en regla, el trabajador puede verificar su acreditación en el portal web de ESSALUD. A través de la plataforma en línea, tanto el trabajador como los empleadores pueden revisar el estado de su acreditación y cobertura. También pueden descargar el Certificado de Acreditación
  
  Es FUNDAMENTAL Contar con el seguro de ESSALUD es vital tanto para el bienestar del trabajador como para la estabilidad de su familia. Además, el empleador debe cumplir con su obligación de afiliar y pagar puntualmente el seguro social, ya que de lo contrario, las sanciones económicas pueden ser considerables, afectando tanto a la empresa como a sus empleados. Es fundamental mantener en regla estas obligaciones laborales para garantizar un entorno de trabajo saludable y seguro.`,
      image: "/e34.webp",
      author: "Casa Grande",
      date: "27/01/2024",
      category: "Energía",
      tags: ["Auditoría", "Ahorro"],
    },
    {
      id: "41",
      title: "En Casa Grande estamos creando una nueva cultura",
      slug: "paisajismo-sostenible-condominio",
      excerpt: "Menos agua y más biodiversidad en tu jardín frontal.",
      content: `La creación, implementación y promoción de una nueva cultura en la administración de edificios implica una combinación de estrategias y acciones que fomenten cambios en la mentalidad, prácticas y valores dentro de la organización. Aquí hay algunas ideas que podrían ser útiles:
  
  1. Definir los Valores y Objetivos de la Nueva Cultura:
  
    – Identificar y definir los valores fundamentales que se quieren promover en la administración de edificios.
  
     – Establecer objetivos claros que reflejen la visión y la misión de la nueva cultura.
  
  2. Comunicación Clara y Constante:
  
     – Comunicar de manera clara y constante los cambios culturales propuestos.
  
     – Utilizar diferentes canales de comunicación, como reuniones, correos electrónicos, carteles y otros medios, para garantizar que todos los miembros del equipo estén informados.
  
  3. Participación Activa de los Miembros del Equipo:
  
     – Fomentar la participación activa y la retroalimentación de los miembros del equipo en la definición de la nueva cultura.
  
     – Involucrar a los empleados en la toma de decisiones y en la implementación de cambios.
  
  4. Formación y Desarrollo:
  
     – Ofrecer programas de formación y desarrollo para que los empleados adquieran las habilidades y el conocimiento necesarios para adaptarse a la nueva cultura.
  
     – Proporcionar recursos educativos y oportunidades de aprendizaje continuo.
  
  5. Reconocimiento y Recompensas:
  
    – Implementar sistemas de reconocimiento y recompensas que refuercen los comportamientos y actitudes alineados con la nueva cultura.
  
     – Celebrar logros individuales y colectivos relacionados con la promoción de la nueva cultura.
  
  6. Modelo a Seguir desde la Alta Dirección:
  
    – Los líderes y la alta dirección deben servir como modelos a seguir, demostrando activamente los valores y comportamientos deseados.
  
     – Involucrar a la alta dirección en la implementación y promoción de la nueva cultura.
  
  7. Sistema de Retroalimentación:
  
     – Establecer un sistema de retroalimentación regular para evaluar el progreso y hacer ajustes según sea necesario.
  
     – Fomentar la apertura y la honestidad en la retroalimentación para abordar posibles desafíos o resistencias.
  
  8. Fomentar la Colaboración y el Trabajo en Equipo:
  
     – Promover un entorno de trabajo colaborativo donde los empleados se sientan valorados y apoyados.
  
     – Implementar actividades y proyectos que fomenten la colaboración entre diferentes departamentos y niveles jerárquicos.
  
  9. Enfoque en la Sostenibilidad y Responsabilidad Social:
  
     – Integrar prácticas sostenibles y responsabilidad social en la cultura de la administración de edificios.
  
     – Involucrar a la comunidad y a los ocupantes en iniciativas que promuevan el bienestar general.
  
  10. Evaluación Periódica y Adaptación:
  
      – Evaluar periódicamente el éxito de la implementación de la nueva cultura.
  
      – Estar dispuesto a realizar ajustes según la retroalimentación y las cambiantes circunstancias.
  
  La creación de una nueva cultura lleva tiempo y esfuerzo constante. La coherencia y la participación activa de todos los miembros de la organización son clave para el éxito a largo plazo.
  
  >>En Casa Grande – administración de edificios estamos comprometidos a brindar información que ayude a los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e35.webp",
      author: "Casa Grande",
      date: "10/01/2024",
      category: "Sostenibilidad",
      tags: ["Paisajismo", "Agua"],
    },
    {
      id: "42",
      title: "Mantenimiento ideal del Ascensor",
      slug: "manual-convivencia-2024",
      excerpt: "Plantilla lista para aprobar en asamblea virtual extraordinaria.",
      content: `El mantenimiento preventivo de ascensores es muy importante ya que en él se pueden descubrir pequeñas averías o disfuncionalidades a reparar de forma muy sencilla, en ocasiones con un simple ajuste; evitando que si esto fuera a más, la rotura de ciertos componentes con los consecuentes costes de sustitución e instalación.
   
  
  
  Pequeños detalles como un buen mantenimiento del ascensor pueden evitar grandes cantidades de dinero a una comunidad de vecinos, pero también impiden más de un susto.  Además, el mantenimiento de ascensores proporciona tranquilidad porque asegura que el ascensor se encuentre siempre en buen estado de funcionamiento.
  
  ¿CÓMO ES EL MANTENIMIENTO IDEAL DE ASCENSORES?
  
  El mantenimiento de ascensores ideal ha de hacerse correctamente en tiempo y forma. Es decir, tienen que realizarse las labores de mantenimiento necesarias en el tiempo requerido y con la periodicidad establecida por ley, y alertar en caso de que algo falle a la comunidad de propietarios.
   
  ¿CON QUÉ DEBE CONTAR EL MANTENIMIENTO DE ASCENSORES?
  
  Un mantenimiento de ascensores ideal ha de seguir los siguientes puntos, además de otros que se consideren necesarios en su momento:
  Revisiones mensuales, trimestrales o cuatrimestrales;
  Revisiones en base a la marca, modelo y vida útil del ascensor;
  Reparación de averías y sustitución de piezas desgastadas por uso o tiempo de vida útil de las mismas;
  Realización de modificaciones a que obligue la Administración Pública para aumentar la seguridad del parque de ascensores nacional;
  
  Siempre teniendo en cuenta las condiciones del edificio, ascensor y uso del mismo, contando con una buena empresa de mantenimiento, y comprobando que todo se hace adecuadamente, sin permitir que “se pasen cosas por alto” por querer ahorrar dinero a corto plazo.
   
  ¿QUÉ PUNTOS SE REVISAN EN EL MANTENIMIENTO DE ASCENSORES?
  
  Los puntos que se revisan en un buen mantenimiento de ascensores son:
  Cada mes, los aspectos básicos, como son la alarma, parada, arranque, nivelación, apertura y cierre de puertas de la cabina, componentes de la cabina y señalización de las puertas de pisos.
  Cada tres meses se revisa el freno, se limpia el foso, la pisadera de puertas y el cuarto de máquinas, y se controla el nivel de aceite de motores y máquina.
  Cada seis meses se controla el operador, la luz de emergencia y el estado de patinaje y tensión de cables. Además, se limpian y revisan las puertas de cabina, cuadros y protecciones.
  
  Cada año se revisa el estado de amarres de cabina, amarres de contrapeso, los del lado pedestal, paracaídas y articulaciones, la tensión y estado de cables, la polea, los impulsores y detectores, los finales y conmutadores, la renivelación, las rodaderas y rozaderas de cabina, las fijaciones y aislamiento de cabina y todo cuanto sea necesario. Así mismo, se limpia el estado del cabezal, el techo y bajos de cabina, el limitador, las rozaderas contrapeso y el refrigerador.
  
  Contando con una buena empresa de mantenimiento preventivo de ascensores no hay que preocuparse por nada, ya que ésta se encarga de todo. En cualquier caso, es importante asegurarse de que todo está correctamente y avisar en caso de que haya alguna anomalía antes de que ésta se convierta en algo más grave.
  Fuente: ENINTER ASCENSORES.
  
  >> Casa Grande – Administración de Edificios este es un sitio donde podrás aprender todo lo que te interesa y conviene saber como copropietario de un edificio o condominio. Sobre mantenimientos de equipos, cuotas de mantenimiento, contratación de personal, normas de convivencia, morosidad entre otros temas.`,
      image: "/e37.webp",
      author: "Casa Grande",
      date: "22/12/2023",
      category: "Convivencia",
      tags: ["Reglamento", "Multas"],
    },
    {
      id: "43",
      title: "EL ICEBERG de la Administración de Edificios",
      slug: "voluntariado-vecinal-reciclaje",
      excerpt: "Convierte botellas en fondos para áreas verdes.",
      content: `Como empresa experta y con amplia experiencia que se dedica a la administración de edificios, el día a día está lleno de diversas tareas que requieren organización, conocimientos técnicos y habilidades interpersonales. Estas son algunas de las actividades diarias que se realizan:
  
  Cada día trae nuevos desafíos, pero la clave para una administración exitosa es la planificación, la atención a los detalles y la capacidad de resolver problemas de manera efectiva. Esto garantiza que el edificio funcione sin problemas y que los residentes estén satisfechos con el servicio.
  
  1. Supervisión del personal:
  
     – Asegurarse de que el personal de portería y limpieza esté cumpliendo con sus funciones.
  
     – Coordinar los turnos y reemplazos en caso de ausencias.
  
  2. Comunicación con propietarios y residentes:
  
     – Atender consultas, quejas o sugerencias de los residentes de manera oportuna.
  
     – Enviar comunicados sobre eventos importantes, como trabajos de mantenimiento, cortes de servicios o reuniones de la Junta de Propietarios.
  
  3. Gestión de proveedores:
  
     – Coordinar con proveedores de servicios (limpieza, seguridad, mantenimiento, jardinería) para asegurar que todo se mantenga en buen estado.
  
     – Revisar contratos y negociar precios y condiciones favorables para el edificio.
  
  4. Mantenimiento preventivo y correctivo:
  
     – Supervisar y programar el mantenimiento regular de equipos esenciales, como ascensores, bombas de agua, y sistemas de seguridad.
  
     – Coordinar reparaciones urgentes cuando surgen problemas imprevistos.
  
  5. Cobranza y gestión financiera:
  
     – Enviar recordatorios de pago de las cuotas de mantenimiento y gestionar la cobranza para evitar la morosidad.
  
     – Revisar y administrar el presupuesto, asegurando que los gastos estén dentro de lo planificado.
  
     – Realizar pagos a proveedores y servicios según el cronograma.
  
  6. Planificación y ejecución de actividades:
  
     – Organizar reuniones de la Junta de Propietarios y preparar informes de gestión.
  
     – Implementar las decisiones tomadas por la Junta, como mejoras en el edificio o cambios en la administración.
  
  7. Monitoreo de la seguridad:
  
     – Supervisar que los sistemas de seguridad estén funcionando correctamente (cámaras, bombas de agua, ascensor, puertas de cochera, alarmas, entre otros).
  
     – Asegurar que el personal de portería esté cuidando adecuadamente el edificio y sus instalaciones.
  
  8. Manejo y resolución de conflictos:
  
     – Mediar en disputas entre vecinos para mantener la convivencia armoniosa.
  
     – Aplicar el reglamento interno del edificio / normas de convivencia cuando sea necesario para resolver conflictos.
  
  9. Actualización y cumplimiento normativo:
  
     – Mantenerse al día con las normativas municipales y nacionales que afectan la administración del edificio.
  
     – Asegurarse de que el edificio cumpla con todos los requisitos legales, como inspecciones de seguridad, sanidad, defensa civil y documentación al día.
  
  10. Control de inventarios y compras:
  
     – Gestionar el inventario de suministros y materiales necesarios para el mantenimiento diario del edificio.
  
     – Realizar compras de insumos de manera eficiente y controlada.
  
  En Casa Grande – administración de edificios estamos comprometidos a brindar información que ayude a los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.
  
  @CasaGrande
  
  `,
      image: "/e38.webp",
      author: "Casa Grande",
      date: "08/12/2023",
      category: "Comunidad",
      tags: ["Reciclaje", "Voluntariado"],
    },
    {
      id: "44",
      title: "4 BENEFICIOS DE INSTALAR LUCES DE EMERGENCIA EN LOS EDIFICIOS",
      slug: "sensores-cisterna-edificio",
      excerpt: "Adiós desbordes: monitoriza nivel de agua en tiempo real.",
      content: `cabas de comprar un departamento, estás emocionado y poco a poco te vas estableciendo en tu nuevo hogar. Luego, conoces a tus vecinos y tienes la suerte de llevarte bien con ellos. Todo es felicidad y confort hasta que llega un pequeño detalle: la cuota de mantenimiento. Al tener tantos dispositivos encendidos, el consumo de electricidad aumenta y se siente a fin de mes. Esto siempre es un problema, ya que uno se pregunta: ¿por qué hay tantas luces encendidas si nadie pasa mucho tiempo en los pasillos o en las áreas comunes? La única solución podría ser que cada vez que alguien pase por estas áreas, prenda y apague las luces. No es muy práctico, ¿o sí?. Algo está muy claro, el pago del mantenimiento no lo puedes evadir. Sin embargo, sí hay una solución.
  
  En la actualidad, existen algunos edificios que no solo tienen instalados luces de bajo consumo de energía en todas sus áreas, sino que también incluyen luces con sensores de movimiento. Por ejemplo, habría que apostar como la implementación de las mencionadas luces con sensores, que están colocadas en todas las áreas comunes de sus proyectos inmobiliarios. Por lo tanto, si aún tú y tus vecinos no saben cómo solucionar el problema del consumo de la luz, a continuación, te presentaremos cuatro beneficios importantes que trae implementar estas luminarias en los edificios.
  
  Economía:
  Es lo más importante, ¿verdad? Como mencionamos en un inicio, en su mayoría, el costo de mantenimiento se debe al consumo de energía que genera mantener siempre prendidas las luces de las áreas comunes y pasillos. Por eso, es recomendable el uso de estos sensores, dado que solo se encienden las luminarias en presencia de movimiento en el sector instalado, y por tanto se logran importantes ahorros en el consumo eléctrico, sobre todo en lugares de escaso tránsito.
  
  Ahorro de energía: 
  Una luminaria normal debe encenderse con un interruptor y se mantiene prendida toda la noche hasta que la seguridad del edificio la apague al amanecer. Es común que en algunos casos éste se olvide de apagar las luces de algún pasillo o área en común, lo que estaría desperdiciando electricidad e incrementando el monto de la cuota de mantenimiento por consumo de energía. Una iluminaria con detección de movimiento se mantiene apagada de forma automática hasta que el sensor de movimiento la active, lo cual desperdicia menos energía. A fin de mes cuando llegue la factura de la luz, estarás bastante agradecido de haber optado por este tipo de iluminación.
  
  Seguridad:
  Hay muchos edificios que no solo tienen luminarias dentro sino también fuera de éste, lo que produce un consumo mucho mayor de energía. Para estos casos, una solución podría ser cambiar todas las luces e instalar focos ahorradores; sin embargo, es más conveniente implementar luces con sensores de movimiento, porque no solo te permiten ahorrar energía y sobre todo dinero, sino que en algunos casos puede ser un buen método de seguridad durante las noches. Una luz de seguridad con detección de movimiento permanece apagada hasta que es activada por alguien o algo que pasa cerca del sensor. Eso significa que si algún intruso caminara hacia la luz sin saber que está ahí, la activaría, con lo cual quedaría en evidencia y sería fácilmente detectable por el guardia del edificio o las cámaras de seguridad.
  
  Practicidad:
  Quizás pienses que la instalación de estas luces es muy complicada, o peor aún, que estas requieren de un sistema adicional para su funcionamiento. Bueno, afortunadamente no. Las luminarias funcionan de manera autónoma, por lo que se evita depender de intervenciones adicionales para operarlas. ¡Adiós a los interruptores!
  
  Fuente: Ciudaris
  
  >> En Administración de Edificios – Casa Grande, estamos decididos a contribuir con mucha información que ayude a los condominos a conseguir la vida segura y armónica que anhelan.`,
      image: "/e39.webp",
      author: "Casa Grande",
      date: "20/11/2023",
      category: "Tecnología",
      tags: ["Agua", "IoT"],
    },
    {
      id: "45",
      title: "LA IMPORTANCIA DE LOS PLANES DE EMERGENCIA EN UN CONDOMINIO ANTE UNA CRISIS",
      slug: "paneles-acusticos-salon-social",
      excerpt: "Reduce el tiempo de reverberación de 1.8 s a 0.6 s con diseños decorativos.",
      content: `La seguridad de un edificio o condominio, obliga a disponer de un PLAN DE EMERGENCIA ANTE SINIESTROS y debe incluir las medidas para adoptar antes, durante y después del siniestro. La responsabilidad de elaboración recae en la Administración de Edificios con la participación de la Junta de Propietarios. Por tanto, a la administración le compete revisar con el fin de procurar que este PLAN cumpla con lo que la Ley dispone.
  
  Si se analiza desde un sólo aspecto, el administrador cumple con hacer presente la observación para cumplir con la Ley, pero administrar tiene que ir más allá, no puede limitarse a llevar ordenadamente los gastos de los condóminos efectuados durante un período, debe hacer que el todo armónico del edificio funcione  bien, que los condóminos se encuentran agradados en él y por último, que el edificio gane plusvalía al funcionar  de acuerdo a lo proyectado.
  
   
  
  Por tanto, es fácil deducir las implicancias del buen funcionamiento de los equipos de uso común, como son los ascensores, tableros eléctricos, las bombas hidroneumáticas y otros, ya que su ineficiencia quede de inmediato en evidencia y las molestias de los condóminos se hace sentir con la misma rapidez y no puede esconderse. Distinta es la situación con el plan de emergencia, ya que idealmente nunca debe ser puesto en ejecución, puesto que de hacerlo implica que se está en presencia de una crisis, lo que obliga a elaborarlo seriamente y cumplir las previsiones que contenga por todos los entes involucrados.
  
  Son varias las preguntas que debemos hacernos sobre el mencionado plan, la primera de ellas es ¿QUIÉNES TIENEN RESPONSABILIDADES EN EL PLAN DE EMERGENCIA Y CÓMO? La respuesta nos indica que todos  los integrantes de la comunidad tiene responsabilidad como  sigue:  
  la JUNTA DIRECTIVA el asignar los recursos económicos para  adquirir los elementos necesarios para  un buen  funcionamiento ante  emergencias, para  la capacitación de los porteros en materias propias de evacuación y contra  incendios, controlando que las actividades del edificio sean las apropiadas en cuanto al orden, aseo y mantenimiento y los fondos asignados sean invertidos  
  de acuerdo a lo planificado.  
  Los condóminos, puesto que al ser ellos los beneficiarios directos, deben interiorizarse de sus obligaciones y cumplirlas y hacerlas cumplir a su grupo familiar. El tercer responsable es la empresa administradora del edificio, ya que debe implementar las necesidades faltantes de acuerdo a la resolución de la Junta de propietarios, materializar la capacitación de los porteros, dar cumplimiento del plan general de mantenimiento y controlar el normal funcionamiento de todos los elementos de uso común. Por último, tienen responsabilidad los porteros, ya que son los encargados de aplicar las medidas preventivas del plan de emergencia, de controlar y mantener las áreas comunes de acuerdo al uso esperado y de aplicar las medidas dispuestas ante una crisis.
  
  
  En Casa Grande – administración de edificios estamos comprometidos a brindar información que ayude a los copropietarios a lograr la vida segura y armónica que anhelan.`,
      image: "/e40.webp",
      author: "Casa Grande",
      date: "01/11/2023",
      category: "Convivencia",
      tags: ["Acústica", "Bienestar"],
    },
    {
      id: "46",
      title: "¿VULNERA EL DERECHO AL HONOR LA PUBLICACIÓN DE LA LISTA DE MOROSOS EN ÁREA COMÚN DEL EDIFICIO?",
      slug: "certificacion-leed-om",
      excerpt: "Pasos, costos y puntos fáciles de ganar en tu condominio.",
      content: `SENTENCIA DEL TRIBUNAL CONSTITUCIONAL
  EXP N.° 05903-2014-PA/TC , LIMA
  En Lima, al primer día del mes de marzo de 2018, el Pleno del Tribunal Constitucional, integrado por los señores magistrados Blume Fortini, Miranda Canales, amos Núñez, Sardón de Taboada y Ledesma Narváez pronuncia la siguiente sentencia, con el abocamiento del magistrado Espinosa-Saldaña Barrera, aprobado en la sesión del pleno de fecha 11 de octubre de 2016 y con el abocamiento del magistrado Ferrero Barrera, aprobado en la sesión de Pleno del día 5 de setiembre de 2017. Asimismo, se agrega el fundamento de voto del magistrado Sardón de Taboada.
  
  ASUNTO y el fundamento de voto del magistrado Ferrero Costa. Recurso de agravio constitucional interpuesto por don Julián Guevara Cáceres contra la resolución de fojas 203, de fecha 10 de setiembre de 2014, expedida por la Cuarta Sala Civil de la Corte Superior de Justicia de Lima, que declaró improcedente la demanda de autos.
  
  ANTECEDENTES
  Demanda
  Con fecha 28 de diciembre de 2009, el recurrente interpone demanda de amparo contra don Enrique Saravia Arrescurrenaga y doña Sara Esmelda Rosales Sánchez, solicitando que se retire el aviso colocado en la parte superior de los ascensores del primer piso del edificio en el que reside, por considerar que vulnera sus derechos al honor, a la buena reputación y a la imagen. A través de dicho anuncio se le atribuye una deuda ascendente a S/2 103.60, correspondientes a 34 meses pendientes de cancelación por concepto de servicios comunes y mantenimiento del edificio, pese a haber efectuado consignaciones para el pago de dicho concepto ante el Tercer Juzgado de Paz Letrado de Lima, dado que la Junta de Propietarios no se encuentra inscrita en Registros Públicos.
  
  Contestación de la demanda
  Don Enrique Saravia Arrescurrenaga deduce la excepción de falta de legitimidad pasiva porque, según él, es la Junta de Propietarios debería ser emplazada, a pesar de no estar inscrita. Asimismo, aduce que la demanda resulta improcedente debido a que existen otras vías para tutelar tal pretensión. En cuanto al fondo, manifiesta que la demanda resulta infundada ya que colocar un aviso en el que se indica que el demandante mantiene una deuda por concepto de servicios y mantenimientos del edificio donde reside, no puede ser considerado como lesivo a ningún derecho constitucional.
  
  Sentencia de primera instancia o grado
  El Décimo Juzgado Especializado en lo Constitucional de la Corte Superior de Justicia de Lima, mediante auto de fecha 13 de junio de 2011, declaró infundada la excepción planteada. Empero, mediante auto de fecha 18 de setiembre de 2013 declaró improcedente la demanda de autos por estimar que los hechos y el petitorio de la demanda no inciden en forma directa en el contenido constitucionalmente protegido de los derechos invocados puesto que la información contenida en el aviso es cierta.
  
  SENTENCIA DE SEGUNDA INSTANCIA O GRADO
  La Cuarta Sala Civil de la Corte Superior de Justicia de Lima confirmó la apelada por considerar que la información contenida en el aviso cuestionado no ha vulnerado los derechos invocados al no evidenciarse un propósito de escarnio o humillación.
  
  FUNDAMENTOS
  Delimitación del asunto litigioso
  Tal como se aprecia de autos, el asunto litigioso consiste en determinar si la publicación, a través de una pancarta, de la cantidad que adeuda el actor por concepto de mantenimiento del inmueble y servicios comunes [1], es constitucional o no. Al respecto, el demandante manifiesta que ello constituye una agresión a su derecho al honor y a la buena reputación, mientras que la parte emplazada considera que tal proceder no conculca ningún derecho fundamental.
  Por consiguiente, no se emitirá pronunciamiento sobre si finalmente la deuda ha sido honrada o no, o sobre si la Junta de Propietarios se encuentra debidamente inscrita o no, en tanto ambas cuestiones no guardan relación directa con el objeto de controversia constitucional. Únicamente es materia de impugnación la divulgación de la deuda en un área común del edificio, esto es, frente a ascensores del primer piso, a vista de residentes e invitados.
  Análisis del caso en concreto
  a) Derecho al honor y publicación de listas con nombres de deudores morosos
  
  3. El derecho al honor, a la buena reputación e imagen forman parte del elenco de derechos fundamentales protegidos por el inciso 7 del artículo 2 de la Constitución y, en tal sentido, están estrechamente vinculados con la salvaguarda de la dignidad de la persona humana.
  
  Tal como el Tribunal Constitucional los ha entendido, tienen por finalidad «proteger a su titular contra el escarnecimiento o la humillación, ante sí o ante los demás, e incluso frente al ejercicio arbitrario de las libertades de expresión o información, puesto que la información que se comunique, en ningún caso puede resultar injuriosa o despectiva» [cfr. STC 2790-2002-AA/TC].
  
  También hemos precisado que el honor  «forma parte de la imagen del ser humano, ínsita en la dignidad de la que se encuentra investida, garantizando el ámbito de libertad de una persona respecto de sus atributos más característicos, propios e inmediatos» [cfr. STC 00249-2010-AA/TC, fundamento 11].
  
  Este Tribunal también ha precisado que, mientras que la dimensión del honor individual se refiere a un derecho personalísimo indelegable, en su dimensión de buena reputación también se expande como una posición ius fundamental que puede ampliar sus efectos para proteger posiciones similares no solo de personas naturales, sino incluso en los entes que, amparados en alguna manifestación de personalidad jurídica que les confiere el sistema jurídico, actúan en la sociedad proyectando una imagen o un nombre o una razón social [Cfr. STC 905-2001-PA/TC, STC 4099- 2005-PA/TC, entre otras].
  Ahora bien, es oportuno precisar que esta no es la primera ocasión en que este Tribunal Constitucional ha tenido que dirimir un conflicto en el que se publicitan deudas. En la Sentencia 1970-2008-PA/TC, por ejemplo, se declaró fundada la demanda para el retiro de la publicación en una página web de listas de deudores de una entidad estatal, al agregarse una imagen que asemejaba al deudor con un presidiario.
  Por otro lado, también es cierto que, en la STC 03206-2012-PA/TC, se precisó que la publicación de los nombres de las personas que han incurrido en mora respecto de sus obligaciones como propietario de un inmueble sujeto a las reglas de la propiedad horizontal. No entraña, en principio, conculcación a los derechos fundamentales.
  Sobre ello, este Tribunal estima, a propósito de este caso, que resulta necesario efectuar una serie de consideraciones a propósito de la publicación de los nombres de los morosos en lugares abiertos al público.
  Al respecto, el Tribunal considera que, en el marco de una sociedad democrática, el Estado brinda distintos canales de reclamo frente al incumplimiento de las disposiciones que integran el ordenamiento jurídico. En particular, los procesos judiciales son el escenario en el cual las partes pueden presentar pruebas y exponer los argumentos que estimen convenientes para la defensa de sus casos. Los métodos o prácticas que sean ajenas a estos mecanismos deberían, en principio, ser dejados de lado, por cuanto representan medios de presión que evaden los conductos legales de reclamo a fin de exigir el pago de las deudas.
  El Tribunal es consciente que la finalidad de la publicación de los nombres radica en el legítimo interés de todas las personas involucradas de que los morosos cumplan con pagar sus deudas, ya que, en muchos supuestos, ello deviene en una condición indispensable para el suministro de ciertos bienes y servicios.
  Sin embargo, también existen otros mecanismos que permiten realizar esta misma finalidad sin la necesidad de exponer públicamente el nombre de los morosos, y que deberían ser empleados en caso que no se cumplan con las obligaciones respectivas. Así, por ejemplo, se pueden repartir a los vecinos, en sobres cenados, la lista de los morosos, a fin que tomen conocimiento respecto de las personas que no han cumplido sus obligaciones.
  
  De la misma forma, y a modo de ejemplo, es posible realizar reuniones periódicas en las que, aparte de tratar asuntos propios del manejo de los bienes, se pueda indicar qué personas aun mantienen deudas con la entidad. Todo ello no genera que la publicación de los nombres sea, per se, inconstitucional, pero sí advierte la necesidad de que se evalúe la posibilidad de adoptar otra clase de mecanismos para la exigencia del pago de una deuda.
  
  En efecto, también advierte este Tribunal que existen supuestos en los que puede resultar válida la publicación de nombres en la lista de morosos. Sin embargo la información que se difunda debe cumplir ciertas características. Así, debe tratarse de una deuda que sea exigible, por lo que no debe existir margen de duda respecto de la existencia de una obligación de pago. Del mismo modo, no deberían ser objeto de publicación todas aquellas deudas que, por disconformidad de los supuestos morosos, se hayan sometido a litigio a nivel judicial. En un sentido similar, la Corte Constitucional de Colombia ha supeditado la publicación de esta clase de información al cumplimiento de una serie de requisitos, tales como
  «a) si la información contenida en las listas involucran aspectos que comprometen a todos los residentes de la unidad residencial; b) si no se describen aspectos estrictamente personales o familiares; c) si la información tiene relevancia económica para todos los miembros del conjunto […J» [Corte Constitucional de Colombia. Sentencia T630 de 1997, M.P., doctor Alejandro Martínez Caballero].
  
  En todo caso, el Tribunal también recuerda, conforme ya lo ha expuesto en su jurisprudencia, que la eventual difusión de información no puede ir acompañada de simbología que degrade la imagen y autoestima del deudor [STC 03206-2012- PA/TC, fundamento 8].
  b) La controversia en particular
  En el presente caso, Julián Guevara Cáceres alega que la publicación de su nombre en un aviso colocado en la parte superior de los ascensores del primer piso del edificio en el que reside vulnera su derecho al honor, la buena reputación e imagen. Como se expuso con anterioridad, en dicho anuncio se le atribuye una ascendente a S/ 2103.60, correspondientes a 34 meses pendientes de cancelación por concepto de servicios comunes y mantenimiento del edificio. En su escrito de demanda, el recurrente alega que, debido a la supuesta acefalía existente en la Junta de Propietarios del edificio Fénix Wilson, ha debido realizar consignaciones ante el Tercer Juzgado de Paz Letrado de Lima.
  Al respecto, el Tribunal advierte que, en efecto, se ha colocado un cartel en el que se consignan los nombres de los morosos del edificio, el cual está colocado en la parte superior de los ascensores del primer piso. Este hecho se encuentra acreditado en la copia certificada Nro. 5192-09-CAU-CC, que obra a fojas 03, en la que se consigna una denuncia, suscrita por el Comandante PNP Vincenzo leva Lamarca, en la que se indica que existen
  «dos papelógrafos pegados en la parte superior de los ascensores del 1 er piso con letras de color azul y números de color rojo con inscripción de (08) es, observándose en uno de ellos lo siguiente: inscripción 506 Julián Guevara 34 S/. 2, 103.60″.
  
  Esto también ha sido corroborado por el emplazado, quien, al testar la demanda, sostiene que este acto no puede ser entendido como una perturbación al derecho al honor.
  
  Si bien el Tribunal es consciente que, en principio, deberían emplearse los canales legales para la exigencia de pago de las obligaciones contraídas, tampoco puede dejar de advertir que, en este caso, la deuda que se le atribuye al recurrente asciende a una suma considerable (S/2103.60, correspondientes a 34 meses de cancelación por concepto de servicios comunes y mantenimiento del edificio).
  Del mismo modo, en lo referente a las supuestas consignaciones que estaría efectuando en el Poder Judicial, no ha adjuntado prueba alguna que acredite dichos pagos. Por lo demás, el Tribunal también advierte que la alegada acefalía existente en la Junta de Propietarios del edificio no es un motivo que lo excuse de incumplir con los pagos que se generen por los servicios comunes que se le brinda.
  
  Por estos fundamentos, el Tribunal Constitucional, con la autoridad que le confiere la Constitución Política del Perú,
  
  HA RESUELTO: Declarar INFUNDADA la demanda de amparo de autos. Publíquese y notifíquese
  
  SS
  
  >> En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e41.webp",
      author: "Casa Grande",
      date: "30/09/2023",
      category: "Tecnología",
      tags: ["Digitalización", "Archivo"],
    },
    {
      id: "48",
      title: "MANTENIMIENTO DE BOMBAS PARA AGUA Y TABLEROS ELÉCTRICOS",
      slug: "ascensores-iot-monitoreo",
      excerpt: "Sensores de vibración y puerta para anticipar fallas antes de que ocurran.",
      content: `¿CUALES SON LAS VENTAJAS DEL MANTENIMIENTO DE LAS BOMBAS DE AGUA?
  
  Es recomendable realizar el servicio de mantenimiento a las bombas de agua (periféricas, centrifugas, de presión constante, sumergibles y tanques hidroneumáticos), así como también a los tableros eléctricos de edificios y condominios, con la finalidad de garantizar un abastecimiento constante e ininterrumpido de agua potable para consumo humano.
  
  ¿Qué ventajas tiene el mantenimiento?
  
  Entre las principales ventajas del mantenimiento, podemos mencionar las siguientes:
  
  Mejor conservación de los equipos.
  Aumento de la calidad y de la productividad.
  Disminución de paralizaciones imprevistas.
  Disminución de reparaciones.
  Reducción de costos e
  Incremento de la vida útil de sus equipos.
  El mantenimiento preventivo y/o correctivo varía según el estado en el que se encuentren las bombas del cliente.
  
  El mantenimiento comprende lo siguiente:
  
  Desmontaje de las bombas.
  Cambio de rodamientos.
  Cambio de sellos mecánicos.
  Limpieza del impelente y la tapa.
  Bocinado de impulsor.
  Cambio del aceite refrigerante.
  Rebobinado del motor y barnizado.
  Cambio de retenes.
  Bocinado del eje para los rodamientos.
  Pintado de la bomba.
  Montaje de cada una de las bombas.
  PROCEDIMIENTO DE MANTENIMIENTO PREVENTIVO DE TABLEROS ELÉCTRICOS
  
  Se observa que no se presenten daños visibles o piezas flojas o sueltas.
  Se retirar el polvo asentado sopleteando ligeramente o con ayuda de una aspiradora o una brocha.
  Se ajusta todos los terminales, poniendo atención a cada componente que se esté ajustando para detectar si este presenta señal de recalentamiento.
  Se verifica que los conductores de tierra estén bien ajustados y que además tengan continuidad eléctrica con la estructura del tablero.
  Se realiza la limpieza del gabinete con solvente dieléctrico para retirar polvo o rastros de humo.
  Se realiza la Limpieza de las entradas naturales de ventilación (si es que las hay).
  En caso de ventilación forzada, se verifica que los ventiladores giren libremente.
  Se procede a energizar el tablero y se pone en funcionamiento la máquina en condiciones normales.
   Se mide la corriente que circula por los elementos que presentaban rastros de calentamiento para determinar si requieren ser cambiados por encontrarse fuera de rango.
      Fuente: SANISEG
  
  >> En  Casa Grande – Administración de Edificios , estamos decididos a contribuir con mucha información que ayude a los condominos a conseguir la vida segura y armónica que anhelan.`,
      image: "/e42.webp",
      author: "Casa Grande",
      date: "12/09/2023",
      category: "Tecnología",
      tags: ["Ascensores", "IoT"],
    },
    {
      id: "49",
      title: "USO DEL BIEN COMÚN POR PARTE DE UNO DE LOS COPROPIETARIOS CON EXCLUSIÓN DE LOS DEMÁS: ¿INDEMNIZACIÓN O RESTITUCIÓN?",
      slug: "seguro-multiriesgo-condominio",
      excerpt: "Incendio, terremoto y responsabilidad civil desde S/ 0.19 por m².",
      content: `El autor afirma que el copropietario que usa el bien común con exclusión de los demás vulnera el contenido de atribución que les corresponde a los demás copropietarios. Refiere que dicha exclusión genera una pretensión de enriquecimiento por intromisión a favor de los copropietarios excluidos. Por ello, deberá restituirse el costo de licencia por el uso del bien a favor de los demás copropietarios de manera proporcional a sus cuotas ideales.
  
  El artículo 975 del Código Civil peruano (en adelante, “CC”) establece que “el copropietario que usa el bien parcial o totalmente con exclusión de los demás, debe indemnizarles en las proporciones que les corresponda, salvo lo dispuesto en el artículo 731”.
  En base a dicha norma, nuestra jurisprudencia se ha pronunciado de distintas maneras. A ese efecto, se debe tener en cuenta la Casación N° 1970-2015 LIMA, que estableció lo siguiente:
  
   “En cuanto a la pretensión accesoria de indemnización, se tiene que el artículo 975 del Código Civil, señala que el copropietario que usa el bien parcial o totalmente con exclusión de los demás, debe indemnizarles en las proporciones que les corresponda. En ese sentido dicha indemnización se entiende como una retribución del valor del uso del bien que no está siendo aprovechado por los demás copropietarios, de ahí que no corresponde verificar exhaustivamente los elementos que configuran un supuesto de responsabilidad civil extracontractual (daño, relación de causalidad y criterio de imputación); sin embargo, es necesario acreditar la posesión exclusiva por parte de uno de los copropietarios, ya que dicha sola situación genera el derecho de los demás a que se les indemnice”.
  
  De lo anterior, se aprecia que para solicitar la indemnización ex art. 975 CC, no se requiere acreditar los elementos propios de la responsabilidad civil (daño, factores de atribución, relación de causalidad, imputabilidad), siendo suficiente acreditar la posesión exclusiva por parte de uno de los copropietarios.
  
  De forma contraria, la Casación N° 2351-2013 LIMA ha señalado lo siguiente: 
  
  “(…) la parte accionante no ha cumplido con fundamentar adecuadamente este extremo de su pretensión, pues no ha establecido ni ha acreditado los tipos de daños que habría sufrido según lo manifiesta en la demanda en cuestión, así pues, la accionante debió acreditar el daño en la interposición de su demanda o en la actuación del proceso, no más bien limitarse a señalar que estima el daño en cuarenta mil nuevos soles (S/. 140,000.00) por el solo hecho de haber transcurrido tiempo (trece años), lo cual incluso debería determinarse en ejecución de sentencia.
  
  DÉCIMO PRIMERO.- En consonancia con lo expuesto, los Jueces Revisores al analizar la pretensión del demandante y señalar respecto de la indemnización que: i) no solo debe alegarse la pretensión, sino también probarse fehacientemente, constituye una motivación insuficiente puesto que la misma contiene solamente la conclusión a que su razonamiento les ha llevado pero no están exteriorizadas y expuestas las premisas que han conducido a dicha conclusión, dado que corresponde a los Jueces Superiores analizar si la indemnización contenida en el artículo 975 del Código Civil presupone o no la existencia de daños y perjuicios, teniendo en cuenta que el contenido de dicha disposición reposa en el derecho individual que tiene todo copropietario de aprovecharse del valor de uso directo que el bien le pueda proporcionar y en la consiguiente facultad de negociar ese derecho a favor de quien usa exclusivamente el bien para permitir que este pueda gozar de un derecho individual más amplio que el que le corresponde; siendo evidente así la violación del principio constitucional de motivación escrita de las resoluciones judiciales; fundamento por el que dicho agravio debe ser amparado”.
  
  Como se puede apreciar, en este extremo la Corte Suprema ha considerado que a efectos de la procedencia de la indemnización ex art. 975 resulta necesario acreditar el daño, pues lo contrario implicaría que el juez incurra en motivación insuficiente.
  
  Por otro lado, la Casación N° 3117-2014 PIURA ha señalado lo siguiente:
  
  “Se debe tener en cuenta que para que prospere la indemnización a que se refiere el artículo 975 del Código Civil en el que ampara su demanda el accionante, basta que se pruebe que el co-propietario (en este caso las codemandadas mencionadas) por intermedio de la Factoría de su propiedad, han usado el bien parcialmente con exclusión de los demás (entre ellos el demandante); no obstante, debe precisarse que el pago dispuesto no tiene la naturaleza de una indemnización propiamente dicha, en la medida en que no está determinado por alguno de aquellos supuestos que en nuestro ordenamiento jurídico son susceptibles de dar lugar a la misma, sino que se trata de la retribución del valor de uso que no estuvo siendo aprovechado por el demandante en su facultad de uso; razón por la cual este Colegiado no comparte el criterio del A quo en fijar el monto ordenado en la sentencia recurrida como lucro cesante; sino que ha debido utilizarse como parámetro de valuación el costo que por el uso mensual fijó el propio demandante en su carta de fojas cuarenta y uno conforme a la pretensión contenida en la demanda al amparo del artículo 975 del Código civil, indemnización por el no uso del bien común”
  
  >> En  Casa Grande – Administración de Edificios , estamos decididos a contribuir con mucha información que ayude a los condominos a conseguir la vida segura y armónica que anhelan.`,
      image: "/e43.webp",
      author: "Casa Grande",
      date: "28/08/2023",
      category: "Finanzas",
      tags: ["Seguro", "Riesgos"],
    },
    {
      id: "50",
      title: "¿CONFLICTOS EN CONDOMINIOS AUMENTAN POR JUNTA DE PROPIETARIOS INFORMALES?",
      slug: "fondo-reserva-2025",
      excerpt: "Fórmula práctica: 1.5 × (OO&M anual) / número de unidades.",
      content: `En Lima Metropolitana un 95% de edificios no tiene su junta inscrita en los Registros Públicos. Esto se debe al alto costo de la inscripción, que puede llegar a los S/. 3.500. Su ausencia genera que haya más morosos.
  
  Hace unos 15 días, Ricardo Torres regresó a su departamento ubicado en la Prolongación Manco Segundo, en San Miguel, y se encontró con una ingrata sorpresa: habían robado sus pertenencias.
  
  En este edificio hay 150 departamentos más y los ladrones entraron a la vivienda de Torres sabiendo que no había nadie. Fue a reclamar al Administrador del inmueble y este le dijo que no tenía responsabilidad porque la presidente de la junta de propietarios cambiaba al portero del edificio porque no le gustaba, cuenta.
  
  «En un mes se cambiaron a ocho porteros y después del robo ha ocurrido uno más en el edificio, pero nadie toma responsabilidad alguna. Ahora el administrador está no habido», dice indignado.
  
  Otra situación desagradable. Matilde Osorio vive en un edificio de Jesús María, en la avenida Garzón. Uno de sus vecinos dejó abierto el caño del agua de su departamento y esta llegó hasta al ascensor del edificio. La máquina se malogró y por ende todos los vecinos debían de pagar para arreglarla. Ahí surgió el problema, pues no todos querían pagar, cuenta Osorio al indicar que felizmente el responsable de esta negligencia pagó el 80% de la reparación.
  
  BUSCAR LA SOLUCIÓN
  Los conflictos que puedan surgir en los edificios multifamiliares pueden ser resueltos a través de la junta de propietarios, cuya función es representar a todos los propietarios del edificio y buscar una buena administración de las áreas comunes de los edificios (pasadizos, escaleras, fachadas y jardines).
  
  Hay una diferencia entre una junta formal e informal. La formal es la que está inscrita en los Registros Públicos, en tanto la informal, no. Indicó que esta última lidera en estos predios.
  
  «Hoy en día un 95% de edificios en Lima Metropolitana no tienen junta legal constituida y de eso se valen algunos propietarios para no pagar su cuota de mantenimiento porque no se puede iniciar la acción legal para cobrarles».
  
  Detalló que esta informalidad se debe principalmente al costo de la inscripción pues varía entre S/. 2 mil y S/. 3.500. A ello se suma que los propietarios se preguntan para qué servirá dicho registro.
  
  En los edificios suele haber más morosidad por los propietarios llegando hasta un 40%. «Como al vecino moroso no se le sanciona, otro vecino también deja de pagar y así se incrementa la deuda. A largo plazo esto va a afectar a los demás propietarios que están al día porque se le va a quitar el agua o la luz». Agregó que un rol importante de la junta de propietarios, sea formal o no, debe ser la elaboración de un reglamento interno, avalado en la Ley de Regularización de Edificaciones (Nº 27157).
  
  «Mayormente cada año se cambia la junta de propietarios. Pero eso tiene que ver con el reglamento que elaboró la junta con apoyo de la constructora o la inmobiliaria».
  
  VENTAJA DE LO FORMAL
  Tener formalmente una Junta de Propietarios es como tener un DNI, con el cual se puede sacar un Registro Único de Contribuyente (RUC), contratar a empresas terceras para el personal de servicios del edificio (Limpieza y seguridad) poner en planilla a ese personal, abrir cuentas en las entidades bancarias y –a diferencia de lo ilegal– sí se puede abrir juicio a un moroso. «Al ser legal, al vecino que no paga el mantenimiento se le puede mandar una carta notarial. Si no hace caso, la junta puede interponer una demanda en el Poder Judicial. Puede determinar si se puede tomar una cochera y pagar la deuda que tiene».
  
  Todo edificio multifamiliar debe tener un REGLAMENTO INTERNO
  La ley de edificaciones establece que todo inmueble de propiedad compartida debe tener un reglamento interno, cuyo cumplimiento debe ser obligatorio.
  
  El reglamento debe señalar las áreas, numeración y el uso al que deberá estar destinada cada una de ellas, ya sea vivienda, comercio, oficina o estacionamiento.
  
  Debe precisar los derechos y obligaciones de los propietarios, así como las limitaciones y disposiciones que se acuerden.
  
  Una junta legal puede hacer cualquier operación que el Reglamento lo permita y si la Junta lo ve conveniente. «Por ejemplo podrían alquilar la azotea para poner un aviso luminoso y tener ingresos. Eso puede reducir las cuotas de mantenimiento».
  
  INFORMACIÓN
  El 70% de edificios multifamiliares de Lima tiene conflictos de relación entre sus vecinos debido a la falta de información de las normas, deberes y derechos de convivencia por el departamento.
  
  «Ellos dicen que han adquirido su departamento, pero en realidad han comprado un porcentaje del condominio. Es decir, no solo pagan por su vivienda, sino también por las áreas comunes (pasadizos, escaleras, fachadas y jardines), y las áreas exclusivas como el estacionamiento y el depósito».
  
  EN CIFRAS
  1 año es el tiempo de cambio de cada junta de propietarios.
  
  40% es la morosidad de los edificios donde las juntas son informales.
  
  S/. 3.500 es el costo de máximo de inscripción de la junta.
  
  FUENTE: larepublica/pe
  
  👉👉 En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e44.webp",
      author: "Casa Grande",
      date: "14/08/2023",
      category: "Finanzas",
      tags: ["Fondo de Reserva", "Presupuesto"],
    },
    {
      id: "51",
      title: "¿¿Cómo lidiar con el vecino negativo?",
      slug: "registro-gastos-edificio",
      excerpt: "Llevar un registro adecuado de los gastos comunes en un edificio es esencial para asegurar una correcta y transparente administración de los recursos y mantener una convivencia armónica entre los propietarios.",
      content: `Lidiar con un vecino que constantemente incomoda a los demás con comentarios negativos puede ser complicado.
  
  A veces, un edificio se puede perjudicar con la presencia de uno o más vecinos que participan de manera negativa en las asambleas o el chat de vecinos. Aportan quejas o criticas a la Junta Directiva, a la administración o a cualquier aporte o comentario de un residente y esto sin ánimo de sumar o construir.
  
  Este tipo de comportamientos no sólo llega a incomodar tanto a los vecinos, que varios evitan ir a las reuniones, participar en los chats afectando el quórum y la toma de decisiones importantes.
  
  Aquí algunos consejos prácticos que pueden ayudar a gestionar esta situación y promover una mejor convivencia:
  
  1. Abordar el problema de manera privada
  Hablar con el vecino en privado. Escoger un momento adecuado para conversar de manera tranquila y evitar confrontaciones públicas. Explicarle cómo sus comentarios afectan a los demás. Usar un tono conciliador, sin acusaciones, y plantear la situación como una oportunidad para mejorar la convivencia.
  
  Ejemplo: «He notado que algunos comentarios que haces durante las reuniones generan incomodidad entre los vecinos. Quizás no es tu intención, pero creo que podríamos trabajar juntos para mejorar el ambiente en nuestras reuniones.»
  
  2. Establecer reglas claras en la Junta de Propietarios
  Si los comentarios de este vecino suelen surgir en reuniones o espacios comunes, considerar revisar el Reglamento Interno del Edificio​. Asegurarse de que existan reglas claras sobre el respeto y la convivencia en las asambleas o en las áreas comunes. Proponer agregar pautas sobre el comportamiento apropiado y las sanciones para quienes no las respeten​.
  
  3. Organizar reuniones enfocadas en la convivencia
  Promover la organización de una Asamblea de Convivencia para todos los residentes, donde se discutan las expectativas de comportamiento y cómo fomentar un ambiente positivo. Durante estas reuniones, se puede hacer hincapié en la importancia del respeto mutuo​.
  
  4. Buscar mediación
  Si el problema persiste y las conversaciones privadas no funcionan, puede ser útil contar con un mediador neutral, como el presidente de la Junta de Propietarios, o incluso contratar a un profesional externo especializado en resolución de conflictos​. Esto ayudará a evitar que las tensiones escalen.
  
  5. Documentar las situaciones
  Si los comentarios son constantes y ofensivos, es recomendable documentar cada incidente. Esto será útil si se requiere llevar el asunto a instancias más formales, como una queja formal ante la Junta de Propietarios​. La documentación debe incluir fecha, hora y testigos presentes.
  
  6. Considerar acciones legales en caso extremo
  Si el comportamiento del vecino se vuelve intolerable o se convierte en acoso, se podría considerar tomar acciones legales amparándose en las normas de convivencia estipuladas en el Reglamento Interno o en las leyes de propiedad horizontal. Esto incluye desde multas hasta la imposición de restricciones para ese propietario​.
  
  👉👉 En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      author: "Casa Grande",
      date: "11/09/2023",
      category: "Administración de Edificios",
      image: "/e45.webp",
      tags: ["Finanzas", "Administración", "Gestión"]
    },
    {
      id: "52",
      title: "El alquiler tipo Airbnb",
      slug: "alquiler-tipo-airbnb",
      excerpt: "El alquiler tipo Airbnb puede plantear ciertas preocupaciones en cuanto a la seguridad de los vecinos en un mismo edificio.",
      content: `El alquiler tipo Airbnb puede plantear ciertas preocupaciones en cuanto a la seguridad de los vecinos en un mismo edificio. Aquí comento algunos aspectos relevantes:
  
  1. Rotación constante de huéspedes: Una de las características principales de Airbnb es la posibilidad de alquilar una propiedad por períodos cortos de tiempo. Esto significa que los vecinos pueden encontrarse con diferentes personas en el edificio regularmente, lo que puede generar cierta inquietud en cuanto a la seguridad y la convivencia.
  
  2. Falta de control sobre los huéspedes: A diferencia de los inquilinos a largo plazo, los huéspedes de Airbnb no están sujetos a los mismos procesos de selección y verificación. Esto puede generar preocupación en cuanto a la confiabilidad y comportamiento de los huéspedes, ya que no se tiene un control directo sobre ellos.
  
  3. Ruido y molestias: Algunos huéspedes pueden no estar familiarizados con las normas y reglamentos del edificio, lo que puede resultar en ruidos excesivos, fiestas o comportamientos inapropiados. Esto puede afectar la calidad de vida de los vecinos y generar conflictos.
  
  4. Seguridad de las instalaciones comunes: El acceso de huéspedes desconocidos al edificio puede plantear preocupaciones en cuanto a la seguridad de las áreas comunes, como el lobby, ascensores, estacionamientos, entre otros. Es importante asegurarse de que las medidas de seguridad del edificio sean adecuadas para proteger a los residentes y prevenir situaciones de riesgo.
  
  5. Responsabilidad del propietario: En algunos casos, los propietarios que alquilan a través de Airbnb pueden no estar al tanto de las regulaciones y responsabilidades legales que implica este tipo de alquiler. Esto puede generar problemas legales y dificultades para resolver cualquier situación que afecte a los vecinos.
  
  Es importante tener en cuenta que las regulaciones y restricciones sobre el alquiler tipo Airbnb pueden variar según la ubicación y las leyes locales. Es recomendable consultar las normativas vigentes y, en caso de tener inquietudes, comunicarse con la administración del edificio o la junta de edificio para abordar cualquier preocupación relacionada con la seguridad de los vecinos.
  
  👉👉 En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      author: "Casa Grande",
      date: "07/09/2023",
      category: "Administración de Edificios",
      image: "/e50.webp",
      tags: ["Junta Propietarios", "Manual de Convivencia"]
    },
    {
      id: "53",
      title: "El DELIVERY en los edificios",
      slug: "delivery-edificios",
      excerpt: "La atención de los servicios de delivery en los edificios puede presentar ciertos desafíos en términos de seguridad.",
      content: `La atención de los servicios de delivery en los edificios puede presentar ciertos desafíos en términos de seguridad. Uno de los principales problemas es el acceso de personas ajenas al edificio, lo que puede poner en riesgo la seguridad de los residentes y sus propiedades.
  
  En primer lugar, los repartidores de delivery suelen ser personas diferentes cada vez, lo que dificulta el control y seguimiento de quién entra y sale del edificio. Además, en ocasiones, los repartidores pueden necesitar acceder a áreas privadas del edificio para realizar la entrega, lo que puede suponer un riesgo adicional.
  
  Por otro lado, la frecuencia de las entregas de delivery puede sobrecargar al personal de portería, que debe atender a los repartidores además de sus otras responsabilidades. Esto puede llevar a errores o descuidos en la gestión de la seguridad del edificio.
  
  Para mitigar estos problemas, es importante establecer políticas claras y procedimientos de seguridad para la recepción de deliveries. Esto puede incluir la verificación de la identidad del repartidor, la recepción de las entregas en un área designada, y la notificación a los residentes cuando su delivery ha llegado.
  
  En resumen, aunque los servicios de delivery son una comodidad para los residentes, es crucial manejarlos de manera que no comprometan la seguridad del edificio.
  
  >> En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      author: "Casa Grande",
      date: "07/09/2022",
      category: "Administración de Edificios",
      image: "/e51.webp",
      tags: ["Convivencia Edificios", "Seguridad"]
    },
    {
      id: "54",
      title: "¿QUE ES EL REGLAMENTO INTERNO?",
      slug: "que-es-reglamento-interno",
      excerpt: "El reglamento interno de un edificio es un conjunto de normas y directrices establecidas para regular la convivencia y el uso de las instalaciones dentro de un edificio o complejo residencial.",
      content: `El reglamento interno de un edificio es un conjunto de normas y directrices establecidas para regular la convivencia y el uso de las instalaciones dentro de un edificio o complejo residencial. Este documento es fundamental para mantener el orden, la seguridad y la armonía entre los residentes.
  
  Este documento lo inscribe la constructora o inmobiliaria en Sunarp cuando hace la Declaratoria de Fabrica.
  
  El REGLAMENTO INTERNO generalmente aborda aspectos como:
  
  Uso de áreas comunes: Establece las reglas para el uso de espacios compartidos como parrillas, zona de juegos de niños, el gimnasio, la piscina, salones de usos múltiples, entre otros.
  Procedimientos de seguridad: Detalla las medidas de seguridad del edificio, como el acceso de visitantes, protocolos de emergencia, entre otros.
  Mantenimiento de las propiedades: Incluye directrices sobre el mantenimiento de las unidades residenciales y áreas comunes.
  Ruidos y horas de silencio: Establece las horas durante las cuales se debe evitar hacer actividades o trabajos que causen ruidos molestos.
  Reglas de convivencia: Define comportamientos aceptables y no aceptables para promover la buena convivencia entre los residentes.
  Gestión de residuos: Proporciona instrucciones sobre la eliminación adecuada de los residuos.
  
  El REGLAMENTO INTERNO es un documento que tiene la función de establecer una convivencia armónica y segura; por ello, debe ser respetado por todos los residentes. Según el acuerdo de los copropietarios, el incumplimiento de estas normas puede resultar en sanciones o multas.
  
  >> En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      author: "Casa Grande",
      date: "07/02/2022",
      category: "Administración de Edificios",
      image: "/e52.webp",
      tags: ["Junta Propietarios", "Ley 27157", "Reglamento Interno"]
    },
    {
      id: "55",
      title: "La importancia de una buena administración",
      slug: "importancia-buena-administracion",
      excerpt: "Precio, costo y valor no siempre son lo mismo. La plusvalía y el mantenimiento del edificio son factores clave para el valor de tu propiedad.",
      content: `Precio, costo y valor no siempre son lo mismo. Cuánto costó una vivienda, cuál es el valor que le asigna su dueño y cuál es su precio de mercado, pueden ser tres cifras diametralmente distintas. De los tres, el aumento del precio en el tiempo es el número más importante y, en definitiva, el que hay que tomar en cuenta a la hora de hacer cualquier transacción inmobiliaria. Esa es la plusvalía.
  
  En el caso de los departamentos la plusvalía es muy acotada. Al haber mucha oferta, el precio no se incrementa por escasez. La plusvalía podría detonarse por una estación de metro cerca o por un cambio en el plan regulador que no permita la construcción de otros edificios, asegurando una vista bonita, por ejemplo.
  
  Con la ubicación no hay mucho que hacer. Es o no es. En cambio, la comunidad sí puede influir en la plusvalía por medio de la mantención del edificio. Así, el precio del departamento no disminuye frente a la abundante oferta paralela dependiendo del buen estado de las pinturas, jardines, iluminación y aseo. Para esto, es vital tener una administración bien organizada.
  
  Una buena administración se debe preocupar de que el reglamento de copropiedad respectivo sea respetado, como que no se ingresen animales si se prohíbe o que no se cuelgue ropa en barandas o terrazas. La estética es clave en la determinación del valor de una vivienda.
  
  La primera impresión de un departamento es el acceso al edificio. No se saca nada con tener un departamento en perfectas condiciones, con buena mantención, si el edificio deja que desear. Ahí entra en juego el llamado factor "entorno" que se aplica en toda valoración inmobiliaria. Contra eso no hay nada que hacer.
  
  Pero el tema va mucho más allá de la estética. La administración se debe preocupar de tener a los porteros y a todo el personal que funciona en el edificio capacitados. Deben andar uniformados y ser evaluados constantemente por su comportamiento laboral.
  
  La ley de copropiedad exige que la administración de toda comunidad tenga a la vista un plan de evacuación y un plano con las salidas de emergencia. Lamentablemente, muy pocos edificios o condominios cumplen con esta exigencia básica para lugares con alta concentración de personas. El único guía muchas veces es el conserje de turno.
  
  Tan importante es el rol que juega la administración, que a la hora de evaluar cuánto cobrar por un departamento usado, hay que tomar en cuenta la composición de la misma. Una buena administración es aquella que rinde cuenta sistemáticamente a toda la comunidad de los ingresos, los gastos de mantención, los gastos extra, las sesiones extraordinarias de la asamblea, los proyectos y los problemas del mes a mes en el recinto. En definitiva, en la altura todo tiene su precio, y la administración especialmente.
  
  RECOMENDACIONES AL COMPRAR UN DEPARTAMENTO
  
  Hay algunos elementos que son detonantes de la plusvalía (incremento del precio en el tiempo) o minusvalía (disminución del precio). Estos puntos son importantes, ya que un departamento puede estar muy bien conservado pero no será bien valorado si tiene un entorno directo negativo.
  
  ESTAS SON ALGUNAS SUGERENCIAS A CONSIDERAR:
  
  – Saber quién administra el condominio o edificio, y el nivel de experiencia que tiene en la materia.
  – Tener a la vista el reglamento de copropiedad.
  – Recorrer el edificio completo para ver si está bien mantenido.
  – Ver un recibo de gastos comunes de la temporada de verano y de invierno, para tener un promedio real del costo por gastos comunes.
  – Conocer en forma general la composición de quienes viven en el edificio (jóvenes, gente de edad, familias).
  – Informarse si se han efectuado periódicamente las mantenciones al edificio. Especialmente aquellas que tienen incidencia en el funcionamiento puertas de cochera, intercomunicadores, bombas de aguas, ascensores entre otros. Las empresas de cada partida hacen mantenciones con facturas de cobro que así lo acreditan.`,
      author: "Casa Grande",
      date: "04/09/2021",
      category: "Administración de Edificios",
      image: "/e53.webp",
      tags: ["Junta Propietarios", "Plusvalía"]
    },
    {
      id: "56",
      title: "¿Qué hacemos?",
      slug: "que-hacemos",
      excerpt: "Casa Grande es una empresa con más de 14 años de experiencia en el sector de la administración de edificios y condominios en Lima.",
      content: `Casa Grande es una empresa con más de 14 años de experiencia en el sector de la administración de edificios y condominios en Lima. Nació con la misión de ofrecer una gestión eficiente, transparente y profesional para cubrir las necesidades de los propietarios que buscan mantener el valor de sus propiedades mientras promueven una convivencia armónica entre los residentes. Sus servicios abarcan desde el mantenimiento preventivo, la supervisión de personal, hasta la gestión de cuotas y resolución de conflictos.
  
  Lo que distingue a Casa Grande es su enfoque en la transparencia y la digitalización de los procesos administrativos, facilitando una mejor comunicación con los propietarios mediante plataformas online. Además, su experiencia les permite anticiparse a problemas comunes en edificios, como la gestión de vecinos morosos o el mal estado de las infraestructuras, con soluciones prácticas y preventivas que aseguran el bienestar de todos los residentes.
  
  Los principios que guían la marca son la eficiencia, el buen trato y la confianza. Estos valores, junto con su enfoque personalizado para cada edificio, los destacan frente a la competencia. Casa Grande también ofrece ventajas competitivas como la atención inmediata y la capacidad de resolver problemas estructurales o de convivencia con rapidez, lo que la convierte en una opción confiable para quienes buscan una administración moderna y profesional.`,
      author: "Casa Grande",
      date: "06/09/2020",
      category: "Administración de Edificios",
      image: "/e54.webp",
      tags: ["Junta Propietarios", "Servicios"]
    },
    {
      id: "57",
      title: "PROBLEMAS ENTRE VECINOS DE UN EDIFICIO",
      slug: "problemas-entre-vecinos",
      excerpt: "En el día a día de la convivencia en un edificio, surgen conflictos comunes entre vecinos que, si no se manejan adecuadamente, pueden afectar la armonía y tranquilidad.",
      content: `En el día a día de la convivencia en un edificio, surgen conflictos comunes entre vecinos que, si no se manejan adecuadamente, pueden afectar la armonía y tranquilidad. Algunos de los más frecuentes son:
  
  1. Ruido excesivo
  La música a alto volumen suele volverse ruido molesto, las fiestas o el uso de electrodomésticos a horas inapropiadas a menudo generan quejas, especialmente durante horas de descanso.
  
  2. Uso indebido de áreas comunes
  El mal uso de áreas comunes puede causar roces. Algunos vecinos pueden invadir espacios que no les corresponden como pasillos de los departamentos (colocan macetas u otros), mal uso de parrillas o de los equipos de la lavanderia
  
  3. La tenencia irresponsable de mascotas
  Los problemas relacionados con mascotas incluyen ruidos, olores, suciedad en las áreas comunes, o falta de responsabilidad de los dueños al no recoger los desechos de sus animales.
  
  4. Morosidad en los pagos de cuotas
  Los vecinos morosos que no pagan sus cuotas de mantenimiento o pagos extraordinarios pueden generar tensión, ya que esto afecta el mantenimiento general del edificio y crea un ambiente de inconformidad entre los demás propietarios​.
  
  5. Estacionamientos
  Disputas por el uso indebido de cocheras o vehículos mal estacionados que bloquean el acceso de otros vecinos son bastante comunes.
  
  6. Olores desagradables
  El manejo inadecuado de la basura, la eliminación inapropiada de su basura, la acumulación de desechos o la cocción de alimentos con olores fuertes pueden generar molestias en los pasillos o áreas comunes, afectando la convivencia.
  
  7. Modificaciones no autorizadas
  Algunos vecinos realizan modificaciones o remodelaciones dentro de sus departamentos sin avisar a la administración o cumplir con las normas del reglamento interno, lo que puede afectar la estructura del edificio o generar ruido.
  
  8. Problemas con el personal del edificio
  A veces, surgen conflictos cuando los vecinos no están satisfechos con el servicio del personal de limpieza o portería, lo que genera quejas o malentendidos con la administración.
  
  >>En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      author: "Casa Grande",
      date: "07/09/2019",
      category: "Administración de Edificios",
      image: "/e55.webp",
      tags: ["Convivencia Edificios", "Conflictos"]
    },
    {
      id: "58",
      title: "El Portero",
      slug: "el-portero",
      excerpt: "El portero del edificio es la persona que tiene a su cargo el control de acceso, la custodia y llaves.",
      content: `El portero del edificio es la persona que tiene a su cargo el control de acceso, la custodia y llaves. Debe cuidar el edificio, no solamente desde el punto de vista de la estructura del inmueble, sino de la presencia de extraños en el mismo; es decir, alertar a los residentes de la aparición de sujetos desconocidos cuando no estén acompañados de algún propietario, a quienes podría preguntar incluso el motivo de la visita y pedirles su identificación.
  
  Entre las labores del portero es el cuidado de los bienes que forman parte del edificio; es decir, de las áreas o cosas comunes que conforman el edificio; sobre todo, el ascensor el equipo que se suele averiar con más frecuencia que otros equipos. La labor de atención al residente, la recepción de correspondencia, atención de visitas, deliverys y proveedores, la tenencia de llaves del edificio (parte de la custodia), el registro de todas las ocurrencias del edificio, son tareas y responsabilidades tácitas dentro del rango de actividades que debe realizar un portero de edificio.
  
  En Casa Grande – administración de edificios estamos comprometidos a brindar información que ayude a los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.
  
  @CasaGrande`,
      author: "Casa Grande",
      date: "03/09/2018",
      category: "Administración de Edificios",
      image: "/e56.webp",
      tags: ["Portero Edificio", "Personal"]
    },
    {
      id: "59",
      title: "Una nueva cultura en la Administración de Edificios",
      slug: "nueva-cultura-administracion-edificios",
      excerpt: "La creación, implementación y promoción de una nueva cultura en la administración de edificios implica una combinación de estrategias y acciones que fomenten cambios en la mentalidad, prácticas y valores.",
      content: `La creación, implementación y promoción de una nueva cultura en la administración de edificios implica una combinación de estrategias y acciones que fomenten cambios en la mentalidad, prácticas y valores dentro de la organización. 
  
  Aquí hay algunas ideas que podrían ser útiles:
  
  Definir los Valores y Objetivos de la Nueva Cultura:
    – Identificar y definir los valores fundamentales que se quieren promover en la administración de edificios.
    – Establecer objetivos claros que reflejen la visión y la misión de la nueva cultura.
  
  Comunicación Clara y Constante:
     – Comunicar de manera clara y constante los cambios culturales propuestos.
     – Utilizar diferentes canales de comunicación, como reuniones, correos electrónicos, carteles y otros medios, para garantizar que todos los miembros del equipo estén informados.
  
  Participación Activa de los Miembros del Equipo:
     – Fomentar la participación activa y la retroalimentación de los miembros del equipo en la definición de la nueva cultura.
     – Involucrar a los empleados en la toma de decisiones y en la implementación de cambios.
  
  Formación y Desarrollo:
     – Ofrecer programas de formación y desarrollo para que los empleados adquieran las habilidades y el conocimiento necesarios para adaptarse a la nueva cultura.
     – Proporcionar recursos educativos y oportunidades de aprendizaje continuo.
  
  Reconocimiento y Recompensas:
    – Implementar sistemas de reconocimiento y recompensas que refuercen los comportamientos y actitudes alineados con la nueva cultura.
     – Celebrar logros individuales y colectivos relacionados con la promoción de la nueva cultura.
  
  Modelo a Seguir desde la Alta Dirección:
    – Los líderes y la alta dirección deben servir como modelos a seguir, demostrando activamente los valores y comportamientos deseados.
     – Involucrar a la alta dirección en la implementación y promoción de la nueva cultura.
  
  Sistema de Retroalimentación:
     – Establecer un sistema de retroalimentación regular para evaluar el progreso y hacer ajustes según sea necesario.
     – Fomentar la apertura y la honestidad en la retroalimentación para abordar posibles desafíos o resistencias.
  
  Fomentar la Colaboración y el Trabajo en Equipo:
     – Promover un entorno de trabajo colaborativo donde los empleados se sientan valorados y apoyados.
     – Implementar actividades y proyectos que fomenten la colaboración entre diferentes departamentos y niveles jerárquicos.
  
  Enfoque en la Sostenibilidad y Responsabilidad Social:
     – Integrar prácticas sostenibles y responsabilidad social en la cultura de la administración de edificios.
     – Involucrar a la comunidad y a los ocupantes en iniciativas que promuevan el bienestar general.
  
  Evaluación Periódica y Adaptación:
      – Evaluar periódicamente el éxito de la implementación de la nueva cultura.
      – Estar dispuesto a realizar ajustes según la retroalimentación y las cambiantes circunstancias.
  
  En Casa Grande – administración de edificios estamos comprometidos a brindar información que ayude a los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      author: "Casa Grande",
      date: "20/04/2016",
      category: "Administración de Edificios",
      image: "/e57.webp",
      tags: ["Administración Inmobiliaria", "Cultura Organizacional"]
    },
    {
      id: "60",
      title: "03 claves para la administración de edificios",
      slug: "claves-administracion-edificios",
      excerpt: "¿Cómo mejorar tu experiencia en tu hogar? Administrar un edificio es una tarea complicada, pero no imposible.",
      content: `¿Cómo mejorar tu experiencia en tu hogar?
  Administrar un edificio es una tarea complicada, pero no imposible. Hay que entender que se requiere conocimientos y habilidades en diversas áreas. La gestión adecuada puede hacer que la vida en el hogar sea mucho más fácil y agradable para todos los involucrados.
  
  Casa Grande consciente de la gran responsabilidad que implica la gestión de la administración de su edificio tiene en consideración tres principales pilares para optimizar su experiencia como copropietario o residente en su edificio.
  
  MANTENIMIENTOS PREVENTIVOS: El mantenimiento regular es vital para garantizar que sus instalaciones estén funcionando correctamente sin problemas innecesarios. Establecer programas regulares con empresas profesionales confiables asegurara que se realicen inspecciones regulares, reparación es oportunistas e identifique m posibles amenazantes antes de convertirse en mayores inconvenientes. Una buena planificación previa permitirá reducir costoso tiempo fuera del servicio si llegase a presentarse algún problema mayor con las instalaciones, lo cual evitará molestias innecesarias a los residentes.
  
  PERSONAL DE SERVICIO: Contratar personal experto calidad le dará tranquilidad saber que cuentan con personales capacitados encargados de brindare ayuda cuando sea necesario. Si bien puede ser tentador contratar personal barato, siempre resulta beneficios por contratar profesionales y experimentados ya que ellos tendrán más facilidad para resolver situaciones complejas relacionadas con el mantenimiento y administración del edificio. Además, deben ser conscientes a la hora de selección al equipo del personal que proveer servicio de modo que sea propiedad del residente y sea eficiente en cuanto al tiempo de dedicación y resultado obtenido. 
  
  LA CONVIVENCIA: En la gestión de administración de edificios, uno de los principales desafíos es garantizar que todos los inquilinos se sientan cómodos y respetuosos entre sí. Es fundamental para mantener el orden en las comunidades residenciales y ayudar a construir relaciones positivas entre vecinos. Para promover la convivencia en su edificio; hay que establecer reglas claras sobre comportamiento apropiado dentro del edificio. Establecer límites adecuados hará que sea más fácil controlar situaciones potencialmente problemáticas antes de que ocurran. Esta política también puede ser útil si hay necesidad de tomar medidas disciplinarias contra aquellos residentes incumplidores con las normativas de convivencia.
  
  >> En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      author: "Casa Grande",
      date: "17/04/2016",
      category: "Administración de Edificios",
      image: "/e58.webp",
      tags: ["Buenos Vecinos", "Convivencia Edificios", "Manual de Convivencia"]
    },
    {
      id: "61",
      title: "¿Qué no se puede hacer en un edificio?",
      slug: "que-no-se-puede-hacer-edificio",
      excerpt: "En un edificio residencial, algunas de las actividades que suelen estar prohibidas según la normativa legal y las reglas internas del edificio.",
      content: `En un edificio residencial, algunas de las actividades que suelen estar prohibidas según la normativa legal y las reglas internas del edificio son:
  
  -  Uso Comercial: Generalmente, está prohibido utilizar los espacios residenciales para actividades comerciales sin la autorización correspondiente.
  
  -  Molestias y Ruidos Excesivos: Se prohíben actividades que generen molestias a los vecinos, como ruidos excesivos en horarios no permitidos.
  
  -  Alteración de la Estructura: Modificaciones no autorizadas en la estructura del edificio, como la construcción de divisiones adicionales o cambios que afecten la seguridad y estética del inmueble.
  
  -  Uso Inadecuado de las Áreas Comunes: Realizar actividades no permitidas en las áreas comunes, como almacenamiento de objetos personales o actividades que afecten la tranquilidad o seguridad de otros residentes.
  
  - Incumplimiento de Normas de Convivencia: Actividades contrarias a las normas de convivencia establecidas en el reglamento interno del edificio, como el mal uso de las instalaciones o el incumplimiento de los horarios establecidos.
  
  Es importante respetar las normas y reglamentos internos de cada edificio residencial para fomentar un ambiente de convivencia armoniosa y seguro para todos los residentes. La gestión adecuada y el cumplimiento de las normativas contribuyen a la calidad de vida en la comunidad.
  
  En Casa Grande – Administración de Edificios estamos muy comprometidos a brindar información que ayude a los propietarios a lograr la vida segura y armónica que anhelan, adicionalmente, contribuir a que logren la revalorización de su propiedad en el tiempo.`,
      author: "Casa Grande",
      date: "09/02/2013",
      category: "Administración de Edificios",
      image: "/e59.webp",
      tags: ["Buenos Vecinos", "Reglamento Interno"]
    },
    {
      id: "62",
      title: "TEN EN CUENTA ESTOS DETALLES EN LA ENTREGA DE TU DEPARTAMENTO",
      slug: "detalles-entrega-departamento",
      excerpt: "El sueño de la casa o departamento propio puede ser una situación que llene de emoción y expectativa. Sin embargo, es necesario mantener cautela para prevenir cualquier tipo de inconveniente.",
      content: `El sueño de la casa o departamento propio puede ser una situación que llene de emoción y expectativa. Sin embargo, es necesario mantener cautela para prevenir cualquier tipo de inconveniente al momento de mudarse al nuevo hogar. "Sin importar que sea nueva o usada, es necesario realizar una inspección exhaustiva de la propiedad antes de recibirla, esto evitará posibles sorpresas durante la convivencia.", afirmó Luciano Barredo, gerente de marketing de Navent, empresa dueña de Adondevivir y Bumeran.
  
  Para el experto, es necesario realizar un inventario completo de la propiedad antes de recibirla. Esto quiere decir verificar el funcionamiento de puertas y ventanas, así como el estado de las paredes y el techo. Además, es importante revisar el correcto funcionamiento de los servicios, la presión del agua, etc. Finalmente, se debe revisar que la propiedad no presente deudas a las empresas que brindan estos servicios.
  
  Barredo agregó que, en el caso de la vivienda usada, es necesario que el cliente preste atención a todos los detalles y deje constancia en una cláusula por escrito sobre el estado en el que recibe la propiedad, ya que una vez firmada la promesa de compraventa se da por hecho que ambas partes están satisfechas. De ser así, luego de la firma de escritura, no habrá espacio para reclamos de ningún tipo.
  
  El caso particular de los departamentos en conjuntos residenciales.
  Un aspecto que suele pasar desapercibido por lo compradores durante la compra de un departamento es la administración, el presupuesto y el mantenimiento de las áreas comunes. En el caso de comprar en un edificio, se debe pedir el acta de la asamblea anterior; esto con el fin de analizar los acuerdos del periodo anterior y cuáles son los proyectos u obras que se van a realizar en el futuro. Así, el nuevo dueño puede estar preparado en caso de alguna cuota extraordinaria.
  
  Finalmente, debe verificar las áreas comunes y zonas de ocio como la piscina o la sala de juegos. Estas áreas suelen abarcar gran parte del presupuesto total y si llegan a tener fisuras o daños mayores, tendrá que invertir más dinero con una cuota extraordinaria alta.
  
  "Lo importante es estar atentos a todos los detalles o asesorarse con una inmobiliaria que se encargue de hacer un estudio de mercado adecuado. Debe evaluar la propiedad con calma, tomando en cuenta cosas como estado de la zona y la historia del inmueble. Esto asegurará que tome una decisión con la que se sienta completamente conforme.", concluyó el ejecutivo de Navent.
  
  Fuente: Adondevivir.com
  
  En Casa Grande administración de edificios estamos decididos a brindar información que ayude a los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      author: "Casa Grande",
      date: "26/07/2012",
      category: "Administración de Edificios",
      image: "/e60.webp",
      tags: ["Junta Propietarios", "Compra Inmuebles"]
    },
    {
      id: "63",
      title: "CONSUMO DE AGUA EN EDIFICIOS Y CONDOMINIOS",
      slug: "consumo-agua-edificios",
      excerpt: "Los Edificios y conjuntos habitacionales deben contar con un arranque común de agua potable, considerándose dos alternativas para medir el consumo.",
      content: `Los Edificios y conjuntos habitacionales deben contar con un arranque común de agua potable, considerándose dos alternativas para medir el consumo: Disponer de un Medidor General o de un Contómetro.
  
  **¿EXISTE SÓLO UN MEDIDOR PARA UN EDIFICIO O CONDOMINIO?**
  En edificios y conjuntos habitacionales, construidos desde 1984 en adelante, y que tengan conexión única a la matriz pública de agua potable, el proyecto de la instalación domiciliaria de agua potable del edificio o conjunto, además de un medidor general, debe incluir obligatoriamente la instalación de un Contómetro para cada departamento o vivienda y contómetros para registrar todos y cada uno de los consumos comunes.
  
  **¿QUÉ ES UN MEDIDOR GENERAL?**
  Es el destinado a establecer el registro del consumo de un conjunto habitacional (Edificio o Condominio)
  
  **¿QUÉ ES UN CONTÓMETRO?**
  Es el destinado a establecer el registro de consumo de un inmueble específico de un edificio o condominio.
  
  **¿CUÁLES SON LAS ALTERNATIVAS DE MEDICIÓN PARA LOS CONJUNTOS HABITACIONALES O EDIFICIOS?**
  - Medidor general sin contómetros y emisión de una boleta para el conjunto.
  - Un medidor general y cada vivienda con contómetro.
  
  **¿CÓMO SE MIDEN LOS CONSUMOS EN CONDOMINIO O EDIFICIOS?**
  A los edificios o conjuntos habitacionales con un arranque de agua potable común, Sedapal, les factura como un solo servicio o individualmente por departamento o vivienda, dependiendo si cuenta con un medidor general y contómetro respectivamente.
  
  Si el edificio cuenta con contómetros, la administración del edificio deberá registrar la lectura del medidor general y de cada uno de los medidores contómetros (en la misma fecha que lo hace Sedapal) y hará el cobro por el consumo en base a los metros cúbicos (m3) consumidos que haya registrado el medidor general según lo siguiente:
  
  - Si la suma de los consumos de los contómetros es inferior al consumo registrado en el medidor general, la comunidad (edificio o condomininio) debe contribuir al pago de esta diferencia de consumo, que para dichos efectos debe ser prorrateada (distribuida) a cada condomino, en la misma proporción en la que cada uno de ellos contribuye al pago de los gastos comunes.
  
  - Si, por el contrario, la suma de los consumos de los contómetros es superior al consumo registrado en el medidor general, la administración hará válida esa diferencia a favor de los condóminos en la misma proporción en la que cada uno de ellos contribuye al pago de los gastos comunes.
  
  **¿DE QUIÉN ES LA RESPONSABILIDAD DE LAS INSTALACIONES INTERIORES UBICADAS EN ESPACIOS COMUNES?**
  Las instalaciones interiores ubicadas en espacios comunes son de cargo y responsabilidad de los ocupantes del respectivo condominio o edificio, por lo que es aconsejable velar por su correcto funcionamiento para evitar aumentos en los consumos.
  
  En Casa Grande – administración de edificios estamos comprometidos a brindar información que ayude a los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.
  
  @CasaGrande`,
      author: "Casa Grande",
      date: "25/07/2012",
      category: "Administración de Edificios",
      image: "/e61.webp",
      tags: ["Cuota Mantenimiento", "Mantenimientos"]
    },
    {
      id: "64",
      title: "RESPONSABILIDAD POR DAÑOS EN EDIFICIO COLINDANTE",
      slug: "responsabilidad-danos-edificio-colindante",
      excerpt: "Los procesos de urbanización y edificación, y más concretamente, los procesos constructivos en general, son fuente de numerosas situaciones indeseadas en las que se provocan daños a personas o cosas no vinculadas al proceso constructivo (colindantes, vecinos, transeúntes, etc.).",
      content: `Los procesos de urbanización y edificación, y más concretamente, los procesos constructivos en general, son fuente de numerosas situaciones indeseadas en las que se provocan daños a personas o cosas no vinculadas al proceso constructivo (colindantes, vecinos, transeúntes, etc.).
  
  UN PLANO AL LADO DE UNA CASITA EN MINIATURA
  
  El daño que se causa a dichas personas genera la denominada responsabilidad extracontractual, es decir, aquella responsabilidad que a resultas de un hecho culposo propio o ajeno causa un daño a un tercero, viniendo el causante obligado a reparar el daño producido, responsabilidad que se encuentra regulada en el artículo 1.902 y siguientes del Código Civil frente a la regulación específica establecida en la Ley de Ordenación de la Edificación que se ocupa de la responsabilidad de los agentes de la edificación. De hecho, el sistema de garantías establecido en la Ley de Ordenación de la Edificación para el proceso constructivo no cubre los daños ocasionados a inmuebles contiguos o adyacentes.
  En la presente colaboración vamos a examinar el funcionamiento de este sistema de responsabilidad, para un supuesto tan habitual en la construcción como el de daños producidos en un inmueble como consecuencia de una obra de derribo del edificio colindante y posterior excavación en el solar que éste ocupaba.
  
  Partiendo de la suposición de que se han agotado todas las opciones de un acuerdo amistoso entre las partes, el propietario del edificio deberá asesorarse por un técnico a fin de conocer las posibles causas del daño y en consecuencia los responsables del mismo, técnico elaborará el imprescindible dictamen pericial que estos procesos requieren. Acto seguido, podrá interponer demanda judicial solicitando se declare la responsabilidad por daños inferidos al edificio a causa de las obras de derribo y excavación, responsabilidad que se materializará en la correspondiente indemnización por daños y perjuicios. Ahora bien, tal indemnización no opera de forma automática, sino que requiere demostración del daño y su imputación, para deducir la consiguiente responsabilidad a persona determinada, es decir que su real causación ha de llevarse a cabo en la fase probatoria del pleito, correspondiendo su apreciación al Tribunal de instancia.
  
  Ejercitada la acción judicial, para el éxito de la misma, es preciso que durante el proceso judicial quede acreditada la concurrencia de los siguientes elementos:
  
  a) La existencia del daño;
  
  La relación de causalidad entre el daño y el hecho productor del daño, es decir, que el daño se ha ocasionado por un acto u omisión imputable a una persona;
  
  b) La culpa y negligencia causante del daño.
  
  La realidad del daño (en nuestro caso el producido en el inmueble propiedad del propietario afectado) debe ser probada de forma categórica con exclusión de meras hipótesis o probabilidades. Para que un daño sea indemnizable ha de probarse necesariamente por quien lo reclama que éste ha existido. Por lo tanto, es al demandante a quien corresponde la carga de probar en juicio la realidad del daño.
  
  La relación de causalidad consiste en la relación de causa-efecto que debe mediar entre el hecho o evento (la demolición y la posterior excavación) y el daño a indemnizar (los daños producidos en el inmueble), de modo que quede probado que la conducta del agente fue la causa determinante de los daños cuya reparación es objeto de la acción judicial. Esta relación de causalidad no puede presumirse y debe ser probada con absoluta certeza (nuevamente quedan excluidas hipótesis o conjeturas), correspondiendo la carga de probar la relación de causalidad nuevamente al demandante.
  
  Por último, es requisito imprescindible para poder declarar la responsabilidad que quede acreditada la culpa o negligencia del causante del daño. En este punto, debemos señalar que si bien la responsabilidad  se basa originariamente en el elemento subjetivo de la culpabilidad (lo que se traducía en la necesidad del demandante de probar la culpa o negligencia del agente causante del daño) , nuestra jurisprudencia, al amparo de la evolución social derivada del incremento de actividades peligrosas consiguientes al desarrollo de la técnica y que generan un mayor riesgo a terceros, ha evolucionado en el sentido de objetivizar la responsabilidad , presumiendo culposa toda acción u omisión generadora de un daño indemnizable, a no ser que el agente demuestre (por lo tanto se invierte la carga de la prueba ) haber procedido con la diligencia debida a tenor de las circunstancias de las personas, del tiempo y del lugar. Por lo tanto, en principio, la culpa se presume, y será el agente causante del daño a quien corresponderá probar haber procedido, no sólo con las prevenciones y cuidados reglamentarios, sino además todos los que la prudencia imponga para prevenir el evento dañoso. También constituyen causas de exclusión de la culpa el que se acredite la concurrencia de caso fortuito, fuerza mayor o culpa del perjudicado en la producción del daño.
  
  Finalmente, la acción judicial deberá dirigirse contra la persona física o jurídica que con su actuación presumiblemente culposa haya provocado el daño en la finca colindante. Dado que en este tipo de obras intervienen diversas entidades y profesionales tales como arquitectos, arquitectos técnicos, constructoras, promotoras, etc....., consideramos que la demanda deberá dirigirse contra el posible causante del daño, si bien la responsabilidad será solidaria cuando no sea posible determinar el grado de intervención de cada uno de los posibles causantes del daño por lo que el demandante podrá dirigir su acción judicial de forma conjunta o separadamente contra aquellos.  Por otro lado, cuando la acción se dirige frente a la promotora para la cual se están efectuando los trabajos, el fundamento de la responsabilidad reside en que la actividad empresarial desarrollada por ésta implica la obtención de un beneficio, beneficio vinculado a la creación de un riesgo especial para lo demás (demolición del edificio y excavación del solar), por lo que es justo que aquella responda por los daños causados.
  
  👉👉 En Casa Grande – administración de edificios estamos comprometidos a brindar información que ayude a los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      author: "Casa Grande",
      date: "23/12/2011",
      category: "Legal",
      image: "/e62.webp",
      tags: ["Ley de Propiedad Horizontal", "Normas Legales"]
    },
    {
      id: "65",
      title: "Propiedad horizontal: ¿Cómo beneficia este régimen a la administración de edificios?",
      slug: "beneficios-propiedad-horizontal",
      excerpt: "El régimen de propiedad horizontal beneficia la administración de edificios de manera significativa, ya que establece un marco legal claro y eficiente.",
      content: `El régimen de propiedad horizontal beneficia la administración de edificios de manera significativa, ya que establece un marco legal claro y eficiente para gestionar áreas comunes y regular la convivencia entre propietarios. A continuación, algunos de los principales beneficios:
  
  1. Gestión eficiente de las áreas comunes
  Bajo este régimen, se establece una diferenciación entre áreas de propiedad exclusiva (como departamentos) y áreas comunes (como pasillos, ascensores, jardines). Las Juntas de Propietarios se encargan de gestionar las áreas comunes y tomar decisiones importantes sobre su mantenimiento, garantizando que las instalaciones funcionen adecuadamente​.
  
  2. Facilitación de decisiones colectivas
  La propiedad horizontal organiza a los propietarios en una Junta de Propietarios, lo que permite una toma de decisiones más ágil sobre asuntos de interés común, como el mantenimiento, seguridad y uso de áreas compartidas. Esto se formaliza mediante reglamentos internos, que regulan la convivencia y aseguran el cumplimiento de normas​​.
  
  3. Responsabilidad compartida y cuotas de mantenimiento
  El régimen establece que todos los propietarios son responsables de las áreas comunes, por lo que deben contribuir al mantenimiento mediante cuotas proporcionales. Esto permite cubrir gastos de reparaciones, limpieza, seguridad y otros servicios esenciales para el buen funcionamiento del edificio​.
  
  4. Resolución de conflictos
  La Junta de Propietarios y el Presidente de la Junta juegan un rol clave en la resolución de conflictos entre los copropietarios. Gracias a la normativa de propiedad horizontal, existe un mecanismo legal que permite a la administración actuar de manera eficiente ante problemas como morosidad o disputas sobre el uso de espacios comunes​​.
  
  5. Facilitación de mantenimientos preventivos
  La administración bajo el régimen de propiedad horizontal asegura que los mantenimientos preventivos de sistemas esenciales, como ascensores, bombas de agua o puertas de garaje, sean planificados y ejecutados de forma periódica, lo que previene problemas graves en el futuro​.
  
  En resumen, el régimen de propiedad horizontal proporciona una estructura sólida para la administración de edificios en Lima, ya que facilita la gestión de áreas comunes, la resolución de conflictos y el mantenimiento del edificio. Esto garantiza una mejor convivencia y preservación del inmueble a largo plazo.`,
      author: "Casa Grande",
      date: "17/11/2011",
      category: "Administración de Edificios",
      image: "/e63.webp",
      tags: ["Administración Inmobiliaria", "Junta Propietarios"]
    },
    {
      id: "66",
      title: "LA CUOTA DE MANTENIMIENTO EN UN EDIFICIO",
      slug: "cuota-mantenimiento-edificio",
      excerpt: "Si vives o estás por adquirir un departamento en un edificio o condominio, debes saber que hay una cuota de mantenimiento la cual estarás obligado a cubrir.",
      content: `Si vives o estás por adquirir un departamento en un edificio o condominio, debes saber que hay una cuota de mantenimiento la cual estarás obligado a cubrir.
  
  La cuota de mantenimiento se establece de acuerdo de las necesidades del inmueble para cubrir los gastos necesarios para la operación y conservación de servicios comunes como las áreas verdes, salón de evento, zona de parrillas, piscina, personal de portería y de mantenimiento y en general cualquier tipo de trabajo que sirva para mantener en estado óptimo los equipos y bienes con los que se cuentan.
  
  En algunos casos la cuota de mantenimiento te puede parecer un poco alta si la comparas con alguna otra referencia que tengas y te podrás preguntar ¿por qué? pues bien, te explico algunos datos importantes que se deben considerar para determinar la cuota de mantenimiento en un condominio y puedas sentirte seguro con lo que te dicen:
  
  ¿A DÓNDE VA A PARA MI DINERO?
  La cuota es destinada para el mantenimiento y conservación de los bienes comunes por lo que se hace un listado de cuáles son estos, cantidad de equipos, de qué clase son, cantidad de luminarias, cantidad de extintores, etc.
  
  Esto ayuda a tener la lista de conceptos a los cuáles se les deberá asignar un valor prorrateado mensual para su conservación y así mismo, contemplar un porcentaje destinado para el remplazo de alguno o bien una partida adicional para los consumibles, como lo son las luminarias, útiles de aseos, entre otros.
  
  ¿CUÁNTO PERSONAL NECESITAMOS PARA LA OPERACIÓN?
  Se debe considerar al personal necesario para la operación del edificio, como personal de portería, limpieza, mantenimiento.
  
  Recomendamos que el personal sea de la misma empresa que administra el condominio, para que el condominio éste libre de cualquier inconveniente que pueda surgir, pero puede darse el caso de que sea subcontratado a través de una empresa especializada en cada área y así dejar libre de todo riesgo laboral a tu propiedad, ya que como sabrás, al vivir en una comunidad de todos son obligados solidarios ante cualquier contingencia que se presente.
  
  EL EQUIPO IDEAL PARA ADMINISTRAR UN CONDOMINIO
  Además, hay un punto importante que muchas veces suele ser confuso, los servicios que en teoría son públicos como la recolección de basura o alumbrado público, son proporcionados por las autoridades, pero si en tu caso vives en un inmueble constituido como régimen de propiedad en condominio, estos servicios se toman como privados por lo que deberá contemplarse dentro del presupuesto el costo generado por ellos.
  
  ¿Y EL ADMINISTRADOR DEL INMUEBLE?:
  Una vez que contemplaste todas las áreas y conceptos necesarios para la operación y conservación, deberás de agregar el costo de Administración que puede ser a través de una empresa, persona física o en algunos casos miembros de la misma comunidad, y una vez determinados y analizados los costos y con la sumatoria de todo tendrás un gran total que ese será tu presupuesto mensual de operación,
  
  AHORA BIEN,
  ¿CÓMO DETERMINAR LA CUOTA?
  Hay dos maneras:        
  Dividir el presupuesto entre el total de unidades y así cada unidad pagará una aportación igual, aquel propietario que posea más de una unidad, deberá pagar por cada una de estas.
  
  Dividir el presupuesto según el porcentaje de participación de cada propietario y así cada quien pagará según los metros cuadrados que tenga su propiedad.
  
  COMPARACIÓN Y MOTIVO DE VARIACIONES DE LAS CUOTAS:
  Con los puntos anteriores sabrás por qué varía tanto de un inmueble a otro la cuota, ya que depende directamente del número de propiedades o metros cuadrados privados el monto a pagar por unidad.`,
      author: "Casa Grande",
      date: "09/07/2011",
      category: "Administración de Edificios",
      image: "/e64.webp",
      tags: ["Cuota Mantenimiento", "Finanzas"]
    },
    {
      id: "67",
      title: "LA CUOTA DE MANTENIMIENTO EN UN EDIFICIO",
      slug: "cuota-mantenimiento-edificio-2",
      excerpt: "Si vives o estás por adquirir un departamento en un edificio o condominio, debes saber que hay una cuota de mantenimiento la cual estarás obligado a cubrir.",
      content: `Si vives o estás por adquirir un departamento en un edificio o condominio, debes saber que hay una cuota de mantenimiento la cual estarás obligado a cubrir.
  
  La cuota de mantenimiento se establece de acuerdo de las necesidades del inmueble para cubrir los gastos necesarios para la operación y conservación de servicios comunes como las áreas verdes, salón de evento, zona de parrillas, piscina, personal de portería y de mantenimiento y en general cualquier tipo de trabajo que sirva para mantener en estado óptimo los equipos y bienes con los que se cuentan.
  
  En algunos casos la cuota de mantenimiento te puede parecer un poco alta si la comparas con alguna otra referencia que tengas y te podrás preguntar ¿por qué? pues bien, te explico algunos datos importantes que se deben considerar para determinar la cuota de mantenimiento en un condominio y puedas sentirte seguro con lo que te dicen:
  
  ¿A DÓNDE VA A PARA MI DINERO?
  La cuota es destinada para el mantenimiento y conservación de los bienes comunes por lo que se hace un listado de cuáles son estos, cantidad de equipos, de qué clase son, cantidad de luminarias, cantidad de extintores, etc.
  
  Esto ayuda a tener la lista de conceptos a los cuáles se les deberá asignar un valor prorrateado mensual para su conservación y así mismo, contemplar un porcentaje destinado para el remplazo de alguno o bien una partida adicional para los consumibles, como lo son las luminarias, útiles de aseos, entre otros.
  
  ¿CUÁNTO PERSONAL NECESITAMOS PARA LA OPERACIÓN?
  Se debe considerar al personal necesario para la operación del edificio, como personal de portería, limpieza, mantenimiento.
  
  Recomendamos que el personal sea de la misma empresa que administra el condominio, para que el condominio éste libre de cualquier inconveniente que pueda surgir, pero puede darse el caso de que sea subcontratado a través de una empresa especializada en cada área y así dejar libre de todo riesgo laboral a tu propiedad, ya que como sabrás, al vivir en una comunidad de todos son obligados solidarios ante cualquier contingencia que se presente.
  
  EL EQUIPO IDEAL PARA ADMINISTRAR UN CONDOMINIO
  Además, hay un punto importante que muchas veces suele ser confuso, los servicios que en teoría son públicos como la recolección de basura o alumbrado público, son proporcionados por las autoridades, pero si en tu caso vives en un inmueble constituido como régimen de propiedad en condominio, estos servicios se toman como privados por lo que deberá contemplarse dentro del presupuesto el costo generado por ellos.
  
  ¿Y EL ADMINISTRADOR DEL INMUEBLE?:
  Una vez que contemplaste todas las áreas y conceptos necesarios para la operación y conservación, deberás de agregar el costo de Administración que puede ser a través de una empresa, persona física o en algunos casos miembros de la misma comunidad, y una vez determinados y analizados los costos y con la sumatoria de todo tendrás un gran total que ese será tu presupuesto mensual de operación,
  
  AHORA BIEN,
  ¿CÓMO DETERMINAR LA CUOTA?
  Hay dos maneras:        
  Dividir el presupuesto entre el total de unidades y así cada unidad pagará una aportación igual, aquel propietario que posea más de una unidad, deberá pagar por cada una de estas.
  
  Dividir el presupuesto según el porcentaje de participación de cada propietario y así cada quien pagará según los metros cuadrados que tenga su propiedad.
  
  COMPARACIÓN Y MOTIVO DE VARIACIONES DE LAS CUOTAS:
  Con los puntos anteriores sabrás por qué varía tanto de un inmueble a otro la cuota, ya que depende directamente del número de propiedades o metros cuadrados privados el monto a pagar por unidad.`,
      author: "Casa Grande",
      date: "09/07/2011",
      category: "Administración de Edificios",
      image: "/e65.webp",
      tags: ["Cuota Mantenimiento", "Finanzas"]
    },
    {
      id: "68",
      title: "Alcance de las Funciones del Portero",
      slug: "alcance-funciones-portero",
      excerpt: "Este personal cumple un rol fundamental para la seguridad, mantenimiento y convivencia en el edificio.",
      content: `Este personal cumple un rol fundamental para la seguridad, mantenimiento y convivencia en el edificio. Las responsabilidades del portero pueden variar según el reglamento interno del edificio, pero generalmente incluyen las siguientes áreas:
  
  1. Seguridad y Control de Acceso
  
     – Vigilancia o Control del acceso principal: El portero es responsable de controlar quién entra y sale del edificio, registrando las visitas y garantizando que solo ingresen personas autorizadas.
  
     – Recepción de visitantes: Verificar la identidad de los visitantes y asegurarse de que estos sean esperados por los residentes antes de permitirles el ingreso.
  
     – Supervisión del uso de las áreas comunes: Asegurar que las áreas comunes, como cocheras, ascensores y pasillos, se utilicen de manera adecuada y de acuerdo con el reglamento.
  
     – Control de cámaras de seguridad: Monitorear las cámaras de seguridad instaladas en el edificio para detectar cualquier actividad inusual o sospechosa.
  
  2. Atención y Servicio a los Residentes
  
     – Recepción y entrega de correspondencia y paquetería: Gestionar la recepción de cartas, paquetes o entregas de mensajería, informando a los residentes de manera oportuna para que puedan recogerlos.
  
     –Asistencia en emergencias: En caso de emergencia (como sismos, incendios o fallos técnicos), el portero debe ayudar a los residentes siguiendo los protocolos de seguridad establecidos.
  
     – Gestión de quejas y solicitudes: Recibir y transmitir a la administración las quejas, solicitudes o inquietudes de los residentes para que se tomen las medidas necesarias.
  
  3. Mantenimiento Básico de las Áreas Comunes
  
     – Inspección diaria de instalaciones: Realizar recorridos por las áreas comunes para verificar que todo esté en buenas condiciones y reportar cualquier desperfecto o necesidad de reparación a la administración.
  
     – Supervisión de proveedores y servicios: Coordinar el acceso y supervisar el trabajo de proveedores que ingresen al edificio para realizar reparaciones o servicios (electricistas, plomeros, etc.).
  
     – Mantenimiento preventivo básico: Aunque el portero no es un técnico especializado, puede encargarse de pequeñas tareas de mantenimiento, como cambiar bombillas, revisar puertas automáticas y mantener el orden en las áreas comunes.
  
  4. Comunicación y Coordinación
  
     – Comunicación con la administración: Informar regularmente a la empresa administradora sobre el estado general del edificio, así como sobre problemas o incidencias que afecten el bienestar de los residentes.
  
     – Notificación de eventos o trabajos en el edificio: El portero debe notificar a los residentes sobre cualquier trabajo de mantenimiento, reparación o actividades programadas que puedan afectar el acceso o uso de las áreas comunes.
  
  5. Cumplimiento de Normativas y Reglamentos
  
     – Aplicación del Reglamento Interno: El portero debe asegurar que los residentes y visitantes cumplan con el reglamento del edificio, en especial en cuanto al uso de áreas comunes, control de ruidos, y convivencia.
  
     – Control del estacionamiento: Supervisar que las cocheras sean usadas exclusivamente para los vehículos autorizados, evitando que se utilicen como almacenes o para otros fines que incumplan las normas del edificio.
  
  6. Manejo de Emergencias
  
     – Activación de los sistemas de seguridad: En caso de emergencia, como un sismo o incendio, el portero debe activar las alarmas de emergencia y seguir los procedimientos establecidos, ayudando en la evacuación si es necesario.
  
     – Primeros auxilios: De ser posible, el portero debe estar capacitado en primeros auxilios para brindar asistencia inicial hasta la llegada de los servicios de emergencia.
  
     – Cierre de servicios de gas o electricidad: Si es necesario, debe estar capacitado para cerrar válvulas de gas o desconectar la electricidad en áreas comunes para evitar riesgos adicionales durante una emergencia.
  
  7. Protección del Patrimonio del Edificio
  
     – Control de llaves: Gestionar las llaves de las áreas comunes y asegurarse de que solo personas autorizadas tengan acceso a ellas.
  
     – Registro de actividades: Mantener un registro escrito o digital de cualquier incidente, entrada o salida de personal de mantenimiento, visitas, y otros eventos relevantes.
  
  8. Coordinación con el Personal de Mantenimiento y Limpieza
  
     – Supervisión del personal de limpieza: Verificar que el personal de limpieza realice sus tareas de acuerdo con lo planificado y asegurarse de que las áreas comunes se mantengan limpias y ordenadas.
  
     – Reporte de necesidades de limpieza: Informar a la administración o al personal de limpieza sobre áreas que requieren atención adicional o inmediata.
  
  9. Función de Recepción y Atención al Público
  
     – Atender llamadas y correspondencia: Gestionar las llamadas telefónicas y cualquier otra correspondencia dirigida a los residentes o a la administración del edificio.
  
     – Manejo de intercomunicadores: Comunicar de manera efectiva con los departamentos a través del sistema de intercomunicación del edificio para coordinar visitas o informar sobre entregas y otros asuntos.
  
  En conclusión, el portero desempeña un papel integral en el correcto funcionamiento de un edificio residencial, actuando como la primera línea de defensa en cuanto a la seguridad y el cumplimiento de las normas de convivencia. Sus responsabilidades abarcan desde la seguridad y control de acceso hasta la gestión básica de mantenimiento y la coordinación de emergencias. Para asegurar una convivencia armoniosa, el portero debe ser proactivo, responsable y estar siempre en comunicación con la administración y los residentes.
  
  Las tareas y responsabilidades que como trabajador tiene a cargo el portero, están plasmadas, de manera bastante general, en lo particular, cada edificio tiene sus propias necesidades y rutinas de trabajo, sui generis. El detalle de ejecución de las labores del portero, en el edificio y sus áreas comunes, debe ser planificado entre este trabajador y el Administrador del edificio; a falta de Administrador, se hará con la Junta Directiva.
  
  Algunas Juntas Directivas o Administradores de Edificios, sea por comodidad, falta de conocimientos, inexperiencia en el manejo de un Edificio, etc, transfieren responsabilidades a los porteros, que no son propias de su competencia. Tal es el caso de endosar a los porteros tareas administrativas, como entenderse con los proveedores, cobrar las cuotas de mantenimiento, y otros asuntos administrativos, cuando esto no es propio de sus funciones.
  
  👉👉 En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      author: "Casa Grande",
      date: "01/06/2011",
      category: "Administración de Edificios",
      image: "/e66.webp",
      tags: ["Junta Propietarios", "Portero Edificio"]
    },
    {
      id: "69",
      title: "Guía Completa para Comprar un Inmueble en Lima: Aspectos Legales y Técnicos a Considerar",
      slug: "guia-comprar-inmueble-lima",
      excerpt: "Descubre los 10 puntos clave para comprar una propiedad en Lima y evitar problemas legales y técnicos.",
      content: `Descubre los 10 puntos clave para comprar una propiedad en Lima y evitar problemas legales y técnicos.
  Comprar un inmueble es una de las decisiones más importantes en la vida de cualquier persona. Si ya decidiste adquirir una propiedad en una de las zonas exclusivas de Lima, hay algunos puntos clave que debes considerar antes de firmar cualquier documento o recibir las llaves de tu futuro hogar. Aquí te ofrecemos una serie de recomendaciones para evitar sorpresas desagradables y garantizar que tu inversión sea segura y beneficiosa.
  
  1. Revisión del Inmueble
  Antes de firmar la conformidad de obra, es esencial hacer una inspección exhaustiva de toda la propiedad. Esto incluye:
  
  Paredes y suelos: Asegúrate de que no haya grietas o irregularidades.
  Instalaciones eléctricas y de agua: Comprueba que los tomacorrientes, interruptores, tuberías y desagües estén en perfectas condiciones.
  Sistemas de seguridad: Revisa que las cámaras y/o alarmas estén instaladas y funcionando.
  Ascensores y portero electrónico: Funcionamiento adecuado y certificado de mantenimiento.
  Importantísimo, No te olvides de verificar las áreas comunes como ascensores, bombas de agua y puertas de cochera, ya que estas áreas suelen presentar vicios ocultos, que podrían resultar costosos si no se detectan a tiempo​.
  
  2. Investigación de los Vecinos
  La convivencia es otro factor que no debes pasar por alto. Investigar sobre tus vecinos puede ahorrarte molestias futuras. Por ejemplo, casos como el de la señora María, quien sufre de ruidos molestos debido a un gimnasio cerca de su casa, o de fiestas frecuentes de sus vecinos, pueden ser situaciones evitables con una pequeña investigación previa​.
  
  3. Aspectos Legales: El Título de Propiedad
  Es vital asegurarse de que el inmueble tenga un título de propiedad debidamente inscrito en la SUNARP. Además, debes verificar si la propiedad está libre de hipotecas o embargos​​. También, asegúrate de que la independización del área está regularizada, un punto crucial si estás comprando sobre planos.
  
  4. Detalles del Contrato
  Un contrato de compraventa bien estructurado debe incluir:
  
  Los materiales y acabados que se utilizarán en la construcción.
  Metraje exacto del inmueble, tanto de la vivienda como de áreas comunes.
  Garantías de la estructura, que suelen ser de cinco años por ley​.
  Política de devolución en caso de retractarte o si no se cumple lo pactado en tiempo y forma.
  Si decides financiar la compra con un crédito hipotecario, revisa bien las condiciones del seguro obligatorio que el banco podría ofrecer​.
  
  5. Ubicación y Zonas Colindantes
  Verifica si en la zona se han planeado obras mayores o cambios en la zonificación que puedan afectar la tranquilidad o el valor de tu propiedad​. También es recomendable dar una vuelta por la municipalidad y revisar si hay proyectos de infraestructura planeados en las cercanías​. Por ejemplo, tener un colegio cerca suele crear caos vehicular en las horas puntas.
  
  6. Revisión del Suelo
  La calidad del suelo donde se construye el inmueble es un factor clave. Si es un suelo arenoso, podrías enfrentarte a problemas de humedad o salitre. Además, la solidez del suelo debe soportar movimientos sísmicos, algo fundamental considerando la alta actividad sísmica en Lima​.
  
  7. Visitas Durante la Construcción
  Si estás comprando sobre planos, es recomendable hacer visitas periódicas para revisar que se cumplan los estándares prometidos, sobre todo en cuanto a acabados y distribución del espacio​.
  
  8. Prevención de Estafas
  Uno de los errores más comunes es brindar adelantos de dinero sin verificar la autenticidad del vendedor o la inmobiliaria. Asegúrate de que la empresa sea reconocida y tenga proyectos anteriores. Además, el adelanto de dinero debe estar formalizado en un documento que indique claramente las condiciones de devolución en caso de que el trato no se concrete​.
  
  9. Saneamiento por Vicios Ocultos
  Es común que algunos defectos de construcción se revelen tiempo después de la compra. Estos vicios ocultos pueden incluir problemas con la electricidad, filtraciones o defectos en la estructura​. La ley peruana te permite reclamar por estos vicios hasta cinco años después de recibir la propiedad​.
  
  10. Seguro Contra Desastres
  Finalmente, adquirir un seguro contra todo riesgo (que cubra terremotos, incendios, inundaciones, entre otros) es una inversión inteligente. Aunque algunas garantías legales protegen la estructura del inmueble por unos años, un seguro te dará mayor tranquilidad​.
  
  Conclusión
  Comprar una casa o departamento en Lima es una inversión importante que debe realizarse con todas las precauciones posibles. Desde aspectos legales hasta detalles técnicos, cada paso del proceso debe ser revisado cuidadosamente. Si sigues estas recomendaciones, estarás mejor preparado para evitar problemas futuros y disfrutar plenamente de tu nuevo hogar. ¡No olvides contar con el asesoramiento adecuado y revisar toda la documentación antes de tomar una decisión!
  
  ¿Sabías que es posible reclamar por vicios ocultos hasta cinco años después de recibir el inmueble?`,
      author: "Casa Grande",
      date: "21/05/2011",
      category: "Administración de Edificios",
      image: "/e67.webp",
      tags: ["Junta Propietarios", "Normas Legales"]
    },
    {
      id: "70",
      title: "¿Cómo llevar el registro de Gastos del Edificio?",
      slug: "como-llevar-registro-gastos-edificio",
      excerpt: "Llevar un registro adecuado de los gastos comunes en un edificio es esencial para asegurar una correcta y transparente administración de los recursos y mantener una convivencia armónica entre los propietarios.",
      content: `Llevar un registro adecuado de los gastos comunes en un edificio es esencial para asegurar una correcta y transparente administración de los recursos y mantener una convivencia armónica entre los propietarios.
  
  Aquí un detalle para hacerlo de forma eficiente:
  
  Realizar un reporte mensual: Es una descripción de los principales movimientos financieros del mes. este será un documento clave para garantizar la transparencia y la correcta gestión de los recursos del edificio. Este informe debe contener información clara, detallada y organizada sobre los ingresos y egresos del mes, así como otros aspectos financieros relevantes. A continuación, el detallo qué información debe incluir:
  Crear un Fondo de Ingresos y Gastos Comunes: Cada edificio necesita tener un fondo común que se forme con los pagos de las cuotas de mantenimiento de los copropietarios. Este fondo se utiliza para cubrir los gastos regulares del edificio, tales como:
  Servicios básicos: Agua, electricidad, Telefonía, gas y otros
  Mantenimientos preventivos y correctivos de equipos como ascensores, bombas de agua, sistemas eléctricos​ y otros.
  Reparaciones menores: filtraciones de agua, arreglos eléctricos, otros
  3. Registrar cada movimiento de forma detallada: Es importante llevar un libro de ingresos y egresos donde se detalle cada transacción:
  
  Ingresos: constancias de pago de cuotas de mantenimiento (ordinarias o extraordinarias), o adicionales si se acordaron. Multas o recargos por morosidad.
  Egresos: comprobantes por pago de sueldos a trabajadores, beneficios gastos administrativos, compras o pagos de servicios o trabajos, contribuciones de ley y otros. Cada gasto debe estar acompañado de su comprobante (boleta o factura) y el concepto claro.
  4. Fondo de contingencia. Es crucial tener un fondo de contingencia porque permite afrontar gastos imprevistos o emergencias sin afectar el presupuesto regular, como reparaciones urgentes, mantenimientos mayores o desastres naturales. Esto asegura la continuidad de los servicios y la seguridad de los residentes, evitando problemas financieros o la necesidad de recaudar fondos extraordinarios en situaciones críticas.
  
  5. Informar sobre los Deudores y Morosidad: Se debe publicar una lista actualizada de los propietarios que están en deuda, para mantener transparencia y ayudar en la toma de decisiones informadas, para promover la equidad e identificar patrones de incumplimiento. Además, fomenta la responsabilidad y el compromiso entre vecinos. Por último, la Administración demostrará que protege los intereses financieros del edificio.
  
  6. Informar sobre Reparaciones o Proyectos: Si durante el mes se realizaron proyectos importantes (como la reparación de ascensores o el cambio de bombas), debe incluirse un informe detallado. Asimismo, si hay un trabajo o proyecto en curso. Informar sobre los gastos incurridos hasta el momento, los pagos pendientes y plazos para finalización.
  
  7. Recomendaciones del Administrador: El informe puede cerrar con recomendaciones sobre la gestión financiera del edificio, por ejemplo:
  
  Sugerencias para mejorar el flujo de caja.
  Necesidad de ajustes en las cuotas mensuales si se observa un déficit recurrente.
  Otras acciones preventivas para evitar futuros problemas financieros.
  10. Archivos adjuntos Debe Incluir todos los comprobantes (boletas, facturas) y documentos de soporte que justifiquen los ingresos y egresos reportados
  
  👉👉 En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e68.webp",
      author: "Casa Grande",
      date: "11/09/2023",
      category: "Administracion de Edificios",
      tags: ["Administracion de Edificios"]
    },
    {
      id: "71",
      title: "El alquiler tipo Airbnb",
      slug: "alquiler-tipo-airbnb",
      excerpt: "El alquiler tipo Airbnb puede plantear ciertas preocupaciones en cuanto a la seguridad de los vecinos en un mismo edificio.",
      content: `El alquiler tipo Airbnb puede plantear ciertas preocupaciones en cuanto a la seguridad de los vecinos en un mismo edificio. Aquí comento algunos aspectos relevantes:
  
  1. Rotación constante de huéspedes: Una de las características principales de Airbnb es la posibilidad de alquilar una propiedad por períodos cortos. Esto significa que los vecinos pueden encontrarse con diferentes personas en el edificio regularmente, lo que puede generar cierta inquietud en cuanto a la seguridad y la convivencia.
  
  2. Falta de control sobre los huéspedes: A diferencia de los inquilinos a largo plazo, los huéspedes de Airbnb no están sujetos a los mismos procesos de selección y verificación. Esto puede generar preocupación en cuanto a la confiabilidad y comportamiento de los huéspedes, ya que no se tiene un control directo sobre ellos.
  
  3. Ruido y molestias: Algunos huéspedes pueden no estar familiarizados con las normas y reglamentos del edificio, lo que puede resultar en ruidos excesivos, fiestas o comportamientos inapropiados. Esto puede afectar la calidad de vida de los vecinos y generar conflictos.
  
  4. Seguridad de las instalaciones comunes: El acceso de huéspedes desconocidos al edificio puede plantear preocupaciones en cuanto a la seguridad de las áreas comunes, como el lobby, ascensores, estacionamientos, entre otros. Es importante asegurarse de que las medidas de seguridad del edificio sean adecuadas para proteger a los residentes y prevenir situaciones de riesgo.
  
  5. Responsabilidad del propietario: En algunos casos, los propietarios que alquilan a través de Airbnb pueden no estar al tanto de las regulaciones y responsabilidades legales que implica este tipo de alquiler. Esto puede generar problemas legales y dificultades para resolver cualquier situación que afecte a los vecinos.
  
  Es importante tener en cuenta que las regulaciones y restricciones sobre el alquiler tipo Airbnb pueden variar según la ubicación y las leyes locales. Es recomendable consultar las normativas vigentes y, en caso de tener inquietudes, comunicarse con la administración del edificio o la junta de edificio para abordar cualquier preocupación relacionada con la seguridad de los vecinos.
  
  👉👉  En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e69.webp",
      author: "Casa Grande",
      date: "07/09/2023",
      category: "Administracion de Edificios",
      tags: ["Administracion de Edificios", "Junta Propietarios", "MANUAL DE CONVIVENCIA"]
    },
    {
      id: "72",
      title: "El DELIVERY en los edificios",
      slug: "delivery-edificios",
      excerpt: "La atención de los servicios de delivery en los edificios puede presentar ciertos desafíos en términos de seguridad.",
      content: `La atención de los servicios de delivery en los edificios puede presentar ciertos desafíos en términos de seguridad. Uno de los principales problemas es el acceso de personas ajenas al edificio, lo que puede poner en riesgo la seguridad de los residentes y sus propiedades.
  
  En primer lugar, los repartidores de delivery suelen ser personas diferentes cada vez, lo que dificulta el control y seguimiento de quién entra y sale del edificio. Además, en ocasiones, los repartidores pueden necesitar acceder a áreas privadas del edificio para realizar la entrega, lo que puede suponer un riesgo adicional.
  
  Por otro lado, la frecuencia de las entregas de delivery puede sobrecargar al personal de portería, que debe atender a los repartidores además de sus otras responsabilidades. Esto puede llevar a errores o descuidos en la gestión de la seguridad del edificio.
  
  Para mitigar estos problemas, es importante establecer políticas claras y procedimientos de seguridad para la recepción de deliveries. Esto puede incluir la verificación de la identidad del repartidor, la recepción de las entregas en un área designada, y la notificación a los residentes cuando su delivery ha llegado.
  
  En resumen, aunque los servicios de delivery son una comodidad para los residentes, es crucial manejarlos de manera que no comprometan la seguridad del edificio.
  
  >> En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e70.webp",
      author: "Casa Grande",
      date: "07/09/2022",
      category: "Administracion de Edificios",
      tags: ["Administracion de Edificios", "Convivencia Edificios", "el DELIVERY en los edificios"]
    },
    {
      id: "73",
      title: "¿QUE ES EL REGLAMENTO INTERNO?",
      slug: "que-es-reglamento-interno",
      excerpt: "El reglamento interno de un edificio es un conjunto de normas y directrices establecidas para regular la convivencia y el uso de las instalaciones dentro de un edificio o complejo residencial.",
      content: `El reglamento interno de un edificio es un conjunto de normas y directrices establecidas para regular la convivencia y el uso de las instalaciones dentro de un edificio o complejo residencial. Este documento es fundamental para mantener el orden, la seguridad y la armonía entre los residentes.
  
  Este documento lo inscribe la constructora o inmobiliaria en Sunarp cuando hace la Declaratoria de Fabrica.
  
  El REGLAMENTO INTERNO generalmente aborda aspectos como:
  
  Uso de áreas comunes: Establece las reglas para el uso de espacios compartidos como parrillas, zona de juegos de niños, el gimnasio, la piscina, salones de usos múltiples, entre otros.
  Procedimientos de seguridad: Detalla las medidas de seguridad del edificio, como el acceso de visitantes, protocolos de emergencia, entre otros.
  Mantenimiento de las propiedades: Incluye directrices sobre el mantenimiento de las unidades residenciales y áreas comunes.
  Ruidos y horas de silencio: Establece las horas durante las cuales se debe evitar hacer actividades o trabajos que causen ruidos molestos.
  Reglas de convivencia: Define comportamientos aceptables y no aceptables para promover la buena convivencia entre los residentes.
  Gestión de residuos: Proporciona instrucciones sobre la eliminación adecuada de los residuos.
  El REGLAMENTO INTERNO es un documento que tiene la función de establecer una convivencia armónica y segura; por ello, debe ser respetado por todos los residentes. Según el acuerdo de los copropietarios, el incumplimiento de estas normas puede resultar en sanciones o multas.
  
  >> En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e71.webp",
      author: "Casa Grande",
      date: "07/02/2022",
      category: "Administracion de Edificios",
      tags: ["Administracion de Edificios", "Junta Propietarios", "Ley 27157", "Reglamento Interno"]
    },
    {
      id: "74",
      title: "La importancia de una buena administración",
      slug: "importancia-buena-administracion",
      excerpt: "Precio, costo y valor no siempre son lo mismo. Cuánto costó una vivienda, cuál es el valor que le asigna su dueño y cuál es su precio de mercado, pueden ser tres cifras diametralmente distintas.",
      content: `Precio, costo y valor no siempre son lo mismo. Cuánto costó una vivienda, cuál es el valor que le asigna su dueño y cuál es su precio de mercado, pueden ser tres cifras diametralmente distintas. De los tres, el aumento del precio en el tiempo es el número más importante y, en definitiva, el que hay que tomar en cuenta a la hora de hacer cualquier transacción inmobiliaria. Esa es la plusvalía.
  
  En el caso de los departamentos la plusvalía es muy acotada. Al haber mucha oferta, el precio no se incrementa por escasez. La plusvalía podría detonarse por una estación de metro cerca o por un cambio en el plan regulador que no permita la construcción de otros edificios, asegurando una vista bonita, por ejemplo.
  
  Con la ubicación no hay mucho que hacer. Es o no es. En cambio, la comunidad sí puede influir en la plusvalía por medio de la mantención del edificio. Así, el precio del departamento no disminuye frente a la abundante oferta paralela dependiendo del buen estado de las pinturas, jardines, iluminación y aseo. Para esto, es vital tener una administración bien organizada.
  
  
  Una buena administración se debe preocupar de que el reglamento de copropiedad respectivo sea respetado, como que no se ingresen animales si se prohíbe o que no se cuelgue ropa en barandas o terrazas. La estética es clave en la determinación del valor de una vivienda.
  
  La primera impresión de un departamento es el acceso al edificio. No se saca nada con tener un departamento en perfectas condiciones, con buena mantención, si el edificio deja que desear. Ahí entra en juego el llamado factor "entorno" que se aplica en toda valoración inmobiliaria. Contra eso no hay nada que hacer.
  
  Pero el tema va mucho más allá de la estética. La administración se debe preocupar de tener a los porteros y a todo el personal que funciona en el edificio capacitados. Deben andar uniformados y ser evaluados constantemente por su comportamiento laboral.
  
  La ley de copropiedad exige que la administración de toda comunidad tenga a la vista un plan de evacuación y un plano con las salidas de emergencia. Lamentablemente, muy pocos edificios o condominios cumplen con esta exigencia básica para lugares con alta concentración de personas. El único guía muchas veces es el conserje de turno.
  
  Tan importante es el rol que juega la administración, que a la hora de evaluar cuánto cobrar por un departamento usado, hay que tomar en cuenta la composición de la misma. Una buena administración es aquella que rinde cuenta sistemáticamente a toda la comunidad de los ingresos, los gastos de mantención, los gastos extra, las sesiones extraordinarias de la asamblea, los proyectos y los problemas del mes a mes en el recinto. En definitiva, en la altura todo tiene su precio, y la administración especialmente.
  
  RECOMENDACIONES AL COMPRAR UN DEPARTAMENTO
  
  Hay algunos elementos que son detonantes de la plusvalía (incremento del precio en el tiempo) o minusvalía (disminución del precio). Estos puntos son importantes, ya que un departamento puede estar muy bien conservado pero no será bien valorado si tiene un entorno directo negativo.
  
  ESTAS SON ALGUNAS SUGERENCIAS A CONSIDERAR:
  
  – Saber quién administra el condominio o edificio, y el nivel de experiencia que tiene en la materia.
  
  – Tener a la vista el reglamento de copropiedad.
  
  – Recorrer el edificio completo para ver si está bien mantenido.
  
  – Ver un recibo de gastos comunes de la temporada de verano y de invierno, para tener un promedio real del costo por gastos comunes.
  
  – Conocer en forma general la composición de quienes viven en el edificio (jóvenes, gente de edad, familias).
  
  – Informarse si se han efectuado periódicamente las mantenciones al edificio. Especialmente aquellas que tienen incidencia en el funcionamiento puertas de cochera, intercomunicadores, bombas de aguas, ascensores entre otros. Las empresas de cada partida hacen mantenciones con facturas de cobro que así lo acreditan.
  
  Por Hernán Marchant Montero. Es tasador y consultor inmobiliario.`,
      image: "/e72.webp",
      author: "Casa Grande",
      date: "04/09/2021",
      category: "Administracion de Edificios",
      tags: ["Administracion de Edificios", "Junta Propietarios"]
    },
    {
      id: "75",
      title: "¿Qué hacemos?",
      slug: "que-hacemos",
      excerpt: "Casa Grande es una empresa con más de 14 años de experiencia en el sector de la administración de edificios y condominios en Lima.",
      content: `Casa Grande es una empresa con más de 14 años de experiencia en el sector de la administración de edificios y condominios en Lima. Nació con la misión de ofrecer una gestión eficiente, transparente y profesional para cubrir las necesidades de los propietarios que buscan mantener el valor de sus propiedades mientras promueven una convivencia armónica entre los residentes. Sus servicios abarcan desde el mantenimiento preventivo, la supervisión de personal, hasta la gestión de cuotas y resolución de conflictos.
  
  Lo que distingue a Casa Grande es su enfoque en la transparencia y la digitalización de los procesos administrativos, facilitando una mejor comunicación con los propietarios mediante plataformas online. Además, su experiencia les permite anticiparse a problemas comunes en edificios, como la gestión de vecinos morosos o el mal estado de las infraestructuras, con soluciones prácticas y preventivas que aseguran el bienestar de todos los residentes.
  
  Los principios que guían la marca son la eficiencia, el buen trato y la confianza. Estos valores, junto con su enfoque personalizado para cada edificio, los destacan frente a la competencia. Casa Grande también ofrece ventajas competitivas como la atención inmediata y la capacidad de resolver problemas estructurales o de convivencia con rapidez, lo que la convierte en una opción confiable para quienes buscan una administración moderna y profesional.`,
      image: "/e73.webp",
      author: "Casa Grande",
      date: "06/09/2020",
      category: "Administracion de Edificios",
      tags: ["Administracion de Edificios", "Junta Propietarios"]
    },
    {
      id: "76",
      title: "PROBLEMAS ENTRE VECINOS DE UN EDIFICIO",
      slug: "problemas-entre-vecinos-edificio",
      excerpt: "En el día a día de la convivencia en un edificio, surgen conflictos comunes entre vecinos que, si no se manejan adecuadamente, pueden afectar la armonía y tranquilidad.",
      content: `En el día a día de la convivencia en un edificio, surgen conflictos comunes entre vecinos que, si no se manejan adecuadamente, pueden afectar la armonía y tranquilidad. Algunos de los más frecuentes son:
  
  1. Ruido excesivo
  La música a alto volumen suele volverse ruido molesto, las fiestas o el uso de electrodomésticos a horas inapropiadas a menudo generan quejas, especialmente durante horas de descanso.
  
  2. Uso indebido de áreas comunes
  El mal uso de áreas comunes puede causar roces. Algunos vecinos pueden invadir espacios que no les corresponden como pasillos de los departamentos (colocan macetas u otros), mal uso de parrillas o de los equipos de la lavanderia
  
  3. La tenencia irresponsable de mascotas
  Los problemas relacionados con mascotas incluyen ruidos, olores, suciedad en las áreas comunes, o falta de responsabilidad de los dueños al no recoger los desechos de sus animales.
  
  4. Morosidad en los pagos de cuotas
  Los vecinos morosos que no pagan sus cuotas de mantenimiento o pagos extraordinarios pueden generar tensión, ya que esto afecta el mantenimiento general del edificio y crea un ambiente de inconformidad entre los demás propietarios​.
  
  5. Estacionamientos
  Disputas por el uso indebido de cocheras o vehículos mal estacionados que bloquean el acceso de otros vecinos son bastante comunes.
  
  6. Olores desagradables
  El manejo inadecuado de la basura, la eliminación inapropiada de su basura, la acumulación de desechos o la cocción de alimentos con olores fuertes pueden generar molestias en los pasillos o áreas comunes, afectando la convivencia.
  
  7. Modificaciones no autorizadas
  Algunos vecinos realizan modificaciones o remodelaciones dentro de sus departamentos sin avisar a la administración o cumplir con las normas del reglamento interno, lo que puede afectar la estructura del edificio o generar ruido.
  
  8. Problemas con el personal del edificio
  A veces, surgen conflictos cuando los vecinos no están satisfechos con el servicio del personal de limpieza o portería, lo que genera quejas o malentendidos con la administración.
  
  >>En Casa Grande – administración de edificios estamos comprometidos a brindar información contribuyendo a que los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.`,
      image: "/e74.webp",
      author: "Casa Grande",
      date: "07/09/2019",
      category: "Administracion de Edificios",
      tags: ["Administracion de Edificios", "Convivencia Edificios"]
    },
    {
      id: "77",
      title: "El Portero",
      slug: "el-portero",
      excerpt: "El portero del edificio es la persona que tiene a su cargo el control de acceso, la custodia y llaves.",
      content: `El portero del edificio es la persona que tiene a su cargo el control de acceso, la custodia y llaves. Debe cuidar el edificio, no solamente desde el punto de vista de la estructura del inmueble, sino de la presencia de extraños en el mismo; es decir, alertar a los residentes de la aparición de sujetos desconocidos cuando no estén acompañados de algún propietario, a quienes podría preguntar incluso el motivo de la visita y pedirles su identificación.
  
  Entre las labores del portero es el cuidado de los bienes que forman parte del edificio; es decir, de las áreas o cosas comunes que conforman el edificio; sobre todo, el ascensor el equipo que se suele averiar con más frecuencia que otros equipos. La labor de atención al residente, la recepción de correspondencia, atención de visitas, deliverys y proveedores, la tenencia de llaves del edificio (parte de la custodia), el registro de todas las ocurrencias del edificio, son tareas y responsabilidades tácitas dentro del rango de actividades que debe realizar un portero de edificio.
  
  En Casa Grande – administración de edificios estamos comprometidos a brindar información que ayude a los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo
  
  @CasaGrande`,
      image: "/e75.webp",
      author: "Casa Grande",
      date: "03/09/2018",
      category: "Administracion de Edificios",
      tags: ["Administracion de Edificios", "Portero Edificio"]
    },
    {
      id: "78",
      title: "Una nueva cultura en la Administración de Edificios",
      slug: "nueva-cultura-administracion-edificios",
      excerpt: "La creación, implementación y promoción de una nueva cultura en la administración de edificios implica una combinación de estrategias y acciones que fomenten cambios en la mentalidad, prácticas y valores dentro de la organización.",
      content: `La creación, implementación y promoción de una nueva cultura en la administración de edificios implica una combinación de estrategias y acciones que fomenten cambios en la mentalidad, prácticas y valores dentro de la organización. 
  
  Aquí hay algunas ideas que podrían ser útiles:
  
  **Definir los Valores y Objetivos de la Nueva Cultura:**
  - Identificar y definir los valores fundamentales que se quieren promover en la administración de edificios.
  - Establecer objetivos claros que reflejen la visión y la misión de la nueva cultura.
  
  **Comunicación Clara y Constante:**
  - Comunicar de manera clara y constante los cambios culturales propuestos.
  - Utilizar diferentes canales de comunicación, como reuniones, correos electrónicos, carteles y otros medios, para garantizar que todos los miembros del equipo estén informados.
  
  **Participación Activa de los Miembros del Equipo:**
  - Fomentar la participación activa y la retroalimentación de los miembros del equipo en la definición de la nueva cultura.
  - Involucrar a los empleados en la toma de decisiones y en la implementación de cambios.
  
  **Formación y Desarrollo:**
  Definir los Valores y Objetivos de la Nueva Cultura:
    – Identificar y definir los valores fundamentales que se quieren promover en la administración de edificios.
  
   – Establecer objetivos claros que reflejen la visión y la misión de la nueva cultura.
  
  Comunicación Clara y Constante:
     – Comunicar de manera clara y constante los cambios culturales propuestos.
  
     – Utilizar diferentes canales de comunicación, como reuniones, correos electrónicos, carteles y otros medios, para garantizar que todos los miembros del equipo estén informados.
  
  Participación Activa de los Miembros del Equipo:
     – Fomentar la participación activa y la retroalimentación de los miembros del equipo en la definición de la nueva cultura.
  
     – Involucrar a los empleados en la toma de decisiones y en la implementación de cambios.
  
  Formación y Desarrollo:
     – Ofrecer programas de formación y desarrollo para que los empleados adquieran las habilidades y el conocimiento necesarios para adaptarse a la nueva cultura.
  
     – Proporcionar recursos educativos y oportunidades de aprendizaje continuo.
  
  Reconocimiento y Recompensas:
    – Implementar sistemas de reconocimiento y recompensas que refuercen los comportamientos y actitudes alineados con la nueva cultura.
  
     – Celebrar logros individuales y colectivos relacionados con la promoción de la nueva cultura.
  
  Modelo a Seguir desde la Alta Dirección:
    – Los líderes y la alta dirección deben servir como modelos a seguir, demostrando activamente los valores y comportamientos deseados.
  
     – Involucrar a la alta dirección en la implementación y promoción de la nueva cultura.
  
  Sistema de Retroalimentación:
     – Establecer un sistema de retroalimentación regular para evaluar el progreso y hacer ajustes según sea necesario.
  
     – Fomentar la apertura y la honestidad en la retroalimentación para abordar posibles desafíos o resistencias.
  
  Fomentar la Colaboración y el Trabajo en Equipo:
     – Promover un entorno de trabajo colaborativo donde los empleados se sientan valorados y apoyados.
  
     – Implementar actividades y proyectos que fomenten la colaboración entre diferentes departamentos y niveles jerárquicos.
  
  Enfoque en la Sostenibilidad y Responsabilidad Social:
     – Integrar prácticas sostenibles y responsabilidad social en la cultura de la administración de edificios.
  
    – Involucrar a la comunidad y a los ocupantes en iniciativas que promuevan el bienestar general.
  
  Evaluación Periódica y Adaptación:
      – Evaluar periódicamente el éxito de la implementación de la nueva cultura.
  
      – Estar dispuesto a realizar ajustes según la retroalimentación y las cambiantes circunstancias.
  
  En Casa Grande – administración de edificios estamos comprometidos a brindar información que ayude a los copropietarios a lograr la vida segura y armónica que anhelan y adicional lograr que su propiedad se revalore en el tiempo.
  
  @CasaGrande`,
      image: "/e76.webp",
      author: "CASA GRANDE",
      date: "20/04/2016",
      category: "Administracion de Edificios",
      tags: ["Administracion de Edificios", "administracion inmobiliaria"]
    },
    {
      id: "14",
      title: "GUÍA DE CONTRATACIÓN DE PERSONAL DE LIMPIEZA BAJO RÉGIMEN MYPE",
      slug: "contratar-limpieza-regimen-mype",
      excerpt: "Reduce costos laborales cumpliendo la ley al contratar personal de limpieza bajo el régimen MYPE. Pasos, planilla y beneficios mínimos.",
      content: `# Guía: Contratación de Personal de Limpieza (Régimen MYPE)
  
  ## Introducción
  
  Contratar personal propio de limpieza puede ahorrar hasta un 25% frente a servicios de outsourcing. Sin embargo, es crucial respetar el régimen laboral especial para microempresas (MYPE) para evitar sanciones.
  
  ## Requisitos Clave 📜
  
  1.  **Inscripción MYPE:** El edificio (la Junta de Propietarios como empleador) debe estar inscrito como Microempresa en el Registro Nacional de la Micro y Pequeña Empresa (REMYPE).
  2.  **Planilla Electrónica:** Registrar al trabajador en la Planilla Electrónica de SUNAT (T-Registro y PLAME).
  3.  **Beneficios Mínimos MYPE:**
      - Seguro ESSALUD (9% a cargo del empleador).
      - Gratificación: 50% del sueldo (Julio y Diciembre).
      - Vacaciones: 15 días calendario remunerados por año.
      - CTS: No corresponde en régimen Microempresa.
      - Asignación Familiar: Si corresponde.
  
  ## Costos Estimados (Referencia 2025) 🧾
  
  - Sueldo Básico (mínimo): S/ 1,130.00
  - ESSALUD (9%): S/ 101.70
  - Gratificación Mensual (1/6 de 50% sueldo): S/ 94.17
  - **Costo Total Mensual Aproximado por Trabajador:** S/ 1,325.87 (Sin incluir vacaciones truncas)
  - Uniforme y Equipos de Protección Personal (EPP): ~ S/ 300 anuales.
  
  ## Ventajas de Contratar Personal Propio ✅
  
  - **Control Directo:** Supervisión inmediata sobre la calidad del servicio.
  - **Flexibilidad:** Adaptación de turnos según necesidades (eventos, emergencias).
  - **Ahorro Potencial:** Puede generar ahorros que refuercen el fondo de reserva a largo plazo.
  
  ## Riesgos del Incumplimiento ⚠️
  
  - **Multas SUNAFIL:** Sanciones significativas (hasta 50 UIT) por no registrar en planilla o no pagar beneficios.
  - **Denuncias Laborales:** Reclamos por despido arbitrario, pago de beneficios no otorgados, etc.
  
  ---
  
  **¿Necesitas asesoría laboral para tu edificio?** En Casa Grande gestionamos tu planilla MYPE, aseguramos el cumplimiento legal y evitamos costosas sanciones, garantizando un servicio de limpieza impecable y conforme a ley.`,
      image: "/e77.webp",
      author: "Casa Grande",
      date: "01/03/2025",
      category: "Legal",
      tags: ["Derecho Laboral", "MYPE", "Limpieza", "Planilla"],
    },
  ];
  
  // ─────────────────────────────────────────────────────────────
//  lib/blogPosts.ts  ·  función corregida
// ─────────────────────────────────────────────────────────────

export async function getCombinedBlogPosts(): Promise<BlogPost[]> {
  let supabasePosts: BlogPost[] = [];

  const { data, error } = await supabase
    .from("articulos")
    .select(
      `
      id,
      title,
      slug,
      excerpt,
      content,
      cover_image,
      author_name,
      created_at,
      tags,
      category
    `
    ) // ← sin alias porque category ahora es text
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase error:", error.message ?? error);
  } else if (data) {
    supabasePosts = data.map((p: any): BlogPost => ({
      id: String(p.id),
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt ?? "",
      content: p.content ?? "",
      image: p.cover_image ?? null,
      author: p.author_name ?? "Casa Grande",
      date: new Date(p.created_at).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      category: p.category ?? "General",
      tags: p.tags ?? [],
      created_at: p.created_at,
    }));
  }

  /* Dinámicos primero, luego estáticos  */
  return [...supabasePosts, ...staticBlogPosts];
}