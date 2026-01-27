import Header from "./components/Header";
import Hero from "./components/Hero";
import Method from "./components/Method";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Differentials from "./components/Differentials";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
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
  );
}

export default App;
