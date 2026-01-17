import Header from "./components/Header";
import Hero from "./components/Hero";
import SeccionConfianza from "./components/Seccion_confianza";
import Categorias from "./components/Categorias";
import ReviewMap from "./components/ReviewMap";
import BeneficiosDescanso from "./components/BeneficiosDescanso";
import ComoElegirColchon from "./components/ComoElegirColchon";
import ProcesoCompra from "./components/ProcesoCompra";
import SeccionMarcas from "./components/SeccionMarcas";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Benefits2 from "./components/Benefits2";

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <BeneficiosDescanso/>
      <ComoElegirColchon/>
      <SeccionConfianza/>
      <ReviewMap/>
      <Categorias/>
      <ProcesoCompra/>
      <Testimonials/>
      <SeccionMarcas/>
      <Footer/>
      {/* Video publicitario <Benefits2/> */}
    </>
  );
}

export default App;
