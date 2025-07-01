'use client';

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Preloader from '@/components/preloader';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LayoutClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      // Solo verificar en rutas admin
      if (pathname?.startsWith('/admin') && pathname !== '/admin/login') {
        try {
          const { data: { session } } = await supabase.auth.getSession();
          
          if (!session) {
            router.push('/admin/login');
            return;
          }
          
          setIsAuthenticated(true);
        } catch (error) {
          console.error('Error checking auth:', error);
          router.push('/admin/login');
          return;
        }
      } else {
        setIsAuthenticated(true);
      }
      
      setIsLoading(false);
    };

    checkAuth();
  }, [pathname, router]);

  // Mostrar loading en rutas admin mientras verifica
  if (isLoading && pathname?.startsWith('/admin') && pathname !== '/admin/login') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Verificando acceso...</p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>

      {/* Main structure visibility controlled by opacity */}
      <div
        className={`flex min-h-screen flex-col transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Floating WhatsApp Button - Moved here */}
        <Link
          href="https://wa.me/51932400115"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-10 z-50 rounded-full shadow-lg hover:opacity-90 transition-opacity duration-300"
          aria-label="Contactar por WhatsApp"
        >
          <Image
            src="/ws.png"
            alt="WhatsApp Icon"
            width={80}
            height={80}
            className="block"
          />
        </Link>
      </div>
    </ThemeProvider>
  );
} 