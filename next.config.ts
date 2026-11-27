import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 
  trailingSlash: true,

  experimental: {
    agentFeedback: true,
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
};

export default nextConfig;
