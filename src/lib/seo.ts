/**
 * SEO utilities: update document title and meta tags for sharing and crawlers.
 * Optimized for "US Iran War" and related search queries.
 */

import { siteConfig } from '../config';
import { articleMeta } from '../content/featuredArticle';
import { blogs } from '../content/blogs';
import { topicPagesConfig } from '../config';

export interface SEOOptions {
  title: string;
  description: string;
  /** Optional path for canonical (relative). Defaults to current path. */
  path?: string;
  /** Override image for OG/Twitter. Defaults to siteConfig.ogImage. */
  image?: string;
  /** Optional Article JSON-LD for blog/article pages. If not set, any existing Article script is removed. */
  articleJsonLd?: Record<string, unknown>;
  /** Keywords for meta keywords tag */
  keywords?: string;
}

function ensureMeta(name: string, property = false): HTMLMetaElement {
  const attr = property ? 'property' : 'name';
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  return el;
}

function setMeta(name: string, content: string, property = false): void {
  const el = ensureMeta(name, property);
  el.setAttribute('content', content);
}

const SEO_ARTICLE_SCRIPT_ID = 'seo-article-jsonld';

function setArticleJsonLd(articleJsonLd: Record<string, unknown> | undefined): void {
  let script = document.getElementById(SEO_ARTICLE_SCRIPT_ID) as HTMLScriptElement | null;
  if (articleJsonLd) {
    if (!script) {
      script = document.createElement('script');
      script.id = SEO_ARTICLE_SCRIPT_ID;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(articleJsonLd);
  } else if (script) {
    script.remove();
  }
}

function runtimeBaseUrl(): string {
  if (typeof window !== 'undefined' && window.location?.origin) return window.location.origin;
  return siteConfig.siteUrl.replace(/\/$/, '');
}

function toAbsoluteUrl(base: string, maybeUrl: string): string {
  if (/^https?:\/\//i.test(maybeUrl)) return maybeUrl;
  const path = maybeUrl.startsWith('/') ? maybeUrl : `/${maybeUrl}`;
  return `${base}${path}`;
}

function normalizeArticleJsonLd(
  articleJsonLd: Record<string, unknown> | undefined,
  absoluteUrl: string,
): Record<string, unknown> | undefined {
  if (!articleJsonLd) return undefined;
  const cloned: Record<string, unknown> = { ...articleJsonLd };
  cloned.url = absoluteUrl;

  const meop = cloned.mainEntityOfPage;
  if (meop && typeof meop === 'object' && !Array.isArray(meop)) {
    cloned.mainEntityOfPage = { ...(meop as Record<string, unknown>), '@id': absoluteUrl };
  }
  return cloned;
}

/**
 * Update document title, meta tags (description, Open Graph, Twitter Card), and optional Article JSON-LD.
 * Call on route change or when page-specific SEO is needed.
 */
export function updateSEO(options: SEOOptions): void {
  const { title, description, path, image, articleJsonLd, keywords } = options;
  const baseUrl = runtimeBaseUrl();
  const canonicalPath = path ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
  const url = `${baseUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
  const imageUrl = toAbsoluteUrl(baseUrl, image ?? siteConfig.ogImage ?? '/favicon.svg');

  document.title = title;

  setMeta('description', description);
  setMeta('title', title);
  if (keywords) {
    setMeta('keywords', keywords);
  }
  
  // Open Graph
  setMeta('og:title', title, true);
  setMeta('og:description', description, true);
  setMeta('og:image', imageUrl, true);
  setMeta('og:url', url, true);
  setMeta('og:type', articleJsonLd ? 'article' : 'website', true);
  setMeta('og:image:width', '1200', true);
  setMeta('og:image:height', '630', true);
  setMeta('og:site_name', 'US Iran Conflict Analysis', true);
  
  // Twitter Card
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);
  setMeta('twitter:image', imageUrl);
  setMeta('twitter:site', '@usiranconflict');

  // Canonical URL
  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;

  setArticleJsonLd(normalizeArticleJsonLd(articleJsonLd, url));
}

const baseUrl = () => siteConfig.siteUrl.replace(/\/$/, '');

function buildPublisher(): { '@type': string; name: string; url: string; logo?: { '@type': string; url: string } } {
  return {
    '@type': 'Organization',
    name: 'Strategic Intelligence',
    url: baseUrl(),
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl()}/favicon.svg`,
    },
  };
}

function buildArticleJsonLd(
  post: { title: string; excerpt: string; date: string; image?: string },
  url: string,
  keywords?: string
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: post.image ? toAbsoluteUrl(baseUrl(), post.image) : `${baseUrl()}/gallery-6.jpg`,
    author: buildPublisher(),
    publisher: buildPublisher(),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    articleSection: 'Geopolitics',
    keywords: keywords || 'US Iran war, Iran conflict, Middle East crisis',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
  };
}

/**
 * Get title, description, and optional Article JSON-LD for a given pathname.
 * Used by App to set SEO on route change.
 */
