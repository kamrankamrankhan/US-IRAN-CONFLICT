'use client';

import Link from 'next/link';
import { ArrowRight, CalendarDays, Youtube } from 'lucide-react';
import CoverImage from '@/components/CoverImage';
import LazyYouTubeEmbed from '@/components/LazyYouTubeEmbed';
import type { BlogPost } from '../content/blogs';
import { filterBlogsWithinLastDays, sortBlogsByDateDesc } from '../lib/blog-sort';

type HeroSectionProps = {
  blogs: BlogPost[];
};

/** Matches reference layout “LAST 14 DAYS” rolling window */
const LAST_DAYS_WINDOW = 14;
const RECENT_LIST_LIMIT = 9;

const HeroSection = ({ blogs }: HeroSectionProps) => {
  const sortedBlogs = sortBlogsByDateDesc(blogs);
  const featuredBlog = sortedBlogs[0];

  const datedInWindow = filterBlogsWithinLastDays(sortedBlogs, LAST_DAYS_WINDOW);
  const excludeFeatured = (list: BlogPost[]) =>
    featuredBlog ? list.filter((b) => b.slug !== featuredBlog.slug) : list;

  // Sidebar must not repeat the hero post. If the 14-day window only contains that post,
  // fall back to the next newest stories so the list is not empty.
  const inWindowWithoutFeatured = excludeFeatured(datedInWindow);
  const recentStoriesSource =
    inWindowWithoutFeatured.length > 0
      ? inWindowWithoutFeatured
      : excludeFeatured(sortedBlogs.slice(1, RECENT_LIST_LIMIT + 1));

  const recentStories = recentStoriesSource.slice(0, RECENT_LIST_LIMIT);
  const showingInWindowPosts = inWindowWithoutFeatured.length > 0;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        {/* Full-width featured (reference: large hero + headline on image) */}
        {featuredBlog && (
          <article className="group mb-10 lg:mb-12">
            <Link href={`/blog/${featuredBlog.slug}`} className="block">
              <div className="relative aspect-[21/9] min-h-[200px] overflow-hidden rounded-lg bg-gray-900 shadow-xl sm:aspect-[21/10] lg:aspect-[21/9]">
                {featuredBlog.image ? (
                  <CoverImage
                    src={featuredBlog.image}
                    alt={`${featuredBlog.title} — US Iran war news and analysis`}
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    priority
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <span className="text-xl font-bold text-white/60">Featured</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                {/* Bottom-left badge + headline */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 lg:p-8">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-sm bg-red-600 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white md:text-[11px]">
                      Latest · Recent
                    </span>
                  </div>
                  <h1 className="max-w-4xl text-2xl font-bold leading-snug tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,.85)] md:text-3xl md:leading-tight lg:text-[2rem] xl:text-[2.25rem] line-clamp-3">
                    {featuredBlog.title}
                  </h1>
                </div>
              </div>
            </Link>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-gray-600 line-clamp-3 md:text-lg">
              {featuredBlog.excerpt}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6">
              <time className="text-sm font-medium text-gray-500" dateTime={featuredBlog.date}>
                {featuredBlog.date}
              </time>
              <Link
                href={`/blog/${featuredBlog.slug}`}
                className="inline-flex items-center gap-1.5 font-semibold text-red-600 transition-all hover:gap-2 hover:text-red-700"
              >
                Read More <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>
        )}

        {/* Two columns: LAST 14 DAYS | LIVE COVERAGE */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
          {/* Left: recent posts list */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-4">
              <div className="flex items-center gap-2 text-red-600">
                <CalendarDays className="h-4 w-4 shrink-0" aria-hidden />
                <span className="text-[11px] font-bold uppercase tracking-[0.14em]">Last {LAST_DAYS_WINDOW} days</span>
              </div>
              <Link
                href="/blogs"
                className="text-sm font-semibold text-red-600 hover:text-red-700 hover:underline"
              >
                All articles →
              </Link>
            </div>
            {!showingInWindowPosts && recentStories.length > 0 && (
              <p className="-mt-3 mb-4 text-xs text-gray-500">
                No other articles dated in the last {LAST_DAYS_WINDOW} days—the list below shows the next newest stories.
              </p>
            )}
            <div className="divide-y divide-gray-100">
              {recentStories.length === 0 ? (
                <p className="py-8 text-center text-gray-500">More coverage coming soon.</p>
              ) : (
                recentStories.map((blog) => (
                  <Link
                    key={blog.slug}
                    href={`/blog/${blog.slug}`}
                    className="group flex gap-4 py-5 first:pt-0 transition-colors hover:bg-gray-50/80 sm:gap-5"
                  >
                    <div className="relative h-20 w-[7.25rem] shrink-0 overflow-hidden rounded-md bg-gray-100 sm:h-24 sm:w-32">
                      {blog.image ? (
                        <CoverImage
                          src={blog.image}
                          alt={blog.title}
                          sizes="(max-width: 640px) 7.25rem, 8rem"
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1 py-0.5">
                      <h2 className="text-[15px] font-bold leading-snug text-gray-900 transition-colors hover:text-red-600 sm:text-base line-clamp-3">
                        {blog.title}
                      </h2>
                      <time
                        dateTime={blog.date}
                        className="mt-2 block text-xs font-medium text-gray-500"
                      >
                        {blog.date}
                      </time>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>

          {/* Right: single live embed */}
          <aside className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-[5.25rem]">
            <div className="flex items-center gap-2 pb-4">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-red-600">
                Live Coverage
              </span>
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md ring-1 ring-black/5">
              <div className="flex items-center gap-2 border-b border-gray-100 bg-gradient-to-r from-red-50 via-white to-white px-4 py-2.5">
                <Youtube className="h-4 w-4 shrink-0 text-red-600" aria-hidden />
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-800">
                  News feed
                </span>
                <span className="ml-auto text-[10px] font-semibold uppercase text-red-600">Live</span>
              </div>
              <LazyYouTubeEmbed
                videoId="gCNeDWCI0vo"
                title="US Iran Conflict live news coverage"
                embedParams="rel=0&modestbranding=1"
              />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-gray-500">
              Streams from third‑party outlets for context; attribution belongs to respective broadcasters.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
