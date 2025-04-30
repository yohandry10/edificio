"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { blogPosts, type BlogPost } from "../page"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const loadPost = async () => {
      // Find the current post
      const currentPost = blogPosts.find((post) => post.slug === params.slug)

      if (!currentPost) {
        notFound()
        return
      }

      setPost(currentPost)

      // Find related posts (same category, excluding current)
      const related = blogPosts.filter(
        (p) => p.category === currentPost.category && p.id !== currentPost.id
      ).slice(0, 3)

      setRelatedPosts(related)
    }

    loadPost()
  }, [params.slug])

  if (!post) {
    return null // Loading state
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image
          src={post.image || "/placeholder.svg?height=800&width=1600"}
          alt={post.title}
          fill
          className="object-contain bg-white"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <Link
                href="/blog"
                className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Volver al blog
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </div>
                <Badge className="bg-green-600 hover:bg-green-700">{post.category}</Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full lg:w-2/3"
            >
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="prose prose-lg max-w-none">
                  {post.content.split("\n\n").map((paragraph, index) => {
                    // Check if paragraph is a heading (starts with #)
                    if (paragraph.startsWith("# ")) {
                      return (
                        <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                          {paragraph.substring(2)}
                        </h2>
                      )
                    }
                    // Check if paragraph is a subheading (starts with ##)
                    else if (paragraph.startsWith("## ")) {
                      return (
                        <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                          {paragraph.substring(3)}
                        </h3>
                      )
                    }
                    // Check if paragraph is a list item (starts with -)
                    else if (paragraph.startsWith("- ")) {
                      return (
                        <ul key={index} className="list-disc pl-6 my-4">
                          <li>{paragraph.substring(2)}</li>
                        </ul>
                      )
                    }
                    // Check if paragraph is a list item (starts with number and dot)
                    else if (/^\d+\.\s/.test(paragraph)) {
                      return (
                        <ol key={index} className="list-decimal pl-6 my-4">
                          <li>{paragraph.replace(/^\d+\.\s/, "")}</li>
                        </ol>
                      )
                    }
                    // Regular paragraph
                    else {
                      return (
                        <p key={index} className="my-4 text-gray-700">
                          {paragraph}
                        </p>
                      )
                    }
                  })}
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center flex-wrap gap-2">
                      <Tag className="h-4 w-4 text-gray-500 mr-2" />
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-gray-100">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Compartir este artículo</h4>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Compartir en Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Compartir en Twitter</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">Compartir en LinkedIn</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Compartir</span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-24">
                {/* Related Posts */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white p-6 rounded-xl shadow-md mb-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Artículos Relacionados</h3>
                  <div className="space-y-6">
                    {relatedPosts.length > 0 ? (
                      relatedPosts.map((relatedPost) => (
                        <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="block group">
                          <div className="flex gap-4">
                            <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                              <Image
                                src={relatedPost.image || "/placeholder.svg?height=100&width=100"}
                                alt={relatedPost.title}
                                fill
                                className="object-contain bg-white"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                                {relatedPost.title}
                              </h4>
                              <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="text-gray-500">No hay artículos relacionados disponibles.</p>
                    )}
                  </div>
                </motion.div>

                {/* Categories */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Categorías</h3>
                  <div className="space-y-2">
                    {Array.from(new Set(blogPosts.map((p) => p.category))).map((category) => (
                      <Link
                        key={category}
                        href={`/blog?category=${category}`}
                        className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Más Artículos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre más contenido informativo sobre administración de edificios y propiedad horizontal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 3)
              .map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg?height=400&width=600"}
                      alt="Blog post author"
                      fill
                      className="object-contain bg-white"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                    >
                      Leer más <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <Link href="/blog">Ver todos los artículos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
