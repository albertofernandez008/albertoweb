import { Rocket, MessageCircle, Wrench, Check } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Digitalización de Negocios",
    desc: "Creación de identidad desde cero: web, branding y presencia online lista para vender.",
    points: ["Identidad visual", "Web a medida", "SEO local"],
  },
  {
    icon: MessageCircle,
    title: "Optimización de Reservas",
    desc: "Embudos directos a WhatsApp y sistemas de cita previa que multiplican tus ingresos.",
    points: ["Botones WhatsApp", "Calendario integrado", "Tracking de leads"],
  },
  {
    icon: Wrench,
    title: "Mantenimiento y Soporte",
    desc: "Tu web siempre a punto: actualizaciones, copias de seguridad y mejoras continuas.",
    points: ["Updates mensuales", "Backups seguros", "Soporte prioritario"],
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 relative bg-card/30 border-y border-border">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
            // Servicios Especializados
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight gradient-text">
            Soluciones técnicas con foco comercial
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative p-8 rounded-2xl border border-border bg-background/60 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground mb-6 shadow-glow">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-foreground/80">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
