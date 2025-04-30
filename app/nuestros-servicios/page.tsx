"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText, Scale, Users, Building, ClipboardCheck, Shield, ArrowRight, CheckCircle, Briefcase, Search } from "lucide-react"

// Reutilizamos variantes de animación
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

const ServiceSection = ({ icon: Icon, title, description, imageUrl, imageAlt, reverse = false }) => (
  <motion.section
    className={`py-12 sm:py-16 md:py-20 ${reverse ? 'bg-gray-50' : 'bg-white'}`}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.2 }}
    variants={cardVariants}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${reverse ? 'md:grid-flow-row-dense' : ''}`}>
        {/* Columna Imagen */}
        <div className={`relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg ${reverse ? 'md:col-start-2' : ''}`}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
        {/* Columna Texto */}
        <div className={`${reverse ? 'md:col-start-1' : ''}`}>
          <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4 sm:mb-5">
            <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  </motion.section>
)

export default function NuestrosServicios() {
  const services = [
    {
      icon: FileText,
      title: "Reglamento Interno y Manual de Convivencia",
      description:
        "Ofrecemos asesoramiento en la elaboración y actualización del Reglamento Interno y Manual de Convivencia, asegurando que se ajusten a la normativa vigente y contemplen las necesidades específicas de su edificio.",
      imageUrl: "/r1.webp",
      imageAlt: "Elaboración de reglamento interno",
    },
    {
      icon: Scale,
      title: "Cobranza a Propietarios Morosos",
      description:
        "Nos encargamos de gestionar la cobranza a propietarios morosos de manera eficiente y legal, protegiendo los intereses de la comunidad de copropietarios y garantizando el cumplimiento de las obligaciones.",
      imageUrl: "/r2.webp",
      imageAlt: "Gestión de cobranza a morosos",
    },
    {
      icon: ClipboardCheck,
      title: "Inscripción de Junta Directiva en Sunarp",
      description:
        "Brindamos asesoría en el proceso de inscripción de la Junta Directiva en Sunarp, asegurando que todos los trámites se realicen correctamente y de acuerdo con la normativa establecida.",
      imageUrl: "/r3.webp",
      imageAlt: "Trámites de inscripción en Sunarp",
    },
    {
      icon: Users,
      title: "Resolución de Conflictos entre Copropietarios",
      description:
        "Ayudamos a resolver conflictos entre copropietarios de manera pacífica y legal, buscando soluciones que beneficien a todas las partes y promuevan un ambiente de convivencia armoniosa.",
      imageUrl: "/r4.webp",
      imageAlt: "Mediación y resolución de conflictos",
    },
    {
      icon: Shield,
      title: "Cumplimiento Normativo (Ley Prop. Horizontal)",
      description:
        "Garantizamos el cumplimiento de la Ley de Propiedad Horizontal y normativas vigentes (D.L. Nº 1568), asesorando en derechos y obligaciones, y protegiendo los intereses de los copropietarios.",
      imageUrl: "/r5.webp",
      imageAlt: "Cumplimiento de la ley de propiedad horizontal",
    },
  ]

  const processSteps = [
    { icon: Search, title: "Diagnóstico", description: "Evaluamos la situación actual y necesidades específicas." },
    { icon: Briefcase, title: "Planificación", description: "Desarrollamos un plan de administración personalizado." },
    { icon: CheckCircle, title: "Implementación", description: "Ejecutamos el plan con un equipo profesional." },
    { icon: ArrowRight, title: "Seguimiento", description: "Monitoreamos y ajustamos para la mejora continua." }, // Reemplacé el texto '04' por un icono
  ]

  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Nuestros Servicios
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Soluciones integrales para la administración eficiente y armoniosa de tu edificio o condominio.
          </motion.p>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <ServiceSection
          key={service.title}
          icon={service.icon}
          title={service.title}
          description={service.description}
          imageUrl={service.imageUrl}
          imageAlt={service.imageAlt}
          reverse={index % 2 !== 0}
        />
      ))}

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Nuestro Proceso Simplificado
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
              Un enfoque claro y estructurado para garantizar resultados óptimos.
            </p>
          </motion.div>

          {/* Cuadrícula de Pasos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-4 sm:p-6 rounded-lg bg-gray-50/80 hover:bg-gray-100 transition-colors duration-200"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <step.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Final */}
          <motion.div 
            className="text-center mt-12 sm:mt-16 md:mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Button asChild size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
              <Link href="/contacto" className="flex items-center justify-center">
                Solicitar una cotización <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
