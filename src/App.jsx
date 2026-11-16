import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Artists from "./components/Artists";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans selection:bg-amber-500 selection:text-black">
      <Navbar />
      <Hero />
      <Gallery />
      <Artists />
      <Footer />
    </div>
  );
}