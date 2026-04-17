import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { blogs as staticBlogs } from '../content/blogs';
import type { BlogPost } from '../content/blogs';

interface RelatedArticlesProps {
  currentSlug: string;
  keywords?: string[];
  maxArticles?: number;
  /** Merged static + Keystatic posts (defaults to static `blogs` only) */
  allBlogs?: BlogPost[];
}

// Category colors
const categoryColors: Record<string, string> = {
  'israel': 'bg-red-600',
  'hezbollah': 'bg-red-600',
  'gaza': 'bg-red-600',
  'nuclear': 'bg-yellow-600',
  'oil': 'bg-amber-600',
  'sanctions': 'bg-purple-600',
  'proxy': 'bg-indigo-600',
  'strait': 'bg-orange-600',
  'default': 'bg-gray-600',
};

function getCategoryColor(slug: string): string {
  if (slug.includes('israel') || slug.includes('hezbollah') || slug.includes('gaza')) return categoryColors['israel'];
  if (slug.includes('nuclear')) return categoryColors['nuclear'];
  if (slug.includes('oil') || slug.includes('kharg')) return categoryColors['oil'];
  if (slug.includes('sanctions')) return categoryColors['sanctions'];
  if (slug.includes('proxy')) return categoryColors['proxy'];
  if (slug.includes('strait') || slug.includes('hormuz')) return categoryColors['strait'];
  return categoryColors['default'];
}

const RelatedArticles = ({ currentSlug, keywords = [], maxArticles = 4, allBlogs = staticBlogs }: RelatedArticlesProps) => {
  // Find related articles based on:
  // 1. Same keywords/topic
  // 2. Similar slug patterns
  // 3. Recent articles
  const relatedArticles = allBlogs
    .filter(blog => blog.slug !== currentSlug)
    .map(blog => {
      let score = 0;
      
      // Check keyword matches
      keywords.forEach(keyword => {
        if (blog.title.toLowerCase().includes(keyword.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(keyword.toLowerCase()) ||
            blog.slug.includes(keyword.toLowerCase())) {
          score += 3;
        }
      });
      
      // Check slug pattern similarity
      const slugParts = currentSlug.split('-');
      slugParts.forEach(part => {
        if (part.length > 3 && blog.slug.includes(part)) {
          score += 2;
        }
      });
      
      // Boost recent articles
      if (blog.date >= '2026-03') {
        score += 1;
      }
      
      return { ...blog, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, maxArticles);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="py-8" aria-labelledby="related-articles-heading">
      <h2 id="related-articles-heading" className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        Related Articles
        <span className="text-xs font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          {relatedArticles.length} articles
        </span>
      </h2>
      
      <div className="grid gap-4 md:grid-cols-2">
        {relatedArticles.map((article) => {
          const categoryColor = getCategoryColor(article.slug);
          const isExternal = !!article.externalUrl;
          
          const cardContent = (
            <article className="flex gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-gray-300 transition-all group">
              {/* Image */}
              {article.image && (
                <div className="flex-shrink-0 w-24 h-20 rounded overflow-hidden bg-gray-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`${categoryColor} text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase`}>
                    {article.slug.includes('israel') || article.slug.includes('hezbollah') ? 'WAR' :
                     article.slug.includes('nuclear') ? 'NUCLEAR' :
                     article.slug.includes('oil') || article.slug.includes('kharg') ? 'OIL' :
                     article.slug.includes('sanctions') ? 'SANCTIONS' : 'ANALYSIS'}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 group-hover:text-red-600 transition-colors">
                  {article.title}
                </h3>
              </div>
            </article>
          );

          if (isExternal && article.externalUrl) {
            return (
              <a
                key={article.slug}
                href={article.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {cardContent}
              </a>
            );
          }

          return (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="block">
              {cardContent}
            </Link>
          );
        })}
      </div>

      {/* View All Link */}
      <div className="mt-6 text-center">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all"
        >
          View All Articles
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default RelatedArticles;
