// export default function SeccionMarcas() {
//   const marcas = [
//     { name: "Marca 1", logo: "/marcas/marca1.png" },
//     { name: "Marca 2", logo: "/marcas/marca2.png" },
//     { name: "Marca 3", logo: "/marcas/marca3.png" },
//     { name: "Marca 4", logo: "/marcas/marca4.png" },
//     { name: "Marca 5", logo: "/marcas/marca5.png" },
//     { name: "Marca 6", logo: "/marcas/marca6.png" },
//   ];

//   return (
//     <section className="bg-gray-50 py-24">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">

//         {/* Header */}
//         <div className="text-center max-w-2xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
//             Marcas que nos respaldan
//           </h2>
//           <p className="mt-4 text-gray-600">
//             Trabajamos con fabricantes reconocidos por su calidad, innovación y compromiso con el descanso.
//           </p>
//         </div>

//         {/* Logos */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center">
//           {marcas.map((marca, index) => (
//             <div
//               key={index}
//               className="flex justify-center items-center"
//             >
//               <img
//                 src={marca.logo}
//                 alt={marca.name}
//                 className="h-10 object-contain grayscale opacity-70 hover:opacity-100 transition"
//               />
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


export default function SeccionMarcas() {
  const marcas = [
    { name: "Marca 1", logo: "/marcas/marca1.png" },
    { name: "Marca 2", logo: "/marcas/marca2.png" },
    { name: "Marca 3", logo: "/marcas/marca3.png" },
    { name: "Marca 4", logo: "/marcas/marca4.png" },
    { name: "Marca 5", logo: "/marcas/marca5.png" },
    { name: "Marca 6", logo: "/marcas/marca6.png" },
  ];

  return (
    <section className="bg-white py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Marcas que nos respaldan
          </h2>
          <p className="mt-4 text-gray-600">
            Trabajamos con fabricantes reconocidos por su calidad, innovación y compromiso con el descanso.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-16 animate-marquee hover:[animation-play-state:paused]">
            {[...marcas, ...marcas].map((marca, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[160px]"
              >
                <img
                  src={marca.logo}
                  alt={marca.name}
                  className="h-10 object-contain grayscale opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
