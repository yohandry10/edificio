"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Building, Target, Shield, Heart, Award } from "lucide-react"
import { useRef } from "react"

/* Animación genérica para las tarjetas */
const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
}

export default function QuienesSomos() {
  const heroRef = useRef(null)

  /*  Sutil parallax de la imagen  */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  /* ----------  RETURN  ---------- */
  return (
    <main className="overflow-x-hidden">
      {/* ---------- HERO ---------- */}
      <section
        ref={heroRef}
        className="relative bg-white pt-20 sm:pt-24 md:pt-32 pb-10 lg:pb-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:items-center gap-10">
            {/* Imagen */}
            <motion.div
              className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px] rounded-xl overflow-hidden shadow-xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div style={{ y: imageY }} className="relative w-full h-full">
                <Image
                  src="/gestion.jpg"
                  alt="Nuestro equipo colaborando"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         33vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Texto */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1 className="font-extrabold leading-tight text-gray-900 text-3xl sm:text-4xl md:text-5xl">
                Somos <span className="text-green-600">Casa&nbsp;Grande</span>,
                <span className="block md:inline">
                  {" "}
                  expertos en crear comunidades.
                </span>
              </h1>

              <p className="mt-4 text-gray-700 text-base sm:text-lg">
                En <span className="font-semibold text-green-600">CASA&nbsp;GRANDE</span> nos enorgullece administrar
                edificios con un enfoque único en la creación de comunidades
                armoniosas y prósperas. Destacamos por nuestra experiencia,
                profesionalismo y compromiso.
              </p>

              <p className="mt-4 text-gray-700 text-base sm:text-lg">
                Somos un equipo capacitado y enfocado en brindar soluciones
                integrales. Nos esforzamos por garantizar la satisfacción de
                nuestros clientes y residentes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- MISIÓN & VISIÓN ---------- */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Nuestra Misión
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Brindar un servicio integral de administración basado en la
                excelencia, transparencia y compromiso. Garantizamos un entorno
                seguro, armonioso y eficiente mediante una gestión profesional y
                ética.
              </p>
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Nuestra Visión
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Ser líderes reconocidos por calidad, innovación y cercanía.
                Queremos ser el aliado estratégico de las comunidades, con una
                gestión confiable y proactiva que fomente el desarrollo
                sostenible y el bienestar de todos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- VALORES ---------- */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-600">
              Integridad, compromiso y excelencia guían cada una de nuestras
              acciones.
            </p>
          </motion.div>

          <div className="space-y-8 sm:space-y-12">
            {/* Integridad */}
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Integridad
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Actuamos con honestidad, transparencia y ética, generando
                  confianza y credibilidad.
                </p>
              </div>
            </motion.div>

            {/* Compromiso */}
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Compromiso
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Nos dedicamos plenamente a satisfacer las necesidades de
                  nuestros clientes, asumiendo la responsabilidad de brindar un
                  servicio de excelencia.
                </p>
              </div>
            </motion.div>

            {/* Excelencia */}
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Excelencia
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Buscamos la mejora continua y la innovación para ofrecer
                  soluciones de alta calidad que superen las expectativas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
