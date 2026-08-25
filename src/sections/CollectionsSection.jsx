// src/sections/CollectionsSection.jsx
// Featured Collections — zero-gap bordered card grid, bottom-aligned "DISCOVER →"
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ title, subtitle, image, href }) => (
  <Link
    to={href}
    className="group flex flex-col bg-white border-r border-b border-[var(--color-border)]
               last:border-r-0 hover:shadow-md transition-shadow duration-500 cursor-pointer"
  >
    {/* Image area */}
    <div className="flex-1 flex items-center justify-center bg-[#F2EDE6] overflow-hidden h-[220px]">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-contain object-center p-5
                   transform group-hover:scale-[1.04] transition-transform duration-700"
        loading="lazy"
      />
    </div>

    {/* Bottom text */}
    <div className="px-5 pt-4 pb-5 border-t border-[var(--color-border)]">
      <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-1" style={{ color: 'var(--color-brand-dark)' }}>
        {title}
      </h3>
      <p className="text-sm font-light mb-4 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
        {subtitle}
      </p>
      <span className="link-arrow" style={{ color: 'var(--color-brand-dark)' }}>
        Discover <ArrowRight size={11} strokeWidth={1.5} />
      </span>
    </div>
  </Link>
);

const CollectionsSection = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
        
        const response = await fetch(`${supabaseUrl}/functions/v1/collections`, {
          headers: {
            'apikey': supabaseKey
          }
        });
        const json = await response.json();
        if (json.success && json.data) {
          // Sort by sort_order
          const sorted = json.data.sort((a, b) => a.sort_order - b.sort_order);
          setCollections(sorted.slice(0, 4)); // Only show top 4 on home page
        }
      } catch (error) {
        console.error('Failed to fetch collections', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCollections();
  }, []);

  return (
    <section
      id="collections"
      className="bg-white border-t border-b border-[var(--color-border)] py-14"
      aria-labelledby="collections-heading"
    >
      {/* Section label + diamond pip */}
      <div className="text-center mb-10">
        <p id="collections-heading" className="uppercase tracking-[0.3em]" style={{ color: 'var(--color-brand-dark)', fontSize: '18px', fontWeight: '800' }}>Featured Collections</p>
        <div className="flex items-center justify-center gap-3 mt-3" aria-hidden="true">
          <span className="w-6 h-px bg-[var(--color-border)] block" />
          <span className="text-xs" style={{ color: 'var(--color-gold)' }}>✦</span>
          <span className="w-6 h-px bg-[var(--color-border)] block" />
        </div>
      </div>

      {/* Card grid — no gap, 1px border between */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {loading ? (
          <div className="text-center py-10 text-[var(--color-brand-dark)]">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                          border-l border-t border-[var(--color-border)]">
            {collections.map(col => (
              <CategoryCard 
                key={col.id} 
                title={col.name}
                subtitle={col.description}
                image={col.image_url || '/assets/images/hero.png'}
                href={`/collections?collection_id=${col.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CollectionsSection;
