import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import root from 'window-or-global';
import BlackBox from '../../component/BlackBox';
import styles from './style.scss';

class About extends Component {
  constructor() {
    super();
    this.state = {
      floatStyle: {
        transform: 'translateX(0) translateY(0) rotate(0)',
      }
    };
    this.width = Math.max(root.innerWidth);
    this.height = Math.max(root.innerHeight);
    this.floatBox = this.floatBox.bind(this);
  }

  componentDidMount() {
    if (this.width > 1025) {
      root.document.addEventListener("mousemove", this.floatBox)
    }
  }

  componentWillUnmount() {
    if (this.width > 1025) {
      root.document.removeEventListener("mousemove", this.floatBox);
    }
  }

  floatBox(e) {
    this.setState({
      floatStyle: {
        transform: `translateX(${e.clientX - this.width / 2}px) translateY(${e.clientY - this.height / 2}px) rotate(${e.clientX - this.width / 2}deg)`
      }
    })
  }

  render() {
    return (
      <div class={styles.bg}>
        <Helmet>
          <meta name="description" content="About Universal ReactJS Starter" />
          <title>About</title>
        </Helmet>
        <div class={styles.floatBox} style={this.state.floatStyle}>
          <BlackBox>
            <h2>Universal ReactJS Starter</h2>
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
