import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from "react-helmet";
import { setHeader, fetchHeaders } from './actions';
import Header from '../../component/Header';
import Form from '../../component/Form';
import BlackBox from '../../component/BlackBox';
import styles from './style.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      preview: 'react + react-redux + react-helmet + react-router-dom + express + mongoose + modular CSS !'
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
      <div class={styles.bg}>
        <Helmet
          meta={[
            {name: "description", content: "Isomorphic javascript app"}
          ]} />
        <Header header={this.state.preview} smallHeader={this.props.smallHeader} latestHeader={this.props.header} />
        <BlackBox>
          <Form
            ref="form"
            handlePreview={this.handlePreview}
            handleSetHeader={this.handleSetHeader} />
        </BlackBox>
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
