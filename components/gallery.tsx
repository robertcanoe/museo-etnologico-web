"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/foto-motos.webp",
    alt: "Colección de motos",
    title: "Colección de Motos",
  },
  {
    id: 2,
    src: "/vintage-agricultural-tools.png",
    alt: "Herramientas agrícolas antiguas",
    title: "Herramientas Agrícolas",
  },
  {
    id: 3,
    src: "/spanish-textiles-clothing.png",
    alt: "Textiles y vestimentas tradicionales",
    title: "Textiles Tradicionales",
  },
  {
    id: 4,
    src: "/old-spanish-kitchen.png",
    alt: "Utensilios de cocina antiguos",
    title: "Utensilios Domésticos",
  },
  {
    id: 5,
    src: "/spanish-religious-artifacts.png",
    alt: "Objetos religiosos tradicionales",
    title: "Arte Religioso",
  },
  {
    id: 6,
    src: "/vintage-spanish-instruments.png",
    alt: "Instrumentos musicales tradicionales",
    title: "Instrumentos Musicales",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  return (
    <section id="galeria" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Galería</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra colección de objetos etnológicos que cuentan la historia de Almodóvar del Río
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden hover-lift cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
