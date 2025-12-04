import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { services } from '@/constants/data';
import { ContactSection } from '@/sections';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui';

export const ServiceDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!service) {
    return <Navigate to="/uslugi" replace />;
  }

  const titlePlain = service.titlePlain || service.title.replace(/<[^>]*>/g, '');
  const gallery = service.gallery || [{ image: service.image, description: 'Gwarancja najwyższej jakości usług' }];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <>
      <SEO 
        title={`${titlePlain} - Profesjonalne Usługi | RenKon STONE`}
        description={`${titlePlain} w Krakowie i Małopolsce. ${service.description} Sprawdź naszą ofertę i zamów darmową wycenę.`}
        canonicalUrl={`https://szlifowanie-lastryko.pl/uslugi/${slug}`}
      />
      
      <div className="pt-32 pb-16 bg-gradient-to-b from-renkon-dark to-renkon-dark-2 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs or Back Link */}
          <div className="mb-8">
            <Link to="/uslugi">
              <Button 
                variant="outline" 
                size="sm" 
                className="!px-4"
              >
                <i className="fas fa-arrow-left mr-2" /> Wróć do usług
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-renkon-orange to-orange-600 rounded-2xl shadow-lg mb-4">
                <i className={`fas ${service.icon} text-white text-3xl`} />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white" dangerouslySetInnerHTML={{ __html: service.title }} />
              
              <p className="text-xl text-renkon-beige/90 leading-relaxed">
                {service.description}
              </p>

              <div className="bg-renkon-dark-3/50 border border-renkon-dark-4 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Co obejmuje usługa?</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-renkon-orange/20 flex items-center justify-center mt-1">
                        <i className="fas fa-check text-renkon-orange text-xs" />
                      </div>
                      <span className="text-renkon-beige/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  icon="fa-phone"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Zamów Wycenę
                </Button>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="relative lg:sticky lg:top-32">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-renkon-dark-4 bg-renkon-dark-3 relative group">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-renkon-orange/10 to-transparent opacity-50 z-10" />
                
                <img 
                  key={currentImageIndex}
                  src={gallery[currentImageIndex].image} 
                  alt={gallery[currentImageIndex].description} 
                  className="w-full h-full object-cover animate-fade-in" 
                />
                
                {/* Navigation Arrows */}
                {gallery.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-renkon-dark/50 backdrop-blur-sm border border-renkon-beige/20 flex items-center justify-center text-white hover:bg-renkon-orange hover:border-renkon-orange transition-all"
                      aria-label="Poprzednie zdjęcie"
                    >
                      <i className="fas fa-chevron-left" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-renkon-dark/50 backdrop-blur-sm border border-renkon-beige/20 flex items-center justify-center text-white hover:bg-renkon-orange hover:border-renkon-orange transition-all"
                      aria-label="Następne zdjęcie"
                    >
                      <i className="fas fa-chevron-right" />
                    </button>
                  </>
                )}
                
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-renkon-dark to-transparent z-20">
                  <p className="text-white font-medium text-lg">
                    {gallery[currentImageIndex].description}
                  </p>
                  {/* Dots indicator */}
                  {gallery.length > 1 && (
                    <div className="flex gap-2 mt-2">
                      {gallery.map((_, idx) => (
                        <div 
                          key={idx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-6 bg-renkon-orange' : 'w-1.5 bg-white/50'}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Additional Info Card */}
              <div className="mt-8 bg-renkon-dark-3/30 border border-renkon-dark-4 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <i className="fas fa-info-circle text-renkon-orange text-xl mt-1" />
                  <div>
                    <h4 className="text-white font-bold mb-2">Warto wiedzieć</h4>
                    <p className="text-sm text-renkon-beige/70">
                      Każde zlecenie wyceniamy indywidualnie. Cena zależy od metrażu, stanu posadzki oraz oczekiwanego efektu końcowego.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
    </>
  );
};
