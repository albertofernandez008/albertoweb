import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData(e.target as HTMLFormElement);
      const res = await fetch("https://formspree.io/f/mvzdyzww", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        toast({
          title: "Mensaje enviado ✓",
          description: "Te contactaré en menos de 24h. Gracias por confiar.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        toast({
          title: "Error al enviar",
          description: "Inténtalo de nuevo o escríbeme directamente.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error de conexión",
        description: "Revisa tu conexión e inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-50 pointer-events-none" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
            // Conversión y Cierre
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight gradient-text mb-4">
            Hablemos de tu próximo proyecto
          </h2>
          <p className="text-muted-foreground text-lg">
            Cuéntame qué buscas mejorar. Diseñaré una propuesta a medida sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 p-8 md:p-10 rounded-2xl border border-border bg-card shadow-card-dark space-y-6"
          >
            <div>
              <Label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Nombre
              </Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Tu nombre"
                className="mt-2 bg-background border-border focus-visible:ring-primary h-12"
              />
            </div>

            <div>
              <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="tucorreo@email.com"
                className="mt-2 bg-background border-border focus-visible:ring-primary h-12"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Teléfono <span className="text-muted-foreground/50 normal-case">(opcional)</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+34 600 000 000"
                className="mt-2 bg-background border-border focus-visible:ring-primary h-12"
              />
            </div>

            <div>
              <Label htmlFor="business" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Tipo de Negocio
              </Label>
              <Input
                id="business"
                name="business"
                required
                placeholder="Estética, peluquería, consultoría..."
                className="mt-2 bg-background border-border focus-visible:ring-primary h-12"
              />
            </div>

            <div>
              <Label htmlFor="goal" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                ¿Qué buscas mejorar?
              </Label>
              <Textarea
                id="goal"
                name="goal"
                required
                placeholder="Más reservas, posicionamiento en Google, modernizar mi web..."
                rows={5}
                className="mt-2 bg-background border-border focus-visible:ring-primary resize-none"
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
              {loading ? "Enviando..." : (
                <>
                  Enviar mensaje <Send className="h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          {/* WhatsApp card */}
          <div className="lg:col-span-2 p-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card relative overflow-hidden">
            <div className="absolute top-0 right-0 h-40 w-40 bg-primary/20 blur-3xl rounded-full" />

            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground mb-6 shadow-glow animate-pulse-glow">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.524 5.855L.057 23.882a.5.5 0 00.606.625l6.218-1.633A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.877 9.877 0 01-5.031-1.378l-.36-.214-3.732.979.997-3.648-.235-.374A9.861 9.861 0 012.106 12C2.106 6.533 6.533 2.106 12 2.106S21.894 6.533 21.894 12 17.467 21.894 12 21.894z"/>
                </svg>
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Contáctame directamente
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Escríbeme por WhatsApp o llámame. Sin formularios, sin esperas. Hablamos de tu negocio cuando quieras.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.524 5.855L.057 23.882a.5.5 0 00.606.625l6.218-1.633A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.877 9.877 0 01-5.031-1.378l-.36-.214-3.732.979.997-3.648-.235-.374A9.861 9.861 0 012.106 12C2.106 6.533 6.533 2.106 12 2.106S21.894 6.533 21.894 12 17.467 21.894 12 21.894z"/>
                    </svg>
                  </span>
                  <span className="text-foreground/80">Respuesta en menos de 24h</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                    </svg>
                  </span>
                  <span className="text-foreground/80">También por llamada</span>
                </div>
              </div>

              <Button asChild variant="hero" size="lg" className="w-full mb-3">
                <a href="https://wa.me/34603384790?text=Hola%2C%20me%20interesa%20tu%20servicio%20de%20desarrollo%20web" target="_blank" rel="noopener noreferrer">
                  Escribir por WhatsApp
                </a>
              </Button>

              <Button asChild variant="outlineGlow" size="lg" className="w-full">
                <a href="tel:+34603384790">
                  Llamar ahora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};