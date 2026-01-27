const Results = () => {
  const results = [
    'Marca mais forte e reconhecida',
    'Comunicação consistente',
    'Maior percepção de valor',
    'Presença digital profissional',
    'Melhor conexão com o público'
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">RESULTADOS ESPERADOS</h2>
        <div className="max-w-4xl mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {results.map((result, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xl text-gray-700">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Results;