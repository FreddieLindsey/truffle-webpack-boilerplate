/* eslint strict: 0 */
'use strict'

var webpack = require('webpack')
var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  cache: true,
  devtool: 'source-map',
  devServer: {
    stats: 'errors-only',
  },
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js(x)?$/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js(x)?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(s)?css$/,
        loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.sol/,
        loaders: ['json-loader', 'truffle-solidity-loader?network=development']
      }
    ],
    noParse: /lie\.js|[\s\S]*.(svg|ttf|eot)/
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    // Copy our app's index.html to the build folder.
    new CopyWebpackPlugin([
      { from: './app/index.html', to: 'index.html' }
    ]),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      '__DEV__': true,
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  stats: {
    children: false
  }
}
