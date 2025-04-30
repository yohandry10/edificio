"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Wrench, FileText, Award, Clock, Heart, ArrowRight } from "lucide-react"
import HeroSlider from "@/components/hero-slider"

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  return (
    <div className="pt-16">
      {/* Hero Section with Slider */}
      <section className="relative overflow-hidden" ref={targetRef}>
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-green-50/80 to-white/90 z-10" />
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Edificios modernos"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
          <HeroSlider />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="w-full md:w-[40%]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/trato.jpg"
                  alt="Personal de Casa Grande brindando atención"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <div className="w-full md:w-[60%]">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                  CON <span className="text-green-600">CASA GRANDE</span> TODO ES BENEFICIO PARA LA JUNTA DE PROPIETARIOS
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6">
                  Te ayudaremos a entender mejor tus derechos y obligaciones como Copropietario. Nos encargamos de la
                  planificación, mantenimiento, presupuesto y resolución de conflictos, estas entre otras, son las
                  tareas que asumimos para garantizar un ambiente armonioso y satisfactorio en los vecinos.
                </p>
                <Button asChild className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                  <Link href="/nuestros-servicios" className="flex items-center justify-center">
                    Conoce nuestros servicios <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Gestión de Personal</h3>
                  <p className="text-gray-600">
                    Nos hacemos cargo de la gestión integral de recursos humanos en su edificio, seleccionando y
                    capacitando un equipo altamente calificado y comprometido. Nuestro personal especializado se enfoca
                    en atender las necesidades de los residentes con profesionalismo y dedicación constante.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Wrench className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Gestión de Mantenimiento</h3>
                  <p className="text-gray-600">
                    Nos responsabilizamos de la planificación y ejecución eficiente del mantenimiento preventivo y
                    correctivo de bienes y equipos en su edificio. Nuestro objetivo es asegurar la óptima conservación
                    de las instalaciones para garantizar su durabilidad y funcionamiento óptimo.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Asesoría Contable y Legal</h3>
                  <p className="text-gray-600">
                    Ofrecemos servicios de asesoría contable y legal especializados para brindarle soporte experto en
                    cuestiones financieras y legales. Nuestro equipo profesional está preparado para brindarle
                    orientación y soluciones adaptadas a sus necesidades, garantizando transparencia y cumplimiento en
                    cada aspecto legal y contable.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-[60%]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">¿QUÉ TENEMOS PARA OFRECER?</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                      <Clock className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Experiencia</h3>
                    <p className="text-gray-600">
                      14 años de trayectoria nos permite ofrecer soluciones efectivas y estratégicas para mantener la
                      excelencia en la gestión, operación y mantenimiento de tu edificio.
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                      <Heart className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Atención Personalizada</h3>
                    <p className="text-gray-600">
                      Priorizamos la atención personalizada a cada uno de nuestros clientes. Estamos comprometidos en
                      comprender tus necesidades específicas y ofrecer soluciones a medida.
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                      <Award className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Competencias</h3>
                    <p className="text-gray-600">
                      Nuestro vasto conocimiento del sector inmobiliario y la normativa vigente nos permite brindar un
                      servicio de gestión de administración de edificios sólido y confiable.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="w-full md:w-[40%]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/edi2.jpg"
                  alt="Edificio moderno administrado por Casa Grande"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Appearances */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">HEMOS ESTADO EN:</h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 mb-8">
              Nuestra experiencia y conocimiento en el sector de administración de edificios ha sido reconocida por
              importantes medios de comunicación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg shadow-lg bg-white flex flex-col"
            >
              <div className="p-6 pb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">ENTREVISTA A CASA GRANDE POR DIARIO GESTIÓN</h3>
              </div>
              <div className="relative w-full px-6">
                <Image
                  src="/diario1.webp"
                  alt="Entrevista Casa Grande en Diario Gestión"
                  width={500}
                  height={300}
                  style={{ width: '100%', height: 'auto' }}
                  className="rounded"
                />
              </div>
              <div className="p-6 pt-4 flex flex-col flex-grow">
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  Nuestro equipo compartió su visión sobre el futuro de la administración de edificios y las tendencias
                  del sector inmobiliario.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg shadow-lg bg-white flex flex-col"
            >
              <div className="p-6 pb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">ENTREVISTA A CASA GRANDE POR SEMANA ECONÓMICA</h3>
              </div>
              <div className="relative w-full px-6">
                <Image
                  src="/diario2.webp"
                  alt="Entrevista Casa Grande en Semana Económica"
                  width={500}
                  height={300}
                  style={{ width: '100%', height: 'auto' }}
                  className="rounded"
                />
              </div>
              <div className="p-6 pt-4 flex flex-col flex-grow">
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  Análisis de los desafíos actuales en la gestión de propiedades y cómo Casa Grande está innovando en el
                  sector.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Urbania - Letras y espacio MUCHO más grandes */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 px-6 pt-6">ENTREVISTAS A CASA GRANDE POR URBANIA – REVISTA DE «EL COMERCIO»</h3>
              <div className="space-y-10 flex-grow px-6">
                 <Link href="https://urbania.pe/blog/tag/cuota-de-mantenimiento/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                   <ArrowRight className="h-6 w-6 mr-3 text-green-500 flex-shrink-0" />
                   <span className="hover:underline text-2xl">Para qué sirve la cuota de Mantenimiento</span>
                 </Link>
                 <Link href="https://urbania.pe/blog/asesoria-inmobiliaria/vivir-en-edificio-con-mascota/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                    <ArrowRight className="h-6 w-6 mr-3 text-green-500 flex-shrink-0" />
                    <span className="hover:underline text-2xl">Cómo vivir en un Dpto. con tu Mascota</span>
                 </Link>
                 <Link href="https://urbania.pe/blog/asesoria-inmobiliaria/manten-punto-tu-edificio/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                    <ArrowRight className="h-6 w-6 mr-3 text-green-500 flex-shrink-0" />
                    <span className="hover:underline text-2xl">Mantén a punto tu Edificio</span>
                 </Link>
                 <Link href="https://urbania.pe/blog/asesoria-inmobiliaria/descubre-cuanto-debes-pagar-por-la-cuota-de-mantenimiento/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                    <ArrowRight className="h-6 w-6 mr-3 text-green-500 flex-shrink-0" />
                    <span className="hover:underline text-2xl">Cuánto debes pagar por la Cuota de Mantenimiento</span>
                 </Link>
                 <Link href="https://urbania.pe/blog/asesoria-inmobiliaria/empresas-administradoras-de-edificios/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                    <ArrowRight className="h-6 w-6 mr-3 text-green-500 flex-shrink-0" />
                    <span className="hover:underline text-2xl">El Rol de las Empresas Inmobiliarias</span>
                 </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-[40%]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/blog1.webp"
                  alt="Acceso al blog de Casa Grande"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <div className="w-full md:w-[60%]">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">ARTÍCULOS DESTACADOS</h2>
                <p className="text-gray-600 mb-6">
                  Visita nuestro BLOG y descubre artículos informativos, consejos prácticos y muchos temas relevantes
                  sobre Propiedad Horizontal.
                </p>

                <div className="space-y-4 mt-8">
                  {[
                    "Funciones del Presidente de la Junta de Propietarios",
                    "Vicios ocultos en la construcción: ¿Qué son y cómo reclamar?",
                    "¿Qué hacer cuando los vecinos no se ponen de acuerdo en usar el ascensor para mudanzas?",
                    "Derechos laborales del portero en un edificio",
                  ].map((title, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="bg-green-100 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-green-600" />
                      </div>
                      <p className="font-medium text-gray-800">{title}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    <Link href="/blog" className="flex items-center">
                      Ver todos los artículos <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-[60%]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                  ¿Necesitas administración profesional para tu edificio?
                </h2>
                <p className="text-base sm:text-lg text-green-50 mb-6 md:mb-8">
                  Contáctanos hoy mismo y descubre cómo podemos ayudarte a mejorar la gestión de tu propiedad. Nuestro
                  equipo de expertos está listo para brindarte la mejor asesoría.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="secondary" className="font-medium w-full sm:w-auto">
                    <Link href="/contacto">Solicitar Cotización</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto"
                  >
                    <Link href="/nuestros-servicios">Conocer Servicios</Link>
                  </Button>
                </div>
              </motion.div>
            </div>

            <div className="w-full md:w-[40%]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/dis.webp"
                  alt="Contacta con Casa Grande para administración profesional"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
