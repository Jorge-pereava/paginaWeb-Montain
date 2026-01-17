export default function Footer() {
    
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

        {/* Grid principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* Marca */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Montaña
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Especialistas en descanso. Colchones, almohadas y accesorios
              seleccionados para mejorar tu calidad de vida.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Inicio</a></li>
              <li><a href="#" className="hover:text-white transition">Colchones</a></li>
              <li><a href="#" className="hover:text-white transition">Almohadas</a></li>
              <li><a href="#" className="hover:text-white transition">Ofertas</a></li>
              <li><a href="#" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          {/* Atención */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Atención al cliente
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Asesoría personalizada</li>
              <li>Garantía de fábrica</li>
              <li>Pagos seguros</li>
              <li>Envíos a todo el país</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Contáctanos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>📞 +57 300 000 0000</li>
              <li>✉️ contacto@montania.com</li>
              <li>📍 Colombia</li>
            </ul>

            {/* Redes */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-white transition">Instagram</a>
              <a href="#" className="hover:text-white transition">Facebook</a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Almacen la Montaña. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}
