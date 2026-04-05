import { ExternalLink, Newspaper, Radio, Globe, Clock, TrendingUp, Shield, AlertTriangle } from 'lucide-react';
import { externalNewsSources } from '../content/externalNews';
import { newsItems, breakingNews } from '../content/news';

// Source icons/colors mapping
const sourceStyles: Record<string, { bg: string; text: string; icon: React.ReactNode }> = {
  'Al Jazeera': { bg: 'bg-amber-500', text: 'text-white', icon: <Globe className="w-4 h-4" /> },
  'CNN': { bg: 'bg-red-600', text: 'text-white', icon: <Radio className="w-4 h-4" /> },
  'CNBC': { bg: 'bg-blue-600', text: 'text-white', icon: <TrendingUp className="w-4 h-4" /> },
  'Wikipedia': { bg: 'bg-gray-700', text: 'text-white', icon: <Newspaper className="w-4 h-4" /> },
  'Reuters': { bg: 'bg-orange-500', text: 'text-white', icon: <Newspaper className="w-4 h-4" /> },
  'BBC': { bg: 'bg-red-700', text: 'text-white', icon: <Radio className="w-4 h-4" /> },
  'default': { bg: 'bg-gray-600', text: 'text-white', icon: <Newspaper className="w-4 h-4" /> },
};

const categoryIcons: Record<string, React.ReactNode> = {
  breaking: <AlertTriangle className="w-3.5 h-3.5" />,
  military: <Shield className="w-3.5 h-3.5" />,
  diplomatic: <Globe className="w-3.5 h-3.5" />,
  economic: <TrendingUp className="w-3.5 h-3.5" />,
  regional: <Globe className="w-3.5 h-3.5" />,
};

const categoryColors: Record<string, string> = {
  breaking: 'bg-red-100 text-red-700 border-red-200',
  military: 'bg-orange-100 text-orange-700 border-orange-200',
  diplomatic: 'bg-blue-100 text-blue-700 border-blue-200',
  economic: 'bg-green-100 text-green-700 border-green-200',
  regional: 'bg-purple-100 text-purple-700 border-purple-200',
};

const LatestNewsSection = () => {
  // Get latest news from different sources
  const latestNews = newsItems.slice(0, 6);
  
  // External sources for quick links
  const externalSources = [
    { name: 'CNN', url: 'https://www.cnn.com', description: 'International news coverage' },
    { name: 'Al Jazeera', url: 'https://www.aljazeera.com', description: 'Middle East focus' },
    { name: 'BBC', url: 'https://www.bbc.com', description: 'Global perspective' },
    { name: 'Reuters', url: 'https://www.reuters.com', description: 'Breaking news wire' },
    { name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/2026_Iran_war', description: 'Encyclopedia entry' },
    { name: 'Gulf News', url: 'https://gulfnews.com', description: 'Regional coverage' },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Radio className="w-5 h-5 text-red-600 animate-pulse" />
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Live Coverage</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Latest News & Updates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-time updates from major news sources covering the US-Iran conflict and regional developments.
          </p>
        </div>

        {/* Breaking News Alert */}
        {breakingNews.length > 0 && (
          <div className="mb-8 p-4 rounded-lg bg-red-50 border border-red-200">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span className="font-bold text-red-700 uppercase text-sm tracking-wider">Breaking News</span>
            </div>
            <div className="space-y-2">
              {breakingNews.slice(0, 2).map((item) => (
                <a
                  key={item.id}
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-2 rounded hover:bg-red-100 transition-colors group"
                >
                  <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-400 group-hover:text-red-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-red-700">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{item.source} • {item.date}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* External Sources Quick Links */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-gray-600" />
            News Sources
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {externalSources.map((source) => {
              const style = sourceStyles[source.name] || sourceStyles['default'];
              return (
                <a
                  key={source.name}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all group bg-white"
                >
                  <div className={`w-10 h-10 rounded-full ${style.bg} ${style.text} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                    {style.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-900 text-center">{source.name}</span>
                  <span className="text-xs text-gray-500 text-center mt-1">{source.description}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Featured External Coverage */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-gray-600" />
            Featured Coverage
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {externalNewsSources.map((source) => {
              const style = sourceStyles[source.sourceName] || sourceStyles['default'];
              return (
                <a
                  key={source.id}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-lg border border-gray-200 bg-white hover:shadow-lg hover:border-gray-300 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-full ${style.bg} ${style.text} flex items-center justify-center`}>
                      {style.icon}
                    </div>
                    <span className="font-semibold text-gray-900">{source.sourceName}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                    {source.title}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {source.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {source.date}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Latest News Grid */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-600" />
            Recent Headlines
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((item) => (
              <a
                key={item.id}
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border border-gray-200 bg-white hover:shadow-md hover:border-gray-300 transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium border ${categoryColors[item.category]}`}>
                    {categoryIcons[item.category]}
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                  {item.isUrgent && (
                    <span className="text-xs text-red-600 font-bold animate-pulse">
                      URGENT
                    </span>
                  )}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="font-medium">{item.source}</span>
                  <span>{item.date}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 py-4 px-6 rounded-lg bg-gray-50 border border-gray-100">
          <div className="flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-600">
              <span className="font-bold text-gray-900">{newsItems.length}</span> News Stories
            </span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-sm text-gray-600">
              <span className="font-bold text-red-600">{breakingNews.length}</span> Breaking
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            Updated: March 23, 2026
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
