import React from 'react';
import { PROCESS_STEPS } from '../../constants';

/* ── Shared Section Heading ─────────────────────────── */
const SectionHeading = ({ id, label }) => (
  <div className="text-center mb-12">
    <p
      id={id}
      className="uppercase tracking-[0.3em]"
      style={{ color: '#261744', fontSize: '18px', fontWeight: '800' }}
    >
      {label}
    </p>
    <div className="flex items-center justify-center gap-3 mt-3" aria-hidden="true">
      <span className="w-6 h-px bg-[var(--color-border)] block" />
      <span className="text-[9px]" style={{ color: '#B8954A' }}>✦</span>
      <span className="w-6 h-px bg-[var(--color-border)] block" />
    </div>
  </div>
);

const CraftsmanshipSection = () => {
  return (
    <section
      className="bg-[var(--color-brand-light)] border-b border-[var(--color-border)] py-16"
      aria-labelledby="craftsmanship-heading"
    >
      <SectionHeading id="craftsmanship-heading" label="The OMRIY Craftsmanship" />

      <div className="max-w-screen-lg mx-auto px-6 lg:px-10">
        <div className="relative">
          {/* Connector line */}
          <div
            aria-hidden="true"
            className="absolute hidden lg:block"
            style={{
              top: '54px',
              left: 'calc(10% + 54px)',
              right: 'calc(10% + 54px)',
              height: '1px',
              background: 'var(--color-border)',
            }}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-4">
            {PROCESS_STEPS.map(({ id, number, title, description, image }) => (
              <div key={id} className="flex flex-col items-center text-center group">
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
                <p className="text-[9px] font-bold tracking-[0.25em] mb-1.5" style={{ color: '#B8954A' }}>
                  {number}
                </p>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2 leading-snug" style={{ color: '#261744' }}>
                  {title}
                </h3>
                <p className="text-[10.5px] font-light leading-relaxed max-w-[115px]" style={{ color: '#9A8E98' }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
