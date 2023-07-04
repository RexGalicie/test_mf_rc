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
    const { isServer } = options;
    config.plugins.push(new NextFederationPlugin({
      name: 'host',
      filename: 'static/chunks/remoteEntry.js',
      exposes: {
      },
      remotes: {
        remote: `remote@http://localhost:5201/_next/static/${
          isServer ? 'ssr' : 'chunks'
        }/remoteEntry.js`,
      },
      shared: {
      },
      extraOptions: {
      },
    }));


    return config;
  },
};

module.exports = module.exports = withNx(nextConfig);
