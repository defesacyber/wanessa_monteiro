
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Compliance & Integridade',
      desc: 'Implementação de programas de ética e integridade corporativa, assegurando conformidade com normativas legais e regulatórias.',
      icon: '🏛️'
    },
    {
      title: 'Privacidade & LGPD (DPO)',
      desc: 'Gestão completa da Proteção de Dados Pessoais. Atuação como Data Protection Officer focado em privacidade e segurança da informação.',
      icon: '🔐'
    },
    {
      title: 'SGI (ISO 9001, 14001, 45001)',
      desc: 'Consultoria e auditoria em Sistemas de Gestão Integrados: Qualidade, Meio Ambiente e Saúde e Segurança Ocupacional.',
      icon: '📊'
    },
    {
      title: 'Direito do Trabalho Especializado',
      desc: 'Assessoria jurídica estratégica para empresas de diversos setores, focada em redução de passivos e segurança operacional.',
      icon: '⚖️'
    },
    {
      title: 'Auditoria de Sistemas',
      desc: 'Realização de auditorias internas e externas para avaliar conformidade com padrões ISO, visando certificações internacionais.',
      icon: '🔍'
    },
    {
      title: 'Gestão da Qualidade',
      desc: 'Melhoria de processos organizacionais e implementação de cultura voltada para o desenvolvimento sustentável e ético.',
      icon: '📈'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-5xl text-corporate-navy mb-6">Expertise Multidisciplinar</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">Soluções integradas que unem o Direito à gestão de qualidade internacional, garantindo uma operação blindada e eficiente.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="p-10 border border-gray-100 rounded-2xl hover:border-corporate-gold hover:shadow-xl transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-corporate-gold/5 rounded-bl-full group-hover:bg-corporate-gold/10 transition-colors"></div>
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
              <h3 className="font-serif text-xl font-bold text-corporate-gold mb-4">{s.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
