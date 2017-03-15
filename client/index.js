import 'babel-polyfill';
require('file-loader?name=index.html!./index.html');
require('./_src/style.scss');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { Router, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import store from './_src/store';

import Home from "./_src/container/Home";

const history = createHistory()

const dom = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home}/>
    </Router>
  </Provider>,
  dom
);
