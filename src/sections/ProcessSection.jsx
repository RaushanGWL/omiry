// src/sections/ProcessSection.jsx
// "The Art of Creation" — 5 circles connected by a thin centered horizontal line
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const ProcessSection = () => (
  <section
    className="bg-[var(--color-brand-light)] border-t border-[var(--color-border)] py-14"
    aria-labelledby="process-heading"
  >
    {/* Label + diamond */}
    <div className="text-center mb-12">
      <p id="process-heading" className="uppercase tracking-[0.3em]" style={{ color: '#070212ff', fontSize: '18px', fontWeight: '800' }}>The Art of Creation</p>
      <div className="flex items-center justify-center gap-3 mt-3" aria-hidden="true">
        <span className="w-6 h-px bg-[var(--color-border)] block" />
        <span className="text-[9px]" style={{ color: 'var(--color-gold)' }}>✦</span>
        <span className="w-6 h-px bg-[var(--color-border)] block" />
      </div>
    </div>

    <div className="max-w-screen-lg mx-auto px-6 lg:px-10">
      {/* Outer wrapper — relative so we can draw the connector line */}
      <div className="relative">

        {/* Connector line — horizontally spans between circle centres */}
        <div
          aria-hidden="true"
          className="absolute hidden lg:block"
          style={{
            top: '54px',          /* half of 108px circle */
            left:  'calc(10% + 54px)',
            right: 'calc(10% + 54px)',
            height: '1px',
            background: 'var(--color-border)',
          }}
        />

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-4">
          {PROCESS_STEPS.map(({ id, number, title, description, image }) => (
            <div key={id} className="flex flex-col items-center text-center group">

              {/* Circle image */}
              <div
                className="w-[108px] h-[108px] rounded-full overflow-hidden
                           border border-[var(--color-border)] bg-[var(--color-cream-deep)]
                           mb-4 relative z-10 shadow-sm
                           group-hover:border-[var(--color-gold)] transition-colors duration-300"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover grayscale-[30%]
                             group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>

              {/* Number */}
              <p className="text-[9px] font-bold tracking-[0.25em] text-[var(--color-gold)] mb-1.5">
                {number}
              </p>

              {/* Title */}
              <h3 className="text-[10px] font-bold uppercase tracking-[0.18em]
                             text-[var(--color-text-dark)] mb-2 leading-snug">
                {title}
              </h3>

              {/* Description */}
              <p className="text-[10.5px] text-[var(--color-text-muted)] font-light leading-relaxed max-w-[115px]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
