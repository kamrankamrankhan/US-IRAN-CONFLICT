import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { articleMeta } from '../content/featuredArticle';

const FeaturedArticle = () => {
  return (
    <section className="relative w-full bg-void-black py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono-custom text-xs text-neon-soft/60 uppercase tracking-wider mb-3">
          Featured analysis
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
          {articleMeta.headline}
        </h2>
        <p className="text-lg text-white/70 leading-relaxed mb-8">
          {articleMeta.summary}
        </p>
        <Link
          to="/article"
          className="inline-flex items-center gap-2 px-6 py-3 border border-neon-cyan/50 text-neon-cyan font-mono-custom text-sm uppercase tracking-wider rounded-full hover:bg-neon-cyan/10 transition-colors"
        >
          Read full analysis
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedArticle;
