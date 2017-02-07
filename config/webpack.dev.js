var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'eval-source-map',
  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:4000/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    inline: true,
    quiet: true,
    stats: {
      chunks: false,
      chunkModules: false
    }
  }
});
