import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Clock, Tag } from 'lucide-react';
import { blogs } from '../content/blogs';
import type { BlogPost } from '../content/blogs';
import Header from '../sections/Header';
import Footer from '../sections/NewFooter';

// Category mapping based on blog slug/content
function getCategory(post: BlogPost): { label: string; color: string } {
  const slug = post.slug;
  
  // Oil prices blogs
  if (slug.includes('oil-prices') || slug.includes('kharg-island')) {
    return { label: 'OIL & ENERGY', color: 'bg-red-600' };
  }
  if (slug.includes('saudi-arabia') || slug.includes('uae') || slug.includes('kuwait') || 
      slug.includes('qatar') || slug.includes('iran-oil')) {
    return { label: 'MIDDLE EAST OIL', color: 'bg-amber-600' };
  }
  if (slug.includes('russia') || slug.includes('venezuela')) {
    return { label: 'SANCTIONS', color: 'bg-purple-600' };
  }
  if (slug.includes('china') || slug.includes('india') || slug.includes('japan')) {
    return { label: 'ASIA ENERGY', color: 'bg-blue-600' };
  }
  if (slug.includes('usa') || slug.includes('canada') || slug.includes('mexico') || 
      slug.includes('brazil') || slug.includes('venezuela') || slug.includes('nigeria') || 
      slug.includes('angola') || slug.includes('algeria') || slug.includes('libya')) {
    return { label: 'GLOBAL OIL', color: 'bg-teal-600' };
  }
  if (slug.includes('norway') || slug.includes('uk')) {
    return { label: 'NORTH SEA', color: 'bg-cyan-600' };
  }
  
  // Conflict/war blogs
  if (slug.includes('israel') || slug.includes('hezbollah') || slug.includes('hamas') || 
      slug.includes('gaza')) {
    return { label: 'ISRAEL-IRAN WAR', color: 'bg-red-600' };
  }
  if (slug.includes('strait-of-hormuz')) {
    return { label: 'STRAIT OF HORMUZ', color: 'bg-orange-600' };
  }
  if (slug.includes('nuclear') || slug.includes('operation-epic')) {
    return { label: 'NUCLEAR PROGRAM', color: 'bg-yellow-600' };
  }
  if (slug.includes('proxy') || slug.includes('axis-of-resistance')) {
    return { label: 'PROXY NETWORKS', color: 'bg-indigo-600' };
  }
  if (slug.includes('sanctions') || slug.includes('economic')) {
    return { label: 'SANCTIONS', color: 'bg-purple-600' };
  }
  
  return { label: 'GEOPOLITICS', color: 'bg-gray-600' };
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogs.find((b) => b.slug === slug) : null;

  if (!slug || !post) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <div className="flex flex-col items-center justify-center px-6 py-32">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Link
            to="/blogs"
            className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blogs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const isExternal = !!post.externalUrl;
  const category = getCategory(post);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero Section */}
      <div className="bg-gray-50 border-b border-gray-200 pt-4">
        <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blogs" className="hover:text-red-600 transition-colors">Articles</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate max-w-[200px]">{post.title.split(':')[0]}</span>
          </nav>
          
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`${category.color} text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wide`}>
              {category.label}
            </span>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <time dateTime={post.date}>{post.date}</time>
            </div>
            {post.externalSource && (
              <span className="text-sm text-red-600 font-medium">
                · {post.externalSource}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post.titleLink ? (
              <a
                href={post.titleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors underline underline-offset-4 decoration-red-600/30"
              >
                {post.title}
              </a>
            ) : (
              post.title
            )}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
        </article>
      </div>

      {/* Featured Image */}
      {post.image && (
        <div className="max-w-4xl mx-auto px-6 -mt-4">
          <figure className="rounded-lg overflow-hidden border border-gray-200 shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </figure>
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {isExternal && post.externalUrl ? (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              {post.content}
            </p>
            <a
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-semibold uppercase tracking-wider hover:bg-red-700 transition-colors"
            >
              Read full coverage on {post.externalSource || 'source'}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ) : post.sections && post.sections.length > 0 ? (
          <div className="space-y-12">
            {post.sections.map((section, i) => (
              <section key={i} className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-600">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        ) : (
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              {post.content}
            </p>
          </div>
        )}

        {/* Tags/Keywords */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Related Topics</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/blogs" className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-red-100 hover:text-red-700 transition-colors">
              US Iran War
            </Link>
            <Link to="/blogs" className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-red-100 hover:text-red-700 transition-colors">
              Middle East Crisis
            </Link>
            <Link to="/blogs" className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-red-100 hover:text-red-700 transition-colors">
              Oil Prices
            </Link>
            <Link to="/blogs" className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-red-100 hover:text-red-700 transition-colors">
              OPEC
            </Link>
          </div>
        </div>

        {/* Back to blogs */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
