const
  path    = require('path'),
  webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: 'static/'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    alias: {
      'react-malarkey': path.join(__dirname, '..')
    },
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }]
  }
};
