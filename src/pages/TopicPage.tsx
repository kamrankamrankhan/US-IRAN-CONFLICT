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
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
          {topic.title}
        </h1>
        <p className="text-lg text-neon-soft/80 mb-12 font-mono-custom uppercase tracking-wider">
          {topic.description}
        </p>
        <div className="prose prose-invert max-w-none">
          <p className="text-white/80 leading-relaxed text-lg">
            {topic.body}
          </p>
        </div>
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
