import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import useLenis from '../hooks/useLenis';
import { getPageSEO, updateSEO } from '../lib/seo';

export default function RootLayout() {
  const location = useLocation();
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
    const seo = getPageSEO(location.pathname);
    updateSEO(seo);
  }, [location.pathname]);

  return (
    <>
      <Outlet />
      <Analytics />
    </>
  );
}