export function getPageSEO(pathname: string): SEOOptions {
  const baseTitle = 'US Iran War 2026 | Complete Conflict Analysis & Latest News';
  const baseDescription = 'Complete coverage of the US-Iran war 2026: Operation Epic Fury, nuclear tensions, Strait of Hormuz crisis, oil prices impact, and real-time updates. Expert analysis on the Middle East conflict.';
  const baseKeywords = 'US Iran war, Iran war 2026, US Iran conflict, Middle East war, Operation Epic Fury, Iran nuclear program, Strait of Hormuz, Iran US tensions';
  const siteName = 'US Iran Conflict Analysis';

  if (pathname === '/' || pathname === '') {
    return { 
      title: baseTitle, 
      description: baseDescription, 
      path: '/',
      keywords: baseKeywords,
    };
  }

  if (pathname === '/article') {
    const url = `${baseUrl()}/article`;
    return {
      title: `${articleMeta.headline} | ${siteName}`,
      description: articleMeta.metaDescription,
      path: '/article',
      keywords: 'US Iran war analysis, Operation Epic Fury details, Iran conflict analysis, Middle East geopolitics',
      articleJsonLd: {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: articleMeta.headline,
        description: articleMeta.metaDescription,
        datePublished: '2026-03-01',
        dateModified: '2026-03-05',
        author: buildPublisher(),
        publisher: buildPublisher(),
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url,
        articleSection: 'Geopolitics',
        keywords: 'US Iran war, Iran conflict, Middle East crisis',
      },
    };
  }

  if (pathname === '/blogs') {
    return {
      title: `US Iran War News & Analysis | Latest Updates | ${siteName}`,
      description: 'Latest news and analysis on the US-Iran war 2026. Stay informed on Operation Epic Fury, nuclear tensions, Strait of Hormuz crisis, and regional developments.',
      path: '/blogs',
      keywords: 'US Iran war news, Iran conflict updates, Middle East news, Iran war latest',
    };
  }

  const blogMatch = pathname.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    const slug = blogMatch[1];
    const post = blogs.find((b) => b.slug === slug);
    if (post) {
      const url = `${baseUrl()}${pathname}`;
      let keywords = 'US Iran war, Iran conflict';
      
      // Custom keywords based on blog content
      if (slug === 'us-iran-conflict-causes-and-impact') {
        keywords = 'US Iran conflict, Iran war causes, US Iran relations, Middle East tensions, Iran nuclear program, US sanctions Iran';
      } else if (slug === 'global-oil-prices-rise-kharg-island-attack') {
        keywords = 'Kharg Island attack, Iran oil prices, US Iran oil war, global oil crisis, Iran oil exports, Persian Gulf conflict';
      } else if (slug === 'strait-of-hormuz-crisis-global-energy-crisis') {
        keywords = 'Strait of Hormuz crisis, Iran blockade, global energy crisis, oil shipping, Hormuz chokepoint, Iran US tensions';
      } else if (slug === 'iran-us-israel-conflict-global-impact') {
        keywords =
          'Iran US Israel conflict, Middle East war 2026, Strait of Hormuz closure, Iran nuclear program, JCPOA, Hezbollah Lebanon, Iran proxies, US Iran escalation';
      }
      
      return {
        title: `${post.title} | ${siteName}`,
        description: post.excerpt,
        path: pathname,
        image: post.image,
        keywords,
        articleJsonLd: buildArticleJsonLd(post, url, keywords),
      };
    }
  }

  const topicMatch = pathname.match(/^\/topic\/(.+)$/);
  if (topicMatch) {
    const slug = topicMatch[1];
    const topic = topicPagesConfig[slug];
    if (topic) {
      const topicKeywords: Record<string, string> = {
        'operation-epic-fury': 'Operation Epic Fury, US Iran military operation, Iran strikes 2026, US military Iran',
        'nuclear-program': 'Iran nuclear program, Iran uranium enrichment, JCPOA, Iran nuclear deal, nuclear weapons Iran',
        'military-buildup': 'US military Middle East, Iran military, US troops Middle East, Persian Gulf military',
        'economic-sanctions': 'Iran sanctions, US sanctions Iran, Iran economy, oil sanctions, Iran trade',
        'proxy-networks': 'Iran proxy forces, Hezbollah, Iran militias, Middle East proxies, Iran Syria Iraq',
        'regional-impact': 'Middle East conflict, Iran regional influence, Gulf states, regional war Iran',
      };
      
      return {
        title: `${topic.title} | US Iran War 2026 | ${siteName}`,
        description: topic.description,
        path: pathname,
        keywords: topicKeywords[slug] || 'US Iran war, Iran conflict',
      };
    }
  }

  if (pathname === '/live-coverage') {
    return {
      title: `Live Coverage: US Iran War Updates | Breaking News | ${siteName}`,
      description: 'Real-time reporting and breaking news on the US-Iran war from Al Jazeera, CNN, CNBC and other major sources. Live updates on Middle East conflict.',
      path: '/live-coverage',
      keywords: 'US Iran war live, Iran conflict live updates, Middle East breaking news, Iran war today',
    };
  }

  return { 
    title: baseTitle, 
    description: baseDescription, 
    path: pathname,
    keywords: baseKeywords,
  };
}
