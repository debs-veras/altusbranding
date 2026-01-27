import React from "react";
import "../styles/fonts.css";

const Home: React.FC = () => (
  <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-blue-200 font-altus">
    <section className="text-center p-8 rounded-3xl shadow-xl bg-white/80 backdrop-blur-md max-w-xl w-full">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-900 tracking-tight">
        Altus Branding
      </h1>
      <p className="text-lg md:text-2xl text-blue-700 font-medium">
        Transformando marcas em experiências memoráveis.
      </p>
    </section>
  </main>
);

export default Home;
