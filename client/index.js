import 'babel-polyfill';
import styles from './main.scss';
require('file-loader?name=index.html!./index.html');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const dom = document.getElementById('root');
ReactDOM.render(
  <App />,
  dom
);
