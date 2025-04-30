"use client" // Necesario para useState y useEffect

import type React from "react"
import { useState, useEffect } from "react" // Importar hooks
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"
import { AnimatePresence } from "framer-motion" // Importar AnimatePresence

const inter = Inter({ subsets: ["latin"] })

// Metadata se mueve fuera o se maneja de forma diferente en app router si el layout es client component
// Por simplicidad ahora, lo comentamos o asumimos que se maneja en page.tsx o un Server Component padre.
// export const metadata: Metadata = {
//   title: "Casa Grande | Administración de Edificios",
//   description:
//     "Somos CASA GRANDE, nuestro propósito es garantizar el bienestar y seguridad en la convivencia de los residentes.",
//     generator: 'v0.dev'
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carga - reemplazar con lógica real si es posible
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Mostrar preloader por 2 segundos

    return () => clearTimeout(timer) // Limpiar el temporizador
  }, [])

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AnimatePresence>
            {isLoading && <Preloader />} // El preloader sigue siendo condicional
          </AnimatePresence>

          {/* Renderizar siempre la estructura principal */}
          {/* Controlar visibilidad con opacidad y transición */}
          <div
            className={`flex min-h-screen flex-col transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          >
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

