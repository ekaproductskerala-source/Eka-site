import type { NextConfig } from "next";

const nextConfig = {
  output: "export",
  basePath: "/eka-website",
  assetPrefix: "/eka-website",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
