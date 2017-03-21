const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: "inline-source-map",
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:50044",
    "webpack/hot/only-dev-server",
    "./client/index",
  ],
  target: "web",
  module: {
    rules: [
      { test: /\.js?$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
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
        })
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": { BUILD_TARGET: JSON.stringify("client") },
    }),
  ],
  devServer: {
    inline: true,
    host: "localhost",
    port: 50044,
    historyApiFallback: true,
    hot: true,
  },
  output: {
    path: path.join(__dirname, ".build"),
    publicPath: "/",
    filename: "bundle.js",
  },
};
