const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const baseConfig = require('./webpack.config.base');
const basePath = path.join(__dirname, '../..');
const srcPath = path.join(basePath, 'site');
const templatePath = path.join(basePath, 'site');

module.exports = merge(baseConfig, {
  entry: srcPath,
  devServer: {
    host: '0.0.0.0',
    hot: false,
    inline: false,
    port: 4444,
    disableHostCheck: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(templatePath, 'index.html')
    })
  ]
});
