"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Building, Users, Shield, Target, Award, CheckCircle, Heart } from "lucide-react"
import { useRef } from "react"

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

export default function QuienesSomos() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Nuevo Layout y Estilo */}
      <section ref={heroRef} className="relative bg-white pt-40 sm:pt-28 md:pt-32 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Columna de Texto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center md:text-left mt-0"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Somos <span className="text-green-600">Casa Grande</span>,
                <br className="hidden sm:block" />
                expertos en crear comunidades.
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                En <span className="text-green-600">CASA GRANDE</span>, nos enorgullecemos de ser una empresa dedicada a la administración de edificios con un
                enfoque único en la creación de comunidades armoniosas y prósperas. Nos destacamos por nuestra
                experiencia, profesionalismo y compromiso.
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                Somos un equipo capacitado y enfocado en brindar soluciones integrales, nos esforzamos por garantizar la
                satisfacción de nuestros clientes y residentes.
              </p>
            </motion.div>

            {/* Columna de Imagen con Parallax Sutil */}
            <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] mt-8 md:mt-0">
              <motion.div
                className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div style={{ y: imageY }} className="relative w-full h-full">
                  <Image
                    src="/gestion.jpg"
                    alt="Equipo Casa Grande colaborando"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Misión */}
            <motion.div
              className="bg-white p-6 sm:p-8 rounded-xl shadow-xl flex flex-col items-center text-center h-full"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="bg-green-600 text-white p-4 sm:p-5 rounded-full shadow-lg mb-6 inline-flex">
                <Target className="h-8 w-8 sm:h-12 sm:w-12" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Brindar un servicio integral de administración basado en la excelencia, transparencia y compromiso.
                  Nos dedicamos a garantizar un entorno seguro, armonioso y eficiente, mediante una gestión profesional,
                  ética y orientada al bienestar de propietarios y residentes.
                </p>
              </div>
            </motion.div>

            {/* Visión */}
            <motion.div
              className="bg-white p-6 sm:p-8 rounded-xl shadow-xl flex flex-col items-center text-center h-full"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="bg-emerald-600 text-white p-4 sm:p-5 rounded-full shadow-lg mb-6 inline-flex">
                <Building className="h-8 w-8 sm:h-12 sm:w-12" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Ser líderes reconocidos por nuestra calidad, innovación y cercanía. Buscamos ser el aliado estratégico
                  de las comunidades residenciales, brindando una gestión confiable, proactiva y personalizada que
                  contribuya al desarrollo sostenible y al bienestar de todos.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores Fundamentales
            </h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600">
              Integridad, compromiso y excelencia guían cada una de nuestras acciones.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
            {/* Valor 1: Integridad */}
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8"
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true, amount: 0.4 }}
               variants={cardVariants}
            >
              <div className="bg-green-100 text-green-700 p-4 rounded-full flex-shrink-0">
                <Shield size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Integridad</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Actuamos con honestidad, transparencia y ética en todas nuestras interacciones, generando confianza y
                  credibilidad.
                </p>
              </div>
            </motion.div>

            {/* Valor 2: Compromiso */}
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8"
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true, amount: 0.4 }}
               variants={cardVariants}
            >
              <div className="bg-green-100 text-green-700 p-4 rounded-full flex-shrink-0">
                <Heart size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Compromiso</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Nos dedicamos plenamente a satisfacer las necesidades de nuestros clientes, asumiendo la responsabilidad
                  de brindar un servicio de excelencia y cumplir con nuestras promesas.
                </p>
              </div>
            </motion.div>

            {/* Valor 3: Excelencia */}
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8"
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true, amount: 0.4 }}
               variants={cardVariants}
            >
              <div className="bg-green-100 text-green-700 p-4 rounded-full flex-shrink-0">
                <Award size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Excelencia</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Buscamos constantemente la mejora continua y la innovación en nuestros procesos y servicios, para
                  ofrecer soluciones de alta calidad que superen las expectativas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section ya estaba eliminada */}
    </div>
  )
}
