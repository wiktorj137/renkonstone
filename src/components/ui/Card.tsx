import React from 'react';
import { cn } from '@/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hover = false, ...props }) => {
  return (
    <div
      className={cn(
        'relative bg-gradient-to-br from-renkon-dark-3/50 to-renkon-dark-4/30 rounded-3xl border border-renkon-dark-5/50 backdrop-blur-sm',
        hover && 'hover:border-renkon-orange/20 transition-all duration-700 hover:shadow-2xl hover:shadow-renkon-orange/5 hover:-translate-y-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
