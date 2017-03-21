import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Nav from '../component/Nav';
import Footer from '../component/Footer';
import Routes from './routers';

export default () => {
  return (
    <div>
     <Helmet
        meta={[
          {name: "description", content: "Isomorphic javascript app"}
        ]}
        defaultTitle="Isomorphic javascript app" />
      <Nav />
      <Routes />
      <Footer />
    </div>
  );
}
