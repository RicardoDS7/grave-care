import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo   = "grave-care";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,    // ⚠️ required for static export
  },
};

export default nextConfig;
