### client/App
```javascript
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Layout from "./layout";


class RenderLayout extends Component {
  componentWillMount() {
    this.forceUpdate(); // a little hack to help us re-render when this module is hot reloaded
  }

  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    )
  }
}

export default RenderLayout;
```
### client/App/layout
```javascript
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import routeConfig from '../src/routers';
import Home from "../src/container/Home";
import Nav from '../src/component/Nav';
import Footer from '../src/component/Footer';
import NotFound from "../src/container/NotFound";

class Layout extends Component {
  componentWillMount() {
    // a little hack to help us rerender when this module is reloaded
    this.forceUpdate()
  }

  render() {

    const mapRoute = routeConfig.map((index, i) => {
      return (
          <Route key={i} {...index} onEnter={() => console.log(index.path)}/>
      )
    })
    return (
      <Router>
        <div>
          <Helmet
            meta={[
              {name: "description", content: "Isomorphic javascript app"}
            ]}
            defaultTitle="Isomorphic javascript app" />
          <Switch>
            <Route exact path="/" component={Home} />
            {mapRoute}
            <Route component={NotFound} />
          </Switch>
          <Nav />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Layout
```
### client/store
```javascript
import { applyMiddleware, createStore } from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducers from "../src/reducers";


const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducers, middleware);
```
### client/index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React / Redux</title>
    <link rel="stylesheet" href="public/stylesheets/style.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript" src="bundle.js"></script>
  </body>
</html>
```

### client
```javascript
import 'babel-polyfill';
require('file-loader?name=index.html!./index.html');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const dom = document.getElementById('root');
ReactDOM.render(
  <App />,
  dom
);
```
