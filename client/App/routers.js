import React from 'react';
import { Route, Switch } from 'react-router';
import routeConfig from '../routes';
import NotFound from "../container/NotFound";

export default (props) => {

  // helper to add props into component
  const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return (
      React.createElement(component, finalProps)
    );
  };

  const PropsRoute = ({ component, ...rest }) => {
    return (
      <Route {...rest} render={routeProps => {
        return renderMergedProps(component, routeProps, rest);
      }}/>
    );
  };

  return (
    <Switch>
      {routeConfig.map((route, i) => (
        <PropsRoute key={i} {...route} {...props} />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
}
