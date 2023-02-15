const optimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPlugins([optimizedImages],nextConfiguration);
module.exports = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
