process.env.NODE_ENV === 'development'
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const basePath = path.join(__dirname, '../..');
const srcPath = path.join(basePath, 'site');
const outputPath = path.join(basePath, 'dist');
const templatePath = path.join(basePath, 'site');
module.exports = {
  entry: srcPath,
  output: {
    path: outputPath,
    filename: 'uiy.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.md$/,
        use: ['raw-loader']
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'uiy.css'
    }),
    new HtmlWebpackPlugin({
      template: path.join(templatePath, 'index.html')
    })
  ],
  resolve:{
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  }
}