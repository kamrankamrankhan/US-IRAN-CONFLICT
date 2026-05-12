import type { NextConfig } from 'next';
import { IMAGE_REMOTE_HOSTNAMES } from './src/lib/image-remote-hosts';

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
              '<https://www.youtube.com>; rel=preconnect; crossorigin, <https://i.ytimg.com>; rel=preconnect',
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
  // Ensure Keystatic .mdoc files are included in the serverless bundle (Vercel).
  outputFileTracingIncludes: {
    '/blog/[slug]': ['./src/content/keystatic-posts/**/*'],
  },
};

export default nextConfig;
