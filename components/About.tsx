
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-corporate-navy text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-5/12 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-corporate-gold opacity-10 rounded-full animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
              alt="Dra. Wanessa Monteiro - Especialista em Compliance e DPO" 
              loading="lazy"
              decoding="async"
              className="relative z-10 w-full rounded-3xl border-2 border-corporate-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute -bottom-6 -right-6 bg-corporate-gold p-6 rounded-2xl z-20 shadow-xl hidden md:block">
               <p className="text-xs font-bold uppercase tracking-widest text-corporate-navy">Goiânia · GO</p>
               <p className="text-lg font-serif font-bold text-white">Consultoria Global</p>
            </div>
          </div>
          <div className="lg:w-7/12">
            <span className="text-corporate-gold font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Sobre a Dra. Wanessa</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-10 leading-tight">Wanessa Monteiro</h2>
            <div className="space-y-8 text-gray-300 text-lg leading-relaxed font-light">
              <p>
                Sou <strong>Advogada Especialista em Direito do Trabalho</strong>, com ampla experiência em assessoria e consultoria jurídica para empresas de diversos setores. Atuo como <strong>Compliance Officer</strong>, assegurando a conformidade das operações empresariais com as normativas legais e regulatórias.
              </p>
              <p>
                Como <strong>DPO (Data Protection Officer)</strong>, sou responsável pela gestão e proteção de dados pessoais, garantindo o cumprimento integral da <strong>LGPD</strong> e orientando organizações sobre as melhores práticas em privacidade e segurança da informação.
              </p>
              <p>
                Minha expertise também se estende à <strong>Auditoria de Sistemas de Gestão Integrados (SGI)</strong>, realizando auditorias internas e externas sob os padrões <strong>ISO NBRs 9001 (Qualidade), 14001 (Meio Ambiente) e 45001 (Saúde e Segurança Ocupacional)</strong>, auxiliando empresas a alcançar certificações internacionais.
              </p>
            </div>
            
            <div className="mt-12 pt-10 border-t border-white/10 flex flex-wrap items-center gap-10">
               <div>
                  <div className="text-4xl font-serif text-corporate-gold font-bold">ISO</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-1">Sistemas de Gestão</div>
               </div>
               <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
               <div>
                  <div className="text-4xl font-serif text-corporate-gold font-bold">DPO</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-1">Proteção de Dados</div>
               </div>
               <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
               <div>
                  <div className="text-4xl font-serif text-corporate-gold font-bold">SGI</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-1">Consultoria Integrada</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
