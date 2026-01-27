const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-3xl font-bold mb-4">ALTUSBRANDING</div>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Especializada em branding, design gráfico e web design, focada em construir marcas sólidas, coerentes e memoráveis.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white">Behance</a>
          </div>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} AltusBranding. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;