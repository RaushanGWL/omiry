import React from 'react';

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <polygon points="20,4 36,15 30,36 10,36 4,15" />
        <polyline points="4,15 20,20 36,15" />
        <line x1="10" y1="36" x2="20" y2="20" />
        <line x1="30" y1="36" x2="20" y2="20" />
      </svg>
    ),
    title: 'Authentic & Certified',
    desc: 'Every piece comes with an authenticity certificate verifying natural origin and quality.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <path d="M20 8 C20 8 14 8 12 14 C10 20 10 26 10 30 C10 30 10 34 14 34 C16 34 18 32 20 32 C22 32 24 34 26 34 C30 34 30 30 30 30 C30 26 30 20 28 14 C26 8 20 8 20 8 Z" />
        <line x1="15" y1="14" x2="15" y2="24" />
        <line x1="20" y1="12" x2="20" y2="24" />
        <line x1="25" y1="14" x2="25" y2="24" />
      </svg>
    ),
    title: 'Handcrafted Excellence',
    desc: 'Created by master artisans with generations of expertise and unwavering attention to detail.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <circle cx="20" cy="20" r="14" />
        <ellipse cx="20" cy="20" rx="6" ry="14" />
        <line x1="6" y1="20" x2="34" y2="20" />
        <path d="M8 13 Q20 17 32 13" />
        <path d="M8 27 Q20 23 32 27" />
      </svg>
    ),
    title: 'Worldwide Delivery',
    desc: 'Securely packaged and shipped with express care to your doorstep, anywhere in the world.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <rect x="7" y="18" width="26" height="18" />
        <rect x="5" y="12" width="30" height="7" />
        <line x1="20" y1="12" x2="20" y2="36" />
        <path d="M20 12 C20 12 14 6 10 8 C7 9 8 12 10 12 C14 12 20 12 20 12 Z" />
        <path d="M20 12 C20 12 26 6 30 8 C33 9 32 12 30 12 C26 12 20 12 20 12 Z" />
      </svg>
    ),
    title: 'Meaningful Gifting',
    desc: 'Pieces that carry blessings, beauty, and lasting meaning for life\'s most special moments.',
  },
];

const AboutFeaturesSection = () => {
  return (
    <section className="border-b border-[var(--color-border)] py-16" aria-label="Brand promises" style={{ background: '#FAF9F6' }}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[var(--color-border)] border border-[var(--color-border)] bg-white">
          {FEATURES.map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center px-6 py-10">
              <div 
                className="w-[60px] h-[60px] rounded-full flex items-center justify-center mb-5"
                style={{ background: '#F8F4EE', border: '1px solid #EBE4DB', color: '#261744' }}
              >
                {React.cloneElement(icon, { className: 'w-7 h-7', strokeWidth: '1.2' })}
              </div>
              <h3 className="text-[9.5px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: '#261744' }}>{title}</h3>
              <p className="text-[10px] font-light leading-[1.8] max-w-[170px]" style={{ color: '#5A5058' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFeaturesSection;
