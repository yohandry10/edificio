"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X, Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "INICIO", path: "/" },
  { name: "QUIÉNES SOMOS", path: "/quienes-somos" },
  { name: "NUESTROS SERVICIOS", path: "/nuestros-servicios" },
  { name: "BLOG", path: "/blog" },
  { name: "CONTACTO", path: "/contacto" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  /* Detectar scroll para cambiar opacidad/fondo */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    /* ----------  sticky en lugar de fixed  ---------- */
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-white/60 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <Image
              src="/casagrande.webp"
              alt="Casa Grande"
              width={70}
              height={70}
              className="h-16 w-auto transition-transform hover:scale-105"
              priority
            />
          </Link>

          {/* -------- Desktop nav -------- */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors relative group",
                  pathname === item.path
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                )}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
            <Button variant="ghost" size="icon" className="ml-2">
              <Search className="h-5 w-5" />
            </Button>
          </nav>

          {/* -------- Mobile hamburger -------- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* -------- Mobile menu -------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-16 h-screen overflow-y-auto"
          >
            <nav className="container mx-auto px-4 py-8 flex flex-col h-full max-w-md">
              <div className="flex-grow flex flex-col items-center justify-center space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "w-full text-center py-4 text-xl font-semibold border-b border-gray-100 transition-colors duration-200",
                      pathname === item.path
                        ? "text-green-600 bg-green-50 rounded-md"
                        : "text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Buscador */}
              <div className="flex items-center py-6 px-4 mt-auto">
                <div className="relative w-full max-w-sm mx-auto">
                  <input
                    placeholder="Buscar..."
                    className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
