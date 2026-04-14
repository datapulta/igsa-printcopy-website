import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px]" />

        <div className="relative text-center px-6">
          <p className="text-8xl md:text-9xl font-black gradient-text mb-4">404</p>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Página no encontrada
          </h1>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
            La página que buscas no existe o fue movida. Pero no te preocupes, puedes regresar al inicio.
          </p>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded-full hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.03]"
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
