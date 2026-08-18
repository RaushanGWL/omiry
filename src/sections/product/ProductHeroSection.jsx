import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Plane, ShieldCheck, Award, Search } from 'lucide-react';
import { Button } from '../../components/ui';

const ProductHeroSection = ({ product: apiProduct, onEnquire }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Map API data to what the UI expects
  const displayProduct = {
    name: apiProduct?.name || 'Crystal Ganesha Sculpture',
    subtitle: apiProduct?.short_description || 'Handcrafted natural gemstone sculpture',
    reviews: 24, // Mocked as not in API
    rating: 5,   // Mocked as not in API
    description: apiProduct?.description || 'A radiant symbol of wisdom and new beginnings, this Crystal Ganesha is meticulously handcrafted from natural clear quartz and adorned with 24K gold accents. Each detail reflects devotion, protection, and timeless artistry.',
    details: [
      { label: 'MATERIAL', value: apiProduct?.material },
      { label: 'ORIGIN', value: apiProduct?.origin },
      { label: 'FINISH', value: apiProduct?.finish },
      { label: 'DIMENSIONS', value: apiProduct?.dimensions },
      { label: 'WEIGHT', value: apiProduct?.weight ? `${apiProduct.weight} ${apiProduct.weight_unit || 'kg'}` : null },
      { label: 'AUTHENTICITY', value: apiProduct?.authenticity },
    ].filter(d => d.value),
    images: apiProduct?.product_images?.length 
      ? [...apiProduct.product_images].sort((a,b) => a.sort_order - b.sort_order).map(img => img.image_url) 
      : [
          '/assets/images/crystal_deity.png',
          '/assets/images/crystal_deity.png',
          '/assets/images/crystal_deity.png',
          '/assets/images/crystal_deity.png',
        ],
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <section className="bg-[#FAF9F6] pt-8 pb-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-[10px] uppercase tracking-[0.15em] text-[#A08C8A] mb-8 font-medium">
          <Link to="/" className="hover:text-[var(--color-brand-dark)] transition-colors">Home</Link>
          <ChevronRight size={12} className="mx-2" />
          <Link to="/collections" className="hover:text-[var(--color-brand-dark)] transition-colors">Collections</Link>
          <ChevronRight size={12} className="mx-2" />
          <span className="hover:text-[var(--color-brand-dark)] transition-colors cursor-pointer">Spiritual Sculptures</span>
          <ChevronRight size={12} className="mx-2" />
          <span className="text-[var(--color-brand-dark)]">{displayProduct.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          
          {/* Left Column: Image Gallery */}
          <div className="flex-1 flex gap-4 xl:gap-6">
            
            {/* Thumbnails */}
            <div className="hidden sm:flex flex-col gap-4 w-20 xl:w-24 shrink-0">
              {displayProduct.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`border transition-colors duration-200 aspect-square overflow-hidden bg-white ${
                    activeImageIndex === idx ? 'border-[var(--color-brand-dark)]' : 'border-[var(--color-border)] hover:border-gray-400'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
              <div className="flex justify-center mt-2">
                <button className="text-[var(--color-brand-dark)] border border-[var(--color-border)] rounded-full p-2 bg-white hover:bg-gray-50 transition-colors">
                   <ChevronRight size={14} className="rotate-90" />
                </button>
              </div>
            </div>

            {/* Main Image */}
            <div className="flex-1 relative bg-white border border-[var(--color-border)] aspect-[4/5] sm:aspect-square lg:aspect-[4/5] xl:aspect-square overflow-hidden group flex items-center justify-center">
              <img
                src={displayProduct.images[activeImageIndex]}
                alt={displayProduct.name}
                className="w-[85%] h-[85%] object-contain"
              />
              <button className="absolute bottom-6 right-6 bg-white rounded-full p-3 shadow-md hover:scale-105 transition-transform text-[#261744]">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className="w-full lg:w-[400px] xl:w-[460px] flex flex-col justify-start pt-2">
            <h1 className="font-serif text-[2.2rem] leading-tight mb-2 text-[#261744]">
              {displayProduct.name}
            </h1>
            <p className="text-[12px] font-light text-[#5A5058] uppercase tracking-[0.1em] mb-4">
              {displayProduct.subtitle}
            </p>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-[#261744]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sm">★</span>
                ))}
              </div>
              <span className="text-[11px] text-[#A08C8A]">({displayProduct.reviews} reviews)</span>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6 opacity-30">
              <div className="h-px bg-[#261744] flex-1"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#261744]"></div>
              <div className="h-px bg-[#261744] flex-1"></div>
            </div>

            <p className="text-[13px] font-light text-[#5A5058] leading-[1.8] mb-8">
              {displayProduct.description}
            </p>

            {/* Details Grid */}
            <div className="flex flex-col gap-4 mb-8">
              {displayProduct.details.map((detail, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 text-[11px]">
                  <span className="uppercase tracking-[0.15em] font-semibold text-[#261744] sm:w-28 shrink-0">
                    {detail.label}
                  </span>
                  <span className="text-[#5A5058] leading-relaxed">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 mb-10">
              <button 
                onClick={() => onEnquire(apiProduct)} 
                className="w-full uppercase tracking-[0.2em] font-bold text-[11px] h-14 bg-[#261744] text-white hover:bg-[#3d256e] transition-colors"
              >
                ENQUIRE NOW
              </button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 border-t border-[var(--color-border)] pt-8">
              <div className="flex flex-col items-center text-center">
                <Plane size={22} className="text-[#261744] mb-3" strokeWidth={1.5} />
                <span className="text-[9px] uppercase tracking-[0.1em] font-bold text-[#261744] mb-1">WORLDWIDE SHIPPING</span>
                <span className="text-[9px] text-[#A08C8A]">Express delivery to your doorstep</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShieldCheck size={22} className="text-[#261744] mb-3" strokeWidth={1.5} />
                <span className="text-[9px] uppercase tracking-[0.1em] font-bold text-[#261744] mb-1">SECURE CHECKOUT</span>
                <span className="text-[9px] text-[#A08C8A]">Encrypted & trusted transactions</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award size={22} className="text-[#261744] mb-3" strokeWidth={1.5} />
                <span className="text-[9px] uppercase tracking-[0.1em] font-bold text-[#261744] mb-1">CERTIFICATE OF AUTHENTICITY</span>
                <span className="text-[9px] text-[#A08C8A]">Includes certified documentation</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHeroSection;
