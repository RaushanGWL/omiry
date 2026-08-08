// src/sections/TestimonialSection.jsx
// Slider: arrows on FAR left/right edges of full-width section (absolutely positioned)
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    quote: 'OMRIY pieces are more than art – they are heirlooms that carry energy, intention, and unparalleled craftsmanship.',
    name: 'Priya K.',
    location: 'Collector, Mumbai',
    rating: 5,
    image: '/assets/images/elephant.png',
  },
  {
    id: 2,
    quote: 'Receiving my Amethyst Ganesha felt like receiving something sacred. The craftsmanship is unlike anything I have ever seen.',
    name: 'Ananya R.',
    location: 'Collector, New York',
    rating: 5,
    image: '/assets/images/hero_light.png',
  },
  {
    id: 3,
    quote: 'Every piece tells a story. I have gifted OMRIY sculptures and the reactions are always pure amazement.',
    name: 'Rajan M.',
    location: 'Art Enthusiast, London',
    rating: 5,
    image: '/assets/images/lion.png',
  },
];

const Stars = ({ n }) => (
  <div className="flex gap-[3px] mt-3" aria-label={`${n} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`text-[15px] leading-none ${i < n ? 'text-[var(--color-gold)]' : 'text-gray-200'}`}>
        ★
      </span>
    ))}
  </div>
);

const TestimonialSection = () => {
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;
  const prev = () => setActive(a => (a - 1 + total) % total);
  const next = () => setActive(a => (a + 1) % total);
  const t = TESTIMONIALS[active];

  return (
    <section
      className="relative border-t border-[var(--color-border)] overflow-hidden"
      aria-label="Customer testimonials"
      style={{ minHeight: '420px' }}
    >
      {/* Full-width two-panel layout — NO max-width wrapper */}
      <div className="flex flex-col md:flex-row" style={{ minHeight: '420px' }}>

        {/* ── LEFT image panel ── */}
        <div
          className="w-full md:w-[40%] relative flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#EDE7DF 0%,#E8E2D8 100%)', minHeight: '280px' }}
        >
          {/* Faint giant opening quote */}
          <span
            aria-hidden="true"
            className="absolute top-6 left-8 font-serif text-[9rem] leading-none
                       text-[var(--color-brand-dark)] opacity-[0.06] select-none"
          >"</span>

          <img
            key={t.id}
            src={t.image}
            alt="Featured gemstone sculpture"
            className="relative z-10 max-h-[340px] max-w-[80%] object-contain
                       transition-opacity duration-500"
            loading="lazy"
          />
        </div>

        {/* ── RIGHT quote panel ── */}
        <div
          className="w-full md:w-[60%] flex flex-col justify-center
                     px-10 md:px-16 lg:px-24 py-14 bg-[var(--color-brand-light)]"
        >
          {/* Decorative large " */}
          <div
            aria-hidden="true"
            className="font-serif text-[5.5rem] leading-[0.8] text-[var(--color-brand-dark)]
                       opacity-15 mb-3 select-none -ml-2"
          >"</div>

          <blockquote>
            <p className="font-serif italic font-normal text-[1.25rem] md:text-[1.4rem]
                          text-[var(--color-text-dark)] leading-[1.6] mb-6 max-w-[520px]">
              {t.quote}
            </p>
            <footer>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-brand-dark)]">
                {t.name}
              </p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] mt-0.5 font-light">
                {t.location}
              </p>
              <Stars n={t.rating} />
            </footer>
          </blockquote>
        </div>
      </div>

      {/* ── Floating edge arrows ── positioned absolutely on the section */}
      <button
        onClick={prev}
        aria-label="Previous testimonial"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20
                   w-8 h-8 flex items-center justify-center
                   bg-white/80 backdrop-blur-sm border border-[var(--color-border)]
                   text-[var(--color-text-body)] hover:text-[var(--color-brand-dark)]
                   hover:border-[var(--color-brand-dark)] transition-colors duration-200"
      >
        <ChevronLeft size={15} strokeWidth={1.5} />
      </button>

      <button
        onClick={next}
        aria-label="Next testimonial"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20
                   w-8 h-8 flex items-center justify-center
                   bg-white/80 backdrop-blur-sm border border-[var(--color-border)]
                   text-[var(--color-text-body)] hover:text-[var(--color-brand-dark)]
                   hover:border-[var(--color-brand-dark)] transition-colors duration-200"
      >
        <ChevronRight size={15} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default TestimonialSection;
