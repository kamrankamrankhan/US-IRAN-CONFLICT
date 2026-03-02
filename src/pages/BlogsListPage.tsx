import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, ExternalLink } from 'lucide-react';
import { blogs } from '../content/blogs';

const BlogsListPage = () => {
  // Sort by date descending (newest first)
  const sorted = [...blogs].sort((a, b) => (b.date > a.date ? 1 : -1));

  return (
    <div className="min-h-screen bg-void-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-void-black/95 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-neon-cyan transition-colors font-mono-custom uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="flex items-center gap-3 mb-10">
          <FileText className="w-8 h-8 text-neon-cyan" />
          <h1 className="font-display text-3xl md:text-4xl text-white">
            Blogs
          </h1>
        </div>
        <p className="text-white/60 mb-12 max-w-2xl">
          Analysis and reporting on the US-Iran conflict, regional tensions, and related developments.
        </p>

        <ul className="space-y-6">
          {sorted.map((post) => {
            const isExternal = !!post.externalUrl;
            const cardContent = (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-mono-custom text-xs text-neon-soft/60 uppercase tracking-wider">
                    {post.date}
                  </p>
                  {isExternal && post.externalSource && (
                    <span className="flex items-center gap-1 text-xs text-neon-cyan">
                      <ExternalLink className="w-3 h-3" />
                      {post.externalSource}
                    </span>
                  )}
                </div>
                <h2 className="font-display text-xl md:text-2xl text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </>
            );
            const cardClass = "block p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-neon-cyan/30 hover:bg-white/[0.04] transition-colors";
            return (
              <li key={post.slug}>
                {isExternal && post.externalUrl ? (
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <Link to={`/blog/${post.slug}`} className={cardClass}>
                    {cardContent}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default BlogsListPage;
