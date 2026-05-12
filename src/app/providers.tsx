'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';
import useLenis from '@/hooks/useLenis';
import { getPageSEO, updateSEO } from '@/lib/seo';

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useLenis();

  useEffect(() => {
    const path = pathname ?? '/';
    /* Blog titles vary by post (including Keystatic); BlogPostPage calls updateSEO. */
    if (path.startsWith('/blog/')) return;
    const seo = getPageSEO(path);
    updateSEO(seo);
  }, [pathname]);

  return (
    <>
      {children}
      <Analytics />
    </>
  );
}
