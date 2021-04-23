import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PageSidebar from './pages/PageSidebar';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sidebar-simple" component={PageSidebar} />
    </Switch>
  );
};

export default Routes;
