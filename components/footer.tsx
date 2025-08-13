import { Facebook, Instagram, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Museum Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Museo Etnológico</h3>
                <p className="text-sm opacity-80">Almodóvar del Río</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Preservando y compartiendo la rica herencia cultural de Almodóvar del Río para las generaciones presentes
              y futuras.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#inicio" className="hover:text-primary-foreground transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-nosotros" className="hover:text-primary-foreground transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-primary-foreground transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#exposiciones" className="hover:text-primary-foreground transition-colors">
                  Exposiciones
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Contacto</h4>
            <div className="space-y-2 text-primary-foreground/80 text-sm">
              <p>Plaza del Ayuntamiento, 1</p>
              <p>14720 Almodóvar del Río</p>
              <p>Córdoba, España</p>
              <p className="mt-3">+34 957 71 50 01</p>
              <p>museo@almodovardelrio.es</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; 2024 Museo Etnológico de Almodóvar del Río. Todos los derechos reservados.</p>
          <p className="mt-2">Desarrollado con ❤️ para preservar nuestra cultura</p>
        </div>
      </div>
    </footer>
  )
}
