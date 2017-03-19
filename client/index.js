import styles from '../src/main.scss';
import { AppContainer } from "react-hot-loader";

import React, { Component } from 'react';
import { render } from 'react-dom';
import App from '../src/App';

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept("../src/App", () => {
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById("root"),
    );
  });
}
