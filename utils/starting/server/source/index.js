import request from 'request';
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
  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
  const store = configureStore();
  const context = {};
  const body = (
    <Provider store={store}>
      <Router
        location={req.url}
        context={context}>
        <Layout />
      </Router>
    </Provider>
  );
  const html = ({ body, head, initialState }) => {
      return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta http-equiv="x-ua-compatible" content="ie=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${head.title.toString()}
          ${head.meta.toString()}
          ${head.link.toString()}
          ${head.script.toString()}
          ${process.env.NODE_ENV === "production" ? `
          <link rel="stylesheet" type="text/css" href="/stylesheets/loading.css" />
          <link rel="stylesheet" href="/stylesheets/style.css" />
          ` : `
          <link rel="stylesheet" href="http://localhost:50044/style.css" />
          `}
        </head>
        <body>
        ${process.env.NODE_ENV === "production" ? `
          <div id="loading-bar">
            <div id="progress">0%</div>
          </div>
        ` : ''}
          <div id="root">${body}</div>
          <script type="text/javascript">window.INITIAL_STATE = ${JSON.stringify(initialState)};</script>
          ${process.env.NODE_ENV === "production" ? `
          <script async src="/javascripts/loading.js"></script>
          <script async src="/javascripts/bundle.js"></script>
          ` : `
          <script async src="http://localhost:50044/bundle.js"></script>
          `}
        </body>
      </html>`;
  };

  const render = (output, helm, state) => {
    return html({
      body: output,
      head: helm.rewind(),
      initialState: state
    })
  }

  store.renderUniversal(renderToString, body)
  .then(({ output }) => {
    const state = store.getState();
    if (match) {
      res.status(200).send(render(output, Helm, state));
    } else {
      res.status(404).send(render(output, Helm, state));
    }
  })
  .catch(({ output, error }) => {
    console.warn(error);
    const state = store.getState();
    res.status(500).send(render(output, Helm, state));
  })
};
