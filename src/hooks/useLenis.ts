import { useEffect } from 'react';
import { destroyLenisSmoothScroll, initLenisSmoothScroll } from '@/lib/init-lenis';

/** @deprecated Prefer `initLenisSmoothScroll` from `@/lib/init-lenis` in Providers. */
export const useLenis = () => {
  useEffect(() => {
    void initLenisSmoothScroll();
    return () => {
      void destroyLenisSmoothScroll();
    };
  }, []);
};

export default useLenis;
