import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import BlackBox from '../../component/BlackBox';
import styles from './style.scss';

class NotFound extends Component {
  render() {
    return (
      <div class={styles.bg}>
        <Helmet>
          <title>Oops, page not found</title>
        </Helmet>
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
