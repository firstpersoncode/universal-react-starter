import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Layout from "./layout";


class RenderLayout extends Component {
  render() {
    console.log(this.props)
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    )
  }
}

export default RenderLayout;
