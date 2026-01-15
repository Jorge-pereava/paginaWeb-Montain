import Colchon from "../assets/Colchon.png"

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            El descanso que tu cuerpo merece
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Colchones y almohadas diseñados para ofrecer confort,
            elegancia y calidad a un precio accesible.
          </p>

          <button className="mt-8 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
            Comprar ahora
          </button>
        </div>

        {/* Imagen grande */}
        <div className="w-full h-[520px] rounded-3xl bg-gray-50 flex items-center justify-center">
        <img
            src={Colchon}
            alt="Colchón moderno"
            className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
        />
        </div>

      </div>
    </section>
  );
}