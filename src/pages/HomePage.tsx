import React from 'react';
import { HeroSection, AboutSection, TestimonialsSection, ContactSection } from '@/sections';
import { SEO } from '@/components/SEO';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Szlifowanie i Renowacja Marmuru oraz Lastryko | RenKon STONE"
        description="Profesjonalne szlifowanie, renowacja i krystalizacja marmuru oraz lastryko. Usługi kamieniarskie w Krakowie i Małopolsce. Sprawdź naszą ofertę!"
        canonicalUrl="https://szlifowanie-lastryko.pl"
      />
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};
