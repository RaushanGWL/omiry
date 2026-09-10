// src/components/layout/Footer.jsx
// Pixel-matched to design: 5-col grid, exact links, address, gem SVG, social icons
import React from 'react';
import { Link } from 'react-router-dom';

/* Inline SVG social icons */
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const FooterCol = ({ title, links }) => (
  <div>
    <h4 className="text-[9.5px] font-bold uppercase tracking-[0.25em] text-white/80 mb-5">{title}</h4>
    <ul className="space-y-3">
      {links.map((l, i) => (
        <li key={i}>
          <Link to={l.path} onClick={scrollToTop} className="text-xs text-gray-500 hover:text-white transition-colors font-light">{l.label}</Link>
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
            Timeless gemstone sculptures,<br />
            handcrafted with devotion<br />
            and designed to inspire.
          </p>
          <div className="flex items-center gap-4">
            {[{ Icon: FacebookIcon, label: 'Facebook', url: 'https://www.facebook.com/omriy.arts' },
            { Icon: InstagramIcon, label: 'Instagram', url: 'https://www.instagram.com/omriy.arts?stkn=cGx0MjE1M3loZzV3' },
            { Icon: LinkedInIcon, label: 'LinkedIn', url: 'https://www.linkedin.com/in/hitesh-indersen-israni' },
            { Icon: YoutubeIcon, label: 'YouTube', url: 'https://youtube.com/@omriyart?si=SKbY_lsFHgBvv2Lc' }].map(({ Icon, label, url }) => (
              <a key={label} href={url} target={url !== '#' ? '_blank' : undefined} rel={url !== '#' ? 'noreferrer' : undefined} aria-label={label}
                className="text-gray-600 hover:text-[var(--color-gold-light)] transition-colors">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Shop"
          links={[
            { label: 'All Collections', path: '/collections' },
            { label: 'Bestsellers', path: '/collections?best_seller=true' },
            { label: 'New Arrivals', path: '/collections' },
          ]} />

        <FooterCol title="About"
          links={[
            { label: 'Our Story', path: '/about' },
            { label: 'Artisans', path: '/about' },
            { label: 'Journal', path: '/blog' }
          ]} />

        <FooterCol title="Customer Care"
          links={[
            { label: 'Shipping & Delivery', path: '/contact' },
            { label: 'Returns & Exchanges', path: '/contact' },
            { label: 'Care Guide', path: '/contact' },
            { label: 'FAQs', path: '/#faqs' }
          ]} />

        {/* Contact */}
        <div>
          <h4 className="text-[9.5px] font-bold uppercase tracking-[0.25em] text-white/80 mb-5">Contact</h4>
          <address className="not-italic space-y-2.5 text-xs text-gray-500 font-light mb-6">
            <p>hello@omriy.com</p>
            <p>+1 (510) 203-9490</p>
            <p>804 N Weston Ln, Austin 78733 Texas</p>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07] pt-5
                      flex flex-col items-center justify-center
                      text-[9.5px] text-gray-600 gap-3">
        <p className="tracking-wider uppercase">© 2025 OMRIY. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
