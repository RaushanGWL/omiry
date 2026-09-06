import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onEnquire }) => {
  const { id, name, short_description: subtitle, is_best_seller, product_images } = product;
  const primaryImage = product_images?.find(img => img.is_primary)?.image_url;
  const fallbackImage = product_images?.[0]?.image_url;
  const image = primaryImage || fallbackImage || '/assets/images/hero.png';
  const badge = is_best_seller ? 'Bestseller' : null;

  return (
    <div className="group flex flex-col bg-white border border-[var(--color-border)] hover:shadow-lg transition-shadow duration-500 overflow-hidden relative">
      {/* Badge (optional) */}
      {badge && (
        <div className="absolute top-4 left-4 z-10 bg-white border border-[var(--color-border)] px-3 py-1 text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-brand-dark)] shadow-sm">
          {badge}
        </div>
      )}

      {/* Image Area */}
      <Link to={`/products/${id}`} className="flex-1 flex items-center justify-center bg-[#F8F6F3] overflow-hidden aspect-square border-b border-[var(--color-border)] relative">
        <img
          src={image}
          alt={name}
          className="h-[80%] w-[80%] object-contain object-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex justify-center">
          <span className="bg-[var(--color-brand-dark)] text-white text-sm uppercase tracking-[0.2em] font-bold py-3 px-6 w-full max-w-[240px] whitespace-nowrap hover:bg-[#3d256e] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer">
            View Details <ArrowRight size={16} />
          </span>
        </div>
      </Link>

      <div className="p-6 text-center bg-white flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-base font-bold uppercase tracking-[0.15em] mb-1.5 line-clamp-1" style={{ color: 'var(--color-brand-dark)' }} title={name}>
            {name}
          </h3>
          <p className="text-sm font-light leading-relaxed mb-4 uppercase tracking-[0.1em] line-clamp-2" style={{ color: 'var(--color-text-muted)' }} title={subtitle}>
            {subtitle}
          </p>
        </div>
        <div className="pt-4 border-t border-[#F0EBE3] flex gap-2">
          <Link to={`/products/${id}`} className="flex-1 text-xs border border-[var(--color-brand-dark)] text-[var(--color-brand-dark)] py-3 uppercase tracking-[0.15em] font-bold hover:bg-gray-50 flex items-center justify-center transition-colors">
            View Product
          </Link>
          <button onClick={() => onEnquire(product)} className="flex-1 text-xs bg-[var(--color-brand-dark)] text-white py-3 uppercase tracking-[0.15em] font-bold hover:bg-[#3d256e] flex items-center justify-center transition-colors">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
