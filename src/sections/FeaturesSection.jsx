// src/sections/FeaturesSection.jsx
// 4-column icon bar — thin geometric outline icons matching design exactly
import React from 'react';

/* Thin stroke SVG icons — pixel-matched to design */
const DiamondIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <polygon points="20,4 36,15 30,36 10,36 4,15" />
    <polyline points="4,15 20,20 36,15" />
    <line x1="10" y1="36" x2="20" y2="20" />
    <line x1="30" y1="36" x2="20" y2="20" />
  </svg>
);

const HandsIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <path d="M20 8 C20 8 14 8 12 14 C10 20 10 26 10 30 C10 30 10 34 14 34 C16 34 18 32 20 32 C22 32 24 34 26 34 C30 34 30 30 30 30 C30 26 30 20 28 14 C26 8 20 8 20 8 Z" />
    <line x1="15" y1="14" x2="15" y2="24" />
    <line x1="20" y1="12" x2="20" y2="24" />
    <line x1="25" y1="14" x2="25" y2="24" />
  </svg>
);

const GlobeDeliveryIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <circle cx="20" cy="20" r="14" />
    <ellipse cx="20" cy="20" rx="6" ry="14" />
    <line x1="6" y1="20" x2="34" y2="20" />
    <path d="M8 13 Q20 17 32 13" />
    <path d="M8 27 Q20 23 32 27" />
  </svg>
);

const GiftBoxIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <rect x="7" y="18" width="26" height="18" />
    <rect x="5" y="12" width="30" height="7" />
    <line x1="20" y1="12" x2="20" y2="36" />
    <path d="M20 12 C20 12 14 6 10 8 C7 9 8 12 10 12 C14 12 20 12 20 12 Z" />
    <path d="M20 12 C20 12 26 6 30 8 C33 9 32 12 30 12 C26 12 20 12 20 12 Z" />
  </svg>
);

const FEATURES = [
  { Icon: DiamondIcon,      title: 'Authentic & Certified',    desc: 'Every piece comes with an authenticity certificate.' },
  { Icon: HandsIcon,        title: 'Masterfully Handcrafted',  desc: 'Created by skilled artisans with generations of expertise.' },
  { Icon: GlobeDeliveryIcon,title: 'Worldwide Delivery',       desc: 'Securely packaged and delivered to your doorstep.' },
  { Icon: GiftBoxIcon,      title: 'Luxury Gifting',           desc: "Beautifully presented for life's most meaningful moments." },
];

const FeaturesSection = () => (
  <section
    className="bg-[var(--color-brand-light)] py-16"
    aria-label="Key features"
  >
    <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[var(--color-border)] border border-[var(--color-border)] bg-white">
        {FEATURES.map(({ Icon, title, desc }) => (
          <div key={title} className="flex flex-col items-center text-center px-6 py-10">
            <div 
              className="w-[60px] h-[60px] rounded-full flex items-center justify-center mb-5"
              style={{ background: '#F8F4EE', border: '1px solid #EBE4DB', color: 'var(--color-brand-dark)' }}
            >
              <Icon />
            </div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-brand-dark)] mb-3">
              {title}
            </h4>
            <p className="text-[13px] text-[var(--color-text-body)] font-medium leading-[1.8] max-w-[180px]">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
