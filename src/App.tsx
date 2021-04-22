import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
