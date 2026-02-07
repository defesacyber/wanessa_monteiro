
import React, { useState } from 'react';
import { analyzeRisk } from '../services/geminiService';

const questions = [
  "Sua empresa possui um mapeamento de dados pessoais (Data Mapping) em conformidade com a LGPD?",
  "Existe um programa formal de Compliance e Canal de Ética operando regularmente?",
  "A organização realiza auditorias internas periódicas baseadas em normas ISO (9001, 14001 ou 45001)?",
  "As políticas de saúde e segurança ocupacional são revisadas para evitar passivos trabalhistas?",
  "Sua empresa possui um plano de resposta a incidentes de segurança da informação?"
];

const RiskAssessment: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    if (currentStep < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentStep(currentStep + 1);
    } else {
      submitAssessment(newAnswers);
    }
  };

  const whatsappUrl = "https://wa.me/5562999999999"; // TODO: Substituir pelo número real

  const submitAssessment = async (finalAnswers: string[]) => {
    setLoading(true);
    try {
      const prompt = `Analise como Dra. Wanessa Monteiro (Especialista em SGI, DPO e Compliance). O cliente respondeu:
      ${questions.map((q, i) => `${q}: ${finalAnswers[i]}`).join('\n')}
      Forneça um diagnóstico executivo breve e uma recomendação de conformidade.`;
      
      const analysis = await analyzeRisk(prompt);
      setResult(analysis);
    } catch (error) {
      setResult("Ocorreu uma instabilidade. Por favor, solicite seu diagnóstico diretamente via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <section id="simulador" className="py-24 bg-corporate-navy text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">Simulador de Maturidade Corporativa</h2>
          <p className="text-gray-400 text-lg">Avalie seu nível de conformidade em Compliance, LGPD e Gestão da Qualidade.</p>
        </div>

        <div className="bg-white text-gray-900 p-8 md:p-16 rounded-3xl shadow-2xl relative min-h-[450px] flex flex-col justify-center border-t-8 border-corporate-gold">
          {!result && !loading && (
            <div className="animate-fadeIn">
              <div className="mb-10 text-center">
                <span className="text-corporate-gold font-bold text-xs tracking-[0.2em] uppercase bg-corporate-gold/10 px-4 py-2 rounded-full">Questão {currentStep + 1} de {questions.length}</span>
                <h3 className="text-2xl md:text-3xl font-serif text-corporate-navy mt-6 leading-tight">{questions[currentStep]}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button 
                  onClick={() => handleAnswer("Sim")}
                  className="bg-corporate-navy text-white py-5 rounded-xl font-bold hover:bg-corporate-gold focus:ring-4 focus:ring-corporate-gold/30 transition-all duration-300 outline-none"
                >
                  Sim
                </button>
                <button 
                  onClick={() => handleAnswer("Não")}
                  className="border-2 border-corporate-navy text-corporate-navy py-5 rounded-xl font-bold hover:bg-red-50 hover:border-red-500 focus:ring-4 focus:ring-red-500/20 transition-all duration-300 outline-none"
                >
                  Não
                </button>
                <button 
                  onClick={() => handleAnswer("Parcialmente")}
                  className="border-2 border-gray-200 text-gray-500 py-5 rounded-xl font-bold hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 transition-all duration-300 outline-none"
                >
                  Em andamento
                </button>
              </div>
            </div>
          )}

          {loading && (
            <div className="text-center py-16">
              <div className="w-16 h-16 border-4 border-corporate-gold border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
              <p className="text-corporate-navy font-bold text-xl font-serif">Processando auditoria preliminar...</p>
            </div>
          )}

          {result && (
            <div className="animate-fadeIn">
              <div className="flex items-center gap-4 mb-6 border-b pb-6">
                 <div className="w-12 h-12 bg-corporate-gold rounded-full flex items-center justify-center text-white text-2xl font-serif">W</div>
                 <div>
                    <h3 className="text-xl font-serif text-corporate-gold font-bold">Diagnóstico Estratégico</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Wanessa Monteiro | Compliance & DPO</p>
                 </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-10 text-lg italic">"{result}"</p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-corporate-gold text-white text-center py-5 px-8 rounded-xl font-bold shadow-xl hover:bg-corporate-goldDark transition-all"
                >
                  SOLICITAR AUDITORIA COMPLETA
                </a>
                <button 
                  onClick={reset}
                  className="py-5 px-8 text-corporate-navy font-bold hover:underline"
                >
                  Refazer simulador
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RiskAssessment;
