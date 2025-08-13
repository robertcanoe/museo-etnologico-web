"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="font-serif font-bold text-lg text-primary">Museo Etnológico</h1>
              <p className="text-xs text-muted-foreground">Almodóvar del Río</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("sobre-nosotros")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("exposiciones")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Exposiciones
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("sobre-nosotros")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Sobre Nosotros
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection("exposiciones")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Exposiciones
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contacto
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
