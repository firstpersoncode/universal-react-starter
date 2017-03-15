import 'babel-polyfill';
require('file-loader?name=index.html!./index.html');
require('./_src/style.scss');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RenderLayout from './utils';


const dom = document.getElementById('root');
ReactDOM.render(
  <RenderLayout />,
  dom
);
