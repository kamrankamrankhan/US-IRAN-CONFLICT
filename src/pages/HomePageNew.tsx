import Header from '../sections/Header';
import HeroSection from '../sections/HeroSection';
import ContentSection from '../sections/ContentSection';
import NewsletterSection from '../sections/NewsletterSection';
import Footer from '../sections/NewFooter';
import { blogs } from '../content/blogs';

export default function HomePage() {
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
  
  // War & conflict blogs
  const warConflictBlogs = blogs.filter(p => 
    p.slug.includes('israel') ||
    p.slug.includes('hezbollah') ||
    p.slug.includes('gaza') ||
    p.slug.includes('hamas') ||
    p.slug.includes('strait-of-hormuz') ||
    p.slug.includes('operation-epic') ||
    p.slug.includes('proxy') ||
    p.slug.includes('axis-of-resistance') ||
    p.slug.includes('nuclear')
  ).slice(0, 3);

  // Recent analysis blogs
  const recentBlogs = [...blogs]
    .sort((a, b) => (b.date > a.date ? 1 : -1))
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      
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
        accentColor="dark"
      />

      <NewsletterSection />
      <Footer />
    </div>
  );
}
