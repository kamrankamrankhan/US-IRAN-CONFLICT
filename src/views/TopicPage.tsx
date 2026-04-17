import Link from 'next/link';
import { topicPagesConfig, topicLinks } from '../config';
import { ArrowLeft, Clock } from 'lucide-react';
import type { BlogPost } from '../content/blogs';
import Header from '../sections/Header';
import Footer from '../sections/NewFooter';

const TopicPage = ({ slug, blogs }: { slug: string; blogs: BlogPost[] }) => {
  const topic = slug ? topicPagesConfig[slug] : null;

  // Get related blogs for this topic
  const relatedBlogs = blogs.filter(blog => {
    if (!slug) return false;
    const topicKeywords: Record<string, string[]> = {
      'nuclear-program': ['nuclear', 'natanz', 'fordow', 'enrichment', 'uranium'],
      'proxy-networks': ['proxy', 'hezbollah', 'hamas', 'houthi', 'axis-of-resistance'],
      'economic-sanctions': ['sanctions', 'economic', 'oil-exports'],
      'strait-of-hormuz': ['strait-of-hormuz', 'hormuz', 'shipping', 'kharg'],
      'operation-epic-fury': ['operation-epic', 'epic-fury', 'military'],
      'military-buildup': ['military', 'troops', 'aircraft', 'carrier'],
      'regional-impact': ['regional', 'middle-east', 'gulf'],
    };
    const keywords = topicKeywords[slug] || [];
    return keywords.some(keyword => blog.slug.includes(keyword) || blog.title.toLowerCase().includes(keyword));
  }).slice(0, 3);

  if (!slug || !topic) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <div className="flex flex-col items-center justify-center px-6 py-32">
          <h1 className="text-3xl font-bold mb-4">Topic not found</h1>
          <Link
            href="/"
            className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero Section */}
      {topic.image && (
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
          <img
            src={topic.image}
            alt={topic.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wide rounded mb-4">
                In-Depth Analysis
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {topic.title}
              </h1>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blogs" className="hover:text-red-600 transition-colors">Analysis</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{topic.title.split(':')[0]}</span>
        </nav>

        {/* Description */}
        <p className="text-xl text-gray-600 leading-relaxed mb-8 border-b border-gray-200 pb-8">
          {topic.description}
        </p>

        {/* Body Content */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-red-600
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-gray-800
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-ul:my-4 prose-ul:space-y-2
            prose-li:text-gray-700 prose-li:leading-relaxed
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: topic.body }}
        />

        {/* Keywords */}
        {topic.keywords && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Related Topics
            </h4>
            <div className="flex flex-wrap gap-2">
              {topic.keywords.split(', ').map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedBlogs.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="h-full flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-40 overflow-hidden bg-gray-100">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                      )}
                    </div>
                    <div className="flex-1 p-4">
                      <h4 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors mb-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {post.date}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Navigation to other topics */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
            Explore More Topics
          </h4>
          <div className="flex flex-wrap gap-2">
            {topicLinks.map((link) => (
              <Link
                key={link.slug}
                href={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  link.slug === slug
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            View All Articles
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TopicPage;
