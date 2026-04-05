import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, Radio, ExternalLink } from 'lucide-react';
import { breakingNews, newsItems } from '../content/news';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Combine breaking news with regular news for the ticker
  const liveNewsItems = [...breakingNews, ...newsItems.slice(0, 5)];

  // Auto-rotate news ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentNewsIndex((prev) => (prev + 1) % liveNewsItems.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [liveNewsItems.length]);

  const navItems = [
    {
      label: 'Conflict Coverage',
      items: [
        { label: 'Israel-Iran War', path: '/blog/israel-iran-war-2026-direct-confrontation' },
        { label: 'Hezbollah Front', path: '/blog/hezbollah-israel-war-2026-lebanon-front' },
        { label: 'Gaza War', path: '/blog/gaza-war-2026-israel-hamas-humanitarian-crisis' },
        { label: 'US-Iran Tensions', path: '/blog/us-iran-conflict-causes-nuclear-sanctions-strait-hormuz' },
      ],
    },
    {
      label: 'Topics',
      items: [
        { label: 'Nuclear Program', path: '/topic/nuclear-program' },
        { label: 'Proxy Networks', path: '/topic/proxy-networks' },
        { label: 'Sanctions', path: '/topic/economic-sanctions' },
        { label: 'Strait of Hormuz', path: '/topic/strait-of-hormuz' },
      ],
    },
    {
      label: 'Oil Markets',
      items: [
        { label: 'Kharg Island Attack', path: '/blog/kharg-island-attack-global-oil-prices-surge' },
        { label: 'Global Oil Prices', path: '/blogs' },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Live News Ticker Bar */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white overflow-hidden">
        <div className="flex items-center">
          {/* LIVE Badge */}
          <div className="flex-shrink-0 bg-red-900 px-4 py-2 flex items-center gap-2 border-r border-red-500">
            <Radio className="w-4 h-4 animate-pulse" />
            <span className="font-bold text-sm uppercase tracking-wider">LIVE</span>
          </div>
          
          {/* News Ticker */}
          <div className="flex-1 overflow-hidden px-4">
            <a
              href={liveNewsItems[currentNewsIndex]?.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 py-2 transition-all duration-300 hover:text-red-200 ${
                isTransitioning ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              <span className="text-xs font-medium bg-white/20 px-2 py-0.5 rounded uppercase">
                {liveNewsItems[currentNewsIndex]?.source}
              </span>
              <span className="text-sm font-medium truncate">
                {liveNewsItems[currentNewsIndex]?.title}
              </span>
              <ExternalLink className="w-3 h-3 flex-shrink-0 opacity-60" />
            </a>
          </div>

          {/* Navigation dots */}
          <div className="hidden sm:flex items-center gap-1 px-4">
            {liveNewsItems.slice(0, 5).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentNewsIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentNewsIndex ? 'bg-white w-3' : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to news ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">UI</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-xl text-gray-900">US-IRAN</span>
              <span className="text-red-600 font-bold text-xl"> CONFLICT</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-56 bg-white border border-gray-200 shadow-lg rounded-md py-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/blogs" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
              All Articles
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-600 hover:text-red-600 transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/blogs"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors"
            >
              Latest Updates
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-red-600 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {item.label}
                </p>
                <div className="space-y-1 pl-2">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className="block py-2 text-gray-700 hover:text-red-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              to="/blogs"
              className="block py-3 text-center bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Articles
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
