import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@keystatic/core', '@keystatic/next'],
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Ensure Keystatic .mdoc files are included in the serverless bundle (Vercel).
  outputFileTracingIncludes: {
    '/blog/[slug]': ['./src/content/keystatic-posts/**/*'],
  },
};

export default nextConfig;
