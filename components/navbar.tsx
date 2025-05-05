"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X, Search, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import type { Session } from "@supabase/supabase-js"

const navItems = [
  { name: "INICIO", path: "/" },
  { name: "QUIENES SOMOS", path: "/quienes-somos" },
  { name: "NUESTROS SERVICIOS", path: "/nuestros-servicios" },
  { name: "BLOG", path: "/blog" },
  { name: "CONTACTO", path: "/contacto" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [session, setSession] = useState<Session | null>(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session))
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => setSession(session))
    return () => listener?.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [showDropdown])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setSession(null)
    setShowDropdown(false)
    router.push("/")
    router.refresh()
  }

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white/50 backdrop-blur-sm"
    )}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-50">
            <div className="flex items-center gap-2">
              <Image
                src="/casagrande.webp"
                alt="Casa Grande Logo"
                width={70}
                height={70}
                className="h-16 w-auto transition-transform hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors relative group",
                  pathname === item.path ? "text-green-600" : "text-gray-700 hover:text-green-600",
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
            {session && (
              <div className="relative ml-4" ref={dropdownRef}>
                <button
                  className="flex items-center gap-2 px-3 py-2 rounded hover:bg-green-50 transition-colors border border-green-200"
                  onClick={() => setShowDropdown((v) => !v)}
                >
                  <User className="h-5 w-5 text-green-700" />
                  <span className="font-semibold text-green-700">Admin</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded shadow-lg z-50">
                    <Link
                      href="/admin/dashboard"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                      onClick={() => setShowDropdown(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Cerrar sesión
                    </button>
                  </div>
                )}
              </div>
            )}
          </nav>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden relative z-50" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
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
                        : "text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md",
                  )}
                >
                  {item.name}
                </Link>
              ))}
              {session && (
                <div className="relative ml-4" ref={dropdownRef}>
                  <button
                    className="flex items-center gap-2 px-3 py-2 rounded hover:bg-green-50 transition-colors border border-green-200"
                    onClick={() => setShowDropdown((v) => !v)}
                  >
                    <User className="h-5 w-5 text-green-700" />
                    <span className="font-semibold text-green-700">Admin</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded shadow-lg z-50">
                      <Link
                        href="/admin/dashboard"
                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                        onClick={() => setShowDropdown(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                      >
                        Cerrar sesión
                      </button>
                    </div>
                  )}
                </div>
              )}
              </div>
              <div className="flex items-center py-6 px-4 mt-auto">
                <div className="relative w-full max-w-sm mx-auto">
                  <input
                    type="text"
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
