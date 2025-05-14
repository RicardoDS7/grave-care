import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "grave-care";  // ← change this to your repo name

const nextConfig: NextConfig = {
  output: "export",
  // in prod, all pages & assets are under /<repo>/…
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  // optional: makes URLs end in slash (good for Github Pages)
  trailingSlash: true,
  images: {
    unoptimized: true,    // ⚠️ required for static export
  },
};

export default nextConfig;
