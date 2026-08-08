import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../constants/products';

const ProductCard = ({ id, name, subtitle, price, image, badge }) => {
  return (
    <Link to={`/products/${id}`} className="group flex flex-col bg-white border border-[var(--color-border)] hover:shadow-lg transition-shadow duration-500 overflow-hidden relative">
      {/* Badge (optional) */}
      {badge && (
        <div className="absolute top-4 left-4 z-10 bg-white border border-[var(--color-border)] px-3 py-1 text-[8px] uppercase tracking-[0.2em] font-bold text-[#261744] shadow-sm">
          {badge}
        </div>
      )}

      {/* Image Area */}
      <div className="flex-1 flex items-center justify-center bg-[#F8F6F3] overflow-hidden aspect-square border-b border-[var(--color-border)] relative">
        <img
          src={image}
          alt={name}
          className="h-[80%] w-[80%] object-contain object-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex justify-center">
          <span className="bg-[#261744] text-white text-[10px] uppercase tracking-[0.2em] font-bold py-3 px-6 w-full max-w-[200px] hover:bg-[#3d256e] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer">
            View Details <ArrowRight size={12} />
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 text-center bg-white flex flex-col h-[160px] justify-between">
        <div>
          <h3 className="text-[12px] font-bold uppercase tracking-[0.15em] mb-1.5" style={{ color: '#261744' }}>
            {name}
          </h3>
          <p className="text-[10px] font-light leading-relaxed mb-4 uppercase tracking-[0.1em]" style={{ color: '#A08C8A' }}>
            {subtitle}
          </p>
        </div>
        <div className="pt-4 border-t border-[#F0EBE3]">
          <p className="text-[13px] font-serif" style={{ color: '#261744' }}>
            {formatPrice(price)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
