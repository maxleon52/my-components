import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';

import { Wrapper, Container } from './styles';

const Layout = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <Header />
        <main>Children aqui</main>
      </Container>
    </Wrapper>
  );
};

export default Layout;
