import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import {
  defaultAction,
} from './actions.js';
import styles from './style.scss';

class Home extends Component {
  render() {
    return (
      <div class={styles['Home']}>
        <Helmet
          meta={[
            {name: "description", content: "Isomorphic javascript app"}
          ]}
          title="Home" />
        <h1>Home page !</h1>
        {/* content ... */}

      </div>
    );
  }
}

export default connect((store) => {
  return {}
})(Home);
