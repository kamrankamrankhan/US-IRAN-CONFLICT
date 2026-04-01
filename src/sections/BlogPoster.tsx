import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { blogs } from '../content/blogs';

const BlogPoster = () => {
  // Get the 3 latest blogs
  const latestBlogs = [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Featured blog (first one)
  const featuredBlog = latestBlogs[0];
  // Secondary blogs
  const secondaryBlogs = latestBlogs.slice(1);

  if (latestBlogs.length === 0) return null;

  return (
    <section className="relative w-full bg-void-black py-8 md:py-12 px-4 md:px-8 border-b border-white/5">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-6 md:mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono-custom text-xs text-neon-cyan uppercase tracking-wider mb-2">
              Latest Updates
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-white">
              Featured Coverage
            </h2>
          </div>
          <Link
            to="/blogs"
            className="hidden md:flex items-center gap-2 text-sm font-mono-custom uppercase tracking-wider text-white/60 hover:text-neon-cyan transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Blog Grid - Poster Style */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Featured Blog - Large */}
          <Link
            to={`/blog/${featuredBlog.slug}`}
            className="lg:col-span-2 group relative overflow-hidden rounded-2xl aspect-[16/9] lg:aspect-[16/10]"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={featuredBlog.image || '/gallery-1.jpg'}
                alt={featuredBlog.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/60 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan text-xs font-mono-custom uppercase tracking-wider rounded-full">
                  Featured
                </span>
                <span className="flex items-center gap-1 text-xs text-white/60 font-mono-custom">
                  <Clock className="w-3 h-3" />
                  {new Date(featuredBlog.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl text-white mb-3 group-hover:text-neon-cyan transition-colors line-clamp-2">
                {featuredBlog.title}
              </h3>
              <p className="text-white/70 text-sm md:text-base line-clamp-2 max-w-2xl">
                {featuredBlog.excerpt}
              </p>
            </div>
          </Link>

          {/* Secondary Blogs - Stacked */}
          <div className="flex flex-col gap-4 md:gap-6">
            {secondaryBlogs.map((blog) => (
              <Link
                key={blog.slug}
                to={`/blog/${blog.slug}`}
                className="group relative overflow-hidden rounded-2xl aspect-[16/9] lg:aspect-auto lg:flex-1"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={blog.image || '/gallery-1.jpg'}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/70 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex items-center gap-1 text-xs text-white/60 font-mono-custom">
                      <Clock className="w-3 h-3" />
                      {new Date(blog.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="font-display text-base md:text-lg text-white group-hover:text-neon-cyan transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                </div>
              </Link>
            ))}

            {/* View All Link - Mobile */}
            <Link
              to="/blogs"
              className="md:hidden flex items-center justify-center gap-2 py-3 text-sm font-mono-custom uppercase tracking-wider text-white/60 hover:text-neon-cyan transition-colors border border-white/10 rounded-xl"
            >
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="max-w-7xl mx-auto mt-6 md:mt-8 overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...latestBlogs, ...latestBlogs].map((blog, index) => (
            <Link
              key={`${blog.slug}-${index}`}
              to={`/blog/${blog.slug}`}
              className="flex items-center gap-2 text-xs font-mono-custom uppercase tracking-wider text-white/40 hover:text-neon-cyan transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
              {blog.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Custom styles for marquee */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default BlogPoster;
