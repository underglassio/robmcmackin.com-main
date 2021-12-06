const { withContentlayer } = require('next-contentlayer');
const withVideos = require('next-videos');
/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  webpack: (config, options) => {
    return config;
  }
};

module.exports = withContentlayer()(withVideos(nextConfig));
