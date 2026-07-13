import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-8xl md:text-9xl font-bold text-gray-900 mb-4">404</p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Página no encontrada
          </h1>
          <p className="text-gray-600 mb-10 max-w-md mx-auto leading-relaxed">
            La página que buscas no existe o fue movida.
          </p>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
