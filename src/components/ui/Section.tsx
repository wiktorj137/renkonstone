import React from 'react';
import { cn } from '@/utils';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className,
}) => {
  return (
    <section
      id={id}
      className={cn(
        'py-12 md:py-20 relative',
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
    <div className="text-center mb-10 md:mb-14">
      {icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-renkon-orange/15 to-renkon-orange/25 rounded-xl mb-4 border border-renkon-orange/20" aria-hidden="true">
          <i className={`fas ${icon} text-renkon-orange text-lg`} aria-hidden="true" />
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-renkon-beige/80 max-w-3xl mx-auto leading-relaxed px-4 mt-3">
          {subtitle}
        </p>
      )}
    </div>
  );
};
