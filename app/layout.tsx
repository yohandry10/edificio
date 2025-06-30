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
  keywords: "administración edificios, condominios, Casa Grande, Lima, gestión edificios, mantenimiento edificios",
  authors: [{ name: "Casa Grande" }],
  creator: "Casa Grande",
  publisher: "Casa Grande",
  metadataBase: new URL('https://www.administracionedificiosperu.com'),
  alternates: {
    canonical: 'https://www.administracionedificiosperu.com',
  },
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
  openGraph: {
    title: "Casa Grande | Administración de Edificios",
    description: "Somos CASA GRANDE, nuestro propósito es garantizar el bienestar y seguridad en la convivencia de los residentes.",
    url: "https://www.administracionedificiosperu.com",
    siteName: "Casa Grande",
    images: [
      {
        url: "https://www.administracionedificiosperu.com/casagrande.webp",
        width: 1200,
        height: 630,
        alt: "Casa Grande - Administración de Edificios"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Grande | Administración de Edificios",
    description: "Somos CASA GRANDE, nuestro propósito es garantizar el bienestar y seguridad en la convivencia de los residentes.",
    images: ["https://www.administracionedificiosperu.com/casagrande.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "YHoLH3eECreW476mZm_K-q7Dy8o1pEmWZzT7nJd7NME",
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

