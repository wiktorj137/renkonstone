import React, { useState, useEffect } from 'react';
import { services } from '@/constants/data';
import { Section, SectionHeader, Card } from '@/components/ui';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  isExpanded: boolean;
  onToggle: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isExpanded, onToggle }) => {
  return (
    <Card
      className={`overflow-hidden transition-all duration-500 ${
        isExpanded ? 'bg-renkon-dark-2 border-renkon-orange/40' : 'bg-renkon-dark-3 border-renkon-dark-4'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-6 md:p-8 flex items-center justify-between group"
      >
        <div className="flex items-center space-x-4 md:space-x-6 flex-1">
          <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
            isExpanded 
              ? 'bg-renkon-orange text-white' 
              : 'bg-renkon-orange/10 text-renkon-orange group-hover:bg-renkon-orange/20'
          }`}>
            <i className={`fas ${service.icon} text-xl md:text-2xl`} />
          </div>
          <div className="flex-1">
            <h3 
              className={`text-xl md:text-2xl font-semibold mb-2 transition-colors duration-300 ${
                isExpanded ? 'text-renkon-orange' : 'text-white group-hover:text-renkon-orange'
              }`}
              dangerouslySetInnerHTML={{ __html: service.title }}
            />
            <p className="text-sm md:text-base text-renkon-beige">
              {service.description}
            </p>
          </div>
        </div>
        <div className={`ml-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
          <i className="fas fa-chevron-down text-renkon-orange text-xl" />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
          <div className="border-t border-renkon-orange/20 pt-6">
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 md:space-x-4 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="mt-1.5 flex-shrink-0">
                    <i className="fas fa-check-circle text-renkon-orange text-base md:text-lg" />
                  </div>
                  <span className="text-sm md:text-base text-renkon-beige leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};

export const ServicesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const handleExpandService = (event: CustomEvent<{ serviceId: number }>) => {
      const serviceId = event.detail.serviceId;
      setExpandedId(serviceId);
      
      // Scroll to the specific service card after a short delay
      setTimeout(() => {
        const serviceCard = document.querySelector(`[data-service-id="${serviceId}"]`);
        if (serviceCard) {
          serviceCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 600);
    };

    window.addEventListener('expandService', handleExpandService as EventListener);
    return () => {
      window.removeEventListener('expandService', handleExpandService as EventListener);
    };
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Section id="services">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(90deg, transparent 98%, #dd8500 100%), linear-gradient(0deg, transparent 98%, #dd8500 100%)',
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          icon="fa-gem"
          title={
            <>
              Nasze <span className="text-renkon-orange font-medium">Usługi</span>
            </>
          }
          subtitle="Kompleksowe usługi w zakresie szlifowania, renowacji i konserwacji powierzchni z lastryka i marmuru"
        />

        {/* Introduction */}
        <div className="mb-12 lg:mb-16">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Left - Main Description */}
            <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-renkon-dark-3 to-renkon-dark-2 border border-renkon-orange/20">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-renkon-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-info-circle text-renkon-orange text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Zakres <span className="text-renkon-orange">Usług</span>
                  </h3>
                  <p className="text-base text-renkon-beige leading-relaxed">
                    Wykonuję kompleksowe usługi w zakresie <span className="text-white font-medium">szlifowania posadzek, schodów oraz ścian</span> wykonanych w technologii lastriko lub z okładziny marmurowej.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Process Highlight */}
            <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-renkon-orange/10 to-renkon-dark-2 border border-renkon-orange/30">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-renkon-orange/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-cogs text-renkon-orange text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Proces <span className="text-renkon-orange">Renowacji</span>
                  </h3>
                  <p className="text-base text-renkon-beige leading-relaxed">
                    Renowacja to <span className="text-white font-medium">czasochłonny proces</span>, który polega na kilkukrotnym szlifowaniu lastryka lub marmuru padami diamentowymi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="mt-6 lg:mt-8 grid sm:grid-cols-3 gap-4 lg:gap-6">
            <div className="relative p-5 md:p-6 rounded-xl bg-renkon-dark-3 border border-renkon-dark-4 hover:border-renkon-orange/30 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-renkon-orange/20 rounded-lg flex items-center justify-center group-hover:bg-renkon-orange/30 transition-colors">
                  <span className="text-renkon-orange font-bold text-sm">1</span>
                </div>
                <h4 className="text-white font-semibold text-sm md:text-base">Naprawa</h4>
              </div>
              <p className="text-xs md:text-sm text-renkon-beige leading-relaxed">
                Uzupełnienie ubytków odpowiednio dobraną kolorystycznie szpachlą z właściwym kruszywem
              </p>
            </div>

            <div className="relative p-5 md:p-6 rounded-xl bg-renkon-dark-3 border border-renkon-dark-4 hover:border-renkon-orange/30 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-renkon-orange/20 rounded-lg flex items-center justify-center group-hover:bg-renkon-orange/30 transition-colors">
                  <span className="text-renkon-orange font-bold text-sm">2</span>
                </div>
                <h4 className="text-white font-semibold text-sm md:text-base">Wykończenie</h4>
              </div>
              <p className="text-xs md:text-sm text-renkon-beige leading-relaxed">
                Końcowy etap w różnych stopniach połysku – w zależności od potrzeb klienta
              </p>
            </div>

            <div className="relative p-5 md:p-6 rounded-xl bg-renkon-dark-3 border border-renkon-dark-4 hover:border-renkon-orange/30 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-renkon-orange/20 rounded-lg flex items-center justify-center group-hover:bg-renkon-orange/30 transition-colors">
                  <span className="text-renkon-orange font-bold text-sm">3</span>
                </div>
                <h4 className="text-white font-semibold text-sm md:text-base">Impregnacja</h4>
              </div>
              <p className="text-xs md:text-sm text-renkon-beige leading-relaxed">
                Cała powierzchnia zostaje zaimpregnowana, co zapewnia trwałość i estetyczny wygląd
              </p>
            </div>
          </div>
        </div>

        {/* Services Accordion */}
        <div className="space-y-4 mb-12 lg:mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-service-id={service.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                service={service}
                isExpanded={expandedId === service.id}
                onToggle={() => toggleExpand(service.id)}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-6xl mx-auto">
          <Card className="relative overflow-hidden bg-gradient-to-br from-renkon-dark-2 to-renkon-dark-3 border-renkon-orange/30">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-renkon-orange/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-renkon-orange/5 rounded-full blur-3xl" />
            
            <div className="relative p-8 md:p-12">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-10">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-renkon-orange to-orange-600 rounded-2xl shadow-lg">
                    <i className="fas fa-lightbulb text-white text-4xl" />
                  </div>
                </div>
                
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Jak <span className="text-renkon-orange">Pracujemy?</span>
                  </h3>
                  <p className="text-renkon-beige/90 leading-relaxed">
                    Profesjonalne podejście na każdym etapie - od <span className="text-white font-medium">bezpłatnej wyceny</span> po <span className="text-white font-medium">gwarancję wykonanych prac</span>.
                  </p>
                </div>
              </div>

              {/* Key Benefits - Horizontal Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-renkon-dark-3/50 border border-renkon-dark-4 hover:border-renkon-orange/30 transition-all duration-300 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-renkon-orange/20 rounded-xl flex items-center justify-center group-hover:bg-renkon-orange/30 transition-colors duration-300">
                      <i className="fas fa-calculator text-renkon-orange text-xl" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1.5">
                      Bezpłatna Wycena
                    </h4>
                    <p className="text-sm text-renkon-beige/80 leading-relaxed">
                      Szczegółowa analiza i transparentna kalkulacja kosztów
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-renkon-dark-3/50 border border-renkon-dark-4 hover:border-renkon-orange/30 transition-all duration-300 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-renkon-orange/20 rounded-xl flex items-center justify-center group-hover:bg-renkon-orange/30 transition-colors duration-300">
                      <i className="fas fa-clock text-renkon-orange text-xl" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1.5">
                      Terminowość
                    </h4>
                    <p className="text-sm text-renkon-beige/80 leading-relaxed">
                      Dotrzymujemy ustalonych terminów realizacji projektów
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-renkon-dark-3/50 border border-renkon-dark-4 hover:border-renkon-orange/30 transition-all duration-300 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-renkon-orange/20 rounded-xl flex items-center justify-center group-hover:bg-renkon-orange/30 transition-colors duration-300">
                      <i className="fas fa-broom text-renkon-orange text-xl" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1.5">
                      Pełna Obsługa
                    </h4>
                    <p className="text-sm text-renkon-beige/80 leading-relaxed">
                      Od przygotowania powierzchni po końcowe sprzątanie
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};
