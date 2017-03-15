import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import routeConfig from '../_src/routers';
import Home from "../_src/container/Home";
import Nav from '../_src/component/Nav';
import Footer from '../_src/component/Footer';
import NotFound from "../_src/container/NotFound";

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
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            {mapRoute}
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Layout
