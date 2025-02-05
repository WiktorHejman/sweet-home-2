import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fwwaxebcoqgyvboqqroj.supabase.co",
      },
    ],
  },
};

export default nextConfig;
