import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Decorative grid + glow */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs font-mono text-primary mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Disponible para nuevos proyectos
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="gradient-text">Transformo tu presencia digital en un</span>{" "}
            <span className="accent-text">motor de reservas</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Desarrollo web a medida con código optimizado. Especializado en
            convertir visitas en clientes reales para negocios locales.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <a href="#contacto">
                Agendar Reunión <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outlineGlow" size="xl">
              <a href="#proyectos">
                Ver proyectos
              </a>
            </Button>
          </div>

          {/* Stats strip */}
          <div className="mt-20 grid grid-cols-3 gap-4 max-w-2xl mx-auto font-mono">
            {[
              { value: "+15", label: "Proyectos entregados" },
              { value: "98%", label: "PageSpeed promedio" },
              { value: "1+ año", label: "Generando ingresos" },
            ].map((s) => (
              <div
                key={s.label}
                className="px-4 py-5 rounded-xl border border-border bg-card/40 backdrop-blur-sm"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary">{s.value}</div>
                <div className="text-[11px] md:text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
