'use client';

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Preloader from '@/components/preloader';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function LayoutClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Preloader duration

    return () => clearTimeout(timer);
  }, []);

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