// src/components/ui/SectionLabel.jsx
// Decorative section label used above section headings throughout the site

import React from 'react';

const SectionLabel = ({ children, align = 'center', className = '' }) => {
  const alignClass = align === 'left' ? 'justify-start' : 'justify-center';

  return (
    <p
      className={`
        text-xs uppercase tracking-[0.2em] text-[var(--color-text-light)]
        flex items-center ${alignClass} gap-4 ${className}
      `}
    >
      <span className="w-8 h-px bg-gray-300 block" />
      {children}
      <span className="w-8 h-px bg-gray-300 block" />
    </p>
  );
};

export default SectionLabel;
