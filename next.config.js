/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/` : "",
  images: {
    loader: "imgix",
    path: !debug ? "https://kimmihi.github.io/" : "/",
  },
};

module.exports = nextConfig;
