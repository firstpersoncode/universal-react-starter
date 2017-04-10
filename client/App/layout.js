import React from 'react';
import Helmet from 'react-helmet';
import Routes from './routers';
import Main from '../container/Main';

export default () => {
  return (
    <Main>
      <Routes />
    </Main>
  );
}
