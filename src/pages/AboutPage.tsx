import React from 'react';
import { AboutSection, ContactSection } from '@/sections';
import { SEO } from '@/components/SEO';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="O Nas - Doświadczenie w Renowacji Kamienia | RenKon STONE"
        description="Poznaj RenKon STONE. Ponad 15 lat doświadczenia w renowacji kamienia naturalnego w Polsce i za granicą. Specjaliści od trudnych zadań."
        canonicalUrl="https://szlifowanie-lastryko.pl/o-nas"
      />
      <div className="pt-20">
        <AboutSection />
        <ContactSection />
      </div>
    </>
  );
};
