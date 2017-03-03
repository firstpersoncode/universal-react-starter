import 'babel-polyfill';
require('file-loader?name=index.html!./index.html');
require('./style.scss');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './_src/store';

import Layout from "./_src/component";

const dom = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  dom
);
