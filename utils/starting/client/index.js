import { AppContainer } from "react-hot-loader";
import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';
import styles from './main.scss';

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept("./App", () => {
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById("root"),
    );
  });
}
