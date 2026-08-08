// src/components/ui/Button.jsx
// Reusable button atom with variant support

import React from 'react';

/**
 * @param {'primary' | 'outline' | 'ghost'} variant
 * @param {'sm' | 'md' | 'lg'} size
 */
const variantClasses = {
  primary:
    'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] border border-[var(--color-accent)]',
  outline:
    'bg-transparent text-white border border-white hover:bg-white hover:text-[var(--color-primary-dark)]',
  dark:
    'bg-[var(--color-primary-dark)] text-white border border-[var(--color-primary-dark)] hover:bg-black',
  ghost:
    'bg-transparent text-[var(--color-text-dark)] border border-[var(--color-text-dark)] hover:bg-[var(--color-text-dark)] hover:text-white',
};

const sizeClasses = {
  sm: 'px-5 py-2 text-[10px]',
  md: 'px-8 py-3 text-xs',
  lg: 'px-10 py-4 text-sm',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  return (
    <button
      className={`
        uppercase font-semibold tracking-wider
        transition-all duration-300
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
