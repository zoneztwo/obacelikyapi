import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // GitHub Pages özel domain (obacelikyapi.com) için assetPrefix boş kalmalı veya / olmalı
  assetPrefix: "",
  // GitHub Pages için klasör yapısı (folder structure) çok daha güvenlidir
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
