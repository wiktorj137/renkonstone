import React, { useState, useRef, useEffect } from 'react';
import { testimonials } from '@/constants/data';
import { Section, SectionHeader, Card } from '@/components/ui';
import { Testimonial } from '@/types';
import { useIsDesktop } from '@/hooks';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card
      hover
      className="p-6 md:p-8 h-full flex flex-col bg-gradient-to-br from-renkon-dark-3 to-renkon-dark-2 border-renkon-dark-4"
    >
      {/* Quote Icon */}
      <div className="mb-6">
        <i className="fas fa-quote-left text-3xl md:text-4xl text-renkon-orange/30" />
      </div>

      {/* Testimonial Text */}
      <p className="text-base md:text-lg text-white leading-relaxed mb-6 flex-grow font-light italic">
        "{testimonial.text}"
      </p>

      {/* Author Info */}
      <div className="mb-4">
        <h5 className="text-lg md:text-xl font-semibold text-white mb-2">{testimonial.name}</h5>
        <p className="text-sm text-renkon-beige/80 mb-3">{testimonial.company}</p>
        
        {/* Details List */}
        {testimonial.details && (
          <ul className="space-y-2 text-sm text-renkon-beige/70 mb-4">
            {testimonial.details.map((detail, index) => (
              <li key={index} className="flex items-center space-x-2">
                <i className="fas fa-check text-renkon-orange text-xs" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* PDF Link Button */}
      {testimonial.pdfLink && (
        <div className="mt-auto">
          <a
            href={testimonial.pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 w-full bg-renkon-orange hover:bg-orange-600 text-white px-4 py-3 rounded-lg transition-all duration-300 text-sm font-semibold group"
          >
            {testimonial.pdfLink.includes('google') ? (
              <>
                <i className="fab fa-google group-hover:scale-110 transition-transform duration-300"></i>
                <span>Zobacz Opinię</span>
              </>
            ) : (
              <>
                <i className="fas fa-file-pdf group-hover:scale-110 transition-transform duration-300"></i>
                <span>Zobacz Referencję</span>
              </>
            )}
            <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
          </a>
        </div>
      )}
    </Card>
  );
};

const TestimonialsCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = carousel.children[0]?.clientWidth || 0;
      const gap = 16;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(newIndex);
    };

    carousel.addEventListener('scroll', handleScroll, { passive: true });
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCard = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cardWidth = carousel.children[0]?.clientWidth || 0;
    const gap = 16;
    const scrollPosition = index * (cardWidth + gap);
    
    carousel.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-8 -mx-4 px-4"
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex-shrink-0 w-80 sm:w-96 snap-start">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'bg-renkon-orange w-8'
                : 'bg-renkon-dark-5'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export const TestimonialsSection: React.FC = () => {
  const isDesktop = useIsDesktop();

  return (
    <Section id="references">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          icon="fa-quote-right"
          title={
            <>
              Referencje <span className="text-renkon-orange font-medium">Klientów</span>
            </>
          }
          subtitle="Opinie naszych zadowolonych klientów o jakości wykonanych usług. Każdy projekt to historia sukcesu i zaufania."
        />

        {isDesktop ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        ) : (
          <div className="mb-12">
            <TestimonialsCarousel />
          </div>
        )}

        {/* Google Reviews CTA */}
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-renkon-orange/10 via-renkon-dark-2 to-renkon-orange/5 border border-renkon-orange/30 text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-renkon-orange to-transparent" />
            
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-renkon-orange/20 rounded-2xl flex items-center justify-center">
                <i className="fab fa-google text-renkon-orange text-3xl" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Przeczytaj pozostałe opinie w Google
            </h3>
            
            <p className="text-base md:text-lg text-renkon-beige mb-8 leading-relaxed">
              Zobacz, co jeszcze mówią o nas nasi klienci. Ich satysfakcja jest naszą najlepszą rekomendacją.
            </p>

            <a
              href="https://share.google/Cb3nwU8ytIxrLxpqP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-renkon-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl transition-all duration-300 text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              <i className="fab fa-google text-xl" />
              <span>Zobacz Opinie</span>
              <i className="fas fa-external-link-alt text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
