import React from 'react';
import Sidebar from '../../components/Sidebar';

import { Container, Content, Description } from './styles';

const PageSidebar: React.FC = () => {
  return (
    <Container>
      <h1>Sidebar simples</h1>

      <Content>
        <Sidebar />

        <Description>
          <p>Menu sidebar simples, sem props. Apenas listagem de item</p>
        </Description>
      </Content>
    </Container>
  );
};

export default PageSidebar;
