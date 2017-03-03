import React, { Component } from 'react';

import Head from "./Head";
import Body from "./Body";
import Footer from "./Footer";

export default class Layout extends Component {
  render(){
    return (
      <div>
        <Head />
        <Body />
        <Footer />
      </div>
    );
  }
}
