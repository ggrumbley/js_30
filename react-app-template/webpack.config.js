const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const packageJSON = require('./package.json');

const proxy = packageJSON.proxy
  ? {
      '/api': {
        target: packageJSON.proxy,
        changeOrigin: true,
        pathRewrite: {
          [`^/api`]: '',
        },
      },
    }
  : {};

module.exports = {
  entry: ['./src/index.jsx'],
  mode: 'production',
  module: {
    rules: [
      { test: /\.(png|svg|jpg|gif)$/, use: 'file-loader' },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new ErrorOverlayPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:8080'],
      },
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8080,
    quiet: true,
    proxy,
  },
};
