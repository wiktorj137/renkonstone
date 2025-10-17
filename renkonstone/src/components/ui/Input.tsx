import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '@/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  className,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-renkon-beige mb-2 font-medium">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <i className={`fas ${icon} absolute left-4 top-1/2 transform -translate-y-1/2 text-renkon-beige`} />
        )}
        <input
          className={cn(
            'w-full bg-renkon-dark-4 border border-renkon-dark-5 rounded-lg px-4 py-3 text-white placeholder-renkon-beige/50 focus:outline-none focus:border-renkon-orange transition-colors',
            icon && 'pl-12',
            error && 'border-red-500',
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-renkon-beige mb-2 font-medium">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          'w-full bg-renkon-dark-4 border border-renkon-dark-5 rounded-lg px-4 py-3 text-white placeholder-renkon-beige/50 focus:outline-none focus:border-renkon-orange transition-colors resize-none',
          error && 'border-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};
