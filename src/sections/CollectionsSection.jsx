// src/sections/CollectionsSection.jsx
// Featured Collections — zero-gap bordered card grid, bottom-aligned "DISCOVER →"
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../constants';

const CategoryCard = ({ title, subtitle, image, href }) => (
  <a
    href={href}
    className="group flex flex-col bg-white border-r border-b border-[var(--color-border)]
               last:border-r-0 hover:shadow-md transition-shadow duration-500 cursor-pointer"
  >
    {/* Image area */}
    <div className="flex-1 flex items-center justify-center bg-[#F2EDE6] overflow-hidden h-[220px]">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-contain object-center p-5
                   transform group-hover:scale-[1.04] transition-transform duration-700"
        loading="lazy"
      />
    </div>

    {/* Bottom text */}
    <div className="px-5 pt-4 pb-5 border-t border-[var(--color-border)]">
      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1" style={{ color: '#261744' }}>
        {title}
      </h3>
      <p className="text-[11px] font-light mb-4 leading-relaxed" style={{ color: '#A08C8A' }}>
        {subtitle}
      </p>
      <span className="link-arrow" style={{ color: '#2D1B4E' }}>
        Discover <ArrowRight size={11} strokeWidth={1.5} />
      </span>
    </div>
  </a>
);

const CollectionsSection = () => (
  <section
    id="collections"
    className="bg-white border-t border-b border-[var(--color-border)] py-14"
    aria-labelledby="collections-heading"
  >
    {/* Section label + diamond pip */}
    <div className="text-center mb-10">
      <p id="collections-heading" className="uppercase tracking-[0.3em]" style={{ color: '#261744', fontSize: '18px', fontWeight: '800' }}>Featured Collections</p>
      <div className="flex items-center justify-center gap-3 mt-3" aria-hidden="true">
        <span className="w-6 h-px bg-[var(--color-border)] block" />
        <span className="text-[9px]" style={{ color: '#B8954A' }}>✦</span>
        <span className="w-6 h-px bg-[var(--color-border)] block" />
      </div>
    </div>

    {/* Card grid — no gap, 1px border between */}
    <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                      border-l border-t border-[var(--color-border)]">
        {CATEGORIES.map(cat => (
          <CategoryCard key={cat.id} {...cat} />
        ))}
      </div>
    </div>
  </section>
);

export default CollectionsSection;
