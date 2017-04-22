# Universal React.js Starter
---
**Packed with:**
## [React](https://facebook.github.io/react)
## [Redux](http://redux.js.org)
## [Redux Universal !](https://www.npmjs.com/package/redux-universal)
## [React Router v4 !](https://reacttraining.com/react-router)
## [Express](https://expressjs.com)
## [Mongoose](http://mongoosejs.com)
## [Webpack v2](https://webpack.github.io/)
## [Immutee](https://github.com/diruuu/immutee)

### Simple starter-kit for universal React.js app, Using express.js for server-side, and mongoose.js for database. with react-router v4 server side rendering

#### Easy project structure, SEO friendly, fast performance, and easy to maintain.

##### with modular sass + plop generator + hot reload + server side rendering !
---

### Let's get started

#### Project Structure

```javascript

universal-react-starter

	client
		App // layout + provider + routers components
		component // dumb component (stateless component)
		container // smart component connected with redux store
		index.js // entry point client
		main.scss // global styling
		reducers.js // config reducer
		routes.js // config routes

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

***Container care about how things work, while Component care about how things look.***


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

Clone the project from GitHub
```shell
git clone https://github.com/firstpersoncode/universal-react-starter.git
```
Install all dependencies
```shell
npm install
```
start the development !
You can see the sample app with this script if you're not cleaning the project yet
```shell
npm start
```
Before start the new project, you can use this script to remove the sample app, 
this script will remove everything inside /client and /server directories,
and generate the starting components and containers
```shell
npm run clean
```
Bundle all the files,
it will create the `style.css` for all the style files, `bundle.js` for the client app, and `app.js` for the server app.
the output directory will be in `/.build` directory.
```shell
npm run build
```
If you want to see your project in production environtment
```shell
npm run start:prod
```
This Universal ReactJS Starter-kit is packed with plop generator, 
you can generate component or container template using this script
```shell
npm run generator
```

> *Hit me up if you have any questions regarding to the project > mail@thefirstpersoncode.com*
