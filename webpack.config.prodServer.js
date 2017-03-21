const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs');

let nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: "./server/index",
  module: {
    rules: [
        { test: /\.js?$/, use: "babel-loader", exclude: /node_modules/ },
        {
          test: /\.scss$/,
          loader: [
            {
              loader: 'css-loader',
              query: {
                localIdentName: '[name]_[local]_[hash:8]',
                modules: true
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
    ],
  },
  target: 'node',
  externals: nodeModules,
  plugins: [
    new webpack.DefinePlugin({
        "process.env": { BUILD_TARGET: JSON.stringify("server") },
    })
  ],
  output: {
    path: path.join(__dirname, ".build"),
    publicPath: '/',
    filename: "app.js",
  },
};
