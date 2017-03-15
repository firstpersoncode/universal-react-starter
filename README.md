# Setup Isomorphic Javascript App
### node.js + react.js + redux.js / flux.js + express.js !


## Getting started :
* Open your ```shell``` that has been set up for using node.js.
* clone repo

Go to project's directory
```shell
cd to/directory/project/setup-isomorphic-javascript
```

Install the module packages
```shell
npm install
```

## START development

client-side :
```shell
npm run dev
```
bundle client-side :
```shell
npm run build
```
server-side :
```shell
npm run start
```

## Overview
---
React is not another MVC framework, or any other kind of framework. It's just a library for rendering your views. If you're coming from the MVC world, you need to realise that React is just the 'V', part of the equation, and you need to look elsewhere when it comes to defining your 'M' and 'C'.
- Getting Started
-- Require basic knowledge on NodeJS (Import, Export modules, NPM).
-- Intermediate knowledge on Javascript.
-- Basic knowledge on ES6.

> Use nodeJS for setting up React work environment, it has npm cli with lots of useful modules from many developers.

### Let's get started
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React / Redux</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript" src="bundle.js"></script>
  </body>
</html>
```

We will render our React component into ```<div id ="root"></div>```

**Configuration**
“webpack.config.js”. This is the file that's going to create bundle file compile all the JavaScript and the JSx, and it's also going to launch the development server.

```javascript
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
					plugins: [
					    'react-html-attrs', 
					    'transform-class-properties', 
					    'transform-decorators-legacy'
					]
				}
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: [ 
				    'style-loader', 
				    'css-loader?sourceMap', 
				    'sass-loader?sourceMap' 
			    ]
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

```

This will export our configuration object. We're going to have an entry point that's going to be our index.js and the output bundle which is bundle.js.
We set our local server inside devServer property for development using port 8080. And we set our installed loader inside our module loaders will target every js file except files inside node_modules folder, we will use ‘babel’ loader that already installed so we can use es6 in our project.
We also have loader for scss file for styling, and it will be compiled into css file.
