import React from 'react';

const GALLERY = [
  '/assets/images/buddha.png',
  '/assets/images/elephant.png',
  '/assets/images/malachite_egg.png',
  '/assets/images/crystal_tree.png',
  '/assets/images/lion.png',
];

const GalleryStripSection = () => {
  return (
    <section className="border-b border-[var(--color-border)]" aria-label="Product gallery">
      <div className="grid grid-cols-3 md:grid-cols-5">
        {GALLERY.map((src, i) => (
          <div key={i} className="aspect-square overflow-hidden bg-[#EDE7DF] border-r border-[var(--color-border)] last:border-r-0 group">
            <img
              src={src}
              alt={`OMRIY sculpture ${i + 1}`}
              className="w-full h-full object-contain object-center p-6 group-hover:scale-[1.06] transition-transform duration-700"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryStripSection;
