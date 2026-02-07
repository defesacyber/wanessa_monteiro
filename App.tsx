
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Services from './components/Services';
import About from './components/About';
import RiskAssessment from './components/RiskAssessment';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-corporate-gold text-white px-4 py-2 z-[100] rounded shadow-lg">
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        <Hero />
        <Problems />
        <RiskAssessment />
        <Services />
        <About />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
