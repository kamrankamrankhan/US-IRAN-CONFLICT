import { useParams, Link } from 'react-router-dom';
import { topicPagesConfig, topicLinks } from '../config';
import { ArrowLeft } from 'lucide-react';

const TopicPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const topic = slug ? topicPagesConfig[slug] : null;

  if (!slug || !topic) {
    return (
      <div className="min-h-screen bg-void-black text-white flex flex-col items-center justify-center px-6">
        <h1 className="font-display text-3xl mb-4">Topic not found</h1>
        <Link
          to="/"
          className="flex items-center gap-2 text-neon-cyan hover:text-neon-soft transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-void-black text-white">
      {/* Top bar with back link and topic nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-void-black/95 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-white/70 hover:text-neon-cyan transition-colors font-mono-custom uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <nav className="flex flex-wrap gap-2">
            {topicLinks.map((link) => (
              <Link
                key={link.slug}
                to={link.path}
                className={`px-3 py-1.5 rounded-full text-xs font-mono-custom uppercase tracking-wider transition-colors ${
                  link.slug === slug
                    ? 'bg-neon-cyan/20 text-neon-cyan'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Image */}
        {topic.image && (
          <div className="mb-12 -mx-6 md:mx-0 md:rounded-lg overflow-hidden">
            <img
              src={topic.image}
              alt={topic.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
          {topic.title}
        </h1>
        <p className="text-lg text-neon-soft/80 mb-12 font-mono-custom uppercase tracking-wider">
          {topic.description}
        </p>

        {/* Body Content - Rendered as HTML */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-display prose-headings:text-white
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-white/10
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-neon-soft
            prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-6
            prose-ul:my-6 prose-ul:space-y-3
            prose-li:text-white/80 prose-li:leading-relaxed
            prose-strong:text-white prose-strong:font-semibold
            prose-a:text-neon-cyan prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: topic.body }}
        />

        {/* Keywords */}
        {topic.keywords && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <h4 className="text-sm font-mono-custom uppercase tracking-wider text-white/50 mb-4">
              Related Topics
            </h4>
            <div className="flex flex-wrap gap-2">
              {topic.keywords.split(', ').map((keyword, index) => (
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

        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-soft transition-colors font-mono-custom uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default TopicPage;
