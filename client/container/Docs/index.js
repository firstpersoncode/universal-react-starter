import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Markdown from 'react-markdown-to-html';
import BlackBox from '../../component/BlackBox';
import Loading from '../../component/Loading';
import styles from './style.scss';

class Docs extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Isomorphic Javascript App',
    };
  }



  render() {
    const showHide = (opt) => {
      this.refs.loading.style.opacity = "1";
      setTimeout(() => {
        this.refs.markdown.style.overflowY = "auto";
        this.refs[opt.opt].style.display = "block";
        this.refs.loading.style.opacity = "0";
        setTimeout(() => this.refs[opt.opt].style.opacity = "1", 500)
      }, 2000)
      return opt.rest.map((index) => {
        this.refs.markdown.style.overflowY = "hidden";
        this.refs[index].style.transform = "translateX(110%)";
        setTimeout(() => {
          this.refs[opt.opt].style.opacity = "0";
          setTimeout(() => this.refs[index].style.display = "none", 500)
          this.refs[opt.opt].style.transform = "translateX(0)";
        }, 1000)
      });
    };

    const options = (opt, optLength) => {
      let rest = [];
      for (let i = 1; i <= optLength; i++) {
        if (i === opt) {continue}
        rest.push("doc-"+i)
      }
      return {
        opt: "doc-"+opt,
        rest
      }
    };

    return (
      <div class={styles.bg}>
        <Helmet
          meta={[
            {name: "description", content: "Docs"}
          ]}
          title="Docs" />
        <BlackBox>
          <ul class={styles.navOpt}>
            <li><button onClick={showHide.bind(this, options(1, 7))}>Overview</button></li>
            <li><button onClick={showHide.bind(this, options(2, 7))}>Components</button></li>
            <li><button onClick={showHide.bind(this, options(3, 7))}>Home Container</button></li>
            <li><button onClick={showHide.bind(this, options(4, 7))}>About Container</button></li>
            <li><button onClick={showHide.bind(this, options(5, 7))}>NotFound Container</button></li>
            <li><button onClick={showHide.bind(this, options(6, 7))}>Router Configs & Combine Reducers</button></li>
            <li><button onClick={showHide.bind(this, options(7, 7))}>App Booster</button></li>
          </ul>
          <h2>{this.state.title}</h2>
          <div class={styles.markdown} ref="markdown">
            <div class={styles.loading} ref="loading">
              <Loading />
            </div>
            <div ref="doc-1">
              <Markdown src="/markdown/overview.md" />
            </div>
            <div ref="doc-2">
              <Markdown src="/markdown/dumbComponent.md" />
            </div>
            <div ref="doc-3">
              <Markdown src="/markdown/smartComponent.md" />
            </div>
            <div ref="doc-4">
              <Markdown src="/markdown/smartComponent2.md" />
            </div>
            <div ref="doc-5">
              <Markdown src="/markdown/smartComponent3.md" />
            </div>
            <div ref="doc-6">
              <Markdown src="/markdown/routerandreducer.md" />
            </div>
            <div ref="doc-7">
              <Markdown src="/markdown/app.md" />
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
