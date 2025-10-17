import React from 'react';
import { Section, SectionHeader, Card } from '@/components/ui';

export const ContactSection: React.FC = () => {
  return (
    <Section id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon="fa-phone"
          title={
            <>
              Skontaktuj się <span className="text-renkon-orange font-medium">z Nami</span>
            </>
          }
          subtitle="Oferujemy bezpłatną wycenę i doradztwo techniczne. Skontaktuj się z nami telefonicznie lub mailowo."
        />

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            
            {/* Phone Contact */}
            <Card className="p-8 hover:border-renkon-orange/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-renkon-orange/20 rounded-xl flex items-center justify-center">
                  <i className="fas fa-phone-alt text-renkon-orange text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">Telefon</h3>
                  <a 
                    href="tel:+48503298623"
                    className="text-2xl font-bold text-renkon-orange hover:text-orange-400 transition-colors inline-block mb-3 hover:scale-105 transition-transform"
                  >
                    +48 503 298 623
                  </a>
                  <p className="text-renkon-beige text-sm leading-relaxed">
                    Zadzwoń, aby umówić się na bezpłatną wycenę lub uzyskać profesjonalne doradztwo techniczne.
                  </p>
                </div>
              </div>
            </Card>

            {/* Email Contact */}
            <Card className="p-8 hover:border-renkon-orange/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-renkon-orange/20 rounded-xl flex items-center justify-center">
                  <i className="fas fa-envelope text-renkon-orange text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
                  <a 
                    href="mailto:kontakt@renkonstone.pl"
                    className="text-xl font-semibold text-renkon-orange hover:text-orange-400 transition-colors inline-block mb-3"
                  >
                    kontakt@renkonstone.pl
                  </a>
                  <p className="text-renkon-beige text-sm leading-relaxed">
                    Napisz do nas, a odpowiemy najszybciej jak to możliwe. Standardowy czas odpowiedzi to do 24h.
                  </p>
                </div>
              </div>
            </Card>

            {/* Working Hours */}
            <Card className="p-8 hover:border-renkon-orange/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-renkon-orange/20 rounded-xl flex items-center justify-center">
                  <i className="fas fa-clock text-renkon-orange text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-4">Godziny Pracy</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-renkon-dark-4/50">
                      <span className="text-renkon-beige">Poniedziałek - Sobota</span>
                      <span className="text-white font-semibold">8:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-renkon-beige">Niedziela</span>
                      <span className="text-white font-semibold">Zamknięte</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

          </div>

          {/* Right Column - Why Contact Us */}
          <div>
            <Card className="p-8 lg:p-10 h-full bg-gradient-to-br from-renkon-dark-3 to-renkon-dark-2 border-renkon-orange/20">
              <div className="flex flex-col h-full">
                
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-renkon-orange/20 rounded-2xl mb-4">
                    <i className="fas fa-handshake text-renkon-orange text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Dlaczego warto się z nami skontaktować?
                  </h3>
                  <p className="text-renkon-beige leading-relaxed">
                    Jesteśmy do Twojej dyspozycji, aby pomóc w realizacji Twojego projektu. Gwarantujemy profesjonalne podejście na każdym etapie współpracy.
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-4 flex-1">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-renkon-orange/20 rounded-lg flex items-center justify-center mt-1">
                      <i className="fas fa-check text-renkon-orange text-xs" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Bezpłatna Wycena</h4>
                      <p className="text-sm text-renkon-beige/90">
                        Otrzymasz szczegółową wycenę bez żadnych zobowiązań w ciągu 24h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-renkon-orange/20 rounded-lg flex items-center justify-center mt-1">
                      <i className="fas fa-check text-renkon-orange text-xs" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Doradztwo Techniczne</h4>
                      <p className="text-sm text-renkon-beige/90">
                        Pomożemy dobrać najlepsze rozwiązanie dostosowane do Twojego projektu
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-renkon-orange/20 rounded-lg flex items-center justify-center mt-1">
                      <i className="fas fa-check text-renkon-orange text-xs" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Doświadczenie i Jakość</h4>
                      <p className="text-sm text-renkon-beige/90">
                        Ponad 15 lat doświadczenia w renowacji marmuru i lastryka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-renkon-orange/20 rounded-lg flex items-center justify-center mt-1">
                      <i className="fas fa-check text-renkon-orange text-xs" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Elastyczne Terminy</h4>
                      <p className="text-sm text-renkon-beige/90">
                        Dostosujemy się do Twojego harmonogramu i potrzeb projektu
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-renkon-orange/20 rounded-lg flex items-center justify-center mt-1">
                      <i className="fas fa-check text-renkon-orange text-xs" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Gwarancja Jakości</h4>
                      <p className="text-sm text-renkon-beige/90">
                        Każda realizacja objęta jest gwarancją na wykonane usługi
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-8 border-t border-renkon-dark-4">
                  <a
                    href="tel:+48503298623"
                    className="block w-full bg-renkon-orange hover:bg-orange-600 text-white text-center px-8 py-4 rounded-xl transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 group"
                  >
                    <i className="fas fa-phone mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    Zadzwoń Teraz
                  </a>
                </div>

              </div>
            </Card>
          </div>

        </div>
      </div>
    </Section>
  );
};
