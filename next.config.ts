import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  cleanDistDir: true,
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
};

export default nextConfig;
