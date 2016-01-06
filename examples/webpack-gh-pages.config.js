const
  path    = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: ['./index'],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: 'static/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      },
      minimize: true
    }),
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
