import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tinytales.trendline.marketing',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
