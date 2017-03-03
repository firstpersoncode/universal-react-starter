import React, { Component } from 'react';
import Store from "../store.js";

export default class Body extends Component {
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
      <div class="body">
        {this.state.initial}
      </div>
    );
  }
}
