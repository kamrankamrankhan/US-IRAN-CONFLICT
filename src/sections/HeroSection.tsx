import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogs } from '../content/blogs';

const HeroSection = () => {
  // Get the most recent blog as featured (sorted by date descending)
  const sortedBlogs = [...blogs].sort((a, b) => (b.date > a.date ? 1 : -1));
  const featuredBlog = sortedBlogs[0];
  
  // Get a few secondary featured blogs (next most recent)
  const secondaryBlogs = sortedBlogs.slice(1, 4);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main hero grid */}
        <div className="grid lg:grid-cols-2 gap-8 py-8 lg:py-12">
          {/* Featured Article */}
          {featuredBlog && (
            <article className="group">
              <Link to={`/blog/${featuredBlog.slug}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4">
                  {featuredBlog.image ? (
                    <img
                      src={featuredBlog.image}
                      alt={`${featuredBlog.title} - Iran Israel Conflict Analysis 2026`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-gray-400 text-4xl font-bold">FEATURED</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wide rounded mb-3">
                      Featured Analysis
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight line-clamp-3">
                      {featuredBlog.title}
                    </h2>
                  </div>
                </div>
              </Link>
              <p className="text-gray-600 leading-relaxed mb-3 line-clamp-2">
                {featuredBlog.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{featuredBlog.date}</span>
                <Link
                  to={`/blog/${featuredBlog.slug}`}
                  className="inline-flex items-center gap-1 text-red-600 font-semibold hover:gap-2 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          )}

          {/* Mission Statement + Secondary Articles */}
          <div className="space-y-6">
            {/* Mission Box */}
            <div className="bg-gray-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-red-600 mb-2 uppercase tracking-wide">
                People & Planet
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We expose how geopolitical conflicts affect global energy security and stand with communities 
                impacted by war, sanctions, and economic instability. Our in-depth analysis covers the US-Iran 
                conflict, Middle East tensions, and their impact on oil markets worldwide.
              </p>
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white font-semibold text-sm rounded hover:bg-red-700 transition-colors"
              >
                Find Out More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Secondary Articles */}
            <div className="grid gap-4">
              {secondaryBlogs.map((blog) => (
                <Link
                  key={blog.slug}
                  to={`/blog/${blog.slug}`}
                  className="group flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-24 h-16 rounded overflow-hidden bg-gray-100">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={`${blog.title} - Middle East War News`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors">
                      {blog.title}
                    </h4>
                    <span className="text-xs text-gray-500">{blog.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
