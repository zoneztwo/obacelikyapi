import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // trailingSlash: true, statik sitelerde (GitHub Pages) daha kararlı çalışır
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
