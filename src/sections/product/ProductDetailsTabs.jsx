import React, { useState } from 'react';
import { Leaf, Hand, Sparkles, Heart } from 'lucide-react'; // Mocking some icons, we'll use generic ones close to the design

const ProductDetailsTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('DETAILS');

  const tabs = [
    { id: 'DETAILS', label: 'PRODUCT DETAILS' },
    { id: 'CRAFTSMANSHIP', label: 'CRAFTSMANSHIP' },
    { id: 'CARE', label: 'CARE GUIDE' },
    { id: 'SHIPPING', label: 'SHIPPING & RETURNS' },
  ];

  const content = {
    DETAILS: (
      <>
        <p className="mb-4">
          {product?.description || "Carved from premium natural clear quartz, this Ganesha sculpture embodies clarity, energy, and spiritual harmony. The crystal is hand-polished to a luminous finish and highlighted with intricate 24K gold accents that elevate its divine presence."}
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Brings wisdom, prosperity, and protection to your space</li>
          <li>Ideal for home altars, meditation spaces, and luxury decor</li>
          <li>A meaningful gift for new beginnings and celebrations</li>
        </ul>
        <p className="italic text-[#A08C8A]">
          Each piece is unique; natural variations in crystal clarity and inclusions are expected and celebrated.
        </p>
      </>
    ),
    CRAFTSMANSHIP: (
      <p>Our master artisans spend weeks carefully carving and polishing each piece, ensuring the natural beauty of the gemstone is highlighted while preserving its structural integrity.</p>
    ),
    CARE: (
      <p>Dust gently with a soft, dry cloth. Avoid harsh chemicals or prolonged exposure to direct sunlight, which may affect the natural gemstone and gold detailing.</p>
    ),
    SHIPPING: (
      <p>Enjoy complimentary worldwide express shipping on all orders. Each sculpture is carefully packaged in a custom protective case. Returns are accepted within 14 days of delivery.</p>
    ),
  };

  return (
    <section className="bg-[#FAF9F6] py-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Tabs */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-8 border-b border-[var(--color-border)] mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-[10px] uppercase tracking-[0.2em] font-bold pb-4 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-[#261744] text-[#261744]'
                      : 'border-transparent text-[#A08C8A] hover:text-[#261744]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="text-[13px] font-light text-[#5A5058] leading-relaxed max-w-2xl">
              {content[activeTab]}
            </div>
          </div>

          {/* Right Column: Features Grid */}
          <div className="w-full lg:w-[400px] xl:w-[460px] shrink-0">
            <div className="grid grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
              
              <div className="bg-[#FDFCFB] flex flex-col items-center text-center p-8">
                <Leaf size={24} strokeWidth={1} className="text-[#261744] mb-4" />
                <h4 className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#261744] mb-2">NATURAL MATERIALS</h4>
                <p className="text-[10px] text-[#A08C8A] font-light">Ethically sourced crystals</p>
              </div>

              <div className="bg-[#FDFCFB] flex flex-col items-center text-center p-8">
                <Hand size={24} strokeWidth={1} className="text-[#261744] mb-4" />
                <h4 className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#261744] mb-2">HANDCRAFTED EXCELLENCE</h4>
                <p className="text-[10px] text-[#A08C8A] font-light">Skilled artisans, generations of expertise</p>
              </div>

              <div className="bg-[#FDFCFB] flex flex-col items-center text-center p-8">
                <Sparkles size={24} strokeWidth={1} className="text-[#261744] mb-4" />
                <h4 className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#261744] mb-2">ONE-OF-A-KIND UNIQUENESS</h4>
                <p className="text-[10px] text-[#A08C8A] font-light">No two pieces are identical</p>
              </div>

              <div className="bg-[#FDFCFB] flex flex-col items-center text-center p-8">
                <Heart size={24} strokeWidth={1} className="text-[#261744] mb-4" />
                <h4 className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#261744] mb-2">MADE WITH DEVOTION</h4>
                <p className="text-[10px] text-[#A08C8A] font-light">Crafted with care and intention</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetailsTabs;
