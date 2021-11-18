/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
// const nextTranslate = require('next-translate')
module.exports = withPlugins([
  [
    optimizedImages,{
    imagesFolder: 'public/images'
  }
  ],
],{
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
});
