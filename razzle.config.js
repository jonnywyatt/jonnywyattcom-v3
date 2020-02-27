const nodeExternals = require('webpack-node-externals');
const fs = require('fs');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin');
const path = require('path');

const findRuleIndex = (config, ruleLabel) =>
  config.module.rules.findIndex(
    rule =>
      rule.use &&
      rule.use.find(use => use.loader && use.loader.includes(ruleLabel))
  );

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias['styled-components'] = require.resolve(
      'styled-components'
    );
    config.resolve.modules.push(path.resolve(__dirname, 'node_modules'));
    const babelRuleIndex = findRuleIndex(config, 'babel-loader');
    config.module.rules[babelRuleIndex] = Object.assign(
      config.module.rules[babelRuleIndex],
      {
        test: /\.(js|ts|tsx|css)$/
      }
    );

    config.externals =
      target === 'node'
        ? [
            nodeExternals({
              whitelist: [
                dev ? 'webpack/hot/poll?300' : null,
                /\.(woff2|svg|png|jpg|jpeg|gif|ico|webp)$/,
                /^@culture-trip\//
              ].filter(Boolean)
            })
          ]
        : [];

    if (target === 'web') {
      config.output.filename = dev
        ? 'static/js/[name].js'
        : 'static/js/[name].[hash:8].js';
      config.output.jsonpFunction = 'webpackV4Jsonp';
      config.externals.push({
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled'
      });
      config.optimization = {
        ...config.optimization,
        // create a single runtime bundle for all chunks, improves cacheability
        // https://webpack.js.org/guides/caching/#extracting-boilerplate
        runtimeChunk: 'single',
        // keep module ids more stable between builds
        // https://webpack.js.org/guides/caching/#module-identifiers
        moduleIds: 'hashed',
        splitChunks: {
          cacheGroups: {
            vendor: {
              test(mod) {
                if (!mod.context || !mod.context.includes('node_modules')) {
                  return false;
                }
                return !mod.context.includes('@culture-trip');
              },
              name: 'vendor',
              chunks: 'all'
            }
          }
        }
      };

      if (!dev) {
        config.output.publicPath = '/bookable/';
        config.plugins.push(
          new BrotliGzipPlugin({
            asset: '[path].br[query]',
            algorithm: 'brotli',
            test: /\.(js)$/,
            threshold: 0,
            minRatio: 0.8,
            quality: 11
          })
        );
        config.plugins.push(
          new BrotliGzipPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js)$/,
            threshold: 0,
            minRatio: 0.8
          })
        );
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            defaultSizes: 'gzip',
            reportFilename: './bundle-analyzer/client.html'
          })
        );
        config.performance = {
          hints: false
        };
      }
    }

    return config;
  }
};
