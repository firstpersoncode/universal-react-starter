import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import {
  defaultAction,
} from './actions.js';
import styles from './style.css';

class NotFound extends Component {
  render() {
    return (
      <div class={styles['NotFound']}>
        <Helmet
          meta={[
            {name: "description", content: "Isomorphic javascript app"}
          ]}
          title="NotFound" />
        <h1>Page not found !</h1>
        {/* content ... */}

      </div>
    );
  }
}

export default connect((store) => {
  return {}
})(NotFound);
