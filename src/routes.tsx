import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageSidebar from './pages/PageSidebar';

const Routes = () => {
  return (
    <Switch>
      <Route path="/sidebar-simple" component={PageSidebar} />
    </Switch>
  );
};

export default Routes;
