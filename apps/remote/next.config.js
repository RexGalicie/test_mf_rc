//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const { withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack: (config, options) => {
    config.infrastructureLogging = {
      level: 'error',
    };
    config.plugins.push(new NextFederationPlugin({
      name: 'remote',
      filename: 'static/chunks/remoteEntry.js',
      remotes: {
      },
      shared: {
      },
      extraOptions: {
        exposePages: true,
      },
    }));
    return config;
  },
};

module.exports = withNx(nextConfig);
