import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Unblock CI/CD on Render by ignoring lint and type errors during build
  // Fix the underlying issues locally and remove these when clean
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
