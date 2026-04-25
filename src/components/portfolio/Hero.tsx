import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      
      <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
        Si tu web no te trae clientes, no sirve.
      </h1>

      <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-500">
        Diseño páginas web pensadas para convertir visitas en clientes reales, 
        no solo para verse bonitas.
      </p>

      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <Button size="lg">
          Ver cómo lo haría en tu negocio
        </Button>

        <Button size="lg" variant="outline">
          Analizo tu web gratis
        </Button>
      </div>

      <p className="mt-6 text-sm text-gray-400">
        Sin compromiso • Respuesta en menos de 24h
      </p>
    </section>
  );
}