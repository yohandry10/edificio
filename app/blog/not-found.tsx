import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Artículo no encontrado</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Lo sentimos, el artículo que estás buscando no existe o ha sido movido.
        </p>
        <Button asChild>
          <Link href="/blog">Volver al Blog</Link>
        </Button>
      </div>
    </div>
  )
}
