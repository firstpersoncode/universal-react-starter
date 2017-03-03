import 'babel-polyfill';
import "file-loader?name=index.html!./index.html";
import './_src/style.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Layout from "./_src/component";
ReactDOM.render(
  <Layout />,
  document.getElementById('root')
);
