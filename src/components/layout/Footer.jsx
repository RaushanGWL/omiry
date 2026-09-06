// src/components/layout/Footer.jsx
// Pixel-matched to design: 5-col grid, exact links, address, gem SVG, social icons
import React from 'react';

/* Inline SVG social icons */
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

/* Decorative gem/diamond outline in Contact column */
const GemOutline = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 text-[var(--color-gold)] opacity-25">
    <polygon points="40,8 68,28 60,68 20,68 12,28"/>
    <polyline points="12,28 40,36 68,28"/>
    <line x1="20" y1="68" x2="40" y2="36"/>
    <line x1="60" y1="68" x2="40" y2="36"/>
    <polyline points="28,8 40,8 52,8"/>
    <line x1="28" y1="8" x2="12" y2="28"/>
    <line x1="52" y1="8" x2="68" y2="28"/>
    <line x1="40" y1="8" x2="40" y2="36"/>
  </svg>
);

const FooterCol = ({ title, links }) => (
  <div>
    <h4 className="text-[9.5px] font-bold uppercase tracking-[0.25em] text-white/80 mb-5">{title}</h4>
    <ul className="space-y-3">
      {links.map(l => (
        <li key={l}>
          <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors font-light">{l}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <footer className="bg-[#170D28] text-white">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-14 pb-7">

      {/* Main grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="font-serif text-[22px] tracking-[0.28em] text-[#B78A49] mb-4">OMRIY</div>
          <p className="text-xs text-gray-500 font-light leading-relaxed mb-6">
            Timeless gemstone sculptures,<br/>
            handcrafted with devotion<br/>
            and designed to inspire.
          </p>
          <div className="flex items-center gap-4">
            {[{ Icon: InstagramIcon, label: 'Instagram', url: 'https://www.instagram.com/omriy.arts?stkn=cGx0MjE1M3loZzV3' },
              { Icon: LinkedInIcon, label: 'LinkedIn', url: 'https://www.linkedin.com/in/hitesh-indersen-israni/' },
              { Icon: YoutubeIcon,   label: 'YouTube', url: '#' }].map(({ Icon, label, url }) => (
              <a key={label} href={url} target={url !== '#' ? '_blank' : undefined} rel={url !== '#' ? 'noreferrer' : undefined} aria-label={label}
                className="text-gray-600 hover:text-[var(--color-gold-light)] transition-colors">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Shop"
          links={['All Collections','Bestsellers','New Arrivals','Gift Cards']} />

        <FooterCol title="About"
          links={['Our Story','Artisans','Sustainability','Journal']} />

        <FooterCol title="Customer Care"
          links={['Shipping & Delivery','Returns & Exchanges','Care Guide','FAQs']} />

        {/* Contact */}
        <div>
          <h4 className="text-[9.5px] font-bold uppercase tracking-[0.25em] text-white/80 mb-5">Contact</h4>
          <address className="not-italic space-y-2.5 text-xs text-gray-500 font-light mb-6">
            <p>hello@omriy.com</p>
            <p>+1 (510) 203-9490</p>
            <p>804 N Weston Ln, Austin 78733 Texas</p>
          </address>
          <GemOutline />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07] pt-5
                      flex flex-col md:flex-row items-center justify-between
                      text-[9.5px] text-gray-600 gap-3">
        <p className="tracking-wider uppercase">© 2025 OMRIY. All Rights Reserved.</p>
        <div className="flex items-center gap-3 tracking-wider uppercase">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <span className="opacity-30">·</span>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <span className="opacity-30">·</span>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
