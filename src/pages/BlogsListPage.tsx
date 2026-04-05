import { Link } from 'react-router-dom';
import { Clock, ExternalLink } from 'lucide-react';
import { blogs } from '../content/blogs';
import type { BlogPost } from '../content/blogs';
import Header from '../sections/Header';
import Footer from '../sections/NewFooter';

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
      slug.includes('brazil') || slug.includes('venezuela') || slug.includes('nigeria') || 
      slug.includes('angola') || slug.includes('algeria') || slug.includes('libya')) {
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

const BlogsListPage = () => {
  // Sort by date descending (newest first)
  const sorted = [...blogs].sort((a, b) => (b.date > a.date ? 1 : -1));

  // Group blogs by category
  const oilPricesBlogs = sorted.filter(p => 
    p.slug.includes('oil-prices') || 
    p.slug.includes('kharg-island') ||
    p.slug.includes('saudi-arabia') ||
    p.slug.includes('usa-oil') ||
    p.slug.includes('russia-oil') ||
    p.slug.includes('china-oil') ||
    p.slug.includes('india-oil') ||
    p.slug.includes('uae-oil') ||
    p.slug.includes('kuwait-oil') ||
    p.slug.includes('iraq-oil') ||
    p.slug.includes('venezuela-oil') ||
    p.slug.includes('nigeria-oil') ||
    p.slug.includes('canada-oil') ||
    p.slug.includes('brazil-oil') ||
    p.slug.includes('norway-oil') ||
    p.slug.includes('uk-oil') ||
    p.slug.includes('qatar-oil') ||
    p.slug.includes('iran-oil') ||
    p.slug.includes('mexico-oil') ||
    p.slug.includes('angola-oil') ||
    p.slug.includes('algeria-oil') ||
    p.slug.includes('libya-oil')
  );
  
  const warConflictBlogs = sorted.filter(p => 
    p.slug.includes('israel') ||
    p.slug.includes('hezbollah') ||
    p.slug.includes('gaza') ||
    p.slug.includes('hamas') ||
    p.slug.includes('strait-of-hormuz') ||
    p.slug.includes('operation-epic') ||
    p.slug.includes('proxy') ||
    p.slug.includes('axis-of-resistance') ||
    p.slug.includes('nuclear')
  );
  
  const otherBlogs = sorted.filter(p => 
    !oilPricesBlogs.includes(p) && !warConflictBlogs.includes(p)
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Page Title */}
        <div className="mb-12">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
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
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
    <Link to={`/blog/${post.slug}`} className="block">
      {cardContent}
    </Link>
  );
};

export default BlogsListPage;
