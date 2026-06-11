/**
 * Browser-only SEO helpers for layout/providers and lightweight client pages.
 * Kept separate from `seo.ts` so the root client bundle does not import the full blogs catalog.
 */

import { siteConfig, topicPagesConfig } from '@/config';
import { articleMeta } from '@/content/featuredArticle';

export interface SEOOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  articleJsonLd?: Record<string, unknown>;
  ogTypeOverride?: 'article' | 'website';
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

export function updateSEO(options: SEOOptions): void {
  const { title, description, path, image, articleJsonLd, keywords, ogTypeOverride } = options;
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

  setMeta('og:title', title, true);
  setMeta('og:description', description, true);
  setMeta('og:image', imageUrl, true);
  setMeta('og:url', url, true);
  setMeta('og:type', ogTypeOverride ?? (articleJsonLd ? 'article' : 'website'), true);
  setMeta('og:image:width', '1200', true);
  setMeta('og:image:height', '630', true);
  setMeta('og:site_name', 'US Iran Conflict Analysis', true);

  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);
  setMeta('twitter:image', imageUrl);
  setMeta('twitter:site', '@usiranconflict');

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

function truncateMetaDescription(text: string, maxLen = 158): string {
  const t = text.replace(/\s+/g, ' ').trim();
  if (t.length <= maxLen) return t;
  const cut = t.slice(0, maxLen - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…';
}

function buildOrganizationPublisher() {
  return {
    '@type': 'Organization',
    name: 'US Iran Conflict Analysis',
    alternateName: 'US-Iran Conflict Coverage',
    url: baseUrl(),
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl()}/favicon.svg`,
    },
  };
}

function buildPersonAuthor() {
  return {
    '@type': 'Person',
    name: siteConfig.founder.name,
    url: `${baseUrl()}/about`,
  };
}

/**
 * Static-route SEO for client navigation. Blog posts are handled per-page (see BlogPostPage).
 */
export function getClientPageSEO(pathname: string): SEOOptions {
  const baseTitle = 'US Iran War 2026 | Complete Conflict Analysis & Latest News';
  const baseDescription =
    'Complete coverage of the US-Iran war 2026: Operation Epic Fury, nuclear tensions, Strait of Hormuz crisis, oil prices impact, and real-time updates. Expert analysis on the Middle East conflict.';
  const baseKeywords =
    'US Iran war, Iran war 2026, US Iran conflict, Middle East war, Operation Epic Fury, Iran nuclear program, Strait of Hormuz, Iran US tensions';
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
        author: buildPersonAuthor(),
        publisher: buildOrganizationPublisher(),
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
      description: truncateMetaDescription(
        'Latest news and analysis on the US-Iran war 2026. Stay informed on Operation Epic Fury, nuclear tensions, Strait of Hormuz crisis, and regional developments.',
      ),
      path: '/blogs',
      keywords:
        'US Iran war news, Iran conflict updates, Middle East news, Iran war latest, Operation Epic Fury, Iran nuclear program',
    };
  }

  if (pathname === '/news') {
    return {
      title: `Breaking News Feed | Iran War Headlines | ${siteName}`,
      description: truncateMetaDescription(
        'Breaking headlines and wires on US-Iran tensions, Gaza, Lebanon, the Strait of Hormuz, and regional security—Reuters, AFP, NPR, Axios, CNBC Iran coverage and more.',
      ),
      path: '/news',
      keywords: 'US Iran breaking news, Reuters Iran headlines, Middle East news today, Hormuz Strait news',
    };
  }

  const topicMatch = pathname.match(/^\/topic\/(.+)$/);
  if (topicMatch) {
    const slug = topicMatch[1];
    const topic = topicPagesConfig[slug];
    if (topic) {
      const topicKeywords: Record<string, string> = {
        'operation-epic-fury':
          'Operation Epic Fury, US Iran military operation, Iran strikes 2026, US military Iran',
        'nuclear-program':
          'Iran nuclear program, Iran uranium enrichment, JCPOA, Iran nuclear deal, nuclear weapons Iran',
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
      description:
        'Real-time reporting and breaking news on the US-Iran war from Al Jazeera, CNN, CNBC and other major sources. Live updates on Middle East conflict.',
      path: '/live-coverage',
      keywords: 'US Iran war live, Iran conflict live updates, Middle East breaking news, Iran war today',
    };
  }

  if (pathname === '/contact') {
    return {
      title: `Contact ${siteName}`,
      description:
        'Contact the US Iran Conflict team: editorial email, phone, and message form for tips, corrections, and inquiries.',
      path: '/contact',
      keywords: 'contact US Iran conflict, editorial contact, tips, corrections',
    };
  }

  if (pathname === '/about') {
    return {
      title: `About Us | ${siteName}`,
      description:
        'About US-Iran Conflict Coverage: Kamran Khan, founder—mission, editorial approach, latest news & updates.',
      path: '/about',
      keywords: 'US Iran Conflict about, Kamran Khan, founder US Iran coverage',
    };
  }

  if (pathname === '/privacy-policy') {
    return {
      title: `Privacy Policy | ${siteName}`,
      description:
        'How US-Iran Conflict Coverage handles personal data: collection, cookies, retention, sharing, your choices, contact.',
      path: '/privacy-policy',
      keywords: 'privacy policy, US Iran conflict, data cookies',
    };
  }

  if (pathname === '/terms-of-use') {
    return {
      title: `Terms of Use | ${siteName}`,
      description:
        'Terms of Use for US-Iran Conflict Coverage: acceptable use, disclaimers, IP, limitation of liability, contact.',
      path: '/terms-of-use',
      keywords: 'terms of use US Iran conflict, disclaimers editorial',
    };
  }

  return {
    title: baseTitle,
    description: baseDescription,
    path: pathname,
    keywords: baseKeywords,
  };
}
