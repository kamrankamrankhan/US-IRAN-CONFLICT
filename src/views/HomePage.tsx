'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import type { BlogPost } from '../content/blogs';
import { sortBlogsByPublishDateDesc } from '../lib/blog-sort';
import { pickBlogsForTopicSection } from '@/lib/blog-categories';
import { faqSchemaData } from '@/lib/faq-schema-data';
import Header from '../sections/Header';
import HeroSection from '../sections/HeroSection';
import ContentSection from '../sections/ContentSection';
import Footer from '../sections/NewFooter';

type HomePageProps = {
  blogs?: BlogPost[];
};

/** FAQ UI lives in this file so we do not pull an extra client chunk (avoids webpack `__webpack_modules__[id]` errors). */
function HomepageFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Get answers to common questions about the Iran-Israel conflict and US-Iran tensions.
          </p>
        </div>

        <div className="space-y-4">
          {faqSchemaData.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-3">Stay Informed on Iran Israel Conflict Updates</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            This FAQ section is regularly updated with the latest information on the
            <strong> Iran Israel conflict</strong>, <strong>US Iran war developments</strong>, and{' '}
            <strong>Middle East geopolitical analysis</strong>. Browse our{' '}
            <Link
              href="/blogs"
              className="font-medium text-red-800 underline decoration-red-800/60 underline-offset-2 hover:text-red-900 hover:decoration-red-900"
            >
              latest articles
            </Link>{' '}
            or read the{' '}
            <Link
              href="/article"
              className="font-medium text-red-800 underline decoration-red-800/60 underline-offset-2 hover:text-red-900 hover:decoration-red-900"
            >
              full conflict guide
            </Link>.
          </p>
        </div>
      </div>
    </section>
  );
}

/**
 * Client page: do **not** import `@/content/blogs` here — that huge module breaks webpack client chunks.
 * `page.tsx` always passes merged posts from `getAllBlogsMerged()`.
 */
export default function HomePage({ blogs: blogsProp }: HomePageProps) {
  const blogs = blogsProp && blogsProp.length > 0 ? blogsProp : [];
  const sortedByPublishDate = sortBlogsByPublishDateDesc(blogs);

  const oilPricesBlogs = pickBlogsForTopicSection(blogs, 'oil', 3);
  const warConflictBlogs = pickBlogsForTopicSection(blogs, 'war', 3);

  const blogsSpotlight = sortedByPublishDate.slice(0, 6);
  /** Newest after the hero feature (by publish date). */
  const recentBlogs = sortedByPublishDate.slice(1, 7);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content">
        <HeroSection blogs={blogs} />

        <ContentSection
          title="Blogs"
          description="Latest articles and analysis on US-Iran tensions, the Middle East, and oil markets—all in one place."
          blogs={blogsSpotlight}
          accentColor="gray"
        />

        <ContentSection
          title="Global Oil Prices"
          description="How US-Iran tensions and Middle East conflicts are reshaping energy markets worldwide."
          blogs={oilPricesBlogs}
          accentColor="gray"
        />

        <ContentSection
          title="War & Conflict Analysis"
          description="In-depth coverage of military operations, proxy networks, and regional escalation."
          blogs={warConflictBlogs}
          accentColor="white"
        />

        <ContentSection
          title="Latest Updates"
          description="Recent analysis and breaking coverage from the US-Iran conflict zone."
          blogs={recentBlogs}
          accentColor="white"
        />

        <HomepageFaq />
      </main>

      <Footer />
    </div>
  );
}
