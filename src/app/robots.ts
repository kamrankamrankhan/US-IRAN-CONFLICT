import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config';

const base = siteConfig.siteUrl.replace(/\/$/, '');

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/keystatic/'],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
