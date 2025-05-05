"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { DynamicArticle, getDynamicArticles } from '@/lib/articles'

export default function DynamicArticles() {
  const [articles, setArticles] = useState<DynamicArticle[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadArticles() {
      const data = await getDynamicArticles()
      setArticles(data)
      setLoading(false)
    }
    loadArticles()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md animate-pulse">
            <div className="w-full aspect-[4/3] bg-gray-200" />
            <div className="p-6">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
              <div className="h-4 bg-gray-200 rounded w-full mb-2" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (articles.length === 0) {
    return null
  }

  return (
    <>
      {articles.map((article, index) => (
        <motion.div
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl">
            <Image
              src={article.cover_image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-contain bg-white"
            />
            <div className="absolute top-4 left-4 z-10">
              <Badge className="bg-green-600 hover:bg-green-700">Nuevo</Badge>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
            <Link
              href={`/blog/${article.slug}`}
              className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
            >
              Leer más
            </Link>
          </div>
        </motion.div>
      ))}
    </>
  )
} 