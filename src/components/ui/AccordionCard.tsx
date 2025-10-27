import React from 'react';
import { Card } from './Card';

interface AccordionCardProps {
  isExpanded: boolean;
  onToggle: () => void;
  title: string;
  description: string;
  icon?: string;
  badge?: string | number;
  children?: React.ReactNode;
  className?: string;
  compact?: boolean; // For smaller cards like process steps
}

export const AccordionCard: React.FC<AccordionCardProps> = ({
  isExpanded,
  onToggle,
  title,
  description,
  icon,
  badge,
  children,
  className = '',
  compact = false,
}) => {
  const buttonPadding = compact ? 'p-5 md:p-6' : 'p-6 md:p-8';
  const iconSize = compact ? 'w-8 h-8' : 'w-14 h-14 md:w-16 md:h-16';
  const iconTextSize = compact ? 'text-sm' : 'text-xl md:text-2xl';
  const titleSize = compact ? 'text-sm md:text-base' : 'text-xl md:text-2xl';
  const descSize = compact ? 'text-xs md:text-sm' : 'text-sm md:text-base';
  const chevronSize = compact ? 'text-sm' : 'text-xl';
  const contentPadding = compact ? 'px-5 md:px-6 pb-5 md:pb-6 pt-2' : 'px-6 md:px-8 pb-6 md:pb-8 pt-2';
  const borderPadding = compact ? 'pt-4' : 'pt-6';

  return (
    <Card
      className={`overflow-hidden transition-all duration-300 ease-in-out cursor-pointer ${
        isExpanded ? 'bg-renkon-dark-2 border-renkon-orange/40' : 'bg-renkon-dark-3 border-renkon-dark-4'
      } ${className}`}
    >
      <button
        onClick={onToggle}
        className={`w-full text-left ${buttonPadding} ${badge !== undefined ? 'flex flex-col' : 'flex items-center justify-between'} group`}
      >
        {badge !== undefined ? (
          // Compact layout for process steps with badge
          <>
            <div className="flex items-center justify-between mb-3 w-full">
              <div className="flex items-center space-x-3">
                <div
                  className={`${iconSize} rounded-lg flex items-center justify-center transition-colors ${
                    isExpanded ? 'bg-renkon-orange' : 'bg-renkon-orange/20 group-hover:bg-renkon-orange/30'
                  }`}
                >
                  <span
                    className={`font-bold text-sm ${isExpanded ? 'text-white' : 'text-renkon-orange'}`}
                  >
                    {badge}
                  </span>
                </div>
                {title.includes('<span') ? (
                  <h3
                    className={`${titleSize} font-semibold transition-colors duration-300 ${
                      isExpanded ? 'text-renkon-orange' : 'text-white group-hover:text-renkon-orange'
                    }`}
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                ) : (
                  <h3
                    className={`${titleSize} font-semibold transition-colors duration-300 ${
                      isExpanded ? 'text-renkon-orange' : 'text-white group-hover:text-renkon-orange'
                    }`}
                  >
                    {title}
                  </h3>
                )}
              </div>
              <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                <i className={`fas fa-chevron-down text-renkon-orange ${chevronSize}`} />
              </div>
            </div>
            <p className={`${descSize} text-renkon-beige leading-relaxed`}>{description}</p>
          </>
        ) : (
          // Standard layout for service cards with icon
          <>
            <div className={`flex items-center flex-1 ${compact ? 'space-x-3' : 'space-x-4 md:space-x-6'}`}>
              {icon && (
                <div
                  className={`${iconSize} rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isExpanded
                      ? 'bg-renkon-orange text-white'
                      : 'bg-renkon-orange/10 text-renkon-orange group-hover:bg-renkon-orange/20'
                  }`}
                >
                  <i className={`fas ${icon} ${iconTextSize}`} />
                </div>
              )}
              <div className="flex-1">
                {title.includes('<span') ? (
                  <h3
                    className={`${titleSize} font-semibold mb-2 transition-colors duration-300 ${
                      isExpanded ? 'text-renkon-orange' : 'text-white group-hover:text-renkon-orange'
                    }`}
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                ) : (
                  <h3
                    className={`${titleSize} font-semibold mb-2 transition-colors duration-300 ${
                      isExpanded ? 'text-renkon-orange' : 'text-white group-hover:text-renkon-orange'
                    }`}
                  >
                    {title}
                  </h3>
                )}
                <p className={`${descSize} text-renkon-beige`}>{description}</p>
              </div>
            </div>
            <div className={`ml-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
              <i className={`fas fa-chevron-down text-renkon-orange ${chevronSize}`} />
            </div>
          </>
        )}
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={contentPadding}>
          <div className={`border-t border-renkon-orange/20 ${borderPadding}`}>{children}</div>
        </div>
      </div>
    </Card>
  );
};
