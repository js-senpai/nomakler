/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const nextTranslate = require('next-translate')
module.exports = withPlugins([
  // [optimizedImages, {
  //   /* config for next-optimized-images */
  // }],
  nextTranslate

  // your other plugins here

],{
  reactStrictMode: true,
  compress: true,
});
