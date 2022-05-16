const { withContentlayer } = require('next-contentlayer');
const withVideos = require('next-videos');
/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      });
    }

    return config;
  }
};

module.exports = withContentlayer()(withVideos(nextConfig));
