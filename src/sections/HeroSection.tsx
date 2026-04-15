import { Link } from 'react-router-dom';
import { ArrowRight, Youtube } from 'lucide-react';
import { blogs } from '../content/blogs';

const HeroSection = () => {
  // Get the most recent blog as featured (sorted by date descending)
  const sortedBlogs = [...blogs].sort((a, b) => (b.date > a.date ? 1 : -1));
  const featuredBlog = sortedBlogs[0];
  
  // Get a few secondary featured blogs (next most recent)
  const secondaryBlogs = sortedBlogs.slice(1, 4);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        {/* Top Row: Featured Article + Live Video Feeds */}
        <div className="grid lg:grid-cols-5 gap-8 mb-10">
          
          {/* Left Side: Featured Article (3 columns) */}
          <div className="lg:col-span-3">
            {featuredBlog && (
              <article className="group">
                <Link to={`/blog/${featuredBlog.slug}`} className="block">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-4 shadow-lg">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wide rounded mb-3">
                        Featured Analysis
                      </span>
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight line-clamp-2">
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
          </div>

          {/* Right Side: Live Video Feeds (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Section Header */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-red-600 uppercase tracking-wide">Live Coverage</span>
            </div>
            
            {/* YouTube Video 1 */}
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-red-50 to-white border-b border-gray-100">
                <Youtube className="w-4 h-4 text-red-600" />
                <span className="font-semibold text-gray-800 text-xs">NEWS FEED</span>
                <span className="ml-auto text-xs font-medium text-red-600 uppercase">Live</span>
              </div>
              <div className="aspect-video relative bg-gray-100">
                <iframe
                  src="https://www.youtube.com/embed/gCNeDWCI0vo?autoplay=0&rel=0&modestbranding=1"
                  title="US Iran Conflict Live News Coverage"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* YouTube Video 2 */}
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-red-50 to-white border-b border-gray-100">
                <Youtube className="w-4 h-4 text-red-600" />
                <span className="font-semibold text-gray-800 text-xs">NBC News</span>
                <span className="ml-auto text-xs font-medium text-red-600 uppercase">Live</span>
              </div>
              <div className="aspect-video relative bg-gray-100">
                <iframe
                  src="https://www.youtube.com/embed/zNt8wFOTke4?autoplay=0&rel=0&modestbranding=1"
                  title="NBC News live coverage"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Mission Box + Secondary Articles */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Mission Box */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 h-full">
              <h3 className="text-lg font-bold text-red-600 mb-3 uppercase tracking-wide">
                People & Planet
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                We expose how geopolitical conflicts affect global energy security and stand with communities 
                impacted by war, sanctions, and economic instability. Our in-depth analysis covers the US-Iran 
                conflict, Middle East tensions, and their impact on oil markets worldwide.
              </p>
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white font-semibold text-sm rounded-lg hover:bg-red-700 transition-colors shadow-sm"
              >
                Find Out More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Secondary Articles */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Latest Updates</h3>
              <Link to="/blogs" className="text-sm text-red-600 font-medium hover:underline">
                View All
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {secondaryBlogs.map((blog) => (
                <Link
                  key={blog.slug}
                  to={`/blog/${blog.slug}`}
                  className="group flex flex-col rounded-xl overflow-hidden border border-gray-100 hover:border-red-200 hover:shadow-md transition-all"
                >
                  <div className="aspect-video overflow-hidden bg-gray-100">
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
                  <div className="p-3">
                    <h4 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors text-sm">
                      {blog.title}
                    </h4>
                    <span className="text-xs text-gray-500 mt-1 block">{blog.date}</span>
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
