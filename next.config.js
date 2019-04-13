const withTypescript = require('@zeit/next-typescript')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

module.exports = withTypescript({
  webpack(config, { isServer, buildId, dev }) {

    if (!dev) {
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          verbose: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          runtimeCaching: [
            {
              handler: 'networkFirst',
              urlPattern: /^https?.*/
            }
          ]
        }),
        new WebpackPwaManifest({
          filename: 'static/manifest.json',
          name: 'Is The Cricket On?',
          short_name: 'ITCO',
          description: 'An app for Cricket fans',
          background_color: '#ffffff',
          theme_color: '#89bdd3',
          display: 'standalone',
          orientation: 'portrait',
          fingerprints: false,
          inject: false,
          start_url: '/',
          ios: {
            'apple-mobile-web-app-title': 'Is The Cricket On?',
            'apple-mobile-web-app-status-bar-style': '#89bdd3',
          },
          icons: [
            {
              src: path.resolve('static/favicon.ico'),
              sizes: [96, 128, 192, 256, 384, 512],
              destination: '/static',
            },
          ],
          includeDirectory: true,
          publicPath: '..',
        })
      )
    }

    return config;
  }
})
