import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutHeroSection = () => {
  return (
    <section
      className="bg-[var(--color-brand-light)] flex flex-col md:flex-row min-h-[72vh]"
      aria-label="About Hero"
    >
      {/* LEFT COPY */}
      <div className="w-full md:w-[46%] flex flex-col justify-center
                      px-8 sm:px-12 md:px-14 lg:px-20 xl:px-24
                      py-16 md:py-20 order-2 md:order-1">

        {/* Label */}
        <p className="uppercase tracking-[0.25em] text-[9px] font-semibold mb-6" style={{ color: 'var(--color-gold)' }}>
          About OMRIY
        </p>

        {/* Heading */}
        <h1 className="font-serif font-normal leading-[1.15] text-[var(--color-brand-dark)] text-[2.5rem] md:text-[3.2rem] mb-4">
          <span className="inline-block whitespace-nowrap">
            <span style={{ fontVariant: 'small-caps' }}>Crafted</span> by <span style={{ fontVariant: 'small-caps' }}>Nature.</span>
          </span>
          <br />
          <span className="inline-block whitespace-nowrap">
            <span style={{ fontVariant: 'small-caps' }}>Guided</span> by <span style={{ fontVariant: 'small-caps' }}>Devotion.</span>
          </span>
        </h1>

        {/* Gold divider */}
        <div className="flex items-center gap-3 mb-7" aria-hidden="true">
          <span className="w-20 h-[1px] bg-gradient-to-r from-[var(--color-brand-dark)]/10 to-[var(--color-gold)]/60 block" />
          <span className="text-[var(--color-gold)] text-[10px]">✦</span>
          <span className="w-20 h-[1px] bg-gradient-to-l from-[var(--color-brand-dark)]/10 to-[var(--color-gold)]/60 block" />
        </div>

        <p className="text-[13px] text-[var(--color-text-body)] font-light leading-[1.8] max-w-[360px] mb-10">
          OMRIY creates timeless gemstone sculptures that honor nature's beauty and spiritual
          traditions. Each piece is a union of art, devotion, and the world's finest natural gemstones.
        </p>

        <a href="#our-story" className="btn-primary self-start">
          Our Story <ArrowRight size={13} strokeWidth={1.5} />
        </a>
      </div>

      {/* RIGHT IMAGE PANEL */}
      <div
        className="w-full md:w-[54%] relative overflow-hidden order-1 md:order-2
                   min-h-[55vw] md:min-h-0"
        style={{ background: '#F0EBE3' }}
      >
        {/* Full background photo — arch/studio scene */}
        <img
          src="/assets/images/hero_light.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* Overlay products positioned like design */}
        <div className="absolute inset-0 z-10 flex items-end">
          {/* Ganesha — center, tallest */}
          <img
            src="/assets/images/crystal_deity.png"
            alt="Crystal Ganesha sculpture"
            className="absolute bottom-0 left-[18%] h-[78%] object-contain object-bottom drop-shadow-xl"
            loading="eager"
          />
          {/* Lion — top right, on elevated platform */}
          <img
            src="/assets/images/lion.png"
            alt="Amethyst lion sculpture"
            className="absolute top-[8%] right-[6%] h-[44%] object-contain drop-shadow-xl"
            loading="eager"
          />
          {/* Malachite egg — bottom right foreground, small */}
          <img
            src="/assets/images/malachite_egg.png"
            alt="Malachite egg sculpture"
            className="absolute bottom-[4%] right-[8%] h-[28%] object-contain object-bottom drop-shadow-lg"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
