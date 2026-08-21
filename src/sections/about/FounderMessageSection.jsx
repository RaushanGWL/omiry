import React from 'react';

const FounderMessageSection = () => {
  return (
    <section
      className="bg-[var(--color-brand-light)] border-b border-[var(--color-border)]"
      aria-labelledby="founder-heading"
    >
      <div className="flex flex-col md:flex-row md:h-[400px]">
        {/* Left: Artisan photo */}
        <div className="w-full md:w-[48%] h-[300px] md:h-full overflow-hidden bg-[#DDD5CC]">
          <img
            src="/assets/images/craftsmanship.png"
            alt="R. K. Mehta, Founder and Head Artisan"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Right: Quote */}
        <div className="w-full md:w-[52%] flex flex-col justify-center
                        px-8 sm:px-12 md:px-14 lg:px-20 py-10 bg-white
                        border-l border-[var(--color-border)]">

          {/* Big decorative quote mark */}
          <span className="font-serif text-[60px] leading-none mb-1" style={{ color: 'var(--color-brand-dark)', opacity: 0.12 }}>"</span>

          <p className="uppercase tracking-[0.25em] text-[9px] font-semibold mb-5 -mt-4" style={{ color: 'var(--color-gold)' }}>
            A Message From Our Founder
          </p>

          <blockquote className="font-serif font-normal text-[1.15rem] leading-[1.7] mb-6" style={{ color: 'var(--color-brand-dark)' }}>
            At OMRIY, we don't just carve stone — we awaken its soul.
            Each sculpture is a prayer in form, a bridge between the
            natural world and the spiritual.
            <br /><br />
            May these creations bring beauty, protection, and
            positivity into your life and home.
          </blockquote>

          {/* Signature */}
          <div className="mb-1">
            <p className="font-serif italic text-[1.05rem]" style={{ color: 'var(--color-brand-dark)' }}>R. K. Mehta</p>
          </div>
          <p className="uppercase tracking-[0.2em] text-[9px] font-semibold" style={{ color: 'var(--color-text-muted)' }}>
            Founder & Head Artisan
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderMessageSection;
