import Link from 'next/link';
import { internalTickerItems } from '@/content/internal-ticker';

/** Stable ticker markup for SSR and the dynamic-import loading state (hydration-safe). */
export default function HeaderTickerShell() {
  const item = internalTickerItems[0];

  return (
    <>
      <div className="flex-1 overflow-hidden px-4">
        <Link
          href={item.path}
          className="flex items-center gap-2 py-2 transition-all duration-300 hover:text-red-200 opacity-100 translate-y-0"
        >
          <span className="text-xs font-medium bg-white/20 px-2 py-0.5 rounded uppercase">{item.label}</span>
          <span className="text-sm font-medium truncate">{item.title}</span>
        </Link>
      </div>
      <div className="hidden sm:flex shrink-0 items-center gap-0.5 px-2" aria-hidden>
        {Array.from({ length: Math.min(5, internalTickerItems.length) }).map((_, index) => (
          <div key={index} className="h-11 w-11 shrink-0" />
        ))}
      </div>
    </>
  );
}
