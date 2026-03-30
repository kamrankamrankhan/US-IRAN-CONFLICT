import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { articleMeta, articleSections, keyTakeaways } from '../content/featuredArticle';

const ArticlePage = () => {
  return (
    <article className="min-h-screen bg-void-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-void-black/95 backdrop-blur">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-neon-cyan transition-colors font-mono-custom uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        {/* Hero Image */}
        {articleMeta.image && (
          <div className="mb-12 -mx-6 md:mx-0 md:rounded-lg overflow-hidden">
            <img
              src={articleMeta.image}
              alt={articleMeta.headline}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <p className="font-mono-custom text-xs text-neon-soft/60 uppercase tracking-wider mb-2">
          {articleMeta.byline} · {articleMeta.date}
        </p>
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8">
          {articleMeta.headline}
        </h1>

        {/* Meta description as intro */}
        <p className="text-xl text-white/70 leading-relaxed mb-12 pb-12 border-b border-white/10">
          {articleMeta.metaDescription}
        </p>

        {articleSections.map((section) => (
          <section key={section.id} id={section.id} className="mb-12">
            <h2 className="font-display text-xl md:text-2xl text-white mb-4">
              {section.title}
            </h2>
            <p className="text-white/80 leading-relaxed text-lg">
              {section.content}
            </p>
          </section>
        ))}

        <section className="mt-16 pt-12 border-t border-white/10">
          <h2 className="font-display text-xl md:text-2xl text-white mb-6">
            Key Takeaways
          </h2>
          <ul className="space-y-4">
            {keyTakeaways.map((takeaway, index) => (
              <li
                key={index}
                className="flex gap-3 text-white/80 leading-relaxed"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neon-cyan/20 text-neon-cyan flex items-center justify-center text-xs font-mono-custom">
                  {index + 1}
                </span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Keywords */}
        {articleMeta.keywords && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <h4 className="text-sm font-mono-custom uppercase tracking-wider text-white/50 mb-4">
              Related Topics
            </h4>
            <div className="flex flex-wrap gap-2">
              {articleMeta.keywords.split(', ').map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/5 text-white/60 text-sm rounded-full font-mono-custom"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-soft transition-colors font-mono-custom uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticlePage;
