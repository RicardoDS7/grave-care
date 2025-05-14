import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo   = "grave-care";

const nextConfig: NextConfig = {
  output: "export",

  // in prod, all pages + assets live under /grave-care
  basePath:   isProd ? `/${repo}`   : "",
  assetPrefix:isProd ? `/${repo}/`  : "",

  // for <Image> to work in a static-export
  images: {
    unoptimized: true,
  },

  // optional, but keeps your URLs ending in “/”
  trailingSlash: true,
};

export default nextConfig;
