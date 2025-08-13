import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

const currentExhibitions = [
  {
    id: 1,
    title: "Oficios Tradicionales de Almodóvar",
    description:
      "Una mirada profunda a los oficios que han definido la identidad de nuestro pueblo a lo largo de los siglos.",
    startDate: "15 Enero 2024",
    endDate: "30 Abril 2024",
    status: "Actual",
    image: "/spanish-crafts-workshop.png",
  },
  {
    id: 2,
    title: "La Vida Cotidiana en el Siglo XIX",
    description: "Objetos y testimonios que recrean la vida diaria de las familias almodovareñas del siglo pasado.",
    startDate: "1 Marzo 2024",
    endDate: "15 Junio 2024",
    status: "Actual",
    image: "/19th-century-spanish-household.png",
  },
]

const pastExhibitions = [
  {
    id: 3,
    title: "Fiestas y Tradiciones Populares",
    description: "Un recorrido por las celebraciones que han marcado el calendario festivo de Almodóvar del Río.",
    startDate: "10 Septiembre 2023",
    endDate: "20 Diciembre 2023",
    status: "Pasada",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "El Olivar: Tradición y Cultura",
    description: "La importancia del cultivo del olivo en la configuración del paisaje y la cultura local.",
    startDate: "5 Mayo 2023",
    endDate: "30 Agosto 2023",
    status: "Pasada",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function Exhibitions() {
  return (
    <section id="exposiciones" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Exposiciones y Actividades</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestras exposiciones temporales y actividades culturales
          </p>
        </div>

        {/* Current Exhibitions */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold text-primary mb-8 flex items-center">
            <Calendar className="mr-3 h-6 w-6" />
            Exposiciones Actuales
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {currentExhibitions.map((exhibition) => (
              <Card key={exhibition.id} className="hover-lift overflow-hidden">
                <div className="relative">
                  <img
                    src={exhibition.image || "/placeholder.svg"}
                    alt={exhibition.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-green-600 hover:bg-green-700">{exhibition.status}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-primary">{exhibition.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exhibition.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4" />
                    {exhibition.startDate} - {exhibition.endDate}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Exhibitions */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-primary mb-8 flex items-center">
            <Calendar className="mr-3 h-6 w-6" />
            Exposiciones Pasadas
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {pastExhibitions.map((exhibition) => (
              <Card key={exhibition.id} className="hover-lift overflow-hidden opacity-80">
                <div className="relative">
                  <img
                    src={exhibition.image || "/placeholder.svg"}
                    alt={exhibition.title}
                    className="w-full h-48 object-cover grayscale"
                  />
                  <Badge className="absolute top-4 right-4 bg-gray-600 hover:bg-gray-700">{exhibition.status}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-primary">{exhibition.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exhibition.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4" />
                    {exhibition.startDate} - {exhibition.endDate}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
