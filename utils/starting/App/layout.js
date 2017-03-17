import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import Helmet from 'react-helmet';
import createBrowserHistory from 'history/createBrowserHistory'
import routeConfig from '../routers';
import Home from "../container/Home";
import Nav from '../component/Nav';
import NotFound from "../container/NotFound";

const history = createBrowserHistory()

class Layout extends Component {
  componentWillMount() {
    // a little hack to help us rerender when this module is reloaded
    this.forceUpdate()
  }

  render() {

    const mapRoute = routeConfig.map((index, i) => {
      return (
          <Route key={i} {...index} />
      )
    })
    return (
        <Router history={history}>
         <div>
           <Helmet
             meta={[
              {name: "description", content: "Isomorphic javascript app"}
            ]}
            defaultTitle="Isomorphic javascript app" />
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            {mapRoute}
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Layout
