import type { MetadataRoute } from 'next';
import { siteConfig, topicPagesConfig } from '@/config';
import { getAllBlogsMerged } from '@/lib/get-all-blogs';

const base = siteConfig.siteUrl.replace(/\/$/, '');

/** Regenerate periodically so new Keystatic posts appear in the sitemap. */
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${base}/article`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blogs`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.95 },
    { url: `${base}/live-coverage`, lastModified: new Date(), changeFrequency: 'hourly', priority: 0.9 },
    { url: `${base}/news`, lastModified: new Date(), changeFrequency: 'hourly', priority: 0.95 },
  ];

  const posts = await getAllBlogsMerged();
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const topicEntries: MetadataRoute.Sitemap = Object.keys(topicPagesConfig).map((slug) => ({
    url: `${base}/topic/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogEntries, ...topicEntries];
}
