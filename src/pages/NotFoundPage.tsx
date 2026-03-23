import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { updateSEO } from '../lib/seo';

export default function NotFoundPage() {
  const location = useLocation();

  useEffect(() => {
    updateSEO({
      title: 'Page not found | US Iran Conflict Analysis',
      description:
        'The page you requested does not exist. Return to US Iran War 2026 coverage, blogs, and live updates.',
      path: location.pathname,
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-void-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="font-display text-3xl md:text-4xl mb-4">Page not found</h1>
      <p className="text-white/60 text-center max-w-md mb-8 font-mono-custom text-sm">
        This URL is not part of the site. Check the address or use the links below.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 text-neon-cyan hover:text-neon-soft transition-colors font-mono-custom uppercase tracking-wider"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to home
      </Link>
    </div>
  );
}
