import React, { Component } from 'react';
import Store from "../store.js";

export default class Head extends Component {
  constructor(){
    super();
    this.state = {
      initial: '',
    };
  }

  componentWillMount() {
    Store.on("newTest", () => {
      this.setState({
        initial: Store.fetch()
      })
    })
  }

  render(){
    return (
      <div class="head">
        <h1>{this.state.initial}</h1>
      </div>
    );
  }
}
