import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/vibe-coding-template',
  assetPrefix: '/vibe-coding-template/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
