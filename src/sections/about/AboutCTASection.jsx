import React from 'react';

const AboutCTASection = () => {
  return (
    <section
      className="relative overflow-hidden py-16"
      style={{ background: 'var(--color-brand-dark)' }}
      aria-label="Newsletter signup"
    >
      {/* Botanical left decoration */}
      <svg
        aria-hidden="true"
        className="absolute left-0 top-0 h-full opacity-[0.08]"
        viewBox="0 0 160 320"
        fill="none"
        style={{ width: '160px' }}
      >
        <path d="M80 300 Q80 200 80 20" stroke="white" strokeWidth="1"/>
        <path d="M80 200 Q40 170 20 140" stroke="white" strokeWidth="1"/>
        <path d="M80 200 Q120 170 140 140" stroke="white" strokeWidth="1"/>
        <path d="M80 160 Q50 135 30 110" stroke="white" strokeWidth="1"/>
        <path d="M80 160 Q110 135 130 110" stroke="white" strokeWidth="1"/>
        <path d="M80 120 Q55 100 40 75" stroke="white" strokeWidth="1"/>
        <path d="M80 120 Q105 100 120 75" stroke="white" strokeWidth="1"/>
        <path d="M80 80 Q65 60 55 40" stroke="white" strokeWidth="1"/>
        <path d="M80 80 Q95 60 105 40" stroke="white" strokeWidth="1"/>
      </svg>

      <div className="max-w-[1440px] mx-auto px-8 lg:px-24 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Left text */}
        <div className="lg:w-1/2">
          <h2 className="font-serif font-normal text-white text-[1.9rem] leading-[1.25] mb-4">
            Timeless Creations.<br />
            Meaningful Connections.
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Be the first to discover new collections, stories, and exclusive offers.
          </p>
        </div>

        {/* Right form */}
        <div className="lg:w-1/2 w-full">
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white text-sm px-5 py-4 outline-none text-[var(--color-brand-dark)] placeholder-[var(--color-text-muted)]"
              aria-label="Email address"
            />
            <button
              className="bg-white text-xs uppercase tracking-[0.2em] font-bold px-6 py-4 border-l border-[#E4DDD6] hover:bg-[#F5F3EF] transition-colors"
              style={{ color: 'var(--color-brand-dark)' }}
            >
              Subscribe
            </button>
          </div>
          <p className="text-white/40 text-xs mt-2">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;
