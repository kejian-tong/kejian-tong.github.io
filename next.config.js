const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  // Generate a fully static site for GitHub Pages
  output: "export",
  // By default, Next.js does not add a trailing slash to URLs.
  // This is the desired behavior for GitHub Pages.
  trailingSlash: false,
  images: {
    // Required for static export when using next/image
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "media.dev.to" },
    ],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};
module.exports = nextConfig;
