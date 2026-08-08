// src/sections/HeroSection.jsx
// Pixel-matched: cream left panel + soft circular arch right panel
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section
    className="bg-[var(--color-brand-light)] flex flex-col md:flex-row min-h-[60vh]"
    aria-label="Hero"
  >
    {/* ── LEFT COPY ── */}
    <div className="w-full md:w-[46%] flex flex-col justify-center
                    px-8 sm:px-12 md:px-14 lg:px-20 xl:px-24
                    py-16 md:py-20 order-2 md:order-1">

      {/* h1 — small-caps Playfair */}
      <h1 className="font-serif font-normal leading-[1.2] text-[#261744] text-[2.5rem] md:text-[3.2rem] mb-4">
        <span className="inline-block whitespace-nowrap">
          <span style={{ fontVariant: 'small-caps' }}>Sculpted</span> by <span style={{ fontVariant: 'small-caps' }}>Nature.</span>
        </span>
        <br />
        <span className="inline-block whitespace-nowrap">
          <span style={{ fontVariant: 'small-caps' }}>Elevated</span> by <span style={{ fontVariant: 'small-caps' }}>Artistry.</span>
        </span>
      </h1>

      {/* Gold ornament + thin rule */}
      <div className="flex items-center gap-3 mb-7" aria-hidden="true">
        <span className="w-24 h-[1px] bg-gradient-to-r from-[#261744]/10 to-[#B8954A]/60 block" />
        <span className="text-[var(--color-gold)] text-[10px]">✦</span>
        <span className="w-24 h-[1px] bg-gradient-to-l from-[#261744]/10 to-[#B8954A]/60 block" />
      </div>

      <p className="text-[13px] text-[var(--color-text-body)] font-light leading-[1.75] max-w-[340px] mb-10">
        Exquisite gemstone sculptures, meticulously handcrafted by
        master artisans. Timeless beauty for a life well lived.
      </p>

      <Link to="/collections" className="btn-primary self-start">
        Explore Collections <ArrowRight size={13} strokeWidth={1.5} />
      </Link>
    </div>

    {/* ── RIGHT IMAGE PANEL ── */}
    <div
      className="w-full md:w-[54%] relative overflow-hidden order-1 md:order-2
                 min-h-[55vw] md:min-h-0 bg-[#F6F4F0]"
    >
      <img
        src="/assets/images/hero_light.png"
        alt="Crystal Quartz Ganesha sculpture with gold details on marble pedestal"
        className="absolute inset-0 z-10 w-full h-full object-cover object-center"
        loading="eager"
      />
    </div>
  </section>
);

export default HeroSection;
