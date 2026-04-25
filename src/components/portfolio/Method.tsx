import { Target, Code2, MessageSquare } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Diseño Visual con Propósito",
    desc: "No solo es estético: cada sección está diseñada para guiar al usuario hasta el botón de reserva.",
    tag: "01",
  },
  {
    icon: Code2,
    title: "Código, no plantillas",
    desc: "Web rápida, segura y posicionada en Google. Programado a mano, sin builders pesados.",
    tag: "02",
  },
  {
    icon: MessageSquare,
    title: "Integración Total",
    desc: "WhatsApp y sistemas de cita previa configurados para maximizar tus ingresos desde el día uno.",
    tag: "03",
  },
];

export const Method = () => {
  return (
    <section id="metodo" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
            // El Método
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight gradient-text">
            Cada decisión técnica orientada al ingreso
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.tag}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 shadow-card-dark hover:shadow-glow"
            >
              <div className="absolute top-6 right-6 font-mono text-xs text-muted-foreground/60">
                {item.tag}
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
