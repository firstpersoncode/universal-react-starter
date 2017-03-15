import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import styles from './style.css';

class NotFound extends Component {
  render() {
    return (
      <div>
        <Helmet
          title="404 not found" />
        <div class={styles.container}>
          <h2 style={{color: "#FFF"}}>Page Not Found :(</h2>
        </div>
      </div>
    );
  }
}

export default connect((store) => {
  return {}
})(NotFound);
