# Setup Isomorphic Javascript App
### node.js + react.js + redux.js + express.js !


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

#### Getting Started
* Require node.js.
* Require mongoDB.
* Basic knowledge on node.js (Import and Export modules, NPM).
* Intermediate knowledge on Javascript.
* Basic knowledge on ES6.


### Let's get started
```/client/_src/component```, contains dumb React components which depend on containers for data.
```/client/_src/container```, contains React components which are connected to the redux store.
***Container components care about how things work, while components care about how things look.***


#### config router
```/client/_src/routers.js```
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
```/client/_src/reducers.js```
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

#### config database
```/server/db/model```
exporting all schemas created in ```/server/db/model``` directory.
```javascript
const mongoose = require('mongoose');
const Headers = require('./headersSchema')(mongoose);
module.exports = {
  Headers,
};
```
```javascript
// sample schema
module.exports = (mongoose) => {
  const headersSchema = mongoose.Schema({
    data: String,
  });
  const Headers = mongoose.model('Headers', headersSchema);

  return Headers;
};
```

#### config API
```/server/app.js```
```javascript
const express = require('express');
const app = express();
const headers = require('./routes/headers');
// app source
app.use('/headers', headers);
```
```/server/source/```
```javascript
// sample API
var express = require('express');
var router = express.Router();
const { Headers } = require('../db/model');

const getHeaders = (callback) => {
  Headers.find({}, callback)
};

const addHeaders = (header, callback) => {
	const newHeaders = new Headers(header);
	newHeaders.save().then((newHeaders) => {
		callback(newHeaders);
	})
}

router.get('/', (req, res, next) => {
  getHeaders((err, headers) => {
		if(err){
			throw err;
		}
		res.json(headers);
	});
});

router.post('/', (req, res, next) => {
	const header = req.body;
  console.log(header)
	addHeaders(header, (newHeaders) => {
		res.json(newHeaders);
	});
});

module.exports = router;
```

#### config webpack
```/webpack.config.js```
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
