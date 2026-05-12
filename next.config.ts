import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@keystatic/core', '@keystatic/next'],
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'usiranconflict.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.usiranconflict.com', pathname: '/**' },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value:
              '<https://www.youtube.com>; rel=preconnect; crossorigin, <https://i.ytimg.com>; rel=preconnect',
          },
        ],
      },
    ];
  },
  // Ensure Keystatic .mdoc files are included in the serverless bundle (Vercel).
  outputFileTracingIncludes: {
    '/blog/[slug]': ['./src/content/keystatic-posts/**/*'],
  },
};

export default nextConfig;
