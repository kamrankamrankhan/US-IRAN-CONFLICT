'use client';

import Link from 'next/link';
import CoverImage from '@/components/CoverImage';
import { Clock, ExternalLink } from 'lucide-react';
import type { BlogPost } from '../content/blogs';
import { sortBlogsByPublishDateDesc } from '../lib/blog-sort';
import { getBlogCategoryBadge, getBlogTopicSection, pickBlogsForTopicSection } from '@/lib/blog-categories';
import Header from '../sections/Header';
import Footer from '../sections/NewFooter';

// Category mapping based on blog slug/content
function getCategory(post: BlogPost): { label: string; color: string } {
  return getBlogCategoryBadge(post);
}

const BlogsListPage = ({ blogs }: { blogs: BlogPost[] }) => {
  const sorted = sortBlogsByPublishDateDesc(blogs);
  /** Top of page: newest across all sources (Keystatic + static). */
  const latestUpdates = sorted.slice(0, 12);

  const oilPricesBlogs = pickBlogsForTopicSection(blogs, 'oil', sorted.length);
  const warConflictBlogs = pickBlogsForTopicSection(blogs, 'war', sorted.length);

  const otherBlogs = sorted.filter((p) => getBlogTopicSection(p) === null);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Page Title */}
        <div className="mb-12">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">All Articles</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            US Iran War & Global Oil Prices
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive coverage of the US-Iran war 2026, Israel-Iran conflict, Middle East crisis, 
            and global oil market analysis. Expert insights on energy security, OPEC decisions, and regional tensions.
          </p>
        </div>

        {/* Newest posts first — matches header "Latest Updates" expectation */}
        {latestUpdates.length > 0 && (
          <section className="mb-16" aria-labelledby="latest-updates-heading">
            <h2
              id="latest-updates-heading"
              className="text-2xl md:text-3xl font-bold text-red-600 mb-8 pb-2 border-b-4 border-red-600"
            >
              Latest updates
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {latestUpdates.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Energy in Wartime Section */}
        {oilPricesBlogs.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8 pb-2 border-b-4 border-red-600">
              Global Oil Prices
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {oilPricesBlogs.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* War & Conflict Section */}
        {warConflictBlogs.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8 pb-2 border-b-4 border-red-600">
              War & Conflict Analysis
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {warConflictBlogs.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Other Analysis Section */}
        {otherBlogs.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8 pb-2 border-b-4 border-red-600">
              Regional Impact & Analysis
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherBlogs.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

// Blog Card Component
interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const category = getCategory(post);
  const isExternal = !!post.externalUrl;
  
  const cardContent = (
    <article className="h-full flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {post.image ? (
          <CoverImage
            src={post.image}
            alt={post.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <span className="text-gray-400 text-4xl font-bold">NEWS</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className={`${category.color} text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide`}>
            {category.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col">
        {/* Headline */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-red-600 transition-colors line-clamp-3">
          {post.titleLink ? (
            <a
              href={post.titleLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="hover:text-red-600 underline underline-offset-2"
            >
              {post.title}
            </a>
          ) : (
            post.title
          )}
        </h3>

        {/* Summary */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <time dateTime={post.date}>{post.date}</time>
          </div>
          {isExternal && post.externalSource && (
            <div className="flex items-center gap-1 text-red-600">
              <ExternalLink className="w-3 h-3" />
              <span>{post.externalSource}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );

  if (isExternal && post.externalUrl) {
    return (
      <a
        href={post.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="block">
      {cardContent}
    </Link>
  );
};

export default BlogsListPage;
