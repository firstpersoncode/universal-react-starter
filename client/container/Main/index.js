import React, { Component } from 'react';
import Helmet from 'react-helmet';
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
          meta={[
            {name: "description", content: "Universal ReactJS Starter"}
          ]}
          defaultTitle="Universal ReactJS Starter"
          titleTemplate={this.state.isMobile ? "URS mobile - %s" : "URS - %s"} />
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
