import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // GitHub Pages için trailingSlash bazen CSS yollarını bozabilir, kapatıp deneyelim
  trailingSlash: false,
};

export default nextConfig;
