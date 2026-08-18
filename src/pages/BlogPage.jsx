import React, { useEffect, useState } from 'react';
import { BlogCard } from '../components/ui';
import { CTASection } from '../sections';

const BLOGS_API_URL = 'https://qmfsodjevoooohalsorw.supabase.co/functions/v1/blogs';
const BLOGS_API_KEY = 'sb_publishable_Z5tGv2QtmwQRn4VqDCTesA_xQ9Im99L';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch(BLOGS_API_URL, {
          headers: { apikey: BLOGS_API_KEY },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!json.success) throw new Error('API returned success: false');

        // Map API fields to BlogCard props
        const mapped = (json.data || []).map((post) => ({
          id: post.slug || post.id,
          title: post.title,
          excerpt: post.excerpt || '',
          date: post.published_at
            ? new Date(post.published_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            : '',
          category: post.category || '',
          image: post.cover_image_url || post.thumbnail_url || post.image || '',
        }));

        setPosts(mapped);
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
        setError('Unable to load articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
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
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white border border-[var(--color-border)] overflow-hidden animate-pulse">
                <div className="aspect-[4/3] bg-[#EAE5DF]" />
                <div className="p-6 md:p-8 space-y-3">
                  <div className="h-3 bg-[#EAE5DF] rounded w-1/4" />
                  <div className="h-5 bg-[#EAE5DF] rounded w-3/4" />
                  <div className="h-3 bg-[#EAE5DF] rounded w-full" />
                  <div className="h-3 bg-[#EAE5DF] rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <p className="text-center text-[#A08C8A] py-12">{error}</p>
        )}

        {!loading && !error && posts.length === 0 && (
          <p className="text-center text-[#A08C8A] py-12">No articles found.</p>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {posts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <CTASection />

    </main>
  );
};

export default BlogPage;
