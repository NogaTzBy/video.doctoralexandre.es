import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">Dr. Alexandre</h3>
              <p className="text-base text-slate-400 mb-4 leading-relaxed">
                Medicina especializada en salud digestiva y epigenética clínica, ofreciendo soluciones personalizadas para problemas digestivos.
              </p>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#benefits" className="text-base text-slate-400 hover:text-white transition-colors">
                    Programa
                  </a>
                </li>
                <li>
                  <a href="#why" className="text-base text-slate-400 hover:text-white transition-colors">
                    ¿Por qué funciona?
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-base text-slate-400 hover:text-white transition-colors">
                    Sobre mí
                  </a>
                </li>
                <li>
                  <a href="#join" className="text-base text-slate-400 hover:text-white transition-colors">
                    Únete ahora
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contacto</h3>
              <p className="text-base text-slate-400 mb-3">
                Para más información, escríbenos a:
              </p>
              <a href="mailto:info@dralexandre.com" className="text-teal-400 hover:text-teal-300 transition-colors text-base">
                info@dralexandre.com
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-6 text-center text-slate-500">
            <p className="text-base">© {currentYear} Dr. Alexandre. Todos los derechos reservados.</p>
            <p className="mt-3 space-x-4">
              <a href="#" className="text-slate-500 hover:text-slate-400 transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-400 transition-colors">
                Términos y condiciones
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-400 transition-colors">
                Aviso legal
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;