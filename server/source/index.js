import React from "react";
import { StaticRouter as Router, matchPath } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString } from "react-dom/server";
import Helm from 'react-helmet';
import Layout from "../../client/App/layout";
import configureStore from "../../client/App/store";
import Routes from "../../client/App/routers";
import routes from "../../client/routes";


export default (req, res) => {

  // grab route object from ../../client/routes that match with req.url
  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);

  const store = configureStore();
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
            ${head.script.toString()}
          </head>
          <body>
            <div id="root">${body}</div>
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
            ${head.script.toString()}
          </head>
          <body>
            <div id="root">${body}</div>
            <script>window.INITIAL_STATE = ${JSON.stringify(initialState)};</script>
            <script src="javascripts/bundle.js"></script>
          </body>
        </html>`;
    };
  }

  body = (
    <Provider store={store}>
      <Router
        location={req.url}
        context={context}>
        <Layout />
      </Router>
    </Provider>
  );

  if (!match) {
    res.status(404);
    body = (
      <h1>page not found ...</h1>
    );
  }

  store.renderUniversal(renderToString, body)
  .then(({ output }) => {
    const state = store.getState();
    res.status(200);
    res.send(html({
      body: output,
      head: Helm.rewind(),
      initialState: state
    }));
  })
  .catch(({ output, error }) => {
    console.warn(error);
    res.status(500);
    const state = store.getState();
    res.send(html({
      body: output,
      head: Helm.rewind(),
      initialState: state
    }));
  })
};
