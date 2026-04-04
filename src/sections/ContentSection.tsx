import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import type { BlogPost } from '../content/blogs';

interface ContentSectionProps {
  title: string;
  description?: string;
  blogs: BlogPost[];
  accentColor?: 'red' | 'gray' | 'dark' | 'white';
  showViewAll?: boolean;
  viewAllLink?: string;
}

// Category mapping based on blog slug/content
function getCategory(post: BlogPost): { label: string; color: string } {
  const slug = post.slug;
  
  // Oil prices blogs
  if (slug.includes('oil-prices') || slug.includes('kharg-island')) {
    return { label: 'OIL & ENERGY', color: 'bg-red-600' };
  }
  if (slug.includes('saudi-arabia') || slug.includes('uae') || slug.includes('kuwait') || 
      slug.includes('qatar') || slug.includes('iran-oil')) {
    return { label: 'MIDDLE EAST OIL', color: 'bg-amber-600' };
  }
  if (slug.includes('russia') || slug.includes('venezuela')) {
    return { label: 'SANCTIONS', color: 'bg-purple-600' };
  }
  if (slug.includes('china') || slug.includes('india') || slug.includes('japan')) {
    return { label: 'ASIA ENERGY', color: 'bg-blue-600' };
  }
  if (slug.includes('usa') || slug.includes('canada') || slug.includes('mexico') || 
      slug.includes('brazil') || slug.includes('nigeria') || slug.includes('angola') || 
      slug.includes('algeria') || slug.includes('libya')) {
    return { label: 'GLOBAL OIL', color: 'bg-teal-600' };
  }
  if (slug.includes('norway') || slug.includes('uk')) {
    return { label: 'NORTH SEA', color: 'bg-cyan-600' };
  }
  
  // Conflict/war blogs
  if (slug.includes('israel') || slug.includes('hezbollah') || slug.includes('hamas') || 
      slug.includes('gaza')) {
    return { label: 'ISRAEL-IRAN WAR', color: 'bg-red-600' };
  }
  if (slug.includes('strait-of-hormuz')) {
    return { label: 'STRAIT OF HORMUZ', color: 'bg-orange-600' };
  }
  if (slug.includes('nuclear') || slug.includes('operation-epic')) {
    return { label: 'NUCLEAR PROGRAM', color: 'bg-yellow-600' };
  }
  if (slug.includes('proxy') || slug.includes('axis-of-resistance')) {
    return { label: 'PROXY NETWORKS', color: 'bg-indigo-600' };
  }
  if (slug.includes('sanctions') || slug.includes('economic')) {
    return { label: 'SANCTIONS', color: 'bg-purple-600' };
  }
  
  return { label: 'GEOPOLITICS', color: 'bg-gray-600' };
}

const ContentSection = ({
  title,
  description,
  blogs,
  accentColor = 'red',
  showViewAll = true,
  viewAllLink = '/blogs',
}: ContentSectionProps) => {
  const bgColors = {
    red: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900',
    white: 'bg-white',
  };

  const titleColors = {
    red: 'text-red-600',
    gray: 'text-gray-900',
    dark: 'text-white',
    white: 'text-gray-900',
  };

  const textColors = {
    red: 'text-gray-600',
    gray: 'text-gray-600',
    dark: 'text-gray-300',
    white: 'text-gray-600',
  };

  return (
    <section className={`${bgColors[accentColor]} py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className={`text-2xl md:text-3xl font-bold ${titleColors[accentColor]} mb-2`}>
              {title}
            </h2>
            {description && (
              <p className={`${textColors[accentColor]} max-w-2xl`}>
                {description}
              </p>
            )}
          </div>
          {showViewAll && (
            <Link
              to={viewAllLink}
              className={`hidden md:inline-flex items-center gap-2 font-semibold transition-colors ${
                accentColor === 'dark' 
                  ? 'text-white hover:text-red-400' 
                  : 'text-red-600 hover:text-red-700'
              }`}
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => {
            const category = getCategory(post);
            const isExternal = !!post.externalUrl;

            const cardContent = (
              <article className="h-full flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-gray-400 text-3xl font-bold">NEWS</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`${category.color} text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide`}>
                      {category.label}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 text-xs text-white/80">
                    <Clock className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-5 flex flex-col">
                  <h3 className={`text-lg font-bold mb-2 leading-tight line-clamp-2 transition-colors ${
                    accentColor === 'dark' 
                      ? 'text-gray-900 group-hover:text-red-600' 
                      : 'text-gray-900 group-hover:text-red-600'
                  }`}>
                    {post.title}
                  </h3>
                  <p className={`${textColors['red']} text-sm leading-relaxed line-clamp-3 flex-1`}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-red-600 text-sm font-semibold mt-4 group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            );

            if (isExternal && post.externalUrl) {
              return (
                <a
                  key={post.slug}
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
              <Link key={post.slug} to={`/blog/${post.slug}`} className="block">
                {cardContent}
              </Link>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        {showViewAll && (
          <div className="mt-8 flex justify-center md:hidden">
            <Link
              to={viewAllLink}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white font-semibold text-sm rounded hover:bg-red-700 transition-colors"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentSection;
