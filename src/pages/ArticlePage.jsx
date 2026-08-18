import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CTASection } from '../sections';

const BLOGS_API_URL = 'https://qmfsodjevoooohalsorw.supabase.co/functions/v1/blogs';
const BLOGS_API_KEY = 'sb_publishable_Z5tGv2QtmwQRn4VqDCTesA_xQ9Im99L';

const ArticlePage = () => {
  const { id } = useParams(); // `id` is actually the slug from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch all blogs and find the one matching the slug
        const res = await fetch(BLOGS_API_URL, {
          headers: { apikey: BLOGS_API_KEY },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!json.success) throw new Error('API returned success: false');

        const found = (json.data || []).find(
          (p) => p.slug === id || p.id === id
        );

        if (!found) {
          setError('not_found');
        } else {
          // Normalise fields
          setPost({
            id: found.slug || found.id,
            title: found.title,
            excerpt: found.excerpt || '',
            date: found.published_at
              ? new Date(found.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              : '',
            author: found.author || '',
            category: found.category || '',
            image: found.cover_image_url || found.thumbnail_url || found.image || '',
            content: found.content || '',
          });
        }
      } catch (err) {
        console.error('Failed to fetch article:', err);
        setError('fetch_error');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  // ── Loading skeleton ──────────────────────────────────────────────────────
  if (loading) {
    return (
      <main className="min-h-screen bg-[#FAF9F6] animate-pulse">
        <div className="bg-[var(--color-brand-light)] py-16 md:py-24 text-center border-b border-[var(--color-border)] px-6">
          <div className="h-3 bg-[#EAE5DF] rounded w-24 mx-auto mb-8" />
          <div className="h-4 bg-[#EAE5DF] rounded w-32 mx-auto mb-4" />
          <div className="h-10 bg-[#EAE5DF] rounded w-2/3 mx-auto mb-4" />
          <div className="h-10 bg-[#EAE5DF] rounded w-1/2 mx-auto mb-6" />
          <div className="h-3 bg-[#EAE5DF] rounded w-48 mx-auto" />
        </div>
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="w-full aspect-[21/9] bg-[#EAE5DF] mb-16" />
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-4 bg-[#EAE5DF] rounded w-full mb-3" />
          ))}
        </div>
      </main>
    );
  }

  // ── Not found / error ─────────────────────────────────────────────────────
  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-[#261744] mb-4">
            {error === 'not_found' ? 'Article Not Found' : 'Failed to load article'}
          </h1>
          <Link to="/blog" className="text-[#B8954A] underline uppercase text-[10px] tracking-[0.2em]">
            Back to Journal
          </Link>
        </div>
      </main>
    );
  }

  // ── Article ───────────────────────────────────────────────────────────────
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#FAF9F6]">
      <article itemScope itemType="http://schema.org/BlogPosting">
        <meta itemProp="datePublished" content={post.date} />
        <meta itemProp="author" content={post.author} />

        <header className="bg-[var(--color-brand-light)] py-16 md:py-24 text-center border-b border-[var(--color-border)] px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#A08C8A] hover:text-[#261744] uppercase tracking-[0.15em] text-[10px] mb-8 transition-colors"
          >
            <ArrowLeft size={12} /> Back to Journal
          </Link>
          {post.category && (
            <p className="uppercase tracking-[0.25em] text-[9px] font-semibold mb-4" style={{ color: '#B8954A' }}>
              {post.category}
            </p>
          )}
          <h1
            itemProp="headline"
            className="font-serif text-[2.5rem] md:text-[3.5rem] mb-6 text-[#261744] max-w-4xl mx-auto leading-tight"
          >
            {post.title}
          </h1>
          {(post.author || post.date) && (
            <p className="text-[10px] text-[#A08C8A] uppercase tracking-[0.15em]">
              {post.author && `By ${post.author}`}
              {post.author && post.date && ' • '}
              {post.date}
            </p>
          )}
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {post.image && (
            <img
              itemProp="image"
              src={post.image}
              alt={post.title}
              className="w-full aspect-[21/9] object-cover mb-16 shadow-lg"
            />
          )}

          {post.content ? (
            <div
              itemProp="articleBody"
              className="prose prose-lg max-w-2xl mx-auto text-[#5A5058] font-light leading-relaxed
                [&>h2]:font-serif [&>h2]:text-[2rem] [&>h2]:text-[#261744] [&>h2]:mb-6 [&>h2]:mt-12
                [&>h3]:font-serif [&>h3]:text-[1.5rem] [&>h3]:text-[#261744] [&>h3]:mb-4 [&>h3]:mt-10
                [&>p]:mb-6
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2
                [&>ul>li>strong]:font-semibold [&>ul>li>strong]:text-[#261744]
                [&>p>strong]:font-semibold [&>p>strong]:text-[#261744]
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <div itemProp="articleBody" className="text-center text-[#5A5058] italic py-20 max-w-2xl mx-auto">
              Full article content coming soon.
            </div>
          )}
        </div>
      </article>

      <CTASection />
    </main>
  );
};

export default ArticlePage;
