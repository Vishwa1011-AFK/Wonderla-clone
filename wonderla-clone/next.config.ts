// wonderla-clone/next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd22pimhl2qmbj7.cloudfront.net',
        port: '', // Optional, usually empty for standard HTTPS
        pathname: '/public/**', // Be as specific as possible, or use '/**' if images are in various paths
      },
      {
        protocol: 'https',
        hostname: 'www.wonderla.com', // Added for the Bengaluru Park/Resort images
        port: '',
        pathname: '/_next/image**', // For images served via Next.js image optimization on that domain
      },
      // Add other hostnames if you have images from other external sources
    ],
  },
  // ... any other existing config options
};

export default nextConfig;