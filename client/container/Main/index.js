import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import root from 'window-or-global';

import {
  defaultAction,
  checkViewport,
} from './actions.js';
import styles from './style.scss';

import Nav from '../../component/Nav';
import Footer from '../../component/Footer';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      isMobile: false,
    };
  }
  componentWillMount() {
    this.props.dispatch(checkViewport(Math.max(root.innerWidth)))
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isMobile: nextProps.mainState.isMobile });
  }

  render() {
    return (
      <main class={styles['Main']}>
        <Helmet
          defaultTitle="Universal ReactJS Starter"
          titleTemplate={this.state.isMobile ? "URS mobile - %s" : "URS - %s"}>
          <meta name="description" content="Universal ReactJS Starter" />
        </Helmet>
        <a href="https://github.com/firstpersoncode/universal-react-starter">
          <img style={{ position: 'fixed', top: '0', right: '0', border: '0' }} src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png" />
        </a>
        {this.props.children}
        <small class={styles.viewportStatus}>{this.props.mainState.isMobile ? "Mobile" : "Desktop"}</small>
        <Nav />
        <Footer />
      </main>
    );
  }
}

export default connect((store) => {
  return {
    mainState: store.mainState,
  };
})(Main);
