import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 py-2 md:py-3 flex justify-between items-center">
        <div className={`font-bold text-2xl md:text-3xl transition-colors duration-300 ${
          isScrolled ? 'text-slate-800' : 'text-white'
        }`}>
          Dr. Alexandre
        </div>
        
        <button 
          className={`md:hidden focus:outline-none transition-colors duration-300 ${
            isScrolled ? 'text-slate-800' : 'text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden md:flex space-x-8 items-center">
          <a 
            href="#benefits" 
            className={`font-medium text-base transition-colors duration-300 hover:text-teal-500 ${
              isScrolled ? 'text-slate-700' : 'text-white/90'
            }`}
          >
            Programa
          </a>
          <a 
            href="#why" 
            className={`font-medium text-base transition-colors duration-300 hover:text-teal-500 ${
              isScrolled ? 'text-slate-700' : 'text-white/90'
            }`}
          >
            ¿Por qué funciona?
          </a>
          <a 
            href="#about" 
            className={`font-medium text-base transition-colors duration-300 hover:text-teal-500 ${
              isScrolled ? 'text-slate-700' : 'text-white/90'
            }`}
          >
            Sobre mí
          </a>
        </nav>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg md:hidden">
            <nav className="flex flex-col p-6 space-y-4">
              <a 
                href="#benefits" 
                className="text-slate-700 hover:text-teal-600 transition-colors py-2 font-medium text-base"
                onClick={() => setIsOpen(false)}
              >
                Programa
              </a>
              <a 
                href="#why" 
                className="text-slate-700 hover:text-teal-600 transition-colors py-2 font-medium text-base"
                onClick={() => setIsOpen(false)}
              >
                ¿Por qué funciona?
              </a>
              <a 
                href="#about" 
                className="text-slate-700 hover:text-teal-600 transition-colors py-2 font-medium text-base"
                onClick={() => setIsOpen(false)}
              >
                Sobre mí
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;