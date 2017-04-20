import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store';
import Layout from "./layout";

const initialState = window.INITIAL_STATE;
const store = configureStore(initialState);

export default () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout />
      </Router>
    </Provider>
  )
}
