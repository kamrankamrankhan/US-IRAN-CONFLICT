import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { articleMeta } from '../content/featuredArticle';

const FeaturedArticle = () => {
  return (
    <section className="relative w-full bg-void-black py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          {articleMeta.image && (
            <div className="order-2 md:order-1">
              <img
                src={articleMeta.image}
                alt={articleMeta.headline}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
          
          {/* Content */}
          <div className={articleMeta.image ? "order-1 md:order-2" : ""}>
            <p className="font-mono-custom text-xs text-neon-soft/60 uppercase tracking-wider mb-3">
              Featured Analysis
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-white mb-6 leading-tight">
              {articleMeta.headline}
            </h2>
            <p className="text-base text-white/70 leading-relaxed mb-8">
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
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
