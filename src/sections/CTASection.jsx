// src/sections/CTASection.jsx
// Dark purple — botanical SVG left, email form right, exact colors & layout
import React, { useState } from 'react';

/* Faint botanical / leaf line-art (matches the design's left decoration) */
const BotanicalDecor = () => (
  <svg
    viewBox="0 0 160 480"
    fill="none"
    stroke="white"
    strokeWidth="0.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-full w-full opacity-[0.12]"
    aria-hidden="true"
  >
    {/* Main stem */}
    <path d="M80 480 Q75 380 82 280 Q88 180 78 80 Q74 40 80 10" />
    {/* Leaf pairs */}
    <path d="M80 380 Q50 360 30 340 Q55 330 80 380" />
    <path d="M80 380 Q110 360 130 340 Q105 330 80 380" />
    <path d="M80 300 Q45 275 22 250 Q50 242 80 300" />
    <path d="M80 300 Q115 275 138 250 Q110 242 80 300" />
    <path d="M80 220 Q52 198 35 175 Q60 168 80 220" />
    <path d="M80 220 Q108 198 125 175 Q100 168 80 220" />
    <path d="M80 145 Q58 125 44 105 Q66 100 80 145" />
    <path d="M80 145 Q102 125 116 105 Q94 100 80 145" />
    {/* Small gem shape at top */}
    <polygon points="80,12 88,22 80,30 72,22" />
    {/* Dots along stem */}
    <circle cx="80" cy="80"  r="1.5" fill="white" stroke="none" />
    <circle cx="80" cy="180" r="1.5" fill="white" stroke="none" />
    <circle cx="80" cy="260" r="1.5" fill="white" stroke="none" />
    <circle cx="80" cy="340" r="1.5" fill="white" stroke="none" />
  </svg>
);

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) { setSent(true); setEmail(''); }
  };

  return (
    <section
      className="relative bg-[var(--color-brand-dark)] text-white overflow-hidden"
      aria-label="Newsletter – Timeless Creations"
    >
      {/* Botanical decoration — left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-36 pointer-events-none">
        <BotanicalDecor />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto
                      px-8 md:px-16 lg:px-24 py-16
                      flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* Left copy */}
        <div className="md:w-[44%] text-center md:text-left">
          <h2 className="font-serif font-normal text-[1.7rem] md:text-[2rem]
                         text-white leading-[1.25] mb-4">
            Timeless Creations.<br />
            Meaningful Connections.
          </h2>
          <p className="text-[12px] text-white/55 font-light leading-relaxed">
            Be the first to discover new collections,<br />
            stories, and exclusive offers.
          </p>
        </div>

        {/* Right form */}
        <div className="md:w-[56%] w-full">
          {sent ? (
            <p className="text-[13px] text-[var(--color-gold-light)] font-light tracking-wide py-3">
              ✦ Thank you — you're on the list.
            </p>
          ) : (
            <form onSubmit={handleSubmit} aria-label="Email subscription" className="flex flex-col gap-3">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  aria-label="Email address"
                  className="flex-grow bg-white/10 border border-white/20 px-5 py-3.5
                             text-[12px] text-white placeholder-white/35
                             focus:outline-none focus:border-white/50 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-white text-[var(--color-brand-dark)] px-7 py-3.5
                             text-[9.5px] uppercase tracking-[0.22em] font-bold
                             hover:bg-[var(--color-brand-light)] transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-[10px] text-white/35 font-light">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
