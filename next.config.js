const withTypescript = require('@zeit/next-typescript')
const NextWorkboxPlugin = require('next-workbox-webpack-plugin');

module.exports = withTypescript({
  webpack(config, { isServer, buildId, dev }) {

    const GQLEndpoint = !dev
      ? 'https://isthecricketon.herokuapp.com/graphql'
      : 'http://localhost:8000/graphql'
    const workboxOptions = {
      clientsClaim: true,
      skipWaiting: true,
      globPatterns: ['.next/static/*', '.next/static/commons/*'],
      modifyUrlPrefix: {
        '.next': '/_next',
      },
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'networkFirst',
          options: {
            cacheName: 'html-cache',
          }
        },
        {
          urlPattern: /\/match-details\/.*/,
          handler: 'networkFirst',
          options: {
            cacheName: 'html-cache',
          }
        },
        {
          urlPattern: /\/match-list\/.*/,
          handler: 'networkFirst',
          options: {
            cacheName: 'html-cache',
          }
        },
        {
          urlPattern: new RegExp(`^${GQLEndpoint}`),
          handler: 'staleWhileRevalidate',
          options: {
            cacheName: 'api-cache',
            cacheableResponse: {
              statuses: [200],
            }
          }
        },
        {
          urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
          handler: 'cacheFirst',
          options: {
            cacheName: 'image-cache',
            cacheableResponse: {
              statuses: [0, 200],
            }
          }
        }
      ]
    };

    if (!isServer) {
      config.plugins.push(
        new NextWorkboxPlugin({
          buildId,
          ...workboxOptions,
        })
      )
    }

    return config;
  }
})
