import { Terminal } from "lucide-react";

export const About = () => {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual / code panel */}
          <div className="relative">
            <div className="relative rounded-2xl border border-border bg-card p-1 shadow-card-dark">
              <div className="rounded-xl bg-background overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/60">
                  <span className="h-3 w-3 rounded-full bg-destructive/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-primary/70" />
                  <span className="ml-3 font-mono text-xs text-muted-foreground">
                    about.ts
                  </span>
                </div>
                <pre className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
<code><span className="text-muted-foreground">// quien soy</span>{"\n"}
<span className="text-primary">const</span> <span className="text-foreground">dev</span> = {"{"}{"\n"}
{"  "}<span className="text-accent">rol</span>: <span className="text-foreground/80">{`'Web Developer'`}</span>,{"\n"}
{"  "}<span className="text-accent">foco</span>: <span className="text-foreground/80">{`'Negocios locales'`}</span>,{"\n"}
{"  "}<span className="text-accent">obsesion</span>: <span className="text-foreground/80">{`'Conversión'`}</span>,{"\n"}
{"  "}<span className="text-accent">stack</span>: [<span className="text-foreground/80">{`'TS'`}, `'React'`, `'SEO'`</span>],{"\n"}
{"  "}<span className="text-accent">mision</span>: <span className="text-foreground/80">{`'Generar ingresos'`}</span>,{"\n"}
{"}"};</code>
                </pre>
              </div>
            </div>
            <div className="absolute -inset-4 -z-10 bg-gradient-accent opacity-20 blur-3xl rounded-full" />
          </div>

          {/* Text */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4 inline-flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5" />
              // Sobre mí
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight gradient-text mb-6 leading-tight">
              Tecnología al servicio de la economía local
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Emprendedor dedicado a impulsar la economía local a través de la
              tecnología. Más de un año diseñando experiencias digitales que
              generan ingresos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cada línea de código que escribo tiene un objetivo claro: que tu
              negocio crezca. Sin plantillas, sin atajos, sin promesas vacías.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-border bg-card/40">
                <div className="font-mono text-xs text-muted-foreground mb-1">Stack principal</div>
                <div className="font-semibold">React · TypeScript · Tailwind</div>
              </div>
              <div className="p-4 rounded-lg border border-border bg-card/40">
                <div className="font-mono text-xs text-muted-foreground mb-1">Enfoque</div>
                <div className="font-semibold">Conversión · SEO local</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
