import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Markdown from 'react-markdown-to-html';
import BlackBox from '../../component/BlackBox';
import styles from './style.css';

class Docs extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Isomorphic Javascript App',
    };
  }

  showHide(opt) {
    setTimeout(() => {
      this.refs[opt.opt].style.transform = "translateX(0)";
    }, 2000)
    return opt.rest.map((index) => {
      this.refs[index].style.transform = "translateX(110%)";
      setTimeout(() => {
        this.refs[opt.opt].style.display = "block";
        this.refs[index].style.display = "none";
      }, 1000)
    });
  }

  render() {
    console.log(this.props)
    return (
      <div class={styles.bg}>
        <Helmet
          meta={[
            {name: "description", content: "Isomorphic javascript app"}
          ]}
          title="Docs" />
        <BlackBox>
          <ul class={styles.navOpt}>
            <li><button onClick={this.showHide.bind(this, {opt: "doc-1", rest: ["doc-2", "doc-3", "doc-4", "doc-5", "doc-6", "doc-7"]})}>Overview</button></li>
            <li><button onClick={this.showHide.bind(this, {opt: "doc-2", rest: ["doc-1", "doc-3", "doc-4", "doc-5", "doc-6", "doc-7"]})}>Components</button></li>
            <li><button onClick={this.showHide.bind(this, {opt: "doc-3", rest: ["doc-1", "doc-2", "doc-4", "doc-5", "doc-6", "doc-7"]})}>Home Container</button></li>
            <li><button onClick={this.showHide.bind(this, {opt: "doc-4", rest: ["doc-1", "doc-2", "doc-3", "doc-5", "doc-6", "doc-7"]})}>About Container</button></li>
            <li><button onClick={this.showHide.bind(this, {opt: "doc-5", rest: ["doc-1", "doc-2", "doc-3", "doc-4", "doc-6", "doc-7"]})}>NotFound Container</button></li>
            <li><button onClick={this.showHide.bind(this, {opt: "doc-6", rest: ["doc-1", "doc-2", "doc-3", "doc-4", "doc-5", "doc-7"]})}>Router Configs & Combine Reducers</button></li>
            <li><button onClick={this.showHide.bind(this, {opt: "doc-7", rest: ["doc-1", "doc-2", "doc-3", "doc-4", "doc-5", "doc-6"]})}>App Booster</button></li>
          </ul>
          <h2>{this.state.title}</h2>
          <div class={styles.markdown}>
            <div ref="doc-1">
              <Markdown src="./public/markdown/overview.md" />
            </div>
            <div ref="doc-2">
              <Markdown src="./public/markdown/dumbComponent.md" />
            </div>
            <div ref="doc-3">
              <Markdown src="./public/markdown/smartComponent.md" />
            </div>
            <div ref="doc-4">
              <Markdown src="./public/markdown/smartComponent2.md" />
            </div>
            <div ref="doc-5">
              <Markdown src="./public/markdown/smartComponent3.md" />
            </div>
            <div ref="doc-6">
              <Markdown src="./public/markdown/routerandreducer.md" />
            </div>
            <div ref="doc-7">
              <Markdown src="./public/markdown/app.md" />
            </div>
          </div>
        </BlackBox>
      </div>
    );
  }
}

export default connect((store) => {
  return {}
})(Docs);
