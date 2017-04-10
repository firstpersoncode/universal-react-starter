import React from 'react';
import { Route, Switch } from 'react-router';
import routeConfig from '../routes';
import NotFound from "../container/NotFound";

export default () => {
  return (
    <Switch>
      {routeConfig.map((route, i) => (
        <Route key={i} {...route} />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
}
