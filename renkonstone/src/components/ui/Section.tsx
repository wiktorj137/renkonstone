import React from 'react';
import { cn } from '@/utils';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  gradient?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className,
  gradient = false,
}) => {
  return (
    <section
      id={id}
      className={cn(
        'py-20 md:py-32 relative overflow-hidden',
        gradient && 'bg-gradient-to-br from-renkon-dark via-renkon-dark-2 to-renkon-dark',
        className
      )}
    >
      {children}
    </section>
  );
};

interface SectionHeaderProps {
  icon?: string;
  title: React.ReactNode;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon,
  title,
  subtitle,
}) => {
  return (
    <div className="text-center mb-16 md:mb-24">
      {icon && (
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-renkon-orange/15 to-renkon-orange/25 rounded-2xl md:rounded-3xl mb-6 md:mb-8 border border-renkon-orange/20 shadow-lg">
          <i className={`fas ${icon} text-renkon-orange text-2xl md:text-3xl`} />
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 md:mb-8 tracking-tight">
        {title}
      </h2>
      <div className="w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-renkon-orange to-transparent mx-auto mb-8 md:mb-10" />
      {subtitle && (
        <p className="text-lg md:text-xl text-renkon-beige/90 max-w-3xl mx-auto leading-relaxed font-light px-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};
