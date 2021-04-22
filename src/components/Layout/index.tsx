import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';

import Routes from '../../routes';

import { Wrapper, Container } from './styles';

const Layout = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <Header />
        <main>
          <Routes />
        </main>
      </Container>
    </Wrapper>
  );
};

export default Layout;
