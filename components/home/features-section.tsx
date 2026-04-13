import { Clock, Award, Sparkles, Cpu } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Servicio las 24 horas",
    description: "Disponibilidad completa para atender tus necesidades de impresión en cualquier momento."
  },
  {
    icon: Award,
    title: "Con más de 20 años de experiencia",
    description: "Décadas de conocimiento y experiencia garantizan resultados de la más alta calidad."
  },
  {
    icon: Sparkles,
    title: "Personalización ilimitada",
    description: "Adaptamos cada proyecto a tus necesidades específicas sin restricciones."
  },
  {
    icon: Cpu,
    title: "Equipo de última generación",
    description: "Tecnología de punta para garantizar acabados perfectos en cada impresión."
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <feature.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
