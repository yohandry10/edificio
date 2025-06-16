"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Globe } from "lucide-react"
import { supabase } from "@/lib/supabase"
import Confetti from 'react-confetti'

// Tipo para las FAQ
interface FAQ {
  id: string
  question: string
  answer: string
  order: number
}

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  })
  // Estado para las FAQs dinámicas
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [loadingFaqs, setLoadingFaqs] = useState(true)

  // Cargar las FAQs desde Supabase al cargar la página
  useEffect(() => {
    const fetchFAQs = async () => {
      setLoadingFaqs(true)
      const { data, error } = await supabase
        .from("faqs")
        .select("*")
        .order("order", { ascending: true })

      if (error) {
        console.error("Error cargando FAQs:", error)
        // Si hay error, usar las preguntas por defecto
        setFaqs(defaultFaqs)
      } else {
        setFaqs(data || defaultFaqs)
      }
      setLoadingFaqs(false)
    }

    fetchFAQs()
  }, [])

  // Configurar tamaño de ventana para el confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Configurar tamaño inicial
    handleResize()

    // Escuchar cambios de tamaño
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // FAQs por defecto en caso de error o mientras se cargan
  const defaultFaqs: FAQ[] = [
    {
      id: "1",
      question: "¿Qué servicios de administración de edificios ofrecen?",
      answer: "Ofrecemos servicios integrales de administración de edificios que incluyen gestión financiera, mantenimiento de áreas comunes, supervisión de personal, asesoría legal y contable, y atención a propietarios y residentes.",
      order: 1
    },
    {
      id: "2",
      question: "¿Cómo puedo solicitar una cotización para mi edificio?",
      answer: "Puede solicitar una cotización completando el formulario de contacto en nuestra página web, llamándonos al teléfono indicado o enviándonos un correo electrónico. Nos pondremos en contacto con usted a la brevedad para coordinar una visita a su edificio y elaborar una propuesta personalizada.",
      order: 2
    },
    {
      id: "3",
      question: "¿Cuánto tiempo toma implementar sus servicios en un edificio?",
      answer: "El tiempo de implementación varía según las características y necesidades específicas de cada edificio, pero generalmente podemos iniciar nuestros servicios en un plazo de 1 a 2 semanas después de la firma del contrato.",
      order: 3
    },
    {
      id: "4",
      question: "¿Qué hace que Casa Grande sea diferente de otras empresas de administración?",
      answer: "Nos distinguimos por nuestra experiencia de más de 14 años en el sector, nuestro enfoque personalizado, la transparencia en nuestra gestión, y nuestro compromiso con la excelencia en el servicio. Además, contamos con un equipo de profesionales altamente capacitados y especializados en administración de edificios.",
      order: 4
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [submitError, setSubmitError] = useState("")
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('🎯 Frontend: Iniciando envío directo con EmailJS');
    console.log('📋 Frontend: Datos del formulario:', formData);
    
    setIsSubmitting(true)
    setSubmitMessage("")
    setSubmitError("")
    
    try {
      console.log('🚀 Frontend: Enviando directo a EmailJS API');
      
      const templateParams = {
        from_name: `${formData.nombre} ${formData.apellido}`,
        reply_to: formData.email,
        message: formData.mensaje,
        to_email: 'a_santacruz@administracionedificiosperu.com'
      };
      
      console.log('📧 Frontend: Template params:', templateParams);
      
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_4aqwsqn',
          template_id: 'template_pgyoqbh',
          user_id: 's_a_4T58nr6PSUWfW',
          template_params: templateParams
        })
      });

      console.log('📡 Frontend: Response de EmailJS, status:', response.status);

      if (response.ok) {
        console.log('✅ Frontend: Correo enviado exitosamente!');
        setSubmitMessage('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.')
        setShowConfetti(true)
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          mensaje: "",
        })
        
        // Ocultar confetti después de 5 segundos
        setTimeout(() => {
          setShowConfetti(false)
        }, 5000)
      } else {
        const errorText = await response.text();
        console.log('❌ Frontend: Error de EmailJS:', errorText);
        setSubmitError('Error al enviar el mensaje. Por favor, intenta nuevamente.')
      }
    } catch (error) {
      console.error('❌ Frontend: Error de conexión:', error);
      setSubmitError('Error de conexión. Por favor, intenta nuevamente.')
    } finally {
      console.log('🏁 Frontend: Proceso terminado');
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-16">
      {/* Confetti de celebración */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={300}
          gravity={0.1}
          colors={['#16a34a', '#22c55e', '#4ade80', '#86efac', '#bbf7d0', '#f0fdf4']}
        />
      )}
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
        <Image 
          src="/edi.jpg" 
          alt="Edificio moderno administrado por Casa Grande" 
          fill 
          className="object-cover"
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              CONTÁCTANOS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4"
            >
              Estamos aquí para ayudarte con la administración de tu edificio
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.030910220934!2d-77.03775268518687!3d-12.109007991419746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8f4a2425209%3A0x75a4b6a0a7b0e9d1!2sAv.%20Dos%20de%20Mayo%20516%2C%20Miraflores%2015074%2C%20Peru!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Casa Grande"
              ></iframe>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Información de Contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0 mr-4">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Dirección:</h3>
                    <p className="text-gray-700">Av. Dos de Mayo 516, Ofic. 201, Miraflores</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0 mr-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Teléfono:</h3>
                    <p className="text-gray-700"> 01 739 7131</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0 mr-4">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Correo electrónico:</h3>
                    <p className="text-gray-700">a_santacruz@administracionedificosperu.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0 mr-4">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Web:</h3>
                    <p className="text-gray-700">administracionedificosperu.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Envíanos un mensaje</h2>
              <p className="text-gray-700">Completa el formulario y nos pondremos en contacto contigo a la brevedad.</p>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              {/* Mensajes de éxito y error */}
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <p className="text-sm">{submitMessage}</p>
                </div>
              )}
              
              {submitError && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <p className="text-sm">{submitError}</p>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre *
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-1">
                    Apellido *
                  </label>
                  <Input
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Comentario o mensaje *
                </label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full"
                />
              </div>

              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="bg-green-600 hover:bg-green-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando mensaje..." : "Enviar Mensaje"}
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de administración de edificios.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {loadingFaqs ? (
              <p className="text-center text-gray-500">Cargando preguntas frecuentes...</p>
            ) : (
              <div className="space-y-6">
                {faqs.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                    <p className="text-gray-700">{item.answer}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
