import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import Nav from '../../component/Nav';
import Footer from '../../component/Footer';

import {
  defaultAction,
} from './actions.js';
import styles from './style.scss';

class Main extends Component {
  render() {
    return (
      <div class={styles['Main']}>
        <Helmet
          defaultTitle="MyApp"
          titleTemplate="MyApp - %s">
          <meta name="description" content="My App" />
        </Helmet>
        {this.props.children}
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default connect((store) => {
  return {}
})(Main);
