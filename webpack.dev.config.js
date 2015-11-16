/* eslint no-var: 0 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
require('babel-core/polyfill');


module.exports = {
  debug: true,
  entry: [
    'babel-polyfill',
    'webpack/hot/dev-server',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('development'),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/template/index.html',
    }),
  ],
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.png$/,
        loader: 'url?mimetype=image/png',
      },
    ],
  },
};
