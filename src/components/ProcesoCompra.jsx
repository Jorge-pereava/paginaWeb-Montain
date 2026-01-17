// export default function ProcesoCompra() {
//   const pasos = [
//     {
//       title: "Explora nuestros productos",
//       description: "Navega por nuestras categorías y encuentra el colchón ideal.",
//       icon: "🛏️",
//     },
//     {
//       title: "Asesoría personalizada",
//       description: "Nuestro equipo te ayuda a elegir la mejor opción.",
//       icon: "💬",
//     },
//     {
//       title: "Compra segura",
//       description: "Paga con métodos confiables y protegidos.",
//       icon: "🔒",
//     },
//     {
//       title: "Entrega garantizada",
//       description: "Recibe tu producto de forma rápida y segura.",
//       icon: "🚚",
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

//         {/* Título */}
//         <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
//           Comprar es fácil y seguro
//         </h2>

//         {/* Descripción */}
//         <p className="mt-4 max-w-2xl mx-auto text-gray-600">
//           Te acompañamos en cada paso para que compres con total confianza.
//         </p>

//         {/* Proceso */}
//         <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-12 relative">

//           {pasos.map((paso, index) => (
//             <div key={index} className="flex flex-col items-center max-w-xs">
//               <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-sm text-2xl">
//                 {paso.icon}
//               </div>
//               <h4 className="mt-6 font-medium text-gray-900">
//                 {paso.title}
//               </h4>
//               <p className="mt-2 text-sm text-gray-600">
//                 {paso.description}
//               </p>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }


export default function ProcesoCompra() {
  const pasos = [
    {
      number: "01",
      title: "Explora nuestros productos",
      description:
        "Descubre colchones y almohadas diseñados para mejorar tu descanso.",
    },
    {
      number: "02",
      title: "Recibe asesoría",
      description:
        "Nuestro equipo te acompaña para elegir la opción ideal para ti.",
    },
    {
      number: "03",
      title: "Compra con confianza",
      description:
        "Realiza tu compra mediante métodos de pago seguros y confiables.",
    },
    {
      number: "04",
      title: "Entrega garantizada",
      description:
        "Recibe tu producto en la puerta de tu hogar de forma rápida y segura.",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Así de simple es comprar con nosotros
          </h2>
          <p className="mt-4 text-gray-600">
            Un proceso claro, acompañamiento constante y entrega garantizada.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {pasos.map((paso, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-10"
            >
              {/* Número */}
              <div className="text-6xl font-light text-gray-200 leading-none">
                {paso.number}
              </div>

              {/* Texto */}
              <div className="max-w-xl">
                <h3 className="text-xl font-medium text-gray-900">
                  {paso.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {paso.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
