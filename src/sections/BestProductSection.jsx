import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard, EnquiryModal } from '../components/ui';

const BestProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enquiryProduct, setEnquiryProduct] = useState(null);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
        
        const response = await fetch(`${supabaseUrl}/functions/v1/products?best_seller=true`, {
          headers: {
            'apikey': supabaseKey
          }
        });
        const json = await response.json();
        if (json.success && json.data) {
          // Limit to 4 for the section layout
          setProducts(json.data.slice(0, 4));
        }
      } catch (error) {
        console.error('Failed to fetch best sellers', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBestSellers();
  }, []);

  return (
    <section
      id="best-product"
      className="bg-white border-b border-[var(--color-border)] py-14"
      aria-labelledby="best-product-heading"
    >
      {/* Section label + diamond pip */}
      <div className="text-center mb-10">
        <p id="best-product-heading" className="uppercase tracking-[0.3em]" style={{ color: '#261744', fontSize: '18px', fontWeight: '800' }}>Our Best Product</p>
        <div className="flex items-center justify-center gap-3 mt-3" aria-hidden="true">
          <span className="w-6 h-px bg-[var(--color-border)] block" />
          <span className="text-[9px]" style={{ color: '#B8954A' }}>✦</span>
          <span className="w-6 h-px bg-[var(--color-border)] block" />
        </div>
      </div>

      {/* Card grid — no gap, 1px border between */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        {loading ? (
          <div className="text-center py-10 text-[#261744]">Loading best sellers...</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onEnquire={setEnquiryProduct} 
                />
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Link 
                to="/collections?best_seller=true" 
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] border border-[#261744] text-[#261744] py-3 px-8 hover:bg-[#261744] hover:text-white transition-colors"
              >
                View All Bestsellers
              </Link>
            </div>
          </>
        )}
      </div>

      <EnquiryModal 
        isOpen={!!enquiryProduct} 
        onClose={() => setEnquiryProduct(null)} 
        product={enquiryProduct} 
      />
    </section>
  );
};

export default BestProductSection;
