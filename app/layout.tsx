// Remove "use client"
// Remove client-side hooks and components imports
// import type React from "react";
// import { useState, useEffect } from "react";
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"
// import Preloader from "@/components/preloader"
// import { AnimatePresence } from "framer-motion" // Import AnimatePresence
// import Image from "next/image" // Import next/image
// import Link from "next/link" // Import next/link
import LayoutClientWrapper from "@/components/layout-client-wrapper" // Import the new wrapper

const inter = Inter({ subsets: ["latin"] })

// Metadata se mueve fuera o se maneja de forma diferente en app router si el layout es client component
// Por simplicidad ahora, lo comentamos o asumimos que se maneja en page.tsx o un Server Component padre.
// export const metadata: Metadata = {
//   title: "Casa Grande | Administración de Edificios",
//   description:
//     "Somos CASA GRANDE, nuestro propósito es garantizar el bienestar y seguridad en la convivencia de los residentes.",
//     generator: 'v0.dev'
// };

export const metadata: Metadata = {
  title: "Casa Grande | Administración de Edificios",
  description:
    "Somos CASA GRANDE, nuestro propósito es garantizar el bienestar y seguridad en la convivencia de los residentes.",
  icons: {
    icon: [
      { url: '/casagrande.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/casagrande.webp', sizes: '16x16', type: 'image/webp' }
    ],
    apple: [
      { url: '/casagrande.webp', sizes: '180x180', type: 'image/webp' }
    ],
    shortcut: '/casagrande.webp'
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Remove preloader state and effect
  // const [isLoading, setIsLoading] = useState(true)
  // useEffect(() => {
  //   // Simular carga - reemplazar con lógica real si es posible
  //   const timer = setTimeout(() => {
  //     setIsLoading(false)
  //   }, 2000) // Mostrar preloader por 2 segundos
  //
  //   return () => clearTimeout(timer) // Limpiar el temporizador
  // }, [])

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Use the client wrapper here */}
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </body>
    </html>
  )
}

