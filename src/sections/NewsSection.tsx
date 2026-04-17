import Link from 'next/link';
import { ArrowRight, Newspaper, AlertTriangle, Shield, MessageSquare, TrendingUp, Globe, ExternalLink } from 'lucide-react';
import { newsItems, breakingNews } from '../content/news';

const categoryIcons: Record<string, React.ReactNode> = {
  breaking: <AlertTriangle className="w-3.5 h-3.5" />,
  military: <Shield className="w-3.5 h-3.5" />,
  diplomatic: <MessageSquare className="w-3.5 h-3.5" />,
  economic: <TrendingUp className="w-3.5 h-3.5" />,
  regional: <Globe className="w-3.5 h-3.5" />,
};

const categoryColors: Record<string, string> = {
  breaking: 'bg-red-500/20 text-red-400 border-red-500/30',
  military: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  diplomatic: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  economic: 'bg-green-500/20 text-green-400 border-green-500/30',
  regional: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

const NewsSection = () => {
  // Get the 4 most recent news items
  const recentNews = newsItems.slice(0, 4);

  return (
    <section id="news-section" className="relative w-full bg-void-dark py-20 px-6 md:px-12 border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-neon-cyan/30 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-32 bg-gradient-to-b from-neon-cyan/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        {/* Breaking News Banner */}
        {breakingNews.length > 0 && (
          <div className="mb-10 p-5 rounded-xl bg-red-500/10 border border-red-500/30">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="font-display text-lg text-red-400 uppercase tracking-wider">
                Breaking News
              </span>
            </div>
            <div className="space-y-2">
              {breakingNews.slice(0, 2).map((item) => (
                <a
                  key={item.id}
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/80 hover:text-neon-cyan transition-colors group"
                >
                  <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/30 group-hover:text-neon-cyan" />
                  <span className="text-sm leading-relaxed">{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Newspaper className="w-5 h-5 text-neon-cyan" />
              <p className="font-mono-custom text-xs text-neon-soft/60 uppercase tracking-wider">
                Real-time Updates
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-white">
              Latest War News Coverage
            </h2>
          </div>
          <Link
            href="/news"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/80 font-mono-custom text-sm uppercase tracking-wider rounded-full hover:border-neon-cyan hover:text-neon-cyan transition-colors"
          >
            All News
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {recentNews.map((item) => (
            <a
              key={item.id}
              href={item.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-neon-cyan/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              {/* Category & Date */}
              <div className="flex items-center gap-3 mb-3">
                <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${categoryColors[item.category]}`}>
                  {categoryIcons[item.category]}
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </span>
                {item.isUrgent && (
                  <span className="text-xs text-red-400 font-medium animate-pulse">
                    URGENT
                  </span>
                )}
                <span className="text-xs text-white/40 ml-auto">
                  {item.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-base text-white mb-2 group-hover:text-neon-cyan transition-colors line-clamp-2">
                {item.title}
              </h3>

              {/* Excerpt */}
              <p className="text-white/50 text-sm leading-relaxed line-clamp-2 flex-grow">
                {item.excerpt}
              </p>

              {/* Source */}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-white/40 font-mono-custom">
                  {item.source}
                </span>
                <span className="flex items-center gap-1 text-neon-cyan text-xs group-hover:gap-2 transition-all">
                  Read
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/news"
            className="flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/80 font-mono-custom text-sm uppercase tracking-wider rounded-full hover:border-neon-cyan hover:text-neon-cyan transition-colors"
          >
            All News
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 py-4 px-6 rounded-xl bg-white/[0.02] border border-white/5">
          <div className="flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm text-white/60">
              <span className="text-white font-medium">{newsItems.length}</span> News Stories
            </span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm text-white/60">
              <span className="text-red-400 font-medium">{breakingNews.length}</span> Breaking
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/40">
            Updated: March 23, 2026
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
