import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from "react-helmet";
import { setHeader, fetchHeaders } from './actions';
import Header from '../../component/Header';
import PreviewBox from '../../component/PreviewBox';
import Form from '../../component/Form';
import styles from './style.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      preview: ''
    };
    this.handlePreview = this.handlePreview.bind(this);
    this.handleSetHeader = this.handleSetHeader.bind(this);
  }

  componentWillMount() {
    if (!this.props.smallHeader.length)
      this.props.dispatch(fetchHeaders())
  }

  handlePreview(e) {
    this.setState({ preview: e.target.value })
  }

  handleSetHeader(e) {
    e.preventDefault();
    const text = this.refs.form.refs.textInput;
    this.props.dispatch(setHeader({data: text.value}));
    text.value = '';
  }

  render() {
    return (
      <div>
        <Helmet
          meta={[
            {name: "description", content: "Isomorphic javascript app"}
          ]} />
        <Header header={this.props.header} smallHeader={this.props.smallHeader} />
        <div class={styles.container}>
          <PreviewBox preview={this.state.preview} />
          <Form
            ref="form"
            handlePreview={this.handlePreview}
            handleSetHeader={this.handleSetHeader} />
        </div>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    header: store.homeState.header,
    smallHeader: store.homeState.smallHeader,
  }
})(Home);
