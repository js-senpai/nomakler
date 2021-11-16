/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
// const nextTranslate = require('next-translate')
module.exports = withPlugins([
  [
    optimizedImages,
    {
      // optimisation disabled by default, to enable check https://github.com/cyrilwanner/next-optimized-images
      optimizeImages: false,
    },
  ],
],{
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
  images: {
    disableStaticImages: true,
    domains: ['goofy-wilson-872921.netlify.app'],
  },
});
