
import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5562999999999" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25d366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
      aria-label="Falar com Dra. Wanessa no WhatsApp"
    >
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.52.909 3.253 1.388 5.025 1.389 5.405 0 9.803-4.397 9.805-9.805.001-2.618-1.02-5.08-2.875-6.936-1.854-1.854-4.314-2.874-6.934-2.874-5.407 0-9.805 4.399-9.807 9.807-.001 1.83.477 3.614 1.384 5.178l-1.021 3.731 3.823-1.002z"/>
        <path d="M17.472 14.382c-.301-.15-1.782-.88-2.057-.981-.275-.101-.475-.15-.675.15-.199.3-.775.981-.95 1.181-.175.2-.35.225-.651.075-.301-.15-1.27-.467-2.418-1.492-.893-.797-1.496-1.782-1.671-2.081-.175-.3-.018-.462.13-.61.135-.133.301-.351.452-.525.151-.175.2-.3.301-.5.101-.2.051-.375-.026-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.491-.509-.675-.519-.174-.01-.375-.011-.575-.011-.2 0-.525.075-.8.375-.275.3-1.05 1.026-1.05 2.501 0 1.475 1.075 2.899 1.225 3.099.15.2 2.114 3.227 5.122 4.524.715.308 1.272.492 1.706.63.718.228 1.372.196 1.89.119.578-.085 1.782-.728 2.032-1.429.25-.7.25-1.3 0-1.429-.175-.15-.45-.225-.75-.375z"/>
      </svg>
      <span className="absolute right-full mr-4 bg-white text-corporate-navy px-4 py-2 rounded shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Agendar Reunião
      </span>
    </a>
  );
};

export default WhatsAppButton;
