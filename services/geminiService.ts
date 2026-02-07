
import { GoogleGenAI } from "@google/genai";

/**
 * Interface para análise de riscos jurídicos corporativos via Gemini API.
 */
export async function analyzeRisk(prompt: string): Promise<string> {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("VITE_GEMINI_API_KEY não encontrada. Usando modo de simulação.");
      return simulateAnalysis(prompt);
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: `Você é a Dra. Wanessa Monteiro, Advogada, Compliance Officer, DPO (Data Protection Officer) e Consultora em Sistemas de Gestão Integrados (ISO 9001, 14001, 45001). 
        Seu tom é formal, executivo, focado em governança corporativa e integridade. 
        Suas respostas devem refletir expertise não apenas em Direito do Trabalho, mas também em proteção de dados (LGPD) e padrões internacionais de qualidade.
        Sempre forneça uma visão estratégica que ajude o empresário a entender a necessidade de uma auditoria técnica completa.`
    }).generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.5,
        topP: 0.9,
      }
    });

    const result = await response.response;
    return result.text() || "Análise preliminar indisponível. Por favor, entre em contato diretamente.";
  } catch (error) {
    console.error("Erro na integração com Gemini:", error);
    return "Não foi possível gerar o diagnóstico automático devido a uma falha técnica. Por favor, entre em contato diretamente.";
  }
}

/**
 * Simulação de resposta caso a API não esteja configurada
 */
function simulateAnalysis(prompt: string): string {
  return "Com base nas suas respostas, identificamos pontos críticos que necessitam de atenção imediata, especialmente no que tange à conformidade com a LGPD e mitigação de passivos trabalhistas. Recomendamos uma auditoria técnica completa para blindar sua operação.";
}
