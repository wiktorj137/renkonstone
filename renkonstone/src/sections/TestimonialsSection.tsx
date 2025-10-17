import React, { useState, useRef, useEffect } from 'react';
import { testimonials } from '@/constants/data';
import { Section, SectionHeader, Card } from '@/components/ui';
import { Testimonial } from '@/types';
import { useIsDesktop } from '@/hooks';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const [expanded, setExpanded] = useState(false);
  const needsExpand = testimonial.text.length > testimonial.shortText.length;

  return (
    <Card
      hover={testimonial.featured}
      className={`p-6 md:p-8 h-full flex flex-col ${
        testimonial.featured
          ? 'border-2 border-renkon-orange/30 bg-gradient-to-br from-renkon-dark-3 to-renkon-dark-2'
          : ''
      }`}
    >
      {testimonial.featured && (
        <div className="mb-4 inline-flex items-center space-x-2 bg-renkon-orange/20 text-renkon-orange px-3 py-1 rounded-full text-xs font-semibold self-start">
          <i className="fas fa-star" />
          <span>Wyróżniona opinia</span>
        </div>
      )}

      {/* Icon and Rating */}
      <div className="flex items-center justify-between mb-6">
        {testimonial.icon && (
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-renkon-orange/10 to-renkon-orange/5 rounded-2xl flex items-center justify-center border border-renkon-orange/10">
            <i className={`fas ${testimonial.icon} text-renkon-orange text-lg md:text-xl`} />
          </div>
        )}
        {/* Rating */}
        <div className="flex space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <i key={i} className="fas fa-star text-renkon-orange text-sm md:text-lg" />
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-renkon-beige/90 leading-relaxed mb-6 flex-grow text-sm md:text-base">
        {expanded ? testimonial.text : testimonial.shortText}
      </p>

      {/* Details List */}
      {testimonial.details && (
        <ul className="space-y-2 text-xs md:text-sm text-renkon-beige/75 mb-4 flex-grow">
          {testimonial.details.map((detail, index) => (
            <li key={index} className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 bg-renkon-orange rounded-full flex-shrink-0"></div>
              <span className="font-light">{detail}</span>
            </li>
          ))}
        </ul>
      )}

      {/* PDF Link Button */}
      {testimonial.pdfLink && (
        <div className="mt-auto pt-4">
          <a
            href={testimonial.pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-renkon-orange/10 to-orange-600/10 hover:from-renkon-orange/20 hover:to-orange-600/20 text-renkon-orange hover:text-orange-600 px-3 md:px-4 py-2 rounded-lg border border-renkon-orange/20 hover:border-renkon-orange/40 transition-all duration-300 text-xs md:text-sm font-medium group"
          >
            <i className="fas fa-file-pdf text-sm md:text-lg group-hover:scale-110 transition-transform duration-300"></i>
            <span>Zobacz referencję</span>
            <i className="fas fa-external-link-alt text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
          </a>
        </div>
      )}

      {/* Expand Button */}
      {needsExpand && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-renkon-orange hover:text-orange-400 text-sm font-medium mb-4 self-start transition-colors"
        >
          {expanded ? (
            <>
              Pokaż mniej <i className="fas fa-chevron-up ml-1" />
            </>
          ) : (
            <>
              Pokaż więcej <i className="fas fa-chevron-down ml-1" />
            </>
          )}
        </button>
      )}

      {/* Author Info */}
      <div className="pt-4 border-t border-renkon-dark-5">
        <h5 className="text-white font-semibold mb-1">{testimonial.name}</h5>
        <p className="text-sm text-renkon-beige/75">{testimonial.company}</p>
        {testimonial.location && (
          <p className="text-xs text-renkon-beige/60 mt-1">
            <i className="fas fa-map-marker-alt mr-1" />
            {testimonial.location}
          </p>
        )}
      </div>
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
    <Section id="references" gradient>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          icon="fa-quote-right"
          title={
            <>
              Referencje <span className="text-renkon-orange font-medium">Klientów</span>
            </>
          }
          subtitle="Zobacz, co mówią o nas nasi klienci - od prywatnych inwestorów po największe instytucje"
        />

        {isDesktop ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        ) : (
          <TestimonialsCarousel />
        )}
      </div>
    </Section>
  );
};
