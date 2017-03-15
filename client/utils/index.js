import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Router from "./router";


class RenderLayout extends Component {
  componentWillMount() {
    this.forceUpdate(); // a little hack to help us re-render when this module is hot reloaded
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default RenderLayout;
