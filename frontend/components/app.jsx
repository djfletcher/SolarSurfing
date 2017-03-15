import React from 'react';
import HeaderContainer from './header/header_container';
import FooterContainer from './footer/footer_container';

const App = ({ children }) => (
  <div className="app">
    <HeaderContainer />
    { children }
    <FooterContainer />
  </div>
);

export default App;
