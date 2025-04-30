"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Preloader() {
  return (
        <motion.div
          initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
              <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{
          scale: [0.8, 1, 0.8],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <Image
          src="/casagrande.webp"
          alt="Cargando Casa Grande..."
          width={120}
          height={120}
          priority
        />
              </motion.div>
        </motion.div>
  )
}
