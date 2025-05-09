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
  let postData: any = null;

  const { data: supaPost, error: supaError } = await supabase
    .from("articulos")
    .select("title, excerpt, slug, created_at, author_name") // Seleccionar solo campos necesarios para metadatos
    .eq("slug", params.slug)
    .single();

  if (supaError && supaError.code !== "PGRST116") {
    console.error("Supabase fetch error in generateMetadata:", supaError);
  }

  if (supaPost) {
    postData = supaPost;
  } else {
    const staticPost = staticBlogPosts.find((p) => p.slug === params.slug);
    if (staticPost) {
      // Adaptar campos de staticPost si es necesario
      postData = { 
        title: staticPost.title,
        excerpt: staticPost.excerpt,
        slug: staticPost.slug,
        created_at: staticPost.date, // Asumiendo que staticPost.date es compatible con ISOString o new Date()
        author_name: staticPost.author
      };
    }
  }

  if (!postData) {
    return {
      title: "Artículo no encontrado",
      description: "El artículo que buscas no pudo ser encontrado.",
    };
  }

  const post: Pick<PostForMetadata, 'title' | 'excerpt' | 'slug' | 'created_at' | 'author'> = {
    title: postData.title || "Título no disponible",
    slug: postData.slug || params.slug,
    excerpt: postData.excerpt || "Descripción no disponible.",
    created_at: postData.created_at, 
    author: postData.author_name || "Casa Grande",
  };
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  
  // URL fija para el logo de la empresa
  const logoUrl = `${baseUrl}/casagrande.webp`; //Asegúrate que casagrande.webp esté en la carpeta public

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: "Casa Grande Administración de Edificios", 
      images: [
        {
          url: logoUrl, // Usar siempre la URL del logo
          width: 1200, // Ajusta las dimensiones si tu logo es diferente
          height: 630, // y quieres mantener la proporción
          alt: "Casa Grande Administración de Edificios Logo",
        },
      ],
      locale: "es_ES",
      type: "article",
      publishedTime: post.created_at ? new Date(post.created_at).toISOString() : new Date().toISOString(), 
      authors: [post.author], 
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [logoUrl], // Usar siempre la URL del logo
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