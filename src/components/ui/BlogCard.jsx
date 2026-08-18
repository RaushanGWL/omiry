import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, excerpt, date, category, image }) => {
  return (
    <Link to={`/blog/${id}`} className="group flex flex-col bg-white border border-[var(--color-border)] hover:shadow-lg transition-shadow duration-500 overflow-hidden cursor-pointer h-full">
      {/* Image Area */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 z-10 bg-white px-3 py-1 text-[8px] uppercase tracking-[0.2em] font-bold text-[#261744] shadow-sm">
          {category}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
        <div>
          <p className="text-[10px] text-[#A08C8A] uppercase tracking-[0.15em] mb-3">
            {date}
          </p>
          <h3 className="font-serif text-[1.25rem] md:text-[1.5rem] leading-tight text-[#261744] mb-4 group-hover:text-[var(--color-gold)] transition-colors">
            {title}
          </h3>
          <p className="text-[12px] font-light text-[#5A5058] leading-relaxed mb-6 line-clamp-3">
            {excerpt}
          </p>
        </div>
        
        <div className="flex items-center text-[10px] uppercase tracking-[0.2em] font-bold text-[#261744] group-hover:text-[var(--color-gold)] transition-colors mt-auto pt-4 border-t border-[#EAE5DF]">
          Read Article <ArrowRight size={12} className="ml-2" />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
