import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Use double asterisks (Next.js standard)
      },
    ],
  },
};




export default nextConfig;
