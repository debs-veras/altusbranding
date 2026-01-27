const Clients = () => {
  return (
    <section id="clientes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          PARA QUEM TRABALHAMOS
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl text-gray-700 mb-8 text-center">
            Atendemos empresas que buscam:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                POSICIONAMENTO PROFISSIONAL
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                AUTORIDADE NO MERCADO
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                CLAREZA DE COMUNICAÇÃO
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                CRESCIMENTO SUSTENTÁVEL
              </h3>
            </div>
          </div>
          <p className="text-center text-gray-700 text-xl">
            STARTUPS • PEQUENAS E MÉDIAS EMPRESAS • PROFISSIONAIS • MARCAS
            PESSOAIS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
