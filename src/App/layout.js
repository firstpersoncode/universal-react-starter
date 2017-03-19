import React, { Component } from 'react';
// import { Router, Route, Switch, browserHistory } from 'react-router';
import Helmet from 'react-helmet';
// import createBrowserHistory from 'history/createBrowserHistory'
// import routeConfig from '../routers';
// import Home from "../container/Home";
// import Nav from '../component/Nav';
// import Footer from '../component/Footer';
// import NotFound from "../container/NotFound";
//
// const history = createBrowserHistory()

// class Layout extends Component {
//   render() {
//
//     const mapRoute = routeConfig.map((index, i) => {
//       return (
//           <Route key={i} {...index} />
//       )
//     })
//     return (
//         <Router history={history}>
//          <div>
//            <Helmet
//              meta={[
//               {name: "description", content: "Isomorphic javascript app"}
//             ]}
//             defaultTitle="Isomorphic javascript app" />
//           <Switch>
//             <Route exact path="/" component={Home} />
//             {mapRoute}
//             <Route component={NotFound} />
//           </Switch>
//           <Nav />
//           <Footer />
//         </div>
//       </Router>
//     );
//   }
// }
import Home from "../container/Home";
class Layout extends Component {
  render() {
    return (
      <div>
        <Helmet
          meta={[
           {name: "description", content: "Isomorphic javascript app"}
         ]}
         defaultTitle="Isomorphic javascript app" />
        <Home />
      </div>
    );
  }
}


export default Layout
