import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Facebook, Instagram, Linkedin } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { supabase } from "@/lib/supabase";
import { MotionDiv, MotionArticle } from "@/components/motion-wrapper";
import { Badge } from "@/components/ui/badge";
import { BlogPost, staticBlogPosts } from "@/lib/blogPosts";

interface CombinedPost extends BlogPost {
  cover_image?: string | null;
  author_name?: string;
  created_at?: string;
}

// Pre-generar páginas solo para posts dinámicos de Supabase
export async function generateStaticParams() {
  const paths: { slug: string }[] = [];

  // Solo agregar paths de posts dinámicos de Supabase
  try {
    const { data: articles } = await supabase
      .from('articulos')
      .select('slug')
      .eq('published', true);
    
    if (articles) {
      articles.forEach((article) => {
        paths.push({ slug: article.slug });
      });
    }
  } catch (error) {
    console.error('Error fetching articles for generateStaticParams:', error);
  }

  return paths;
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log('[BlogPostPage] params:', JSON.stringify(params));
  let post: CombinedPost | null = null;

  const { data: supa, error: supaError } = await supabase
    .from("articulos")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (supaError && supaError.code !== "PGRST116") {
    console.error(`[BlogPostPage] Supabase fetch error para slug ${params.slug}:`, supaError);
  }

  if (supa) {
    let tagsArr: string[] = [];
    if (typeof supa.tags === "string") {
      try {
        tagsArr = JSON.parse(supa.tags);
      } catch {
        tagsArr = supa.tags.split(",").map((t: string) => t.trim());
      }
    } else if (Array.isArray(supa.tags)) {
      tagsArr = supa.tags;
    }
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
      category:
        typeof supa.category === "string" ? supa.category : "General",
      tags: tagsArr,
      created_at: supa.created_at,
      cover_image: supa.cover_image,
      author_name: supa.author_name,
    };
  }

  if (!post) {
    console.log(`[BlogPostPage] No se encontró post para slug: ${params.slug}`);
    notFound();
  }

  let related: CombinedPost[] = [];
  if (post && post.category) {
    const { data: relData } = await supabase
      .from("articulos")
      .select("*")
      .eq("category", post.category)
      .neq("slug", params.slug)
      .limit(3);

    if (relData) {
      related = relData.map((r: any) => ({
        id: String(r.id),
        title: r.title,
        slug: r.slug,
        excerpt: r.excerpt ?? "",
        content: r.content ?? "",
        image: r.cover_image ?? "/placeholder.svg",
        author: r.author_name ?? "Casa Grande",
        date: new Date(r.created_at).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        category: typeof r.category === "string" ? r.category : "General",
        tags: Array.isArray(r.tags) ? r.tags : [],
      }));
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <Link
                href="/blog"
                className="inline-flex items-center mb-4 text-sm"
              >
                <ArrowLeft className="mr-2 h-5 w-5" /> Volver al blog
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm opacity-90">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* MAIN */}
            <MotionArticle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full lg:w-2/3"
            >
              <article className="bg-white p-10 rounded-2xl shadow-lg prose prose-lg max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </ReactMarkdown>

                {/* TAGS & SHARE */}
                <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-6 md:mb-0">
                      {post.tags.map((tag: string) => (
                        <Badge
                          key={tag}
                          className="bg-gray-100 text-gray-800"
                        >
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Share */}
                  <div className="flex items-center space-x-4">
                    <span className="font-medium text-gray-700">Compartir:</span>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        postUrl
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="transition transform hover:scale-110"
                      aria-label="Compartir en Facebook"
                    >
                      <Facebook className="h-6 w-6 text-blue-600" />
                    </a>
                    <a
                      href={`https://www.instagram.com/?url=${encodeURIComponent(
                        postUrl
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="transition transform hover:scale-110"
                      aria-label="Compartir en Instagram"
                    >
                      <Instagram className="h-6 w-6 text-pink-500" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        postUrl
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="transition transform hover:scale-110"
                      aria-label="Compartir en LinkedIn"
                    >
                      <Linkedin className="h-6 w-6 text-blue-700" />
                    </a>
                  </div>
                </div>
              </article>
            </MotionArticle>

            {/* SIDEBAR */}
            <aside className="w-full lg:w-1/3 space-y-12">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-2xl font-semibold mb-4">
                  Artículos Relacionados
                </h3>
                {related.length > 0 ? (
                  related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="flex gap-4 mb-6 group"
                    >
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                        <Image
                          src={r.image || "/placeholder.svg"}
                          alt={r.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition">
                          {r.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {r.date}
                        </p>
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
  );
}
