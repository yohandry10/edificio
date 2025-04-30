"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "ADMINISTRACIÓN DE EDIFICIOS",
    description:
      "Somos ",
    descriptionHighlight: "CASA GRANDE",
    descriptionEnd: ", nuestro propósito es garantizar el bienestar y seguridad en la convivencia de los residentes.",
    cta: "Conoce más",
    ctaLink: "/quienes-somos",
    image: "/r1.jpg",
  },
  {
    id: 2,
    title: "VISITA NUESTRO BLOG",
    description:
      "Descubre artículos informativos, consejos prácticos y muchos temas relevantes sobre Propiedad Horizontal.",
    cta: "Ir al Blog",
    ctaLink: "/blog",
    image: "/r2.jpg",
  },
  {
    id: 3,
    title: "SERVICIOS PROFESIONALES",
    description: "Ofrecemos servicios especializados en administración de edificios con más de 14 años de experiencia.",
    cta: "Nuestros Servicios",
    ctaLink: "/nuestros-servicios",
    image: "/r3.jpg",
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const pauseAutoPlay = () => setIsAutoPlaying(false)
  const resumeAutoPlay = () => setIsAutoPlaying(true)

  return (
    <div
      className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden rounded-xl shadow-2xl"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
          <Image
            src={slides[current].image || "/placeholder.svg"}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                >
                  {slides[current].title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-white/90 mb-6"
                >
                  {slides[current].description}
                  <span className="text-green-400">{slides[current].descriptionHighlight}</span>
                  {slides[current].descriptionEnd}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    <Link href={slides[current].ctaLink}>{slides[current].cta}</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === current ? "bg-white" : "bg-white/40"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
