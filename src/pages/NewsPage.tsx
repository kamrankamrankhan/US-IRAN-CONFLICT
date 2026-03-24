import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Newspaper, 
  ExternalLink, 
  AlertTriangle, 
  Shield, 
  MessageSquare, 
  TrendingUp, 
  Globe,
  Clock,
  RefreshCw
} from 'lucide-react';
import { newsItems, newsCategories, breakingNews, newsSources } from '../content/news';
import type { NewsItem } from '../content/news';

const categoryIcons: Record<string, React.ReactNode> = {
  breaking: <AlertTriangle className="w-4 h-4 text-red-400" />,
  military: <Shield className="w-4 h-4 text-orange-400" />,
  diplomatic: <MessageSquare className="w-4 h-4 text-blue-400" />,
  economic: <TrendingUp className="w-4 h-4 text-green-400" />,
  regional: <Globe className="w-4 h-4 text-purple-400" />,
};

const categoryColors: Record<string, string> = {
  breaking: 'bg-red-500/20 text-red-400 border-red-500/30',
  military: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  diplomatic: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  economic: 'bg-green-500/20 text-green-400 border-green-500/30',
  regional: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

const NewsCard = ({ item }: { item: NewsItem }) => {
  return (
    <a
      href={item.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-neon-cyan/30 hover:bg-white/[0.04] transition-all duration-300 group"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${categoryColors[item.category]}`}>
          {categoryIcons[item.category]}
          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
        </span>
        {item.isUrgent && (
          <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium animate-pulse">
            <AlertTriangle className="w-3 h-3" />
            URGENT
          </span>
        )}
        <span className="flex items-center gap-1 text-xs text-white/40 ml-auto">
          <Clock className="w-3 h-3" />
          {item.date}
        </span>
      </div>
      
      <h2 className="font-display text-lg md:text-xl text-white mb-2 group-hover:text-neon-cyan transition-colors">
        {item.title}
      </h2>
      
      <p className="text-white/60 text-sm leading-relaxed mb-4">
        {item.excerpt}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-white/40 font-mono-custom">
          Source: {item.source}
        </span>
        <span className="flex items-center gap-1 text-neon-cyan text-xs group-hover:gap-2 transition-all">
          Read More
          <ExternalLink className="w-3 h-3" />
        </span>
      </div>
    </a>
  );
};

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate refresh - in production this would fetch new data
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  return (
    <div className="min-h-screen bg-void-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-void-black/95 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-neon-cyan transition-colors font-mono-custom uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-xs text-white/60 hover:text-white hover:border-neon-cyan/50 transition-all font-mono-custom uppercase"
          >
            <RefreshCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-4">
          <Newspaper className="w-8 h-8 text-neon-cyan" />
          <h1 className="font-display text-3xl md:text-4xl text-white">
            US Iran War & Israel Conflict News
          </h1>
        </div>
        <p className="text-white/60 mb-8 max-w-2xl">
          Real-time news coverage of the US-Iran war 2026, Israel-Iran conflict, Gaza war, Hezbollah attacks, and Middle East crisis. Latest updates from major news sources worldwide.
        </p>

        {/* Breaking News Banner */}
        {breakingNews.length > 0 && (
          <div className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/30">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="font-display text-lg text-red-400">Breaking News</span>
            </div>
            <div className="space-y-3">
              {breakingNews.slice(0, 3).map(item => (
                <a
                  key={item.id}
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/80 hover:text-neon-cyan transition-colors text-sm"
                >
                  • {item.title}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {newsCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono-custom uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-neon-cyan text-void-black'
                  : 'border border-white/10 text-white/60 hover:text-white hover:border-neon-cyan/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap gap-4 mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/5">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm text-white/60">
              <span className="text-white font-medium">{newsItems.length}</span> Total Stories
            </span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm text-white/60">
              <span className="text-red-400 font-medium">{breakingNews.length}</span> Breaking
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-white/40" />
            <span className="text-sm text-white/40">
              Last updated: March 23, 2026
            </span>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {filteredNews.map(item => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12 text-white/40">
            No news found in this category.
          </div>
        )}

        {/* News Sources Section */}
        <section className="mt-16 pt-8 border-t border-white/10">
          <h2 className="font-display text-xl text-white mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5 text-neon-cyan" />
            Trusted News Sources
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {newsSources.map(source => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/[0.02] hover:border-neon-cyan/30 transition-colors group"
              >
                <div>
                  <p className="text-sm text-white group-hover:text-neon-cyan transition-colors">
                    {source.name}
                  </p>
                  <p className="text-xs text-white/40">{source.region}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-neon-cyan transition-colors" />
              </a>
            ))}
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="mt-16 pt-8 border-t border-white/10">
          <h2 className="font-display text-xl text-white mb-4">
            Stay Informed on the US Iran & Israel Iran Conflict
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            This news page aggregates the latest coverage of the US-Iran war 2026 and Israel-Iran conflict from major international news sources. Stay updated on Operation Epic Fury, Iranian nuclear developments, Strait of Hormuz tensions, Hezbollah attacks on Israel, Gaza war updates, and the broader Middle East crisis.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            For in-depth analysis, visit our <Link to="/blogs" className="text-neon-cyan hover:underline">blogs section</Link> or check our <Link to="/live-coverage" className="text-neon-cyan hover:underline">live coverage page</Link> for real-time updates.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-white/40 text-sm">
            © 2026 Strategic Intelligence Report. News aggregated from public sources.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NewsPage;
