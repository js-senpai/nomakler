/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
// const nextTranslate = require('next-translate')
module.exports = withPlugins([
  // nextTranslate
],{
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
  images: {
    domains: ['goofy-wilson-872921.netlify.app'],
  },
});
