const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a fully static site for GitHub Pages
  output: "export",
  // By default, Next.js does not add a trailing slash to URLs.
  // This is the desired behavior for GitHub Pages.
  trailingSlash: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    // Required for static export when using next/image
    unoptimized: true,
    domains: ["res.cloudinary.com", "media.dev.to"],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};
module.exports = nextConfig;
