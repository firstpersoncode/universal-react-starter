var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './client/index.js',
	output: {
		path: path.resolve(__dirname, './public/javascripts/'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	devServer: {
		inline: true,
		port: 50044,
		historyApiFallback: true
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader?sourceMap&modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
			},
		]
	},
	plugins: []
}
