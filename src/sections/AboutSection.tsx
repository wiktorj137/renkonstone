import React from 'react';
import { Section, SectionHeader, Card } from '@/components/ui';

export const AboutSection: React.FC = () => {
  return (
    <Section id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon="fa-building"
          title={
            <>
              <span className="text-white">RenKon</span>{' '}
              <span className="text-renkon-orange font-medium">STONE</span>
            </>
          }
          subtitle="Specjaliści z ponad 15 letnim doświadczeniem międzynarodowym w szlifowaniu i konserwacji powierzchni z lastryka i marmuru"
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7">
            <Card hover className="p-8 lg:p-12 group h-full">
              <div className="absolute top-0 right-0 w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-renkon-orange/8 to-transparent rounded-full -translate-y-20 lg:-translate-y-24 translate-x-20 lg:translate-x-24 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 md:space-x-6 mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-renkon-orange/20 to-renkon-orange/10 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-renkon-orange/20 shadow-lg">
                    <i className="fas fa-gem text-renkon-orange text-lg md:text-2xl" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-light text-white leading-tight">
                    Kim <span className="text-renkon-orange font-medium">jesteśmy</span>
                  </h3>
                </div>
                
                <p className="text-base md:text-lg lg:text-xl text-renkon-beige leading-relaxed font-light mb-6">
                  <span className="text-white">RenKon</span>{' '}
                  <span className="text-renkon-orange font-medium">STONE</span> to firma która od{' '}
                  <span className="text-renkon-orange font-medium">2008</span> roku specjalizuje się w profesjonalnym{' '}
                  <span className="text-white">szlifowaniu, renowacji, czyszczeniu i konserwacji marmuru oraz lastryko</span>.
                </p>

                <p className="text-base md:text-lg lg:text-xl text-renkon-beige leading-relaxed font-light mb-6">
                  Wykonujemy też <span className="text-white">naprawy schodów lastriko oraz uzupełniamy braki lastryka</span>.
                </p>

                <p className="text-base md:text-lg lg:text-xl text-renkon-beige leading-relaxed font-light">
                  Nasze doświadczenie obejmuje realizacje w{' '}
                  <span className="text-white font-medium">Polsce, Anglii i Irlandii</span>, gdzie zdobyliśmy uznanie wśród najbardziej wymagających klientów.
                </p>
              </div>
            </Card>
          </div>

          {/* Right Column - Why Us */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 md:p-8">
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-6 flex items-center">
                <i className="fas fa-star text-renkon-orange mr-3" />
                Dlaczego <span className="text-white ml-1">RenKon</span>{' '}
                <span className="text-renkon-orange ml-1">STONE</span>
              </h4>
              <div className="space-y-5">
                <div className="flex items-start space-x-4 p-4 bg-renkon-dark-3/50 rounded-lg border border-renkon-dark-4 hover:border-renkon-orange/30 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-renkon-orange/20 to-renkon-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-calendar-check text-renkon-orange text-lg" />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-1">Ponad 15 lat doświadczenia</h5>
                    <p className="text-renkon-beige text-sm">Od 2008 roku w branży renowacji kamienia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-renkon-dark-3/50 rounded-lg border border-renkon-dark-4 hover:border-renkon-orange/30 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-renkon-orange/20 to-renkon-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-globe text-renkon-orange text-lg" />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-1">Międzynarodowe standardy</h5>
                    <p className="text-renkon-beige text-sm">Doświadczenie z Polski, Anglii i Irlandii</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-renkon-dark-3/50 rounded-lg border border-renkon-dark-4 hover:border-renkon-orange/30 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-renkon-orange/20 to-renkon-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-certificate text-renkon-orange text-lg" />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-1">Gwarancja jakości</h5>
                    <p className="text-renkon-beige text-sm">Najwyższe standardy wykonania i materiałów</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-renkon-dark-3/50 rounded-lg border border-renkon-dark-4 hover:border-renkon-orange/30 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-renkon-orange/20 to-renkon-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-user-tie text-renkon-orange text-lg" />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-1">Indywidualne podejście</h5>
                    <p className="text-renkon-beige text-sm">Każdy projekt traktujemy wyjątkowo</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};
