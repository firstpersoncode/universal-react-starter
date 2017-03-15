import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import styles from './style.css';

class About extends Component {
  render() {
    return (
      <div>
        <Helmet
          meta={[
            {name: "description", content: "Isomorphic javascript app"}
          ]}
          title="About" />
        <div class={styles.container}>
          <h2>Isomorphic Javascript App</h2>
        </div>
      </div>
    );
  }
}

export default connect((store) => {
  return {}
})(About);
