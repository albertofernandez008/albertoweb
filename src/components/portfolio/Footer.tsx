export default function Footer() {
  return (
    <footer className="py-10 px-6 text-center border-t mt-20">
      
      <p className="text-lg font-semibold">
        Webs que generan clientes, no solo visitas.
      </p>

      <p className="mt-2 text-gray-500">
        Diseño y optimización para negocios que quieren crecer online.
      </p>

      <p className="mt-4 text-sm text-gray-400">
        Respuesta en menos de 24h • Trabajo personalizado
      </p>

      <div className="mt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Alberto
      </div>
    </footer>
  );
}