import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@keystatic/core', '@keystatic/next'],
};

export default nextConfig;
