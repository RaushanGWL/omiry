// src/components/layout/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import useScrolled from '../../hooks/useScrolled';

const LEFT  = [
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '/collections', chevron: true },
  { label: 'Bestsellers', href: '/collections?best_seller=true' },
  { label: 'About',       href: '/about' },
];
const RIGHT = [
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const NavLink = ({ label, href, chevron }) => (
  href.startsWith('/') ? (
    <Link
      to={href}
      className="flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-[var(--color-text-body)] hover:text-[var(--color-brand-dark)] transition-colors duration-200 font-bold"
    >
      {label}
      {chevron && (
        <svg width="7" height="4" viewBox="0 0 7 4" fill="none" className="mt-px opacity-50">
          <path d="M.5.5l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      )}
    </Link>
  ) : (
    <a
      href={href}
      className="flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-[var(--color-text-body)] hover:text-[var(--color-brand-dark)] transition-colors duration-200 font-bold"
    >
      {label}
      {chevron && (
        <svg width="7" height="4" viewBox="0 0 7 4" fill="none" className="mt-px opacity-50">
          <path d="M.5.5l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      )}
    </a>
  )
);

const Navbar = () => {
  const scrolled = useScrolled(50);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`bg-[var(--color-brand-light)] sticky top-0 z-50 transition-shadow duration-300
        ${scrolled ? 'shadow-sm' : 'border-b border-[var(--color-border)]'}`}
    >
      <nav
        className="max-w-[1440px] mx-auto px-6 lg:px-10 h-[58px] flex items-center"
        aria-label="Main navigation"
      >
        {/* LEFT */}
        <div className="hidden md:flex items-center gap-8 flex-1">
          {LEFT.map(l => <NavLink key={l.label} {...l} />)}
        </div>

        {/* CENTER LOGO */}
        <div className="flex-1 md:flex-none flex justify-start md:justify-center">
          <a
            href="/"
            aria-label="OMRIY Home"
            className="font-serif text-[26px] tracking-[0.32em] text-[#B78A49] font-semibold hover:text-[#B78A49]/80 transition-colors"
          >
            OMRIY
          </a>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-7 flex-1 justify-end">
          {RIGHT.map(l => <NavLink key={l.label} {...l} />)}

          {/* Vertical rule */}
          <span className="w-px h-4 bg-[var(--color-border)] mx-1" aria-hidden="true" />

          {/* Icon buttons */}
          <button aria-label="Search"
            className="text-[var(--color-text-body)] hover:text-[var(--color-brand-dark)] transition-colors"
          >
            <Search size={17} strokeWidth={1.5} />
          </button>
          
          <Link to="/login" aria-label="Account"
            className="text-[var(--color-text-body)] hover:text-[var(--color-brand-dark)] transition-colors"
          >
            <User size={17} strokeWidth={1.5} />
          </Link>

          <button aria-label="Cart – 0 items"
            className="relative text-[var(--color-text-body)] hover:text-[var(--color-brand-dark)] transition-colors"
          >
            <ShoppingBag size={17} strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-1.5 bg-[var(--color-brand-dark)] text-white
              text-xs w-[14px] h-[14px] rounded-full flex items-center justify-center font-bold leading-none">
              0
            </span>
          </button>
        </div>

        {/* MOBILE hamburger */}
        <div className="flex md:hidden items-center gap-4 ml-auto text-[var(--color-text-body)]">
          <button aria-label="Cart" className="relative hover:text-[var(--color-brand-dark)] transition-colors">
            <ShoppingBag size={17} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 bg-[var(--color-brand-dark)] text-white text-xs w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">0</span>
          </button>
          <button aria-label="Toggle menu" aria-expanded={open}
            onClick={() => setOpen(o => !o)}
            className="hover:text-[var(--color-brand-dark)] transition-colors"
          >
            {open ? <X size={19} strokeWidth={1.5}/> : <Menu size={19} strokeWidth={1.5}/>}
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="md:hidden bg-[var(--color-brand-light)] border-t border-[var(--color-border)]">
          <div className="px-6 py-5 flex flex-col gap-4 text-xs uppercase tracking-[0.18em] font-bold text-[var(--color-text-body)]">
          {[...LEFT, ...RIGHT].map(l => (
              l.href.startsWith('/') ? (
                <Link key={l.label} to={l.href}
                  className="hover:text-[var(--color-brand-dark)] transition-colors pb-3 border-b border-[var(--color-border)] last:border-0"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ) : (
                <a key={l.label} href={l.href}
                  className="hover:text-[var(--color-brand-dark)] transition-colors pb-3 border-b border-[var(--color-border)] last:border-0"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
