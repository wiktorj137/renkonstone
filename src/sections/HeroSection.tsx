import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="pt-32 md:pt-40 pb-24 md:pb-32 relative overflow-hidden bg-transparent"
    >
      {/* Subtle gradient backdrop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-renkon-orange/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-renkon-beige/3 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-[1.1] tracking-tight animate-fade-in">
            <span className="text-white inline-block">Szlifowanie i Renowacja</span><br />
            <span className="text-renkon-orange inline-block mt-2">Marmuru i Lastryko</span>
          </h1>

          {/* Business Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-renkon-beige/80 mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Specjalizujemy się w kompleksowej renowacji powierzchni kamiennych tj. marmur, lastryko, konglomerat. 
            Czyścimy daną powierzchnię poprzez szlifowanie. 
            Zaufali nam klienci biznesowi, instytucje publiczne oraz właściciele nieruchomości.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={() => navigate('/kontakt')}
              variant="primary"
              size="md"
              icon="fa-phone"
            >
              Zamów Wycenę
            </Button>
            <Button
              onClick={() => navigate('/uslugi')}
              variant="outline"
              size="md"
              icon="fa-list"
            >
              Zobacz Usługi
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
