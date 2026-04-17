import Link from 'next/link';
import { ArrowLeft, ExternalLink, Radio } from 'lucide-react';
import { externalNewsSources } from '../content/externalNews';

const LiveCoveragePage = () => {
  return (
    <div className="min-h-screen bg-void-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-void-black/95 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-neon-cyan transition-colors font-mono-custom uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="flex items-center gap-3 mb-4">
          <Radio className="w-8 h-8 text-neon-cyan" />
          <h1 className="font-display text-3xl md:text-4xl text-white">
            Live coverage & sources
          </h1>
        </div>
        <p className="text-white/60 mb-12 max-w-2xl">
          Follow real-time reporting and analysis from major news outlets on the US-Iran conflict. Links open the publishers’ sites.
        </p>

        <ul className="space-y-6">
          {externalNewsSources.map((source) => (
            <li
              key={source.id}
              className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-neon-cyan/30 transition-colors"
            >
              <p className="font-mono-custom text-xs text-neon-soft/60 uppercase tracking-wider mb-2">
                {source.sourceName} · {source.date}
              </p>
              <h2 className="font-display text-xl md:text-2xl text-white mb-2">
                {source.title}
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {source.description}
              </p>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neon-cyan/20 text-neon-cyan rounded-full text-sm font-mono-custom uppercase tracking-wider hover:bg-neon-cyan/30 transition-colors"
              >
                Read on {source.sourceName}
                <ExternalLink className="w-4 h-4" />
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default LiveCoveragePage;
