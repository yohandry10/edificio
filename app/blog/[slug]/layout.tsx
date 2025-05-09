// app/blog/[slug]/layout.tsx - VERSIÓN DE PRUEBA SÚPER SIMPLIFICADA
import { Metadata } from "next";
import { supabase } from "@/lib/supabase";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  console.log(`[SimpleLayout.generateMetadata] Intentando metadatos para slug: ${params.slug}`);
  const { data, error } = await supabase
    .from("articulos")
    .select("title, excerpt")
    .eq("slug", params.slug)
    .single();

  if (error || !data) {
    console.error(`[SimpleLayout.generateMetadata] Error o no data para slug ${params.slug}:`, error);
    return {
      title: "Artículo no encontrado",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return {
    title: data.title || "Título por defecto",
    description: data.excerpt || "Descripción por defecto.",
    openGraph: {
      title: data.title || "Título por defecto",
      description: data.excerpt || "Descripción por defecto.",
      url: `${baseUrl}/blog/${params.slug}`,
      images: [`${baseUrl}/casagrande.webp`], // Siempre el logo
      siteName: "Casa Grande Administración de Edificios",
      locale: "es_ES",
      type: "article",
    },
    alternates: {
      canonical: `${baseUrl}/blog/${params.slug}`,
    }
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 