# Setup Isomorphic Javascript App
### node.js + react.js + redux.js / flux.js + express.js !


## Getting started :
* Open your ```shell``` that has been set up for using node.js.
* clone repo ```git clone https://github.com/firstpersoncode/setup-isomorphic-javascript.git```

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
-- Require node.js.
-- Require mongoDB.
-- Basic knowledge on node.js (Import and Export modules, NPM).
-- Intermediate knowledge on Javascript.
-- Basic knowledge on ES6.

> Use node.js for setting up React work environment, it has npm cli with lots of useful modules from many developers..



### Let's get started
```client/_src/component```, contains dumb React components which depend on containers for data.
```client/_src/container```, contains React components which are connected to the redux store.
***Container components care about how things work, while components care about how things look.***


#### config router
```client/_src/routers.js```
config for routing, import component and set its path.

```javascript
import Home from "./container/Home";
import About from "./container/About";

export default [{
  path: '/home',
  component: Home,
}, {
  path: '/about',
  component: About,
}];
```

#### config reducer
```client/_src/reducers.js```
combine all reducers created in component's folder
```javascript
import { combineReducers } from 'redux';

import homeState from "./container/Home/reducer";
import aboutState from "./container/About/reducer";

export default combineReducers({
  homeState,
  aboutState,
});
```

#### config webpack
```webpack.config.js```
This is the file that's going to create bundle file compile all the JavaScript and the JSx, and it's also going to launch the development server.

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
		port: 8080,
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
