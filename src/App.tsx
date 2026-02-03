import Header from "./components/Header";
import Hero from "./components/Hero";
import Method from "./components/Method";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Differentials from "./components/Differentials";
import Contact from "./components/Contact";
import About from "./components/About";
import { Toaster } from "./components/ui/toaster";
import { Seo } from "./components/Seo";

function App() {
  return (
    <>
      <Seo
        title="Altus Branding | Branding estratégico, design e experiência digital"
        description="Branding estratégico, identidade visual, design de alto impacto e experiências digitais para marcas que buscam autoridade e crescimento real."
      />
      <Toaster />
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Services />
        <Method />
        <Differentials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
