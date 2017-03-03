import React from 'react';

import Head from './Head';
import Body from './Body';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Head />
        <Body />
        <Footer />
      </div>
    );
  }
}
