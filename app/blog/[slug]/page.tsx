"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DynamicArticle, getDynamicArticles } from "@/lib/articles"
import { blogPosts, type BlogPost } from "../page"

export default function BlogPostPage() {
  const [post, setPost] = useState<BlogPost | DynamicArticle | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<(BlogPost | DynamicArticle)[]>([])
  const params = useParams()

  useEffect(() => {
    const loadPost = async () => {
      // Primero buscar en posts estáticos
      const staticPost = blogPosts.find((post) => post.slug === params.slug)
      
      if (staticPost) {
        setPost(staticPost)
        // Encontrar posts relacionados (misma categoría)
        const related = blogPosts
          .filter((p) => p.category === staticPost.category && p.id !== staticPost.id)
          .slice(0, 3)
        setRelatedPosts(related)
        return
      }

      // Si no está en posts estáticos, buscar en posts dinámicos
      const dynamicPosts = await getDynamicArticles()
      const dynamicPost = dynamicPosts.find((post) => post.slug === params.slug)

      if (!dynamicPost) {
        notFound()
        return
      }

      setPost(dynamicPost)

      // Encontrar posts relacionados (mismos tags)
      const related = dynamicPosts
        .filter((p) => 
          p.id !== dynamicPost.id && 
          p.tags.some(tag => dynamicPost.tags.includes(tag))
        )
        .slice(0, 3)

      setRelatedPosts(related)
    }

    loadPost()
  }, [params.slug])

  if (!post) {
    return null // Loading state
  }

  const isDynamicPost = 'created_at' in post

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image
          src={isDynamicPost ? post.cover_image : post.image || "/placeholder.svg?height=800&width=1600"}
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
                  {isDynamicPost ? new Date(post.created_at).toLocaleDateString() : post.date}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {isDynamicPost ? post.author_name : post.author}
                </div>
                {isDynamicPost ? (
                  post.tags.map((tag) => (
                    <Badge key={tag} className="bg-green-600 hover:bg-green-700">
                      {tag}
                    </Badge>
                  ))
                ) : (
                  <Badge className="bg-green-600 hover:bg-green-700">{post.category}</Badge>
                )}
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
                    if (paragraph.startsWith("# ")) {
                      return (
                        <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                          {paragraph.substring(2)}
                        </h2>
                      )
                    }
                    return <p key={index}>{paragraph}</p>
                  })}
                </div>

                {/* Tags */}
                {isDynamicPost && post.tags && post.tags.length > 0 && (
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
                                src={isDynamicPost ? relatedPost.cover_image : relatedPost.image || "/placeholder.svg?height=100&width=100"}
                                alt={relatedPost.title}
                                fill
                                className="object-contain bg-white"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                                {relatedPost.title}
                              </h4>
                              <p className="text-sm text-gray-500 mt-1">
                                {isDynamicPost 
                                  ? new Date(relatedPost.created_at).toLocaleDateString()
                                  : relatedPost.date
                                }
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="text-gray-500">No hay artículos relacionados disponibles.</p>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
