import { useState } from "react";
import { Calendar, Send, Clock, Video } from "lucide-react";
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

          {/* Calendly card */}
          <div className="lg:col-span-2 p-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card relative overflow-hidden">
            <div className="absolute top-0 right-0 h-40 w-40 bg-primary/20 blur-3xl rounded-full" />

            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground mb-6 shadow-glow animate-pulse-glow">
                <Calendar className="h-5 w-5" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Agenda una reunión
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                30 minutos. Sin compromiso. Analizamos tu negocio y definimos qué
                puede generarte más ingresos.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-4 w-4" />
                  </span>
                  <span className="text-foreground/80">30 minutos</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Video className="h-4 w-4" />
                  </span>
                  <span className="text-foreground/80">Videollamada</span>
                </div>
              </div>

              <Button asChild variant="hero" size="lg" className="w-full">
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Reservar slot
                </a>
              </Button>

              <p className="font-mono text-[11px] text-muted-foreground text-center mt-4">
                // Próximos huecos disponibles esta semana
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};