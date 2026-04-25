import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Método", href: "#metodo" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-mono text-sm">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary border border-primary/30">
            <Code2 className="h-4 w-4" />
          </span>
          <span className="font-semibold tracking-tight">
            dev<span className="text-primary">.local</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-foreground transition-colors font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
          <a href="#contacto">Agendar Reunión</a>
        </Button>
      </nav>
    </header>
  );
};
