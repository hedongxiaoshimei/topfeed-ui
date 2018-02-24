const merge = require('webpack-merge');
const path = require('path');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  devServer: {
    host: '0.0.0.0',
    hot: false,
    inline: false,
    port: 4444,
    disableHostCheck: true,
    historyApiFallback: true
  }
});
