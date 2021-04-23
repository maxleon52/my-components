import React from 'react';
import Header from '../Header';

import Routes from '../../routes';

import { Wrapper, Container } from './styles';

const Layout = () => {
  return (
    <Wrapper>
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
