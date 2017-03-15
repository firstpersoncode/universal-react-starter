import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routeConfig from '../_src/routers';
import Nav from '../_src/component/Nav';

class Routes extends Component {
  componentWillMount() {
    // to work with jspm-live-reload
    // a little hack to help us rerender when this module is reloaded
    this.forceUpdate()
  }

  render() {

    const mapRoute = routeConfig.map((index, i) => {
      return (
        <Route key={i} path={index.path} component={index.component} />
      )
    })
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/" render={() => (<h1 style={{textAlign: "center"}}>Simple Setup Isomorphic Javascript App</h1>)} />
          {mapRoute}
        </div>
      </Router>
    );
  }
}

export default Routes
