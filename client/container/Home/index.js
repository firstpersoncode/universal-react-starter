import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import styles from './style.scss';

class Home extends Component {
  render() {
    return (
      <div class={styles.bg}>
        <Helmet>
          <title>Home</title>
          <link rel="canonical" href='https://github.com/firstpersoncode/universal-react-starter' />
        </Helmet>
        <div class={styles.header}>
          <h1>Universal ReactJS Starter</h1>
          <h4>Packed with</h4>
          <ul>
            <li><a href="https://facebook.github.io/react" target="_blank">React</a></li>
            <li><a href="http://redux.js.org/" target="_blank">Redux</a></li>
            <li><a href="https://www.npmjs.com/package/redux-universal" target="_blank">Redux Universal !</a></li>
            <li><a href="https://reacttraining.com/react-router" target="_blank">React Router v4 !</a></li>
            <li><a href="https://expressjs.com/" target="_blank">Express</a></li>
            <li><a href="http://mongoosejs.com/" target="_blank">Mongoose</a></li>
            <li><a href="https://webpack.github.io/" target="_blank">Webpack v2</a></li>
            <li><a href="https://github.com/diruuu/immutee" target="_blank">Immutee</a></li>
          </ul>
        </div>
        <p class={styles.paragraph}>
          modular sass + plop generator + hot reload + server side rendering !<br/>
          Easy project structure, SEO friendly, fast performance, and easy maintain.
        </p>
      </div>
    );
  }
}

export default connect((store) => {
  return {};
})(Home);
