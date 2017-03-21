import React from "react";
import { StaticRouter as Router } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString } from "react-dom/server";
import Helm from 'react-helmet';
import Layout from "../../client/App/layout";
import configureStore from "../../client/App/store";
import Routes from "../../client/App/routers";
import routes from "../../client/routes";


export default (req, res) => {

  // grab route object from ../../client/routes that match with req.url
  const routeMatch = routes.filter(route => route.path === req.url).pop();
  const store = configureStore();

  // still not using context on rendering, but props context is required on static router
  const context = {};
  let html;
  let body;

  if (process.env.NODE_ENV === "development") {
    html = ({ body, head, initialState }) => {
        return `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${head.title.toString()}
            <link rel="stylesheet" href="http://localhost:50044/style.css" />
            ${head.meta.toString()}
            ${head.link.toString()}
          </head>
          <body>
            <div id="root">${body}</div>
            ${head.script.toString()}
            <script>window.INITIAL_STATE = ${JSON.stringify(initialState)};</script>
            <script src="http://localhost:50044/bundle.js"></script>
          </body>
        </html>`;
    };
  } else {
    html = ({ body, head, initialState }) => {
        return `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${head.title.toString()}
            <link rel="stylesheet" href="stylesheets/style.css" />
            ${head.meta.toString()}
            ${head.link.toString()}
          </head>
          <body>
            <div id="root">${body}</div>
            ${head.script.toString()}
            <script>window.INITIAL_STATE = ${JSON.stringify(initialState)};</script>
            <script src="javascripts/bundle.js"></script>
          </body>
        </html>`;
    };
  }

  if (!routeMatch) {
    res.status(404);

    body = renderToString(
      <h1>page not found ...</h1>
    )
  } else {
    res.status(200);

    body = renderToString(
      <Provider store={store}>
        <Router
          location={routeMatch.path}
          context={context}>
          <Layout />
        </Router>
      </Provider>
    );
  }

  res.send(html({
    body,
    head: Helm.rewind(),
    initialState: store.getState()
  }))
};
