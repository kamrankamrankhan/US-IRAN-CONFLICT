'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/** GSAP is loaded dynamically in the browser only — avoids flaky server/webpack vendor chunks on routes like `/keystatic`. */
export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    let alive = true;
    let cleanup: (() => void) | undefined;

    void (async () => {
      const [{ gsap }, scrollTriggerMod] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      const { ScrollTrigger } = scrollTriggerMod;

      if (!alive) return;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      lenisRef.current = lenis;
      lenis.on('scroll', ScrollTrigger.update);

      const onTick = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);

      cleanup = () => {
        gsap.ticker.remove(onTick);
        lenis.destroy();
        lenisRef.current = null;
      };
    })();

    return () => {
      alive = false;
      cleanup?.();
    };
  }, []);

  return lenisRef;
};

export default useLenis;
