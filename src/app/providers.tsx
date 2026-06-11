'use client';

import { useEffect, useState, type ComponentType } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Root client shell. Heavy deps (SEO, Lenis, Analytics) load lazily so the layout
 * client chunk does not pull large modules at webpack init time.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [Analytics, setAnalytics] = useState<ComponentType | null>(null);

  useEffect(() => {
    void import('@vercel/analytics/react').then((mod) => setAnalytics(() => mod.Analytics));
    void import('@/lib/init-lenis').then(({ initLenisSmoothScroll }) => initLenisSmoothScroll());

    return () => {
      void import('@/lib/init-lenis').then(({ destroyLenisSmoothScroll }) => destroyLenisSmoothScroll());
    };
  }, []);

  useEffect(() => {
    const path = pathname ?? '/';
    if (path.startsWith('/blog/')) return;

    void import('@/lib/seo-client').then(({ getClientPageSEO, updateSEO }) => {
      updateSEO(getClientPageSEO(path));
    });
  }, [pathname]);

  return (
    <>
      {children}
      {Analytics ? <Analytics /> : null}
    </>
  );
}
