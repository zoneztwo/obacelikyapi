import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Hostinger ve benzeri platformlar için asset prefix sorunlarını engellemek adına
  trailingSlash: true,
};

export default nextConfig;
