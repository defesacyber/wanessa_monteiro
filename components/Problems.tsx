
import React from 'react';

const Problems: React.FC = () => {
  const problems = [
    {
      title: 'Passivos Trabalhistas Ocultos',
      desc: 'Falhas processuais na gestão de jornada e desligamentos geram condenações que comprometem o fluxo de caixa.',
      icon: '⚖️'
    },
    {
      title: 'Crise Reputacional e Ética',
      desc: 'A ausência de políticas claras contra assédio e má conduta pode destruir décadas de construção de marca.',
      icon: '📉'
    },
    {
      title: 'Inconformidade Regulatória',
      desc: 'Multas pesadas e interdições decorrentes do descumprimento de normas da LGPD e regulamentações do setor.',
      icon: '📜'
    }
  ];

  return (
    <section id="riscos" className="py-24 bg-corporate-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-corporate-navy mb-6">
            O custo da negligência é sempre superior ao investimento em prevenção.
          </h2>
          <p className="text-gray-500 text-lg mb-8">Empresas que não possuem uma estrutura de compliance sólida estão constantemente vulneráveis a prejuízos evitáveis.</p>
          <div className="h-1 w-24 bg-corporate-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {problems.map((p, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border-b-4 border-corporate-gold hover:shadow-2xl transition-all duration-300">
              <div className="text-4xl mb-6">{p.icon}</div>
              <h3 className="font-serif text-xl font-bold text-corporate-gold mb-4">{p.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
