import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { blogPosts, type BlogPost } from "../page"
import { supabase } from "@/lib/supabase"
import { MotionDiv, MotionArticle } from "@/components/motion-wrapper"

// Define an interface combining potential fields
interface CombinedPost extends BlogPost {
  cover_image?: string | null;
  author_name?: string;
  created_at?: string;
  tags?: string[]; // Dynamic posts might have tags
  // Add other fields from Supabase if needed
}

// Convert component to async Server Component
export default async function BlogPostPage({ params }: { params: { slug: string } }) {

  let post: CombinedPost | null = null;
  let isStatic = false;

  // 1. Try fetching from Supabase
  try {
    const { data: supabasePost, error: supabaseError } = await supabase
      .from('articulos')
      .select('*, category: category(name)') // Adjust select as needed, assuming category relation
      .eq('slug', params.slug)
      .single();

    if (supabaseError && supabaseError.code !== 'PGRST116') { // PGRST116 = row not found
      console.error("Supabase fetch error:", supabaseError);
      // Optionally handle specific errors differently
    }

    if (supabasePost) {
      // Map Supabase data to CombinedPost structure
      post = {
        id: supabasePost.id, // Assuming Supabase has an id
        title: supabasePost.title,
        slug: supabasePost.slug,
        excerpt: supabasePost.excerpt || '', // Add fallback if nullable
        content: supabasePost.content,
        image: supabasePost.cover_image || "/placeholder.svg", // Map cover_image to image
        author: supabasePost.author_name || "Casa Grande", // Map author_name
        date: new Date(supabasePost.created_at).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }), // Format date
        category: typeof supabasePost.category === 'object' ? supabasePost.category?.name : supabasePost.category || "General", // Handle category relation or direct field
        tags: supabasePost.tags || [], // Use Supabase tags
        // Add original Supabase fields if needed elsewhere, e.g., for related posts logic
        created_at: supabasePost.created_at,
        cover_image: supabasePost.cover_image,
        author_name: supabasePost.author_name,
      };
    }
  } catch (error) {
    console.error("Error fetching from Supabase:", error);
    // Fallback to static posts below
  }

  // 2. If not found in Supabase, try static posts
  if (!post) {
    const staticPost = blogPosts.find((p) => p.slug === params.slug);
    if (staticPost) {
      post = staticPost;
      isStatic = true;
    }
  }

  // 3. If not found anywhere, return 404
  if (!post) {
    notFound();
  }

  // 4. (Optional) Fetch related posts (simplified example)
  // This logic could be more sophisticated (fetch from Supabase based on tags/category)
  const relatedPosts: CombinedPost[] = blogPosts
    .filter((p) => p.category === post?.category && p.id !== post?.id)
    .slice(0, 3);

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
                {post.tags && post.tags.length > 0 ? (
                  post.tags.map((tag) => (
                    <Badge key={tag} className="bg-green-600 hover:bg-green-700">
                      {tag}
                    </Badge>
                  ))
                ) : (
                  <Badge className="bg-green-600 hover:bg-green-700">{post.category}</Badge>
                )}
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <MotionArticle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full lg:w-2/3"
            >
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="prose prose-lg max-w-none">
                  {post.content.split("\n\n").map((paragraph, index) => {
                    if (paragraph.startsWith("#")) {
                      const level = paragraph.match(/^#+/)?.[0].length || 1;
                      const text = paragraph.replace(/^#+\s*/, '');
                      if (level === 1) return <h2 key={index} className="text-3xl font-bold mt-8 mb-4">{text}</h2>;
                      if (level === 2) return <h3 key={index} className="text-2xl font-bold mt-8 mb-4">{text}</h3>;
                      if (level === 3) return <h4 key={index} className="text-xl font-bold mt-8 mb-4">{text}</h4>;
                      if (level === 4) return <h5 key={index} className="text-lg font-bold mt-8 mb-4">{text}</h5>;
                      return <h6 key={index} className="font-bold mt-8 mb-4">{text}</h6>;
                    }
                    if (paragraph.startsWith("![") && paragraph.includes("](")) {
                      const altMatch = paragraph.match(/!\[(.*?)\]/);
                      const srcMatch = paragraph.match(/\((.*?)\)/);
                      if (altMatch && srcMatch) {
                        return <Image key={index} src={srcMatch[1]} alt={altMatch[1]} width={800} height={600} className="my-4 rounded-md" />;
                      }
                    }
                    if (paragraph.startsWith("- ") || paragraph.startsWith("* ")) {
                      return (
                        <ul key={index} className="list-disc pl-5 mb-4">
                          {paragraph.split('\n').map((item, i)=>(
                            item.trim() ? <li key={i}>{item.replace(/^[-*]\s*/, '')}</li> : null
                          ))}
                        </ul>
                      );
                    }
                    if (/^\d+\.\s/.test(paragraph)) {
                      return (
                        <ol key={index} className="list-decimal pl-5 mb-4">
                          {paragraph.split('\n').map((item, i) => (
                            item.trim() ? <li key={i}>{item.replace(/^\d+\.\s*/, '')}</li> : null
                          ))}
                        </ol>
                      );
                    }
                    return <p key={index} className="mb-4">{paragraph}</p>;
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
            </MotionArticle>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-24">
                {/* Related Posts */}
                <MotionDiv
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
                              <p className="text-sm text-gray-500 mt-1">
                                {relatedPost.date}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="text-gray-500">No hay artículos relacionados disponibles.</p>
                    )}
                  </div>
                </MotionDiv>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
