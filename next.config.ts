import type { NextConfig } from 'next';
import { IMAGE_REMOTE_HOSTNAMES } from './src/lib/image-remote-hosts';

/** Keystatic .mdoc files must ship with every serverless route that calls getAllBlogsMerged(). */
const KEYSTATIC_SERVER_BUNDLE = [
  './src/content/keystatic-posts/**/*',
  './keystatic.config.ts',
] as const;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  transpilePackages: ['@keystatic/core', '@keystatic/next'],
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: IMAGE_REMOTE_HOSTNAMES.map((hostname) => ({
      protocol: 'https',
      hostname,
      pathname: '/**',
    })),
  },
  async headers() {
    const security = [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
      },
    ];
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value:
              '<https://www.youtube.com>; rel=preconnect; crossorigin, <https://i.ytimg.com>; rel=preconnect, <https://pagead2.googlesyndication.com>; rel=preconnect; crossorigin, <https://googleads.g.doubleclick.net>; rel=preconnect; crossorigin',
          },
          ...security,
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
  // Ensure Keystatic content is in serverless bundles (Vercel ISR was missing posts on `/`).
  outputFileTracingIncludes: {
    '/': [...KEYSTATIC_SERVER_BUNDLE],
    '/blogs': [...KEYSTATIC_SERVER_BUNDLE],
    '/blog/[slug]': [...KEYSTATIC_SERVER_BUNDLE],
    '/topic/[slug]': [...KEYSTATIC_SERVER_BUNDLE],
    '/rss.xml': [...KEYSTATIC_SERVER_BUNDLE],
    '/google-news.xml': [...KEYSTATIC_SERVER_BUNDLE],
    '/sitemap.xml': [...KEYSTATIC_SERVER_BUNDLE],
  },
};

export default nextConfig;
