import { Code2, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 mt-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary border border-primary/30">
              <Code2 className="h-4 w-4" />
            </span>
            <div>
              <div className="font-mono text-sm font-semibold">
                dev<span className="text-primary">.local</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Tu éxito es mi mejor código. Hablemos.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: Mail, href: "#contacto", label: "Email" },
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Built with code, not templates.
          </p>
        </div>
      </div>
    </footer>
  );
};
