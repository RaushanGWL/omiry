import React from 'react';
import { ProductCard } from '../components/ui';
import { PRODUCTS } from '../constants/products';

const CollectionsPage = () => {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#FAF9F6]">
      {/* 1. Header Section */}
      <section className="bg-[var(--color-brand-light)] border-b border-[var(--color-border)] py-16 md:py-24 text-center px-6">
        <p className="uppercase tracking-[0.25em] text-[9px] font-semibold mb-4" style={{ color: '#B8954A' }}>
          OMRIY Shop
        </p>
        <h1 className="font-serif font-normal text-[2.5rem] md:text-[3.5rem] mb-6" style={{ color: '#261744' }}>
          All Collections
        </h1>
        <p className="text-[13px] font-light max-w-xl mx-auto leading-[1.8]" style={{ color: '#5A5058' }}>
          Discover our complete range of handcrafted gemstone sculptures. Each piece is unique, ethically sourced, and designed to bring harmony, protection, and timeless beauty into your space.
        </p>
      </section>

      {/* 2. Controls / Filtering (Visual placeholder for now) */}
      <section className="border-b border-[var(--color-border)] bg-white py-4 px-6 md:px-12 flex justify-between items-center text-[10px] uppercase tracking-[0.15em] font-medium text-[#261744]">
        <div className="flex gap-6">
          <button className="hover:text-[var(--color-gold)] transition-colors">Filter</button>
          <button className="hover:text-[var(--color-gold)] transition-colors hidden sm:block">Sort By</button>
        </div>
        <div>
          <span>{PRODUCTS.length} Products</span>
        </div>
      </section>

      {/* 3. Product Grid */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-20 text-center border-t border-[var(--color-border)] bg-white px-6">
        <h2 className="font-serif text-[2rem] mb-4" style={{ color: '#261744' }}>Looking for something specific?</h2>
        <p className="text-[12px] font-light mb-8 max-w-md mx-auto leading-relaxed" style={{ color: '#5A5058' }}>
          Our master artisans can create bespoke pieces tailored to your exact desires and energetic needs.
        </p>
        <a href="#" className="btn-primary inline-flex">
          Contact Concierge
        </a>
      </section>
    </main>
  );
};

export default CollectionsPage;
