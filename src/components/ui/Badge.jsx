// src/components/ui/Badge.jsx
// Small text badge — used on product cards, collections, etc.

import React from 'react';

const Badge = ({ children, className = '' }) => {
  return (
    <span
      className={`
        bg-[var(--color-primary-dark)] text-white
        text-xs uppercase tracking-wider
        px-2 py-1 font-bold
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
