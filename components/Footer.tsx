
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030811] text-white pt-24 pb-12 border-t border-corporate-gold/20">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-5xl mb-6 max-w-3xl mx-auto">Pronta para elevar o nível da sua organização?</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">Vamos conectar seu negócio aos padrões globais de ética, qualidade e proteção de dados.</p>
        
        <a 
          href="https://wa.me/5562999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-corporate-gold hover:bg-white hover:text-corporate-navy text-white px-16 py-5 rounded-full font-bold text-xl transition-all duration-500 shadow-[0_0_30px_rgba(197,160,89,0.3)]"
        >
          CONECTAR NO WHATSAPP
        </a>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-gray-500">
          <div className="text-left">
            <div className="font-bold tracking-[0.2em] text-white uppercase text-base">
              WANESSA <span className="text-corporate-gold font-light">MONTEIRO</span>
            </div>
            <p className="text-[10px] uppercase mt-1 text-gray-400">Goiânia - GO | Brasil</p>
          </div>
          <div className="flex gap-10">
            <a href="https://www.linkedin.com/in/wanessamonteiro/" target="_blank" rel="noopener noreferrer" className="hover:text-corporate-gold transition-colors uppercase tracking-widest text-[11px]">LinkedIn</a>
            <a href="https://www.instagram.com/wanessamonteiro.adv/" target="_blank" rel="noopener noreferrer" className="hover:text-corporate-gold transition-colors uppercase tracking-widest text-[11px]">Instagram</a>
            <a href="mailto:contato@wanessamonteiro.com.br" className="hover:text-corporate-gold transition-colors uppercase tracking-widest text-[11px]">E-mail</a>
          </div>
          <p className="text-[11px] tracking-wider uppercase opacity-40">© 2026 Wanessa Monteiro | Compliance · DPO · SGI. OAB/GO 00.000</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
