import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Users } from "lucide-react"

// Datos de ejemplo de reseñas de Google
const googleReviews = [
  {
    id: 1,
    author: "Leonardo Serrano",
    date: "Noviembre 2024",
    rating: 5,
    text: "Hay un montón de cosas antiguas súper interesantes y muy bien colocadas. El dueño Angel, explica estupendamente la historia de muchas de las cosas. Un gran trabajo!!",
  },
  {
    id: 2,
    author: "Daniell Tinoco",
    date: "Marzo 2025",
    rating: 5,
    text: "Espectacular, nunca he estado en un museo tan impresionante, la ruta y la explicación que da su dueño te hace que sea una experiencia muy amena y educativa.",
  },
  {
    id: 3,
    author: "Miryan Rodríguez",
    date: "Agosto 2022",
    rating: 5,
    text: "Museo de la nostálgica, sumo cuidado y dedicación... Ángel es una persona entrañable que ha dedicado más de 50 años a la restauración y conservación del mismo. Volveremos sin lugar a dudas, hay que dedicarle horas para empaparse de toda su historia.",
  },
  {
    id: 4,
    author: "Rocío Martínez",
    date: "Julio 2019",
    rating: 5,
    text: "Un lugar digno de visitar... hay una energía de amor envolviendo cada pieza de ese lugar, que sale de un Ángel creador y artista que dedicó su vida a recopilar cada pieza. No pasen por Almodóvar del Río sin pasar a visitarlo.",
  },
]

// Componente para mostrar estrellas según la valoración
const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reseñas" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Lo que dicen nuestros visitantes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiencias y opiniones de quienes han disfrutado de nuestro museo
          </p>
          <div className="flex items-center justify-center mt-4">
            <Badge className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-sm flex items-center gap-2">
              <span className="font-bold text-lg">4.8</span>
              <RatingStars rating={5} />
              <span className="ml-1">en Google</span>
            </Badge>
          </div>
        </div>

        {/* Google Reviews */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-primary mb-8 flex items-center">
            <Users className="mr-3 h-6 w-6" />
            Reseñas de Google
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {googleReviews.map((review) => (
              <Card key={review.id} className="hover-lift overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      </div>
                      <div>
                        <CardTitle className="font-serif text-lg text-primary">{review.author}</CardTitle>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                    <RatingStars rating={review.rating} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20 rotate-180" />
                    <p className="text-muted-foreground pl-4">{review.text}</p>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <p className="text-xs text-muted-foreground italic">Publicado en Google Maps</p>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a 
              href="https://www.google.com/maps/place/Museo+Etnol%C3%B3gico+de+Almod%C3%B3var+del+R%C3%ADo/@37.8158512,-5.0078649,17z/data=!4m8!3m7!1s0xd6d2ba4d429df33:0x72146820629fafae!8m2!3d37.8158512!4d-5.0078649!9m1!1b1!16s%2Fg%2F11g9cmvv09?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Ver todas las reseñas en Google
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
