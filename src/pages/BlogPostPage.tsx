import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { blogs } from '../content/blogs';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogs.find((b) => b.slug === slug) : null;

  if (!slug || !post) {
    return (
      <div className="min-h-screen bg-void-black text-white flex flex-col items-center justify-center px-6">
        <h1 className="font-display text-3xl mb-4">Post not found</h1>
        <Link
          to="/blogs"
          className="flex items-center gap-2 text-neon-cyan hover:text-neon-soft transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blogs
        </Link>
      </div>
    );
  }

  const isExternal = !!post.externalUrl;

  return (
    <div className="min-h-screen bg-void-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-void-black/95 backdrop-blur">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-neon-cyan transition-colors font-mono-custom uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            All blogs
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <p className="font-mono-custom text-xs text-neon-soft/60 uppercase tracking-wider mb-2">
          {post.date}
          {post.externalSource && (
            <span className="ml-2 text-neon-cyan"> · {post.externalSource}</span>
          )}
        </p>
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
          {post.title}
        </h1>
        <p className="text-lg text-white/70 leading-relaxed mb-12">
          {post.excerpt}
        </p>

        {isExternal && post.externalUrl ? (
          <div className="space-y-6">
            <p className="text-white/80 leading-relaxed text-lg">
              {post.content}
            </p>
            <a
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neon-cyan/20 text-neon-cyan rounded-full font-mono-custom uppercase tracking-wider hover:bg-neon-cyan/30 transition-colors"
            >
              Read full coverage on {post.externalSource || 'source'}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ) : (
          <div className="prose prose-invert max-w-none">
            <p className="text-white/80 leading-relaxed text-lg">
              {post.content}
            </p>
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-soft transition-colors font-mono-custom uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blogs
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
