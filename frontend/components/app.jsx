import React from 'react';
import HeaderContainer from './header/header_container';

const App = ({ children }) => (
  <div>
    I AM APP
    <HeaderContainer />
    { children }
  </div>
);

export default App;
