import React, { useState, useEffect } from 'react';
import { services } from '@/constants/data';
import { Section, SectionHeader, Card, AccordionCard } from '@/components/ui';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  isExpanded: boolean;
  onToggle: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isExpanded, onToggle }) => {
  return (
    <AccordionCard
      isExpanded={isExpanded}
      onToggle={onToggle}
      title={service.title}
      description={service.description}
      icon={service.icon}
    >
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
    </AccordionCard>
  );
};

export const ServicesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [expandedStepId, setExpandedStepId] = useState<number | null>(null);

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

  const toggleStepExpand = (id: number) => {
    setExpandedStepId(expandedStepId === id ? null : id);
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
            {/* Step 1 - Naprawa */}
            <div className={`transition-all duration-300 ease-in-out ${expandedStepId === 1 ? '' : 'h-[140px] md:h-[160px]'}`}>
              <div className="h-full">
                <AccordionCard
                  isExpanded={expandedStepId === 1}
                  onToggle={() => toggleStepExpand(1)}
                  title="Naprawa"
                  description="Uzupełnienie ubytków odpowiednio dobraną kolorystycznie szpachlą z właściwym kruszywem"
                  badge={1}
                  className="h-full"
                  compact
                >
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3 transform transition-all duration-200">
                      <i className="fas fa-check-circle text-renkon-orange text-sm mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-renkon-beige leading-relaxed">
                        Dobór odpowiedniego kruszywa pasującego do istniejącej powierzchni
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 transform transition-all duration-200">
                      <i className="fas fa-check-circle text-renkon-orange text-sm mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-renkon-beige leading-relaxed">
                        Scalenie kolorystyczne z otoczeniem
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 transform transition-all duration-200">
                      <i className="fas fa-check-circle text-renkon-orange text-sm mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-renkon-beige leading-relaxed">
                        Wypełnienie szczelin i pęknięć specjalistycznymi masami
                      </span>
                    </li>
                  </ul>
                </AccordionCard>
              </div>
            </div>

            {/* Step 2 - Wykończenie */}
            <div className={`transition-all duration-300 ease-in-out ${expandedStepId === 2 ? '' : 'h-[140px] md:h-[160px]'}`}>
              <div className="h-full">
                <AccordionCard
                  isExpanded={expandedStepId === 2}
                  onToggle={() => toggleStepExpand(2)}
                  title="Wykończenie"
                  description="Końcowy etap w różnych stopniach połysku – w zależności od potrzeb klienta"
                  badge={2}
                  className="h-full"
                  compact
                >
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3 transform transition-all duration-200">
                      <i className="fas fa-check-circle text-renkon-orange text-sm mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-renkon-beige leading-relaxed">
                        Polerowanie do pełnego połysku lustrzanego
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 transform transition-all duration-200">
                      <i className="fas fa-check-circle text-renkon-orange text-sm mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-renkon-beige leading-relaxed">
                        Wykończenie półmatowe dla efektu naturalnego
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 transform transition-all duration-200">
                      <i className="fas fa-check-circle text-renkon-orange text-sm mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-renkon-beige leading-relaxed">
                        Krystalizacja powierzchni dla zwiększenia twardości
                      </span>
                    </li>
                  </ul>
                </AccordionCard>
              </div>
            </div>

            {/* Step 3 - Impregnacja */}
            <div className={`transition-all duration-300 ease-in-out ${expandedStepId === 3 ? '' : 'h-[140px] md:h-[160px]'}`}>
              <div className="h-full">
                <AccordionCard
                  isExpanded={expandedStepId === 3}
                  onToggle={() => toggleStepExpand(3)}
                  title="Impregnacja"
                  description="Cała powierzchnia zostaje zaimpregnowana, co zapewnia trwałość i estetyczny wygląd"
                  badge={3}
                  className="h-full"
                  compact
                >
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3 transform transition-all duration-200">
                      <i className="fas fa-check-circle text-renkon-orange text-sm mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-renkon-beige leading-relaxed">
                        Zabezpieczenie przed wchłanianiem zabrudzeń
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 transform transition-all duration-200">
                      <i className="fas fa-check-circle text-renkon-orange text-sm mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-renkon-beige leading-relaxed">
                        Ochrona przed plamami z płynów i tłuszczów
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 transform transition-all duration-200">
                      <i className="fas fa-check-circle text-renkon-orange text-sm mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-renkon-beige leading-relaxed">
                        Ułatwienie codziennego czyszczenia powierzchni
                      </span>
                    </li>
                  </ul>
                </AccordionCard>
              </div>
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
