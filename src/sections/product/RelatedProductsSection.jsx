import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../../constants/products';
import { ProductCard } from '../../components/ui';

const RelatedProductsSection = () => {
  // Grab 4 products for the 'You May Also Like' section
  const relatedProducts = PRODUCTS.slice(0, 4);

  return (
    <section className="bg-[#FAF9F6] py-16 border-t border-[var(--color-border)]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        
        <h2 className="font-serif text-[1.75rem] text-center mb-12" style={{ color: '#261744' }}>
          YOU MAY ALSO LIKE
        </h2>

        <div className="relative">
          {/* Carousel Arrows (Visual only for this static layout) */}
          <button className="hidden xl:flex absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[#261744] hover:bg-gray-50 transition-colors z-10">
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          
          <button className="hidden xl:flex absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[#261744] hover:bg-gray-50 transition-colors z-10">
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RelatedProductsSection;
