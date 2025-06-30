import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Página no encontrada
          </h2>
          <p className="text-gray-600 mb-8">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Ir al Inicio
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ver Blog
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full">
            <Link href="/contacto">
              Contactar
            </Link>
          </Button>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>¿Necesitas ayuda? <Link href="/contacto" className="text-green-600 hover:underline">Contáctanos</Link></p>
        </div>
      </div>
    </div>
  )
} 