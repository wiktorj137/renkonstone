import React from 'react';
import { ProjectsSection, ContactSection } from '@/sections';
import { SEO } from '@/components/SEO';

export const ProjectsPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Nasze Realizacje - Szlifowanie Marmuru i Lastryko | RenKon STONE"
        description="Zobacz galerię naszych realizacji. Odnawiamy posadzki na Wawelu, w urzędach i domach prywatnych. Efekty przed i po renowacji."
        canonicalUrl="https://szlifowanie-lastryko.pl/realizacje"
      />
      <div className="pt-20">
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
};
