import React, { useEffect } from 'react';
import { BlogCard } from '../components/ui';
import { BLOG_POSTS } from '../constants/blog';
import { CTASection } from '../sections';

const BlogPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#FAF9F6]">
      
      {/* Hero Section */}
      <section className="bg-[var(--color-brand-light)] py-16 md:py-24 text-center border-b border-[var(--color-border)] px-6">
        <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-6 text-[#261744]">
          The OMRIY Journal
        </h1>
        <p className="text-[13px] font-light text-[#5A5058] max-w-xl mx-auto leading-relaxed">
          Musings on craftsmanship, interior design, and the spiritual heritage of our gemstone collections.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <CTASection />

    </main>
  );
};

export default BlogPage;
