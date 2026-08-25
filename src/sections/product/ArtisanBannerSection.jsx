import React from 'react';

const ArtisanBannerSection = () => {
  return (
    <section className="bg-[var(--color-brand-light)] pb-16 pt-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="relative rounded-2xl overflow-hidden bg-[var(--color-cream-deep)] h-[360px] md:h-[440px] shadow-sm flex items-center">
          
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="/assets/images/artisan.png" 
              alt="Artisan crafting a gemstone sculpture" 
              className="w-full h-full object-cover object-right"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-cream-deep)] via-[var(--color-cream-deep)]/90 to-transparent w-full md:w-3/4 lg:w-1/2"></div>
          </div>

          {/* Text Content */}
          <div className="relative z-10 p-8 md:p-16 max-w-lg">
            <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] mb-6" style={{ color: 'var(--color-brand-dark)' }}>
              Rooted in devotion.<br />
              Crafted to inspire.
            </h2>
            
            {/* Custom Divider */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rotate-45 bg-[var(--color-gold)]"></div>
              <div className="h-px bg-[var(--color-gold)] w-12 opacity-50"></div>
            </div>

            <p className="text-sm font-light text-[var(--color-text-body)] leading-relaxed mb-4">
              At OMRIY, every sculpture is a celebration of nature's finest treasures and the hands that honor them.
            </p>
            <p className="text-sm font-light text-[var(--color-text-body)] leading-relaxed mb-8">
              Our artisans blend ancient techniques with a deep spiritual reverence to create heirlooms that transcend time and trends.
            </p>

            <div>
              {/* Founder Signature (Mocked with font) */}
              <div className="font-serif italic text-2xl mb-1" style={{ color: 'var(--color-brand-dark)' }}>Omriy Jean</div>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)]">
                FOUNDER, OMRIY
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ArtisanBannerSection;
