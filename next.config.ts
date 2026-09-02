import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Required for the production Docker image (copies .next/standalone)
  output: "standalone",
  // Parent ~/package-lock.json otherwise makes Turbopack use the wrong root and 404 nested routes
  turbopack: {
    root: path.join(__dirname),
  },
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
      {
        protocol: "https",
        hostname: "media-usquared-test.prospertech.io",
      },
    ],
  },
};

export default nextConfig;
