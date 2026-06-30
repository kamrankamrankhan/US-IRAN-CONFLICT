'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { internalTickerItems } from '@/content/internal-ticker';

export default function HeaderTicker() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentNewsIndex((prev) => (prev + 1) % internalTickerItems.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const item = internalTickerItems[currentNewsIndex] ?? internalTickerItems[0];

  return (
    <>
      <div className="flex-1 overflow-hidden px-4">
        <Link
          href={item.path}
          className={`flex items-center gap-2 py-2 transition-all duration-300 hover:text-red-200 ${
            isTransitioning ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
          }`}
        >
          <span className="text-xs font-medium bg-white/20 px-2 py-0.5 rounded uppercase">{item.label}</span>
          <span className="text-sm font-medium truncate">{item.title}</span>
        </Link>
      </div>

      <div className="hidden sm:flex shrink-0 items-center gap-0.5 px-2">
        <div className="flex items-center gap-0.5" role="tablist" aria-label="News ticker items">
          {internalTickerItems.slice(0, 5).map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === currentNewsIndex}
              onClick={() => setCurrentNewsIndex(index)}
              className="flex h-11 min-h-[44px] min-w-[44px] w-11 items-center justify-center rounded-full text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-700"
              aria-label={`Go to news ${index + 1}`}
            >
              <span
                className={`block rounded-full transition-all ${
                  index === currentNewsIndex ? 'h-2.5 w-5 bg-white' : 'h-2.5 w-2.5 bg-white/50 hover:bg-white/85'
                }`}
                aria-hidden
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
