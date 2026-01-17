// import ColchonImg from "../assets/ColchonSinFondo.png";
// import AlmohadaImg from "../assets/almohada6.jpg";
// import OfertaImg from "../assets/almohada6.jpg";

// export default function Categorias() {
//   const categorias = [
//     {
//       title: "Colchones",
//       image: ColchonImg,
//     },
//     {
//       title: "Almohadas",
//       image: AlmohadaImg,
//     },
//     {
//       title: "Ofertas",
//       image: OfertaImg,
//     },
//   ];

//   return (
//     <section className="bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24">

//         {/* Título */}
//         <div className="mb-14 text-center">
//           <h2 className="text-3xl font-semibold text-gray-900">
//             Compra por categorías
//           </h2>
//           <p className="mt-4 text-gray-600">
//             Encuentra fácilmente el producto que estás buscando
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

//           {categorias.map((cat, index) => (
//             <div
//               key={index}
//               className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition"
//             >
//               <div className="h-64 bg-gray-100 flex items-center justify-center">
//                 <img
//                   src={cat.image}
//                   alt={cat.title}
//                   className="max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               <div className="p-6 text-center">
//                 <h3 className="text-lg font-medium text-gray-900">
//                   {cat.title}
//                 </h3>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }


import ColchonImg from "../assets/ColchonSinFondo.png";
import BaseCamaImg from "../assets/almohada6.jpg";
import AlmohadaImg from "../assets/almohada6.jpg";
import AccesoriosImg from "../assets/almohada6.jpg";

export default function Categorias() {
  const categorias = [
    { title: "Colchones", image: ColchonImg },
    { title: "Set Base cama", image: BaseCamaImg },
    { title: "Almohadas", image: AlmohadaImg },
    { title: "Accesorios de cama", image: AccesoriosImg },
  ];

  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-24">

        {/* Título */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Compra por categorías
          </h2>
          <p className="mt-4 text-gray-600">
            Encuentra fácilmente el producto que estás buscando
          </p>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 justify-items-center">

          {categorias.map((cat, index) => (
            <div
              key={index}
              className="group cursor-pointer flex flex-col items-center"
            >
              {/* Círculo */}
              <div className="w-[180px] h-[180px] rounded-full overflow-hidden bg-gray-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Texto */}
              <span className="mt-5 text-center text-sm font-medium text-gray-900">
                {cat.title}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
