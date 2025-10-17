import React from 'react';
import { Button } from '@/components/ui';
import { scrollToSection } from '@/utils';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-28 md:pt-32 pb-16 md:pb-20 relative overflow-hidden bg-transparent"
    >
      {/* Animated glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-renkon-orange/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-renkon-beige/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Profesjonalne
            <br />
            <span className="text-renkon-orange">Szlifowanie</span>
            <br />i Renowacja Marmuru
          </h1>

          {/* Business Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-renkon-beige/90 mb-6 leading-relaxed max-w-2xl mx-auto">
            Specjalizujemy się w kompleksowej renowacji i konserwacji powierzchni
            kamiennych. Oferujemy usługi dla firm, instytucji publicznych oraz
            klientów indywidualnych.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="primary"
              size="md"
              icon="fa-phone"
            >
              Zamów Wycenę
            </Button>
            <Button
              onClick={() => scrollToSection('#services')}
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
