
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-hero relative overflow-hidden flex items-center min-h-[90vh]">
      <div className="container mx-auto px-4 md:px-8 text-center text-white z-10 py-20">
        <span className="inline-block text-corporate-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 animate-fadeIn">
          Compliance · DPO · Gestão da Qualidade (ISO)
        </span>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] max-w-5xl mx-auto">
          Excelência em Gestão de Riscos, <span className="text-corporate-gold">Integridade</span> e Proteção de Dados.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-200 leading-relaxed font-medium">
          Consultoria especializada em Direito do Trabalho, LGPD e Sistemas de Gestão Integrados (ISO 9001, 14001, 45001). Transformando conformidade em diferencial competitivo para empresas sólidas.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="#simulador" 
            className="w-full md:w-auto bg-corporate-gold hover:bg-corporate-goldDark focus:ring-4 focus:ring-corporate-gold/50 text-white px-12 py-5 rounded font-bold text-lg transition-all shadow-2xl hover:scale-105 active:scale-95 outline-none"
          >
            INICIAR DIAGNÓSTICO
          </a>
          <a 
            href="#servicos" 
            className="w-full md:w-auto border border-white/30 bg-white/5 hover:bg-white/10 focus:bg-white/10 backdrop-blur-sm text-white px-12 py-5 rounded font-bold text-lg transition-all outline-none"
          >
            NOSSAS SOLUÇÕES
          </a>
        </div>
        <p className="text-xs opacity-50 mt-12 uppercase tracking-widest flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          Sediada em Goiânia · Atuação Nacional
        </p>
      </div>
    </section>
  );
};

export default Hero;
