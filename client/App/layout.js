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
