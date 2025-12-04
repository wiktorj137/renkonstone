import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title = 'Szlifowanie i Renowacja Marmuru oraz Lastryko | RenKon STONE', 
  description = 'Profesjonalne szlifowanie, renowacja i krystalizacja marmuru oraz lastryko. Usługi kamieniarskie w Krakowie i Małopolsce. Sprawdź naszą ofertę!',
  canonicalUrl = 'https://szlifowanie-lastryko.pl'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
