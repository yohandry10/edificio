import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Casa Grande</h3>
            <p className="text-gray-600 mb-4">
              Nuestro propósito es garantizar el bienestar y seguridad en la convivencia de los residentes.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="text-gray-600 hover:text-green-600 transition-colors">
                  Quienes Somos
                </Link>
              </li>
              <li>
                <Link href="/nuestros-servicios" className="text-gray-600 hover:text-green-600 transition-colors">
                  Nuestros Servicios
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-green-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-600 hover:text-green-600 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                <span className="text-gray-600">Av. Dos de Mayo 516, Ofic. 201, Miraflores</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-600">Central: 01 739 7599</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-600">cotizacion@administracionedificosperu.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Casa Grande Administración de Edificios. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
