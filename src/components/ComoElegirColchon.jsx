export default function ComoElegirColchon() {
  const pasos = [
    {
      title: "Posición al dormir",
      description: "Tu postura define el nivel de soporte que necesitas.",
      icon: "🛌",
    },
    {
      title: "Firmeza adecuada",
      description: "Suave, media o firme según tu comodidad.",
      icon: "📏",
    },
    {
      title: "Peso corporal",
      description: "Un soporte correcto mejora durabilidad y confort.",
      icon: "⚖️",
    },
    {
      title: "Tamaño ideal",
      description: "Elige según tu espacio y forma de dormir.",
      icon: "📐",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Encuentra el colchón perfecto para ti
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl">
            Elegir bien tu colchón marca la diferencia en tu descanso diario. 
            Ten en cuenta estos factores antes de decidir.
          </p>

          <div className="mt-10 space-y-6">
            {pasos.map((paso, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-2xl">{paso.icon}</div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    {paso.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {paso.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/colchones"
            className="inline-block mt-10 rounded-full bg-black px-8 py-3 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Ver colchones
          </a>
        </div>

        {/* Visual */}
        <div className="w-full h-[420px] rounded-3xl bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400 text-sm">
            Imagen / ilustración aquí
          </span>
        </div>

      </div>
    </section>
  );
}
