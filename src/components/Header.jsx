// import { useState } from "react";
// import logo from "../assets/logo.png"; // ajusta si el nombre cambia

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="w-full bg-white border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src={logo}
//             alt="Logo"
//             className="h-10 sm:h-12 md:h-14 w-auto"
//           />
//         </div>

//         {/* Menú desktop */}
//         <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
//           <a href="#" className="hover:text-black">Inicio</a>
//           <a href="#" className="hover:text-black">Colchones</a>
//           <a href="#" className="hover:text-black">Almohadas</a>
//           <a href="#" className="hover:text-black">Ofertas</a>
//           <a href="#" className="hover:text-black">Contacto</a>

//           <button className="ml-4 bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition">
//             Comprar ahora
//           </button>
//         </nav>

//         {/* Botón hamburguesa (mobile) */}
//         <button
//           className="md:hidden text-gray-800"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Menú mobile */}
//       {menuOpen && (
//         <div className="md:hidden border-t bg-white px-4 py-4 space-y-4 text-sm font-medium text-gray-700">
//           <a href="#" className="block">Inicio</a>
//           <a href="#" className="block">Colchones</a>
//           <a href="#" className="block">Almohadas</a>
//           <a href="#" className="block">Ofertas</a>
//           <a href="#" className="block">Contacto</a>

//           <button className="w-full bg-black text-white py-2 rounded-full mt-2">
//             Comprar ahora
//           </button>
//         </div>
//       )}
//     </header>
//   );
// }

import { useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto transition-transform duration-200 hover:scale-105"
          />
        </div>

        {/* Menú desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {["Inicio", "Colchones", "Almohadas", "Ofertas", "Contacto"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="relative hover:text-black transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}

          <button className="ml-4 bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 cursor-pointer transition shadow-sm">
            Comprar ahora
          </button>
        </nav>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menú mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <div className="bg-white px-4 py-4 space-y-4 text-sm font-medium text-gray-700">
          {["Inicio", "Colchones", "Almohadas", "Ofertas", "Contacto"].map(
            (item) => (
              <a key={item} href="#" className="block">
                {item}
              </a>
            )
          )}

          <button className="w-full bg-black text-white py-2 rounded-full mt-2">
            Comprar ahora
          </button>
        </div>
      </div>
    </header>
  );
}
