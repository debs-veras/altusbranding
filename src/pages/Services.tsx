import React from "react";

const Services: React.FC = () => (
  <section className="max-w-2xl mx-auto my-12 p-8 bg-white/80 rounded-3xl shadow-lg font-altus">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">
      Serviços
    </h2>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <li className="bg-blue-100 rounded-xl p-4 text-blue-800 font-semibold shadow">
        Branding
      </li>
      <li className="bg-blue-100 rounded-xl p-4 text-blue-800 font-semibold shadow">
        Design Gráfico
      </li>
      <li className="bg-blue-100 rounded-xl p-4 text-blue-800 font-semibold shadow">
        Consultoria de Marca
      </li>
      <li className="bg-blue-100 rounded-xl p-4 text-blue-800 font-semibold shadow">
        Gestão de Redes Sociais
      </li>
    </ul>
  </section>
);

export default Services;
