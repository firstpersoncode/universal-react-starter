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
        <div class={styles.wording}>
          <div>
            <div class={styles.paragraph}>
              <h1>Simple starter-kit for universal React.js app, Using express.js for server-side, and mongoose.js for database. with react-router v4 server side rendering</h1>
              <h2>Easy project structure, SEO friendly, fast performance, and easy to maintain.</h2>
              <p>With modular sass + plop generator + hot reload + server side rendering !</p>
              <h3>Let's render it on the server side so Google can crawl it !</h3>
              <span>&#10095;</span>
            </div>
            <p>* Clone the project from GitHub</p>
            <code>$ git clone https://github.com/firstpersoncode/universal-react-starter.git</code>
            <p>* Install all dependencies</p>
            <code>$ npm install</code>
            <p>* start the development !<br/>
            You can see the sample app with this script if you're not cleaning the project yet</p>
            <code>$ npm start</code>
            <p>* Before start the new project, you can use this script to remove the sample app, <br/>
            this script will remove everything inside <i>/client</i> and <i>/server</i> directories,<br/>
            and generate the starting components and containers ..
            </p>
            <code>npm run clean</code>
            <p>* Use this script to bundle all the files</p>
            <code>$ npm run build</code>
            <p>* If you want to see your project in production environtment</p>
            <code>$ npm run start:prod</code>
            <p>* This Universal ReactJS Starter-kit is packed with plop generator, <br/>
            you can generate component or container template using this script
            </p>
            <code>npm run generator</code>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((store) => {
  return {};
})(Home);
