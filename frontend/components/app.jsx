import React from 'react';
import HeaderContainer from './header/header_container';

const App = ({ children }) => (
  <div>
    <h1>plaaaaaaaaanets</h1>
    <HeaderContainer />
    { children }
  </div>
);

export default App;
