import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  ProductHeroSection, 
  ProductDetailsTabs, 
  ArtisanBannerSection, 
  RelatedProductsSection 
} from '../sections/product';
import { CTASection } from '../sections';
import { EnquiryModal } from '../components/ui';
import SEO from '../components/SEO';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enquiryProduct, setEnquiryProduct] = useState(null);

  // Scroll to top when product ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

        const response = await fetch(`${supabaseUrl}/rest/v1/products?id=eq.${id}&select=*,product_images(*)`, {
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`
          }
        });
        const data = await response.json();
        
        if (data && data.length > 0) {
          setProduct(data[0]);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error('Failed to fetch product', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <main id="main-content" tabIndex={-1} className="min-h-screen flex items-center justify-center">
        <p className="text-[var(--color-brand-dark)]">Loading product details...</p>
      </main>
    );
  }

  if (!product) {
    return (
      <main id="main-content" tabIndex={-1} className="min-h-screen flex items-center justify-center">
        <p className="text-[var(--color-brand-dark)]">Product not found.</p>
      </main>
    );
  }

  return (
    <main id="main-content" tabIndex={-1}>
      <SEO pageKey="product" />
      <ProductHeroSection product={product} onEnquire={setEnquiryProduct} />
      <ProductDetailsTabs product={product} />
      <ArtisanBannerSection />
      <RelatedProductsSection onEnquire={setEnquiryProduct} />
      <CTASection />
      
      <EnquiryModal 
        isOpen={!!enquiryProduct} 
        onClose={() => setEnquiryProduct(null)} 
        product={enquiryProduct} 
      />
    </main>
  );
};

export default ProductPage;
