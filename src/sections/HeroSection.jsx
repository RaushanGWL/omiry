// src/sections/HeroSection.jsx
// Dynamic hero section — data fetched from Supabase Edge Function
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_ID = '6274de6a-f993-4cc9-b656-a4753f21af0f';
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Split heading into two lines on ". " boundary for display
function splitHeading(heading = '') {
  const dotIdx = heading.indexOf('. ');
  if (dotIdx === -1) return [heading, ''];
  return [heading.slice(0, dotIdx + 1), heading.slice(dotIdx + 2)];
}

// Shimmer placeholder for loading state
const HeroSkeleton = () => (
  <section
    className="relative flex flex-col min-h-[60vh] bg-[var(--color-brand-light)]"
    aria-label="Hero loading"
  >
    <div className="relative z-10 w-full md:w-[50%] flex flex-col justify-center px-8 sm:px-12 md:px-14 lg:px-20 xl:px-24 py-16 md:py-20">
      <div className="h-10 w-3/4 bg-[var(--color-brand-dark)]/10 rounded animate-pulse mb-3" />
      <div className="h-10 w-1/2 bg-[var(--color-brand-dark)]/10 rounded animate-pulse mb-7" />
      <div className="flex items-center gap-3 mb-7">
        <span className="w-24 h-[1px] bg-[var(--color-gold)]/30 block" />
        <span className="text-[var(--color-gold)] text-xs">✦</span>
        <span className="w-24 h-[1px] bg-[var(--color-gold)]/30 block" />
      </div>
      <div className="h-4 w-full bg-[var(--color-brand-dark)]/10 rounded animate-pulse mb-2" />
      <div className="h-4 w-5/6 bg-[var(--color-brand-dark)]/10 rounded animate-pulse mb-2" />
      <div className="h-4 w-2/3 bg-[var(--color-brand-dark)]/10 rounded animate-pulse mb-10" />
      <div className="h-10 w-36 bg-[var(--color-brand-dark)]/10 rounded animate-pulse" />
    </div>
    <div className="absolute inset-0 z-0 w-full h-full bg-[#F0EDE8] animate-pulse" />
  </section>
);

const HeroSection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/hero_section?id=${HERO_ID}`,
          {
            headers: {
              apiKey: SUPABASE_ANON_KEY,
              'Content-Type': 'application/json',
            },
          }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (json.success && json.data) {
          setData(json.data);
        }
      } catch (err) {
        console.error('[HeroSection] Failed to fetch hero data:', err);
        // Leave data null → fallback static content renders
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, []);

  if (loading) return <HeroSkeleton />;

  // Resolve values — prefer API data, fall back to static defaults
  const heading = data?.heading || 'Sculpted by Nature. Elevated by Artistry.';
  const description =
    data?.description ||
    'Exquisite gemstone sculptures, meticulously handcrafted by master artisans. Timeless beauty for a life well lived.';
  const ctaText = data?.cta_text || 'Explore Collections';
  const ctaUrl = data?.cta_url || '/collections';
  const imageUrl = data?.image_url || '/assets/images/hero_light.png';
  const [line1, line2] = splitHeading(heading);

  return (
    <section
      className="relative flex flex-col justify-center min-h-[60vh] md:min-h-[70vh] bg-[var(--color-brand-light)] overflow-hidden"
      aria-label="Hero"
    >
      {/* ── BACKGROUND IMAGE & GRADIENT ── */}
      <div className="absolute inset-0 z-0 w-full h-full flex justify-end">
        <div className="relative w-full h-full">
          <img
            src={imageUrl}
            alt={heading}
            className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
            loading="eager"
          />
          {/* Gradient overlay: blends from background color on left to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[var(--color-brand-light)] via-[var(--color-brand-light)]/90 to-transparent md:w-[70%] lg:w-[60%]"></div>
        </div>
      </div>

      {/* ── LEFT COPY ── */}
      <div
        className="relative z-10 w-full md:w-[55%] lg:w-[50%] flex flex-col justify-center
                   px-8 sm:px-12 md:px-14 lg:px-20 xl:px-24
                   py-16 md:py-24"
      >
        {/* h1 — small-caps Playfair */}
        <h1 className="font-serif font-normal leading-[1.2] text-[var(--color-brand-dark)] text-[2.5rem] md:text-[3.2rem] mb-4">
          {line1 && (
            <span className="inline-block">
              <span style={{ fontVariant: 'small-caps' }}>{line1}</span>
            </span>
          )}
          {line2 && (
            <>
              <br />
              <span className="inline-block">
                <span style={{ fontVariant: 'small-caps' }}>{line2}</span>
              </span>
            </>
          )}
        </h1>

        {/* Gold ornament + thin rule */}
        <div className="flex items-center gap-3 mb-7" aria-hidden="true">
          <span className="text-[var(--color-gold)] text-xs">✦</span>
          <span className="w-24 h-[1px] bg-gradient-to-r from-[var(--color-gold)]/60 to-transparent block" />
        </div>

        <p className="text-sm text-[var(--color-text-body)] font-light leading-[1.75] max-w-[380px] mb-10">
          {description}
        </p>

        <Link to={ctaUrl} className="btn-primary self-start shadow-sm hover:shadow-md transition-shadow">
          {ctaText} <ArrowRight size={13} strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
