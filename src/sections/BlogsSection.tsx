import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Clock } from 'lucide-react';
import { blogs, BlogPost } from '../content/blogs';

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

const BlogsSection = () => {
  // Get the 6 most recent blogs
  const recentBlogs = [...blogs].sort((a, b) => (b.date > a.date ? 1 : -1)).slice(0, 6);

  return (
    <section id="blogs-section" className="relative w-full bg-white py-20 px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-red-600" />
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                Latest Analysis
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              US Iran War & Oil Prices
            </h2>
          </div>
          <Link
            to="/blogs"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-red-700 transition-colors"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentBlogs.map((post) => {
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
                      <span className="text-gray-400 text-4xl font-bold">NEWS</span>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
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
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">
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
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                {cardContent}
              </Link>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            to="/blogs"
            className="flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-red-700 transition-colors"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* SEO Text */}
        <p className="mt-12 text-center text-gray-500 text-sm max-w-2xl mx-auto">
          Stay informed with our in-depth analysis of the US-Iran war 2026, Israel-Iran conflict, 
          Gaza war, Hezbollah operations, global oil markets, and Middle East crisis.
        </p>
      </div>
    </section>
  );
};

export default BlogsSection;
