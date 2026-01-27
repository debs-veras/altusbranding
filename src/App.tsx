import Header from "./components/Header";
import Hero from "./components/Hero";
// import Positioning from "./components/Positioning";
// import Services from "./components/Services";
import Method from "./components/Method";
// import Differentiators from "./components/Differentiators";
// import Clients from "./components/Clients";
// import Results from "./components/Results";
// import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Services from "./components/Services";
import About from "./pages/About";
import Differentials from "./components/Differentials";

function App() {
  return (
  <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Method />
      <Differentials />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
