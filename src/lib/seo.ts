/**
 * SEO utilities: update document title and meta tags for sharing and crawlers.
 * Optimized for "US Iran War" and related search queries.
 */

import type { Metadata } from 'next';
import { siteConfig, topicPagesConfig } from '@/config';
import type { BlogPost } from '@/content/blogs';
import { blogs } from '@/content/blogs';
import { formatSerpDescription, formatSerpTitle } from '@/lib/seo-meta-format';
import {
  buildNewsArticleJsonLdForPost,
  getClientBlogHeadSEO,
  getSEOOptionsForBlogPost,
} from '@/lib/seo-blog';
import { getClientPageSEO, updateSEO, type SEOOptions } from '@/lib/seo-client';

export { buildNewsArticleJsonLdForPost, getClientBlogHeadSEO, getSEOOptionsForBlogPost };

export type { SEOOptions };
export { updateSEO };

const baseUrl = () => siteConfig.siteUrl.replace(/\/$/, '');

function toAbsoluteUrl(base: string, maybeUrl: string): string {
  if (/^https?:\/\//i.test(maybeUrl)) return maybeUrl;
  const path = maybeUrl.startsWith('/') ? maybeUrl : `/${maybeUrl}`;
  return `${base}${path}`;
}

export function truncateMetaDescription(text: string, maxLen = 158): string {
  const t = text.replace(/\s+/g, ' ').trim();
  if (t.length <= maxLen) return t;
  const cut = t.slice(0, maxLen - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…';
}

const siteBrand = 'US Iran Conflict Analysis';

export function toNextBlogMetadata(post: BlogPost): Metadata {
  const seo = getSEOOptionsForBlogPost(post);
  const canonicalPath = `/blog/${post.slug}`;
  const absUrl = `${baseUrl()}${canonicalPath}`;
  const desc = formatSerpDescription(post.excerpt || post.title);
  const titleSerp = formatSerpTitle(`${post.title} | ${siteBrand}`);
  const ogImageRel = post.image ?? siteConfig.ogImage ?? '/gallery-6.jpg';
  const ogAbs = toAbsoluteUrl(baseUrl(), ogImageRel);
  const kw =
    seo.keywords?.split(',').map((k) => k.trim()).filter(Boolean) ?? [];

  return {
    title: titleSerp,
    description: desc,
    keywords: kw.length ? kw : undefined,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: 'article',
      url: absUrl,
      siteName: siteBrand,
      locale: 'en_US',
      title: titleSerp,
      description: desc,
      publishedTime: post.date,
      modifiedTime: post.date,
      images: [{ url: ogAbs, width: 1200, height: 630, alt: `${post.title} — US Iran conflict analysis` }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@usiranconflict',
      title: titleSerp,
      description: desc,
      images: [ogAbs],
    },
    robots: { index: true, follow: true },
  };
}

export function toNextTopicMetadata(slug: string): Metadata | null {
  const topic = topicPagesConfig[slug];
  if (!topic) return null;
  const canonicalPath = `/topic/${slug}`;
  const absUrl = `${baseUrl()}${canonicalPath}`;
  const titleSerp = formatSerpTitle(`${topic.title} | ${siteBrand}`);
  const descSerp = formatSerpDescription(topic.description);
  const kw = topic.keywords
    ? topic.keywords.split(',').map((k) => k.trim()).filter(Boolean)
    : undefined;
  const ogAbs = topic.image
    ? toAbsoluteUrl(baseUrl(), topic.image)
    : toAbsoluteUrl(baseUrl(), siteConfig.ogImage ?? '/gallery-6.jpg');

  return {
    title: titleSerp,
    description: descSerp,
    keywords: kw?.length ? kw : undefined,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: 'article',
      url: absUrl,
      siteName: siteBrand,
      locale: 'en_US',
      title: titleSerp,
      description: descSerp,
      images: [{ url: ogAbs, width: 1200, height: 630, alt: `${topic.title} — topic guide` }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@usiranconflict',
      title: titleSerp,
      description: descSerp,
      images: [ogAbs],
    },
    robots: { index: true, follow: true },
  };
}

/**
 * Get title, description, and optional Article JSON-LD for a given pathname.
 * Used by App to set SEO on route change.
 */
export function getPageSEO(pathname: string): SEOOptions {
  const blogMatch = pathname.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    const slug = blogMatch[1];
    const post = blogs.find((b) => b.slug === slug);
    if (post) return getSEOOptionsForBlogPost(post);
  }

  return getClientPageSEO(pathname);
}
