/**
 * Blog post SEO helpers (no static blogs catalog import — safe for client components).
 */

import { siteConfig } from '@/config';
import type { BlogPost } from '@/content/blogs';
import { BLOG_SLUG_KEYWORDS } from '@/lib/blog-seo-keywords';
import { formatSerpDescription, formatSerpTitle } from '@/lib/seo-meta-format';
import type { SEOOptions } from '@/lib/seo-client';

const baseUrl = () => siteConfig.siteUrl.replace(/\/$/, '');
const siteBrand = 'US Iran Conflict Analysis';

function toAbsoluteUrl(base: string, maybeUrl: string): string {
  if (/^https?:\/\//i.test(maybeUrl)) return maybeUrl;
  const path = maybeUrl.startsWith('/') ? maybeUrl : `/${maybeUrl}`;
  return `${base}${path}`;
}

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

function buildArticleJsonLd(
  post: { title: string; excerpt: string; date: string; image?: string },
  url: string,
  keywords?: string,
): Record<string, unknown> {
  const excerpt = truncateMetaDescription(post.excerpt || post.title, 220);
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: truncateMetaDescription(post.title, 110),
    description: excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: post.image ? toAbsoluteUrl(baseUrl(), post.image) : `${baseUrl()}/gallery-6.jpg`,
    author: buildPersonAuthor(),
    publisher: buildOrganizationPublisher(),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    articleSection: 'Geopolitics',
    keywords: keywords || 'US Iran war, Iran conflict, Middle East crisis',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1.article-headline', 'p.article-summary'],
    },
  };
}

function resolveBlogKeywords(post: BlogPost): string {
  const mapped = BLOG_SLUG_KEYWORDS[post.slug];
  if (mapped) return mapped;
  const titleWords = post.title
    .replace(/[|–—:;•]/g, ' ')
    .split(/\s+/)
    .map((w) => w.replace(/[^\w\s-]/g, ''))
    .filter((w) => w.length > 3)
    .filter((w, i, a) => a.indexOf(w) === i)
    .slice(0, 14);
  const slugBits = post.slug
    .split('-')
    .filter((s) => s.length > 2 && !/^\d{4}$/.test(s))
    .slice(0, 10);
  return ['US Iran war 2026', 'Iran conflict', 'Middle East news', ...titleWords, ...slugBits].join(', ');
}

export function getSEOOptionsForBlogPost(post: BlogPost): SEOOptions {
  const pathname = `/blog/${post.slug}`;
  const url = `${baseUrl()}${pathname}`;
  const keywords = resolveBlogKeywords(post);
  const title = formatSerpTitle(`${post.title} | ${siteBrand}`);
  const description = formatSerpDescription(post.excerpt || post.title);
  return {
    title,
    description,
    path: pathname,
    image: post.image,
    keywords,
    articleJsonLd: buildArticleJsonLd(post, url, keywords),
  };
}

/** Meta tags for client `updateSEO` without duplicating server-rendered `BlogArticleJsonLd`. */
export function getClientBlogHeadSEO(post: BlogPost): SEOOptions {
  const base = getSEOOptionsForBlogPost(post);
  return { ...base, articleJsonLd: undefined, ogTypeOverride: 'article' };
}

export function buildNewsArticleJsonLdForPost(post: BlogPost): Record<string, unknown> {
  const pathname = `/blog/${post.slug}`;
  const url = `${baseUrl()}${pathname}`;
  return buildArticleJsonLd(post, url, resolveBlogKeywords(post));
}
