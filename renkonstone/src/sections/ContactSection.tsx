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

        {/* Cards Layout */}
        <div className="space-y-6">
          
          {/* First Row - Phone & Email (2 columns) */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Phone Contact */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-renkon-dark-2 to-renkon-dark-3 border-renkon-orange/30 h-full">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-renkon-orange/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-renkon-orange/5 rounded-full blur-3xl" />
              
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-renkon-orange to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-phone-alt text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">Telefon</h3>
                    <a 
                      href="tel:+48503298623"
                      className="text-2xl font-bold text-renkon-orange hover:text-orange-400 transition-all duration-300 inline-block mb-3 hover:scale-105"
                    >
                      +48 503 298 623
                    </a>
                    <p className="text-renkon-beige/90 text-sm leading-relaxed">
                      Zadzwoń, aby umówić się na bezpłatną wycenę lub uzyskać profesjonalne doradztwo techniczne.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Email Contact */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-renkon-dark-2 to-renkon-dark-3 border-renkon-orange/30 h-full">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-renkon-orange/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-renkon-orange/5 rounded-full blur-3xl" />
              
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-renkon-orange to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-envelope text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">Email</h3>
                    <a 
                      href="mailto:kontakt@renkonstone.pl"
                      className="text-xl font-bold text-renkon-orange hover:text-orange-400 transition-all duration-300 inline-block mb-3 hover:scale-105"
                    >
                      kontakt@renkonstone.pl
                    </a>
                    <p className="text-renkon-beige/90 text-sm leading-relaxed">
                      Napisz do nas, a odpowiemy najszybciej jak to możliwe. Standardowy czas odpowiedzi to do 24h.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

          </div>

          {/* Second Row - Quick Actions & Social (2 columns) */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Quick Action Card */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-renkon-dark-2 to-renkon-dark-3 border-renkon-orange/30 h-full">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-renkon-orange/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-renkon-orange/5 rounded-full blur-3xl" />
              
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 flex-grow">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-renkon-orange to-orange-600 rounded-2xl shadow-lg">
                      <i className="fas fa-rocket text-white text-2xl" />
                    </div>
                  </div>
                  
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Gotowy na <span className="text-renkon-orange">Współpracę?</span>
                    </h3>
                    <p className="text-renkon-beige/90 text-sm leading-relaxed">
                      Skontaktuj się z nami, aby uzyskać bezpłatną wycenę i profesjonalne doradztwo
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="tel:+48503298623"
                  className="flex items-center justify-center gap-3 w-full bg-renkon-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  <i className="fas fa-phone group-hover:rotate-12 transition-transform duration-300" />
                  <span>Zadzwoń Teraz</span>
                </a>
              </div>
            </Card>

            {/* Social Media Links */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-renkon-dark-2 to-renkon-dark-3 border-renkon-orange/30 h-full">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-renkon-orange/5 rounded-full blur-3xl" />
              
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6 flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-renkon-orange to-orange-600 rounded-xl flex items-center justify-center">
                    <i className="fas fa-share-alt text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Śledź Nas
                    </h3>
                    <p className="text-renkon-beige/70 text-sm">
                      Zobacz nasze realizacje
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 flex-grow">
                  <a
                    href="https://www.facebook.com/people/RenKon-Stone/61577829164588/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 bg-renkon-dark-4/50 hover:bg-renkon-dark-4 border border-renkon-dark-4 hover:border-renkon-orange/30 text-white p-5 rounded-xl transition-all duration-300 group"
                  >
                    <i className="fab fa-facebook text-renkon-orange text-3xl group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-sm">Facebook</span>
                  </a>
                  
                  <a
                    href="https://www.youtube.com/channel/UCZIDLqS_lvQrDb15rDPKqow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 bg-renkon-dark-4/50 hover:bg-renkon-dark-4 border border-renkon-dark-4 hover:border-renkon-orange/30 text-white p-5 rounded-xl transition-all duration-300 group"
                  >
                    <i className="fab fa-youtube text-renkon-orange text-3xl group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-sm">YouTube</span>
                  </a>
                </div>
              </div>
            </Card>

          </div>

          {/* Third Row - Working Hours (full width) */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-renkon-dark-2 to-renkon-dark-3 border-renkon-orange/30">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-renkon-orange/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-renkon-orange/5 rounded-full blur-3xl" />
            
            <div className="relative p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-renkon-orange to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="fas fa-clock text-white text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">Godziny Pracy</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-renkon-dark-4/50">
                      <span className="text-renkon-beige/90">Poniedziałek - Sobota</span>
                      <span className="text-white font-bold">8:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-renkon-beige/90">Niedziela</span>
                      <span className="text-white font-bold">Zamknięte</span>
                    </div>
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
