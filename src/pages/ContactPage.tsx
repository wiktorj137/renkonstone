import React from 'react';
import { ContactSection } from '@/sections';
import { SEO } from '@/components/SEO';

export const ContactPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Kontakt - Wycena Renowacji Kamienia | RenKon STONE"
        description="Skontaktuj się z nami w sprawie szlifowania marmuru lub lastryko. Darmowa wycena i doradztwo techniczne. Działamy w Krakowie i całej Polsce."
        canonicalUrl="https://szlifowanie-lastryko.pl/kontakt"
      />
      <div className="pt-20 min-h-screen bg-renkon-dark">
        <ContactSection />
      </div>
    </>
  );
};
