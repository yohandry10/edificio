"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Globe } from "lucide-react"

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert("Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.")
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      mensaje: "",
    })
  }

  return (
    <div className="pt-16">
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
                    <p className="text-gray-700">cotizacion@administracionedificosperu.com</p>
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
                <Button type="submit" size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Enviar Mensaje
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
            <div className="space-y-6">
              {[
                {
                  question: "¿Qué servicios de administración de edificios ofrecen?",
                  answer:
                    "Ofrecemos servicios integrales de administración de edificios que incluyen gestión financiera, mantenimiento de áreas comunes, supervisión de personal, asesoría legal y contable, y atención a propietarios y residentes.",
                },
                {
                  question: "¿Cómo puedo solicitar una cotización para mi edificio?",
                  answer:
                    "Puede solicitar una cotización completando el formulario de contacto en nuestra página web, llamándonos al teléfono indicado o enviándonos un correo electrónico. Nos pondremos en contacto con usted a la brevedad para coordinar una visita a su edificio y elaborar una propuesta personalizada.",
                },
                {
                  question: "¿Cuánto tiempo toma implementar sus servicios en un edificio?",
                  answer:
                    "El tiempo de implementación varía según las características y necesidades específicas de cada edificio, pero generalmente podemos iniciar nuestros servicios en un plazo de 1 a 2 semanas después de la firma del contrato.",
                },
                {
                  question: "¿Qué hace que Casa Grande sea diferente de otras empresas de administración?",
                  answer:
                    "Nos distinguimos por nuestra experiencia de más de 14 años en el sector, nuestro enfoque personalizado, la transparencia en nuestra gestión, y nuestro compromiso con la excelencia en el servicio. Además, contamos con un equipo de profesionales altamente capacitados y especializados en administración de edificios.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
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
          </div>
        </div>
      </section>
    </div>
  )
}
