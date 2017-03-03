import React, { Component } from 'react';
import ReactDOM from "react-dom";
import * as actions from "../action.js";

export default class Footer extends Component {
  constructor() {
    super();
    this.newTest = this.newTest.bind(this);
  }
  
  newTest(e) {
    e.preventDefault();
    var text = this.refs.chat;
    actions.newTest(text.value);
    text.value = "";
  }

  render(){
    return (
      <div class="footer">
        <form onSubmit={this.newTest}>
          <input type="text" ref="chat" placeholder="type ..." />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
