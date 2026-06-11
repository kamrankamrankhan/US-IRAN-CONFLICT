import type Lenis from 'lenis';

let lenisInstance: Lenis | null = null;
let tickerCallback: ((time: number) => void) | null = null;

/** Lazy-init smooth scroll (Lenis + GSAP). Safe to call from a client useEffect. */
export async function initLenisSmoothScroll(): Promise<void> {
  if (lenisInstance) return;

  const [{ default: LenisCtor }, { gsap }, { ScrollTrigger }] = await Promise.all([
    import('lenis'),
    import('gsap'),
    import('gsap/ScrollTrigger'),
  ]);

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new LenisCtor({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  lenisInstance = lenis;
  lenis.on('scroll', ScrollTrigger.update);

  tickerCallback = (time: number) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);
}

export async function destroyLenisSmoothScroll(): Promise<void> {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
  if (tickerCallback) {
    const { gsap } = await import('gsap');
    gsap.ticker.remove(tickerCallback);
    tickerCallback = null;
  }
}
