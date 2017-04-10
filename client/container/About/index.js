import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import BlackBox from '../../component/BlackBox';
import styles from './style.scss';

class About extends Component {
  flee(e) {
    e.target.style.transform = `translate(${e.clientX / 3}px, ${e.clientY / 3}px)`
  }
  render() {
    return (
      <div class={styles.bg}>
        <Helmet
          meta={[
            {name: "description", content: "About"}
          ]}
          title="About" />
        <div class={styles.flee}>
          <BlackBox onMouseEnter={this.flee}>
            <h2>Isomorphic Javascript App</h2>
            <p>Copyright © 2017 Nasser</p>
          </BlackBox>
        </div>
      </div>
    );
  }
}

export default connect((store) => {
  return {}
})(About);
