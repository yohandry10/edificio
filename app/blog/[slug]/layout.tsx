// app/blog/[slug]/layout.tsx - VERSIÓN DE PRUEBA SÚPER SIMPLIFICADA
import { Metadata } from "next";
import { supabase } from "@/lib/supabase";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  console.log(`[SimpleLayout.generateMetadata] Intentando metadatos para slug: ${slug}`);
  const { data, error } = await supabase
    .from("articulos")
    .select("title, excerpt")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    console.error(`[SimpleLayout.generateMetadata] Error o sin data para slug ${slug}:`, error);
    return {
      title: "Artículo no encontrado",
      description: "El artículo solicitado no se encuentra disponible.",
    };
  }

  const baseUrl = "https://www.administracionedificiosperu.com";

  return {
    title: data.title || "Título por defecto",
    description: data.excerpt || "Descripción por defecto.",
    openGraph: {
      title: data.title || "Título por defecto",
      description: data.excerpt || "Descripción por defecto.",
      url: `${baseUrl}/blog/${slug}`,
      images: [`${baseUrl}/casagrande.webp`], // Siempre el logo
      siteName: "Casa Grande Administración de Edificios",
      locale: "es_ES",
      type: "article",
    },
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    }
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 