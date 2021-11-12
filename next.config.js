/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const nextTranslate = require('next-translate')
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
module.exports = withPlugins([
  nextTranslate
],{
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new DuplicatePackageCheckerPlugin())
    config.resolve.alias['fast-deep-equal'] = path.resolve(
        __dirname,
        'node_modules',
        'fast-deep-equal'
    )
    return config
  },
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
});
