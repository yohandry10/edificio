"use client"

import { useState, useEffect } from "react"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { getCombinedBlogPosts, type BlogPost } from "@/lib/blogPosts"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [allPosts, setAllPosts] = useState<BlogPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const postsPerPage = 9

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      try {
        const posts = await getCombinedBlogPosts()
        setAllPosts(posts)
        setFilteredPosts(posts)
      } catch (error) {
        console.error("Error fetching combined blog posts:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchPosts()
  }, [])

  useEffect(() => {
    let result = allPosts

    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase()
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerSearchTerm) ||
          (post.excerpt && post.excerpt.toLowerCase().includes(lowerSearchTerm)) ||
          post.content.toLowerCase().includes(lowerSearchTerm)
      )
    }

    if (selectedCategory) {
      result = result.filter((post) => post.category === selectedCategory)
    }

    setFilteredPosts(result)
    setCurrentPage(1)
  }, [searchTerm, selectedCategory, allPosts])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  return (
    <div className="pt-16">
      <section className="bg-green-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              NUESTRO BLOG
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-700 mb-8"
            >
              Descubre artículos informativos, consejos prácticos y muchos temas relevantes sobre Propiedad Horizontal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative max-w-xl mx-auto"
            >
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar artículos..."
                className="pl-10 py-6 pr-4 w-full rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="col-span-full text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Cargando artículos...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No se encontraron artículos</h3>
                  <p className="text-gray-500">Intenta con otra búsqueda o categoría.</p>
                </div>
              ) : (
                currentPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-contain bg-white"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <Badge className="bg-green-600 hover:bg-green-700">{post.category}</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt || ""}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                      >
                        Leer más <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          )}

          {!isLoading && totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 disabled:opacity-50 hover:bg-gray-200 transition-colors flex items-center"
              >
                <ChevronLeft className="h-4 w-4 mr-1" /> Anterior
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(pageNum => pageNum === 1 || pageNum === totalPages || Math.abs(pageNum - currentPage) <= 1)
                .map((pageNum, index, array) => {
                  if (index > 0 && pageNum - array[index - 1] > 1) {
                    return (
                      <React.Fragment key={`ellipsis-${pageNum}`}>
                        <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-500 cursor-default">...</button>
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`px-4 py-2 rounded-md ${currentPage === pageNum ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"} transition-colors`}
                        >
                          {pageNum}
                        </button>
                      </React.Fragment>
                    )
                  }
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-4 py-2 rounded-md ${currentPage === pageNum ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"} transition-colors`}
                    >
                      {pageNum}
                    </button>
                  )
                })}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 disabled:opacity-50 hover:bg-gray-200 transition-colors flex items-center"
              >
                Siguiente <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}