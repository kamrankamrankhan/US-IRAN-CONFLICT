import type { Metadata } from 'next';
import ArticlePage from '@/views/ArticlePage';
import { articleMeta } from '@/content/featuredArticle';
import { siteConfig } from '@/config';
import { truncateMetaDescription } from '@/lib/seo';

const baseUrl = siteConfig.siteUrl.replace(/\/$/, '');
const heroRelative = articleMeta.image;
const hero =
  heroRelative && /^https?:/i.test(heroRelative)
    ? heroRelative
    : heroRelative
      ? `${baseUrl}${heroRelative.startsWith('/') ? heroRelative : `/${heroRelative}`}`
      : (siteConfig.ogImage ?? `${baseUrl}/gallery-6.jpg`);

export const metadata: Metadata = {
  title: articleMeta.headline,
  description: truncateMetaDescription(articleMeta.metaDescription),
  keywords: articleMeta.keywords.split(',').map((s) => s.trim()),
  alternates: { canonical: '/article' },
  openGraph: {
    title: truncateMetaDescription(articleMeta.headline, 72),
    description: truncateMetaDescription(articleMeta.metaDescription),
    url: '/article',
    type: 'article',
    images: hero ? [{ url: hero, width: 1200, height: 630, alt: articleMeta.headline }] : undefined,
  },
  twitter: {
    card: 'summary_large_image',
    title: truncateMetaDescription(articleMeta.headline, 72),
    description: truncateMetaDescription(articleMeta.metaDescription),
    images: hero ? [hero] : undefined,
  },
};

export default function Page() {
  return <ArticlePage />;
}
