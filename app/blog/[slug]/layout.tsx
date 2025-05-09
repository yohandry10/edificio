import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { staticBlogPosts } from "@/lib/blogPosts"; // Asegúrate que esta ruta es correcta y el archivo existe
import { BlogPost } from "@/lib/blogPosts"; // Importar BlogPost si es necesario para el tipado

// Definición de tipo para las props de generateMetadata, incluyendo el post
interface PostForMetadata extends BlogPost {
  cover_image?: string | null;
  author_name?: string;
  // created_at es probablemente una cadena de fecha ISO, o un objeto Date
  // Si es string, Next.js lo manejará bien para publishedTime
  // Si es Date, también está bien.
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let postData: any = null; // Usar 'any' temporalmente o un tipo más específico

  // 1. Fetch post from Supabase
  const { data: supaPost, error: supaError } = await supabase
    .from("articulos")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (supaError && supaError.code !== "PGRST116") {
    console.error("Supabase fetch error in generateMetadata:", supaError);
  }

  if (supaPost) {
    postData = supaPost;
  } else {
    // 2. Fallback to static posts if not found in Supabase
    const staticPost = staticBlogPosts.find((p) => p.slug === params.slug);
    if (staticPost) {
      postData = staticPost;
    }
  }

  if (!postData) {
    return {
      title: "Artículo no encontrado",
      description: "El artículo que buscas no pudo ser encontrado.",
    };
  }

  // Adaptar postData a la estructura esperada por PostForMetadata si es necesario
  // Aquí asumimos que postData ya tiene title, excerpt, slug, cover_image/image, created_at
  const post: PostForMetadata = {
    id: String(postData.id),
    title: postData.title || "Título no disponible",
    slug: postData.slug || params.slug,
    excerpt: postData.excerpt || "Descripción no disponible.",
    content: postData.content || "",
    // Usar cover_image de Supabase o image de staticBlogPosts
    image: postData.cover_image || postData.image || "/placeholder.svg", 
    author: postData.author_name || postData.author || "Casa Grande",
    date: postData.created_at ? new Date(postData.created_at).toLocaleDateString("es-ES") : new Date().toLocaleDateString("es-ES"),
    category: postData.category || "General",
    tags: Array.isArray(postData.tags) ? postData.tags : (typeof postData.tags === 'string' ? postData.tags.split(',').map((t: string) => t.trim()) : []),
    created_at: postData.created_at, // Necesario para openGraph publishedTime
  };
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  
  // Construir la URL de la imagen de forma segura
  let imageUrl = "/placeholder.svg"; // Imagen por defecto
  if (post.image) {
    if (post.image.startsWith("http")) {
      imageUrl = post.image;
    } else {
      // Asegurarse de que no haya doble slash si post.image ya empieza con /
      imageUrl = `${baseUrl}${post.image.startsWith('/') ? post.image : '/' + post.image}`;
    }
  }
  // Si después de todo, la imagen es solo placeholder.svg, asegurar que sea absoluta
   if (imageUrl.endsWith("placeholder.svg") && !imageUrl.startsWith("http")) {
    imageUrl = `${baseUrl}/placeholder.svg`;
  }


  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: "Casa Grande Administración de Edificios", // Nombre del sitio más completo
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "es_ES",
      type: "article",
      // Asegúrate que post.created_at es una fecha válida o string ISO
      publishedTime: post.created_at ? new Date(post.created_at).toISOString() : new Date().toISOString(), 
      authors: [post.author], 
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl], 
      // site: "@tuTwitterHandle", // Opcional: tu handle de Twitter
      // creator: "@autorTwitterHandle", // Opcional: handle del autor si lo tienes
    },
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 