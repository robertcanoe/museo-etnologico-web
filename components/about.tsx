import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Users } from "lucide-react"

export function About() {
  return (
    <section id="sobre-nosotros" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Sobre el Museo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un espacio dedicado a preservar y compartir la rica herencia cultural de Almodóvar del Río
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-6">Nuestra Historia</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              El Museo Etnológico de Almodóvar del Río nació con la misión de preservar y difundir el patrimonio
              cultural de nuestra localidad. Desde su fundación, hemos trabajado incansablemente para recopilar,
              conservar y exponer los testimonios materiales e inmateriales de nuestras tradiciones.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nuestras colecciones abarcan desde herramientas agrícolas tradicionales hasta vestimentas típicas, pasando
              por utensilios domésticos y objetos ceremoniales que narran la historia de nuestro pueblo.
            </p>
          </div>
          <div className="hover-lift">
            <img
              src="/foto-interior.webp"
              alt="Interior del museo"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover-lift">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-serif text-xl font-bold text-primary mb-2">Ubicación</h4>
              <p className="text-muted-foreground mb-3">
              </p>
              <a 
                href="#contacto" 
                className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm gap-2"
              >
                <MapPin className="h-4 w-4" />
                Ver en el mapa
              </a>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-serif text-xl font-bold text-primary mb-2">Misión</h4>
              <p className="text-muted-foreground">
                Preservar, investigar y difundir el patrimonio etnológico de Almodóvar del Río para las generaciones
                presentes y futuras.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-serif text-xl font-bold text-primary mb-2">Comunidad</h4>
              <p className="text-muted-foreground">
                Un espacio de encuentro donde la comunidad puede reconectarse con sus raíces y tradiciones ancestrales.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
