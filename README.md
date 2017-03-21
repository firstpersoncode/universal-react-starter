# Universal Javascript
---
**Packed with:**
## [React](https://facebook.github.io/react)
## [Redux](http://redux.js.org)
## [React Router v4 !](https://reacttraining.com/react-router)
## [Express](https://expressjs.com)
## [Mongoose](http://mongoosejs.com)
## [Webpack v2](https://webpack.github.io/)
## [Immutee](https://github.com/diruuu/immutee)

### modular css/sass + plop generator + hot reload + server side rendering !
---
### Let's get started

#### Project Structure

```javascript

setup-isomorphic-javascript

	client
		App // layout + provider
		component // dumb component (stateless component)
		container // smart component connected with redux store
		reducers.js // config reducer
		routers.js // config router
		index.html
		index.js // entry point client
    
	public //static file
		javascripts
		stylesheets
		favicon.ico
		robots.txt
    
	server
		db
		model // schemas
		index.js // config db
		source // source routers
		app.js // express setup
		index.js // entry point server
	
	utils
		starting // template for starting project
		templates // template for generator
		clean.js // cleaning project config (becareful with this !)
		plopfile.js // generator config

	.babelrc // babel loader & css module loader config
	postcss.config.js // auto prefixer for sass
	sass-loader.js // sass loader config
	package.json
	webpack.config.devClient.js 
	webpack.config.devServer.js
	webpack.config.prodClient.js
	webpack.config.prodServer.js

```
`/client`, contains entry point for client side, config for reducers and routes.

`/client/App`, main wrapper for app layout, routers, reducers.

`/client/component`, contains dumb React components which depend on containers for data.

`/client/container`, contains React components which are connected to the redux store.

`/server`, entry point for server side and express config.

`/server/db`, models, schemas.

`/server/source`, router, API and config for server side rendering.

`/utils`, contains plop config, clean config, starting template and generator template.

`/utils/starting`, contains starting template (if project got cleaned with `npm run clean`).

`/utils/template`, plop generator template.

***Container components care about how things work, while components care about how things look.***


#### component & container structure

```javascript

component
	Header
		index.js // entry component
		style.css // styling for component

container
	Home
		action.js // actions for dispatching store
		constants.js // action type
		index.js // entry container
		reducer.js // container's reducer
		style.css // styling for container

```

## START development

development:
```shell
npm start
```
build:
```shell
npm run build
```
production:
```shell
npm run start:prod
```
generator:
```shell
npm run generator
```
clean project:
```shell
npm run clean
```

> *Hit me up if you have any questions regarding the project > nasser.maronie@gmail.com*
