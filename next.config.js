/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
}

module.exports = withPlugins([
  optimizedImages,
]);

module.exports = nextConfig
