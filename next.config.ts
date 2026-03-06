import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fwwaxebcoqgyvboqqroj.supabase.co",
      },
    ],
    formats: ["image/webp"],
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [32, 64, 96, 384],
    qualities: [75],
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
