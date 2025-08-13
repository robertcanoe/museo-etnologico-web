import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Información de Contacto</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Planifica tu visita y descubre todo lo que tenemos preparado para ti
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center font-serif text-xl text-primary">
                  <MapPin className="mr-3 h-6 w-6" />
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Plaza del Ayuntamiento, 1<br />
                  14720 Almodóvar del Río
                  <br />
                  Córdoba, España
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center font-serif text-xl text-primary">
                  <Clock className="mr-3 h-6 w-6" />
                  Horarios de Visita
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Martes - Viernes:</span>
                    <span>10:00 - 14:00 / 17:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span>10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span>11:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Lunes:</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center font-serif text-xl text-primary">
                  <Phone className="mr-3 h-6 w-6" />
                  Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <Phone className="mr-3 h-4 w-4" />
                  <span>+34 957 71 50 01</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Mail className="mr-3 h-4 w-4" />
                  <span>museo@almodovardelrio.es</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps Embed */}
          <div className="hover-lift">
            <Card className="h-full">
              <CardContent className="p-0 h-full min-h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.641123456789!2d-5.0078649!3d37.8158512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d2ba4d429df33%3A0x72146820629fafae!2sMuseo%20Etnol%C3%B3gico%20de%20Almod%C3%B3var%20del%20R%C3%ADo!5e0!3m2!1ses!2ses!4v1720897382938!5m2!1ses!2ses" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: '0.5rem' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del Museo Etnológico de Almodóvar del Río"
                  className="w-full h-full min-h-[400px]"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <Card className="hover-lift">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Información para Visitantes</h3>
              <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Entrada Gratuita</h4>
                  <p className="text-sm">El acceso al museo es completamente gratuito para todos los visitantes.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Visitas Guiadas</h4>
                  <p className="text-sm">Disponibles previa cita. Consulta disponibilidad por teléfono.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Accesibilidad</h4>
                  <p className="text-sm">Instalaciones adaptadas para personas con movilidad reducida.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
