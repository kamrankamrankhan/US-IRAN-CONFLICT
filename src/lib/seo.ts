/**
 * SEO utilities: update document title and meta tags for sharing and crawlers.
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
  const { title, description, path, image, articleJsonLd } = options;
  const baseUrl = runtimeBaseUrl();
  const canonicalPath = path ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
  const url = `${baseUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
  const imageUrl = toAbsoluteUrl(baseUrl, image ?? siteConfig.ogImage ?? '/favicon.svg');

  document.title = title;

  setMeta('description', description);
  setMeta('og:title', title, true);
  setMeta('og:description', description, true);
  setMeta('og:image', imageUrl, true);
  setMeta('og:url', url, true);
  setMeta('og:type', articleJsonLd ? 'article' : 'website', true);
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);
  setMeta('twitter:image', imageUrl);

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

function buildPublisher(): { '@type': string; name: string; url: string } {
  return {
    '@type': 'Organization',
    name: 'Strategic Intelligence',
    url: baseUrl(),
  };
}

/**
 * Get title, description, and optional Article JSON-LD for a given pathname.
 * Used by App to set SEO on route change.
 */
export function getPageSEO(pathname: string): SEOOptions {
  const baseTitle = siteConfig.title;
  const baseDescription = siteConfig.description;
  const siteName = baseTitle.split(' | ')[0];

  if (pathname === '/' || pathname === '') {
    return { title: baseTitle, description: baseDescription, path: '/' };
  }

  if (pathname === '/article') {
    const url = `${baseUrl()}/article`;
    return {
      title: `${articleMeta.headline} | ${siteName}`,
      description: articleMeta.metaDescription,
      path: '/article',
      articleJsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: articleMeta.headline,
        description: articleMeta.metaDescription,
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        author: buildPublisher(),
        publisher: buildPublisher(),
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url,
      },
    };
  }

  if (pathname === '/blogs') {
    return {
      title: `Blogs | ${siteName}`,
      description: 'Analysis and reporting on the US-Iran conflict, regional tensions, and related developments.',
      path: '/blogs',
    };
  }

  const blogMatch = pathname.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    const slug = blogMatch[1];
    const post = blogs.find((b) => b.slug === slug);
    if (post) {
      const url = `${baseUrl()}${pathname}`;
      return {
        title: `${post.title} | ${siteName}`,
        description: post.excerpt,
        path: pathname,
        articleJsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          author: buildPublisher(),
          publisher: buildPublisher(),
          mainEntityOfPage: { '@type': 'WebPage', '@id': url },
          url,
        },
      };
    }
  }

  const topicMatch = pathname.match(/^\/topic\/(.+)$/);
  if (topicMatch) {
    const slug = topicMatch[1];
    const topic = topicPagesConfig[slug];
    if (topic) {
      return {
        title: `${topic.title} | ${siteName}`,
        description: topic.description,
        path: pathname,
      };
    }
  }

  if (pathname === '/live-coverage') {
    return {
      title: `Live coverage | ${siteName}`,
      description: 'Real-time reporting and analysis from Al Jazeera, CNN, and CNBC on the US-Iran conflict.',
      path: '/live-coverage',
    };
  }

  return { title: baseTitle, description: baseDescription, path: pathname };
}
