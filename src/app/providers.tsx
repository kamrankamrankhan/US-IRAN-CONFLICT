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
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute(
        'content',
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      );
    }
  }, []);

  useEffect(() => {
    const seo = getPageSEO(pathname ?? '/');
    updateSEO(seo);
  }, [pathname]);

  return (
    <>
      {children}
      <Analytics />
    </>
  );
}
