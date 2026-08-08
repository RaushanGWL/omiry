// src/components/layout/TopBanner.jsx
import React from 'react';

const items = [
  { icon: '◈', text: 'Handcrafted Gemstone Sculptures' },
  { icon: '✈', text: 'Worldwide Express Shipping' },
  { icon: '✓', text: 'Certificate of Authenticity' },
];

const TopBanner = () => (
  <div className="bg-[var(--color-brand-dark)] text-white/80 py-2.5 px-6" role="banner">
    <ul className="flex items-center justify-center md:justify-between max-w-screen-xl mx-auto gap-y-0 gap-x-8">
      {items.map(({ icon, text }, i) => (
        <li
          key={i}
          className={`flex items-center gap-2 text-[10px] tracking-[0.18em] font-light ${i > 0 ? 'hidden md:flex' : 'flex'}`}
        >
          <span className="text-[var(--color-gold-light)] text-[11px]">{icon}</span>
          {text}
        </li>
      ))}
    </ul>
  </div>
);

export default TopBanner;
