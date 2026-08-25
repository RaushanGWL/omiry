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
const PinterestIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.19-.77 1.28-5.43 1.28-5.43s-.33-.65-.33-1.62c0-1.52.88-2.65 1.97-2.65.93 0 1.38.7 1.38 1.54 0 .94-.6 2.34-.91 3.64-.26 1.09.54 1.97 1.6 1.97 1.92 0 3.4-2.02 3.4-4.95 0-2.59-1.86-4.4-4.52-4.4-3.08 0-4.89 2.31-4.89 4.7 0 .93.36 1.93.81 2.48a.32.32 0 0 1 .07.31c-.08.34-.27 1.09-.3 1.24-.05.2-.17.24-.38.14C5.93 14.86 5 13.1 5 11.14 5 7.7 7.58 4.56 12.4 4.56c3.94 0 7.01 2.81 7.01 6.55 0 3.91-2.47 7.06-5.89 7.06-1.15 0-2.23-.6-2.6-1.3l-.71 2.63c-.26.98-.95 2.21-1.42 2.96.57.17 1.16.26 1.77.26 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
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
          <div className="font-serif text-[22px] tracking-[0.28em] mb-4">OMRIY</div>
          <p className="text-xs text-gray-500 font-light leading-relaxed mb-6">
            Timeless gemstone sculptures,<br/>
            handcrafted with devotion<br/>
            and designed to inspire.
          </p>
          <div className="flex items-center gap-4">
            {[{ Icon: InstagramIcon, label: 'Instagram' },
              { Icon: PinterestIcon, label: 'Pinterest' },
              { Icon: YoutubeIcon,   label: 'YouTube' }].map(({ Icon, label }) => (
              <a key={label} href="#" aria-label={label}
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
            <p>+91 22345-67890</p>
            <p>New York, NY, USA</p>
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
