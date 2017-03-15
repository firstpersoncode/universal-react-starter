import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import BlackBox from '../../component/BlackBox';
import styles from './style.css';

class NotFound extends Component {
  render() {
    return (
      <div class={styles.bg}>
        <Helmet
          title="404 not found" />
        <BlackBox>
          <h2>Page Not Found :(</h2>
        </BlackBox>
      </div>
    );
  }
}

export default connect((store) => {
  return {}
})(NotFound);
