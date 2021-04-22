import React from 'react';
import { Link } from 'react-router-dom';
import { menuOptions } from '../../config/menu';

import { Container, Content, Navigation, NavigationItem } from './styles';

const Sidebar = () => {
  return (
    <Container>
      <div className="logo">
        <h2>My Components</h2>
      </div>
      <Content>
        <Navigation>
          {menuOptions.map(option => (
            <Link to={option.pathname}>
              <NavigationItem key={option.id}>
                <p>{option.name}</p>
              </NavigationItem>
            </Link>
          ))}
        </Navigation>
      </Content>
    </Container>
  );
};

export default Sidebar;
