'use client';

import dynamic from 'next/dynamic';
import Header from '../sections/Header';
import HeroSection from '../sections/HeroSection';
import ContentSection from '../sections/ContentSection';
import Footer from '../sections/NewFooter';
import type { BlogPost } from '../content/blogs';
import { blogs as staticBlogs } from '../content/blogs';
import { sortBlogsByDateDesc } from '../lib/blog-sort';

const FAQSection = dynamic(() => import('../sections/FAQSection'), {
  loading: () => <div className="min-h-[240px] bg-gray-50" aria-hidden />,
});

type HomePageProps = {
  blogs?: BlogPost[];
};

export default function HomePage({ blogs: blogsProp }: HomePageProps) {
  /** Merged list from the server; if empty (edge case), keep static posts so the hero never goes blank */
  const blogs =
    blogsProp != null && blogsProp.length > 0 ? blogsProp : staticBlogs;
  // Oil prices blogs
  const oilPricesBlogs = blogs.filter(p => 
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
  ).slice(0, 3);
  
  // War & conflict blogs (including Night Stalker special operations)
  const warConflictBlogs = blogs.filter(p => 
    p.slug.includes('israel') ||
    p.slug.includes('hezbollah') ||
    p.slug.includes('gaza') ||
    p.slug.includes('hamas') ||
    p.slug.includes('strait-of-hormuz') ||
    p.slug.includes('operation-epic') ||
    p.slug.includes('proxy') ||
    p.slug.includes('axis-of-resistance') ||
    p.slug.includes('nuclear') ||
    p.slug.includes('night-stalker') ||
    p.slug.includes('little-bird') ||
    p.slug.includes('us-iran-war') ||
    p.slug.includes('iran-us') ||
    p.slug.includes('gulf-arab')
  ).slice(0, 3);

  const sortedAll = sortBlogsByDateDesc(blogs);
  const blogsSpotlight = sortedAll.slice(0, 6);
  const recentBlogs = sortedAll.slice(6, 12);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection blogs={blogs} />

      <ContentSection
        title="Blogs"
        description="Latest articles and analysis on US-Iran tensions, the Middle East, and oil markets—all in one place."
        blogs={blogsSpotlight}
        accentColor="gray"
      />

      {/* Global Oil Prices Section */}
      <ContentSection
        title="Global Oil Prices"
        description="How US-Iran tensions and Middle East conflicts are reshaping energy markets worldwide."
        blogs={oilPricesBlogs}
        accentColor="gray"
      />

      {/* War & Conflict Section */}
      <ContentSection
        title="War & Conflict Analysis"
        description="In-depth coverage of military operations, proxy networks, and regional escalation."
        blogs={warConflictBlogs}
        accentColor="white"
      />

      {/* Latest Updates Section */}
      <ContentSection
        title="Latest Updates"
        description="Recent analysis and breaking coverage from the US-Iran conflict zone."
        blogs={recentBlogs}
        accentColor="white"
      />

      {/* FAQ Section for SEO */}
      <FAQSection />

      <Footer />
    </div>
  );
}
