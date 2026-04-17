'use client';

import Header from '../sections/Header';
import HeroSection from '../sections/HeroSection';
import ContentSection from '../sections/ContentSection';
import LatestNewsSection from '../sections/LatestNewsSection';
import ContentClustersSection from '../sections/ContentClustersSection';
import FAQSection from '../sections/FAQSection';
import NewsletterSection from '../sections/NewsletterSection';
import Footer from '../sections/NewFooter';
import type { BlogPost } from '../content/blogs';
import { blogs as staticBlogs } from '../content/blogs';
import { sortBlogsByDateDesc } from '../lib/blog-sort';

type HomePageProps = {
  blogs?: BlogPost[];
};

export default function HomePage({ blogs: blogsProp }: HomePageProps) {
  const blogs = blogsProp ?? staticBlogs;
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

  const recentBlogs = sortBlogsByDateDesc(blogs).slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection blogs={blogs} />
      
      {/* Latest News Section - CNN, Al Jazeera, Wikipedia etc */}
      <LatestNewsSection />
      
      {/* Content Clusters - Topic Categories for SEO */}
      <ContentClustersSection />
      
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

      <NewsletterSection />
      <Footer />
    </div>
  );
}
