import { AppContainer } from "react-hot-loader";
import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';
import styles from './main.scss';

const root = document.getElementById('root');

if (process.env.NODE_ENV === "production") {
  render(
    <App />,
    root
  )
} else {  
  render(
    <AppContainer>
    <App />
    </AppContainer>,
    root
  );

  if (module.hot) {
    module.hot.accept("./App", () => {
      render(
        <AppContainer>
        <App />
        </AppContainer>,
        root
      );
    });
  }
}
