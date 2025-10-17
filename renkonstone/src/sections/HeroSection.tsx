import React from 'react';
import { Button } from '@/components/ui';
import { scrollToSection } from '@/utils';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="hero-gradient pt-24 md:pt-28 pb-12 md:pb-16 relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(221, 133, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(221, 133, 0, 0.05) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Profesjonalne
            <br />
            <span className="text-renkon-orange">Szlifowanie</span>
            <br />i Renowacja Marmuru
          </h1>

          {/* Business Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-renkon-beige mb-8 leading-relaxed max-w-3xl mx-auto">
            Specjalizujemy się w kompleksowej renowacji i konserwacji powierzchni
            kamiennych. Oferujemy usługi dla firm, instytucji publicznych oraz
            klientów indywidualnych.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="primary"
              size="lg"
              icon="fa-phone"
            >
              Zamów Wycenę
            </Button>
            <Button
              onClick={() => scrollToSection('#services')}
              variant="outline"
              size="lg"
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
