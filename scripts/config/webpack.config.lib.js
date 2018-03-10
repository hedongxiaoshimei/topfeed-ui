const path = require('path');
const basePath = path.join(__dirname, '../..');
const srcPath = path.join(basePath, 'src');
const outputPath = path.join(basePath, 'lib');

module.exports = {
  entry: srcPath,
  output: {
    path: outputPath,
    filename: 'uiy.js',
    library: 'uiy',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.tsx?$/,
        loader: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  }
};
