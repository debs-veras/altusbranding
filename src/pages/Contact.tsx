import React from "react";

const Contact: React.FC = () => (
  <section className="max-w-xl mx-auto my-12 p-8 bg-white/80 rounded-3xl shadow-lg font-altus">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">
      Contato
    </h2>
    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Seu nome"
        required
        className="p-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="email"
        placeholder="Seu e-mail"
        required
        className="p-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        placeholder="Mensagem"
        required
        className="p-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[120px]"
      />
      <button
        type="submit"
        className="bg-blue-700 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition"
      >
        Enviar
      </button>
    </form>
  </section>
);

export default Contact;
