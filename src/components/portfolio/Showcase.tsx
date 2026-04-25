import { ArrowUpRight, Scissors, Sparkles, Briefcase } from "lucide-react";

const projects = [
  {
    title: "Estudio Aurora",
    category: "Estética",
    desc: "Landing premium con sistema de citas integrado y catálogo de tratamientos.",
    tag: "Optimizado para Conversión",
    icon: Sparkles,
    accent: "from-primary/20 to-accent/5",
  },
  {
    title: "Barbería Norte",
    category: "Peluquería",
    desc: "Web rápida con reservas vía WhatsApp y galería de cortes destacados.",
    tag: "Código Limpio",
    icon: Scissors,
    accent: "from-accent/20 to-primary/5",
  },
  {
    title: "Vega Consultoría",
    category: "Consultoría",
    desc: "Sitio corporativo con embudo directo a calendario y formulario de leads.",
    tag: "Optimizado para Conversión",
    icon: Briefcase,
    accent: "from-primary/15 to-accent/10",
  },
];

export const Showcase = () => {
  return (
    <section id="proyectos" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
              // Showcase de Modelos
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight gradient-text">
              Demos construidas para vender
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Modelos reales listos para adaptar a tu negocio. Cada uno enfocado a un
            objetivo: que el cliente reserve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-500"
            >
              {/* Visual area */}
              <div className={`relative h-52 bg-gradient-to-br ${p.accent} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-2xl bg-background/80 border border-primary/30 flex items-center justify-center text-primary backdrop-blur-sm group-hover:scale-110 group-hover:shadow-glow transition-all duration-500">
                    <p.icon className="h-9 w-9" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {p.category}
                </div>
                <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-background/60 border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary transition-all">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {p.desc}
                </p>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {p.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
