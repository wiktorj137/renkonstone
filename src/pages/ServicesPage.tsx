import React from 'react';
import { ServicesSection, ContactSection } from '@/sections';
import { SEO } from '@/components/SEO';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Usługi Szlifowania i Renowacji | RenKon STONE"
        description="Oferujemy kompleksowe usługi: szlifowanie marmuru, renowacja lastryko, krystalizacja, impregnacja oraz naprawa ubytków. Sprawdź cennik i szczegóły."
        canonicalUrl="https://szlifowanie-lastryko.pl/uslugi"
      />
      <div className="pt-20">
        <ServicesSection />
        <ContactSection />
      </div>
    </>
  );
};
