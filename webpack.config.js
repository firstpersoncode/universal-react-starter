var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './client/index.js',
	output: {
		path: path.resolve(__dirname, './dist/'),
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port: 8080
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
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: [ 'style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap' ]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
    	'process.env': {
      	'NODE_ENV': process.env.NODE_ENV
    	}
  	})
	]
}
