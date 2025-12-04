import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '@/constants/data';
import { Section, SectionHeader, Card } from '@/components/ui';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Link to={`/uslugi/${service.slug}`} className="block h-full">
      <Card className="h-full p-0 hover:border-renkon-orange/50 transition-all duration-300 group relative overflow-hidden flex flex-col">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-renkon-dark-2 to-transparent z-10 opacity-80" />
            <img 
                src={service.image} 
                alt={service.titlePlain || service.title.replace(/<[^>]*>/g, '')}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-renkon-dark/80 backdrop-blur-sm border border-renkon-dark-4 flex items-center justify-center group-hover:bg-renkon-orange group-hover:border-renkon-orange transition-all">
              <i className="fas fa-arrow-right text-renkon-beige group-hover:text-white text-sm" />
            </div>
        </div>
        
        <div className="p-8 flex flex-col flex-grow relative z-10">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-renkon-orange to-orange-600 flex items-center justify-center shadow-lg mb-6 -mt-16 relative z-20 border-4 border-renkon-dark-2">
              <i className={`fas ${service.icon} text-white text-2xl`} />
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-renkon-orange transition-colors" dangerouslySetInnerHTML={{ __html: service.title }} />
          
          <p className="text-renkon-beige/80 leading-relaxed mb-6 flex-grow">
            {service.description}
          </p>

          <ul className="space-y-2 mt-auto">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-renkon-beige/60">
                <i className="fas fa-check text-renkon-orange/70 mr-2 text-xs" />
                <span className="truncate">{feature.split('-')[0]}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </Link>
  );
};

export const ServicesSection: React.FC = () => {
  return (
    <Section id="services">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(90deg, transparent 98%, #dd8500 100%), linear-gradient(0deg, transparent 98%, #dd8500 100%)',
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          icon="fa-gem"
          title={
            <>
              Nasze <span className="text-renkon-orange font-medium">Usługi</span>
            </>
          }
          subtitle="Kompleksowe usługi w zakresie szlifowania, renowacji i konserwacji powierzchni z lastryka i marmuru"
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </Section>
  );
};
