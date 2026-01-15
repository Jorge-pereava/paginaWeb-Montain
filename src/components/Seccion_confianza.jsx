export default function SeccionConfianza() {
  const items = [
    {
      title: "Productos originales",
      description: "Trabajamos únicamente con productos 100% originales y certificados.",
      icon: "✔️",
    },
    {
      title: "Las mejores marcas",
      description: "Seleccionamos marcas reconocidas por su calidad y durabilidad.",
      icon: "⭐",
    },
    {
      title: "Garantías de fábrica",
      description: "Todos nuestros productos cuentan con garantía directa del fabricante.",
      icon: "🛡️",
    },
    {
      title: "Asesoría constante",
      description: "Te acompañamos antes, durante y después de tu compra.",
      icon: "💬",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">

        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-3xl mb-4">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
