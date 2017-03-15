import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import BlackBox from '../../component/BlackBox';
import styles from './style.css';

class About extends Component {
  render() {
    return (
      <div class={styles.bg}>
        <Helmet
          meta={[
            {name: "description", content: "Isomorphic javascript app"}
          ]}
          title="About" />
        <BlackBox>
          <h2>Isomorphic Javascript App</h2>
          <p>Copyright © 2017 Nasser</p>
        </BlackBox>
      </div>
    );
  }
}

export default connect((store) => {
  return {}
})(About);
