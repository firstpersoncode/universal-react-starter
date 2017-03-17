import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import {
  defaultAction,
} from './actions.js';
import styles from './style.css';

class About extends Component {
  render() {
    return (
      <div class={styles['About']}>
        <Helmet
          meta={[
            {name: "description", content: "Isomorphic javascript app"}
          ]}
          title="About" />
        <h1>About page !</h1>
        {/* content ... */}

      </div>
    );
  }
}

export default connect((store) => {
  return {}
})(About);
