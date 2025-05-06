import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Calendar,
  User,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { supabase } from "@/lib/supabase"
import { MotionDiv, MotionArticle } from "@/components/motion-wrapper"
import { Badge } from "@/components/ui/badge"
import { BlogPost, staticBlogPosts } from "@/lib/blogPosts"

/* Tipo extendido para poder mapear campos opcionales */
interface CombinedPost extends BlogPost {
  cover_image?: string | null
  author_name?: string
  created_at?: string
}

/* ----------  SERVER COMPONENT ------------- */
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  let post: CombinedPost | null = null

  /* 1 · BUSCAR EN SUPABASE ----------------------------------- */
  const { data: supa, error } = await supabase
    .from("articulos")
    .select("*")
    .eq("slug", params.slug)
    .single()

  if (error && error.code !== "PGRST116") {
    console.error("Supabase fetch error:", error)
  }

  if (supa) {
    post = {
      id: String(supa.id),
      title: supa.title,
      slug: supa.slug,
      excerpt: supa.excerpt ?? "",
      content: supa.content ?? "",
      image: supa.cover_image ?? "/placeholder.svg",
      author: supa.author_name ?? "Casa Grande",
      date: new Date(supa.created_at).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      category: typeof supa.category === "string" ? supa.category : "General",
      tags: supa.tags ?? [],
      created_at: supa.created_at,
      cover_image: supa.cover_image,
      author_name: supa.author_name,
    }
  }

  /* 2 · FALLO -> BUSCAR EN ESTÁTICOS -------------------------- */
  if (!post) {
    post = staticBlogPosts.find((p) => p.slug === params.slug) ?? null
  }

  /* 3 · 404 SI NO EXISTE ------------------------------------- */
  if (!post) notFound()

  /* 4 · RELATED (solo de estáticos para simplicidad) ---------- */
  const related = staticBlogPosts
    .filter((p) => p.category === post!.category && p.id !== post!.id)
    .slice(0, 3)

  /* 5 · RENDER ----------------------------------------------- */
  return (
    <div className="pt-16">
      {/* HERO */}
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
            <MotionDiv
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </div>
                <Badge className="bg-green-600 hover:bg-green-700">
                  {post.category}
                </Badge>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* MAIN */}
            <MotionArticle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full lg:w-2/3"
            >
              <article className="bg-white p-8 rounded-xl shadow-md prose prose-lg max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content
                    .replace(/^\s*```md\n?/, "")
                    .replace(/\n/g, "\n")
                    .replace(/```\s*$/, "")
                  }
                </ReactMarkdown>
              </article>
            </MotionArticle>

            {/* SIDEBAR */}
            <aside className="w-full lg:w-1/3 space-y-8">
              {/* RELATED */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Artículos Relacionados
                </h3>
                {related.length ? (
                  related.map((r) => (
                    <Link
                      key={r.id}
                      href={`/blog/${r.slug}`}
                      className="flex gap-4 mb-6 group"
                    >
                      <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={r.image || "/placeholder.svg?height=100&width=100"}
                          alt={r.title}
                          fill
                          className="object-contain bg-white"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                          {r.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">{r.date}</p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-500">No hay relacionados.</p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
