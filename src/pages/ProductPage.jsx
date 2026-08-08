import React, { useEffect } from 'react';
import { 
  ProductHeroSection, 
  ProductDetailsTabs, 
  ArtisanBannerSection, 
  RelatedProductsSection 
} from '../sections/product';
import { CTASection } from '../sections';

const ProductPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="main-content" tabIndex={-1}>
      <ProductHeroSection />
      <ProductDetailsTabs />
      <ArtisanBannerSection />
      <RelatedProductsSection />
      <CTASection />
    </main>
  );
};

export default ProductPage;
