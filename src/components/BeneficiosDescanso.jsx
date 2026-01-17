export default function BeneficiosDescanso() {
  const benefits = [
    {
      title: "Sueño profundo",
      description: "Recupera tu cuerpo y mente con un descanso verdaderamente reparador.",
      icon: "💤",
    },
    {
      title: "Menos dolores",
      description: "Soporte adecuado para espalda, cuello y articulaciones.",
      icon: "💆",
    },
    {
      title: "Más energía diaria",
      description: "Despierta con vitalidad y mejor rendimiento durante el día.",
      icon: "⚡",
    },
    {
      title: "Bienestar integral",
      description: "Dormir bien mejora tu estado de ánimo y tu salud general.",
      icon: "❤️",
    },
  ];

  return (
    <section className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Descansar bien lo cambia todo
        </h2>

        {/* Descripción */}
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
          Un buen colchón no solo mejora tu sueño, también tu salud, energía y bienestar diario.
        </p>

        {/* Beneficios */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
