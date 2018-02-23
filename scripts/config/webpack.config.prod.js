const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const baseConfig = require('./webpack.config.base');
const basePath = path.join(__dirname, '../../');
const srcPath = path.join(basePath, 'site');

const config =  merge(baseConfig, {
  entry: srcPath,
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: basePath
    })
  ]
})
module.exports = config;