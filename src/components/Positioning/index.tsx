const Positioning = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">NOSSO POSICIONAMENTO</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl text-gray-700 mb-8 text-center">
            NÃO CRIAMOS APENAS IDENTIDADES VISUAIS. CRIAMOS SISTEMAS DE MARCA PENSADOS PARA:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">DIFERENCIAR SUA EMPRESA</h3>
              <p className="text-gray-600">Destaque-se no mercado com uma identidade única.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">GERAR PERCEPÇÃO DE VALOR</h3>
              <p className="text-gray-600">Aumente o valor percebido da sua marca.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">COMUNICAR AUTORIDADE</h3>
              <p className="text-gray-600">Transmita confiança e expertise.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">SUSTENTAR CRESCIMENTO</h3>
              <p className="text-gray-600">Crie bases sólidas para expandir seu negócio.</p>
            </div>
          </div>
          <p className="text-center text-gray-700 mt-12 text-xl">
            CADA PROJETO NASCE DA ESTRATÉGIA E TERMINA NA EXPERIÊNCIA DO USUÁRIO.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Positioning;