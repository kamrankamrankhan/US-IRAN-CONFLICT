import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Clock } from 'lucide-react';
import { blogs } from '../content/blogs';

const BlogsSection = () => {
  // Get the 3 most recent blogs
  const recentBlogs = [...blogs].sort((a, b) => (b.date > a.date ? 1 : -1)).slice(0, 3);

  return (
    <section id="blogs-section" className="relative w-full bg-void-black py-20 px-6 md:px-12 border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-neon-cyan/30 to-transparent" />
      <div className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-neon-cyan/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-neon-cyan" />
              <p className="font-mono-custom text-xs text-neon-soft/60 uppercase tracking-wider">
                Latest Analysis
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-white">
              US Iran War Blog Posts
            </h2>
          </div>
          <Link
            to="/blogs"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/80 font-mono-custom text-sm uppercase tracking-wider rounded-full hover:border-neon-cyan hover:text-neon-cyan transition-colors"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentBlogs.map((post) => {
            const isExternal = !!post.externalUrl;
            const CardContent = (
              <>
                {/* Image */}
                {post.image && (
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void-black/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs text-white/60">
                      <Clock className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                )}
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-lg text-white mb-2 group-hover:text-neon-cyan transition-colors line-clamp-2">
                    {post.titleLink ? (
                      <a
                        href={post.titleLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hover:text-neon-cyan underline underline-offset-2"
                      >
                        {post.title}
                      </a>
                    ) : (
                      post.title
                    )}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-neon-cyan text-sm font-mono-custom uppercase">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </>
            );

            const cardClass = "block rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-neon-cyan/30 hover:bg-white/[0.04] transition-all duration-300 group";

            if (isExternal && post.externalUrl) {
              return (
                <a
                  key={post.slug}
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {CardContent}
                </a>
              );
            }

            return (
              <Link key={post.slug} to={`/blog/${post.slug}`} className={cardClass}>
                {CardContent}
              </Link>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            to="/blogs"
            className="flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/80 font-mono-custom text-sm uppercase tracking-wider rounded-full hover:border-neon-cyan hover:text-neon-cyan transition-colors"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* SEO Text */}
        <p className="mt-12 text-center text-white/40 text-sm max-w-2xl mx-auto">
          Stay informed with our in-depth analysis of the US-Iran war 2026, Israel-Iran conflict, Gaza war, Hezbollah operations, and Middle East crisis. Expert commentary on Operation Epic Fury, Iran nuclear program, and regional tensions.
        </p>
      </div>
    </section>
  );
};

export default BlogsSection;
