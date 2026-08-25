import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from '../../components/ui';

const RelatedProductsSection = ({ onEnquire }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
        
        const response = await fetch(`${supabaseUrl}/functions/v1/products`, {
          headers: {
            'apikey': supabaseKey
          }
        });
        const json = await response.json();
        if (json.success && json.data) {
          // Grab 4 products for the 'You May Also Like' section
          setRelatedProducts(json.data.slice(0, 4));
        }
      } catch (error) {
        console.error('Failed to fetch related products', error);
      }
    };
    fetchProducts();
  }, []);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="bg-[var(--color-brand-light)] py-16 border-t border-[var(--color-border)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        
        <h2 className="font-serif text-[1.75rem] text-center mb-12" style={{ color: 'var(--color-brand-dark)' }}>
          YOU MAY ALSO LIKE
        </h2>

        <div className="relative">
          {/* Carousel Arrows (Visual only for this static layout) */}
          <button className="hidden xl:flex absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-brand-dark)] hover:bg-gray-50 transition-colors z-10">
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          
          <button className="hidden xl:flex absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-brand-dark)] hover:bg-gray-50 transition-colors z-10">
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} onEnquire={onEnquire} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RelatedProductsSection;
