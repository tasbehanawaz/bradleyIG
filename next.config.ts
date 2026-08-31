import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "cdn.example.com",
      },
    ],
  },
  // Alternate domains should redirect to the canonical HTTPS host at the
  // DNS/CDN or hosting layer (e.g. bradleyinnovations.com → bradleyinnovations.group).
};

export default nextConfig;
