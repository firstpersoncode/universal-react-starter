var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'./client/index.js',
	],
	output: {
		path: path.resolve(__dirname, './build/'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	devServer: {
		inline: true,
		port: 50044,
		historyApiFallback: true
	},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
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
    ]
  },
	plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['.js', '.css']
  },
}
