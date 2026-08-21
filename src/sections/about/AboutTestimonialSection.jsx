import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: 'The craftsmanship is beyond words. My Ganesha sculpture is not just beautiful; it brings a sense of peace and positivity to our home every day.',
    name: 'Anjali S.',
    location: 'Collector, Mumbai',
    stars: 5,
  },
  {
    quote: 'OMRIY pieces are more than art — they are heirlooms that carry energy, intention, and unparalleled craftsmanship.',
    name: 'Priya K.',
    location: 'Collector, Mumbai',
    stars: 5,
  },
  {
    quote: 'I gifted one to my mother and she cried. The quality, the packaging, the certificate — every detail was perfection.',
    name: 'Rahul M.',
    location: 'Collector, Delhi',
    stars: 5,
  },
];

const AboutTestimonialSection = () => {
  const [slide, setSlide] = useState(0);
  const prev = () => setSlide(s => (s - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setSlide(s => (s + 1) % TESTIMONIALS.length);
  const t = TESTIMONIALS[slide];

  return (
    <section
      className="relative bg-[var(--color-brand-light)] border-b border-[var(--color-border)]"
      aria-label="Customer testimonial"
    >
      {/* Left arrow */}
      <button
        onClick={prev}
        aria-label="Previous testimonial"
        className="absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 z-10
                   w-9 h-9 rounded-full border border-[var(--color-border)] bg-white
                   flex items-center justify-center hover:border-[var(--color-gold)] transition-colors"
      >
        <ChevronLeft size={15} strokeWidth={1.5} style={{ color: 'var(--color-brand-dark)' }} />
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        aria-label="Next testimonial"
        className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-10
                   w-9 h-9 rounded-full border border-[var(--color-border)] bg-white
                   flex items-center justify-center hover:border-[var(--color-gold)] transition-colors"
      >
        <ChevronRight size={15} strokeWidth={1.5} style={{ color: 'var(--color-brand-dark)' }} />
      </button>

      <div className="max-w-3xl mx-auto px-16 py-20 text-center">
        {/* Opening quote decoration */}
        <div className="flex justify-center mb-4">
          <span className="font-serif text-[60px] leading-none" style={{ color: 'var(--color-brand-dark)', opacity: 0.18 }}>"</span>
        </div>

        <p className="font-serif font-normal text-[1.25rem] md:text-[1.5rem] leading-[1.7] mb-8" style={{ color: 'var(--color-brand-dark)' }}>
          {t.quote}
        </p>

        {/* Closing quote */}
        <div className="flex justify-end mb-6">
          <span className="font-serif text-[60px] leading-none" style={{ color: 'var(--color-brand-dark)', opacity: 0.18 }}>"</span>
        </div>

        <p className="uppercase tracking-[0.2em] text-[9px] font-bold mb-1" style={{ color: 'var(--color-brand-dark)' }}>{t.name}</p>
        <p className="uppercase tracking-[0.15em] text-[9px] font-light mb-4" style={{ color: 'var(--color-text-muted)' }}>{t.location}</p>
        <div className="flex justify-center gap-1">
          {Array.from({ length: t.stars }).map((_, i) => (
            <span key={i} className="text-[12px]" style={{ color: 'var(--color-gold)' }}>★</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonialSection;
