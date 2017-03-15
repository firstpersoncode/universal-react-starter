import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import BlackBox from '../../component/BlackBox';
import styles from './style.css';
import markdown from './markdown';

class GetStart extends Component {
  render() {
    return (
      <div class={styles.bg}>
        <Helmet
          meta={[
            {name: "description", content: "Isomorphic javascript app"}
          ]}
          title="GetStart" />
        <BlackBox>
          <h2>Isomorphic Javascript App</h2>
          <span class={styles.markdown} dangerouslySetInnerHTML={{ __html: markdown }}></span>
        </BlackBox>
      </div>
    );
  }
}

export default connect((store) => {
  return {}
})(GetStart);
