import React from 'react';

const OurStorySection = () => {
  return (
    <section
      id="our-story"
      className="border-t border-b border-[var(--color-border)]"
      aria-labelledby="story-heading"
      style={{ background: '#FAFAF8' }}
    >
      <div className="flex flex-col md:flex-row" style={{ minHeight: '420px' }}>
        {/* Left image — fills panel, object-cover like a studio photo */}
        <div className="w-full md:w-[45%] relative overflow-hidden" style={{ minHeight: '320px' }}>
          <img
            src="/assets/images/crystal_tree.png"
            alt="Gemstone crystal tree sculpture on marble surface"
            className="absolute inset-0 w-full h-full object-contain object-center"
            style={{ background: '#F0EBE3', padding: '24px' }}
            loading="lazy"
          />
        </div>

        {/* Right text */}
        <div className="w-full md:w-[55%] flex flex-col justify-center
                        px-8 sm:px-12 md:px-12 lg:px-16 py-14
                        border-l border-[var(--color-border)] bg-white">

          {/* Gold label */}
          <p className="uppercase tracking-[0.25em] text-[9px] font-semibold mb-5" style={{ color: 'var(--color-gold)' }}>
            Our Story
          </p>

          {/* Large serif heading — small-caps */}
          <h2
            id="story-heading"
            className="font-serif font-normal leading-[1.15] mb-4"
            style={{ color: 'var(--color-brand-dark)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontVariant: 'small-caps' }}
          >
            Where Nature Meets Spirit.
          </h2>

          {/* Simple thin horizontal divider */}
          <div className="flex items-center gap-3 mb-8" aria-hidden="true">
            <span className="w-16 h-px block" style={{ background: '#C4B8B0' }} />
            <span className="text-[9px]" style={{ color: 'var(--color-gold)' }}>✦</span>
          </div>

          {/* Body copy */}
          <div className="space-y-4 text-[13px] font-light leading-[1.85]" style={{ color: 'var(--color-text-body)' }}>
            <p>
              Born from a deep reverence for nature and spiritual heritage, OMRIY is dedicated
              to transforming rare, natural gemstones into meaningful works of art.
            </p>
            <p>
              Our journey began with a simple belief: that beauty, when crafted with devotion
              and integrity, becomes timeless. Today, our sculptures are cherished by collectors
              worldwide as symbols of wisdom, protection, abundance, and harmony.
            </p>
            <p>
              Every OMRIY piece is a reflection of this promise — to honor the earth, the artisan,
              and the spirit it is created to inspire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
