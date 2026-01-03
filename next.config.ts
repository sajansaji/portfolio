import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'storage.googleapis.com' },
      { protocol: 'https', hostname: 'www.labellerr.com' },
      { protocol: 'https', hostname: 'e-labworks.com' },
      { protocol: 'https', hostname: 'pic3.zhimg.com' },
      { protocol: 'https', hostname: 'opengraph.githubassets.com' }
    ],
  },
};

export default nextConfig;
