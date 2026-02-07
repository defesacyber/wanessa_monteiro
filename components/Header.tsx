
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Riscos', href: '#riscos' },
    { name: 'Diagnóstico', href: '#simulador' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
  ];

  // Fecha o menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Bloqueia o scroll do corpo quando o menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-corporate-gold/30 shadow-sm">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-bold text-lg md:text-xl tracking-tighter text-corporate-navy uppercase z-[60] flex items-center">
          WANESSA <span className="text-corporate-gold ml-1.5 font-light">MONTEIRO</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-[13px] tracking-widest text-corporate-navy uppercase" aria-label="Navegação Principal">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-corporate-gold focus:text-corporate-gold focus:outline-none transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-corporate-gold transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="https://wa.me/5562999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-corporate-gold hover:bg-corporate-navy text-white px-6 py-2.5 rounded shadow-sm transition-all transform hover:-translate-y-0.5"
          >
            CONTATO DIRETO
          </a>
        </nav>

        {/* Hamburger Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden z-[60] p-2 text-corporate-navy focus:outline-none transition-colors duration-300"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-controls="mobile-menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2 text-white' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 text-white' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Backdrop (Overlay) */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[40] md:hidden transition-opacity duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Content Panel */}
      <div 
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-corporate-navy z-[50] md:hidden transition-transform duration-500 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-serif text-white hover:text-corporate-gold transition-colors block w-full py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8 w-full">
            <a 
              href="https://wa.me/5562999999999" 
              onClick={() => setIsMenuOpen(false)}
              className="block w-full bg-corporate-gold text-white px-8 py-4 rounded-xl font-bold text-lg text-center shadow-lg active:scale-95 transition-transform"
            >
              Falar no WhatsApp
            </a>
          </div>
          <div className="mt-auto pb-12">
            <p className="text-gray-500 text-xs tracking-widest uppercase">Wanessa Monteiro</p>
            <p className="text-corporate-gold text-[10px] mt-1">Compliance & Estratégia</p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
