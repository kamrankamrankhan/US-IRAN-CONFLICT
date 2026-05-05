import Link from 'next/link';
import { ArrowRight, CalendarDays, Youtube } from 'lucide-react';
import type { BlogPost } from '../content/blogs';
import { sortBlogsByDateDesc, filterBlogsWithinLastDays } from '../lib/blog-sort';

type HeroSectionProps = {
  blogs: BlogPost[];
};

/** Rolling window; 14 days covers “last week” even with timezone / publish-date quirks */
const HERO_RECENT_DAYS = 14;

const HeroSection = ({ blogs }: HeroSectionProps) => {
  const sortedBlogs = sortBlogsByDateDesc(blogs);
  const featuredBlog = sortedBlogs[0];
  const weekBlogs = filterBlogsWithinLastDays(blogs, HERO_RECENT_DAYS);
  const inWindowSlugs = new Set(weekBlogs.map((b) => b.slug));

  const sidebarWeekBlogs =
    weekBlogs.length > 0
      ? weekBlogs.filter((b) => b.slug !== featuredBlog?.slug)
      : sortedBlogs.filter((b) => b.slug !== featuredBlog?.slug).slice(0, 10);

  const secondaryBlogs = sortedBlogs
    .filter((b) => b.slug !== featuredBlog?.slug)
    .slice(0, 3);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Full-width featured story */}
        <div className="mb-10">
          {featuredBlog && (
            <article className="group">
              <Link href={`/blog/${featuredBlog.slug}`} className="block">
                <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-xl mb-4 shadow-lg max-h-[420px]">
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
                      {featuredBlog && inWindowSlugs.has(featuredBlog.slug)
                        ? 'Latest · recent'
                        : 'Latest story'}
                    </span>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight line-clamp-2">
                      {featuredBlog.title}
                    </h2>
                  </div>
                </div>
              </Link>
              <p className="text-gray-600 leading-relaxed mb-3 line-clamp-2">{featuredBlog.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{featuredBlog.date}</span>
                <Link
                  href={`/blog/${featuredBlog.slug}`}
                  className="inline-flex items-center gap-1 text-red-600 font-semibold hover:gap-2 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          )}
        </div>

        {/* Recent posts (left) + live channels (right) */}
        <div className="grid lg:grid-cols-5 gap-8 mb-10">
          <div className="lg:col-span-3 flex flex-col gap-3 min-h-0">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-red-600 shrink-0" aria-hidden />
                <span className="text-sm font-bold text-red-600 uppercase tracking-wide">
                  {weekBlogs.length > 0 ? `Last ${HERO_RECENT_DAYS} days` : 'Recent articles'}
                </span>
              </div>
              <Link href="/blogs" className="text-xs font-semibold text-gray-600 hover:text-red-600 shrink-0">
                All articles →
              </Link>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white shadow-sm flex flex-col flex-1 min-h-[280px] max-h-[min(720px,75vh)]">
              {sidebarWeekBlogs.length === 0 ? (
                <div className="flex flex-1 items-center justify-center p-6 text-center text-gray-600 text-sm">
                  <p>
                    No other articles to list yet. Open{' '}
                    <Link href="/blogs" className="text-red-600 font-semibold hover:underline">
                      all articles
                    </Link>
                    .
                  </p>
                </div>
              ) : (
                <ul className="overflow-y-auto overscroll-contain divide-y divide-gray-100 flex-1 p-2 space-y-0">
                  {sidebarWeekBlogs.map((blog) => (
                    <li key={blog.slug}>
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="group flex gap-3 rounded-lg p-2 hover:bg-red-50/80 transition-colors"
                      >
                        <div className="w-24 h-[4.25rem] shrink-0 rounded-md overflow-hidden bg-gray-200 border border-gray-100">
                          {blog.image ? (
                            <img
                              src={blog.image}
                              alt=""
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1 py-0.5">
                          <p className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug group-hover:text-red-700">
                            {blog.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{blog.date}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <p className="text-xs text-gray-500">
              {weekBlogs.length > 0
                ? `${weekBlogs.length} published in the last ${HERO_RECENT_DAYS} days (by date).`
                : 'Showing other recent posts — none in the rolling window, or only the featured story above.'}
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-red-600 uppercase tracking-wide">Live Coverage</span>
            </div>

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
                />
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-red-50 to-white border-b border-gray-100">
                <Youtube className="w-4 h-4 text-red-600" />
                <span className="font-semibold text-gray-800 text-xs">Live Channel</span>
                <span className="ml-auto text-xs font-medium text-red-600 uppercase">Live</span>
              </div>
              <div className="aspect-video relative bg-gray-100">
                <iframe
                  src="https://www.youtube.com/embed/vYRfQo6JMxc?autoplay=0&rel=0&modestbranding=1"
                  title="Live channel coverage"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 h-full">
              <h3 className="text-lg font-bold text-red-600 mb-3 uppercase tracking-wide">
                People & Planet
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                We expose how geopolitical conflicts affect global energy security and stand with communities impacted
                by war, sanctions, and economic instability. Our in-depth analysis covers the US-Iran conflict,
                Middle East tensions, and their impact on oil markets worldwide.
              </p>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white font-semibold text-sm rounded-lg hover:bg-red-700 transition-colors shadow-sm"
              >
                Find Out More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Latest Updates</h3>
              <Link href="/blogs" className="text-sm text-red-600 font-medium hover:underline">
                View All
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {secondaryBlogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
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
