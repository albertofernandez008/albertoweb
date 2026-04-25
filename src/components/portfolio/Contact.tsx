import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="py-20 px-6 max-w-2xl mx-auto text-center">
      
      <h2 className="text-3xl md:text-4xl font-bold">
        Cuéntame tu negocio
      </h2>

      <p className="mt-4 text-gray-500">
        Si veo que puedo ayudarte, te responderé con ideas concretas para mejorar tu web.
      </p>

      {!sent ? (
        <form
          action="https://formspree.io/f/tu-endpoint"
          method="POST"
          onSubmit={() => setSent(true)}
          className="mt-10 flex flex-col gap-4"
        >
          <Input name="nombre" placeholder="Tu nombre" required />
          <Input name="email" type="email" placeholder="Tu email" required />

          <Input 
            name="empresa" 
            placeholder="Nombre de tu negocio" 
            required 
          />

          <Input 
            name="presupuesto" 
            placeholder="Presupuesto aproximado (€)" 
          />

          <textarea
            name="mensaje"
            placeholder="¿Qué necesitas mejorar en tu web?"
            required
            className="p-4 border rounded-lg min-h-[120px]"
          />

          <Button type="submit" size="lg">
            Enviar y recibir ideas
          </Button>
        </form>
      ) : (
        <p className="mt-10 text-green-500">
          Si encajas con lo que busco, te escribiré en menos de 24h con una propuesta concreta.
        </p>
      )}
    </section>
  );
}