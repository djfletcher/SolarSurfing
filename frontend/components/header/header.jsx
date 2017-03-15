import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import JoinContainer from '../join/join_container';
import LoginContainer from '../login/login_container';

const Header = ({ currentUser, logout, router }) => {
  const logo = <a className="logo">SolarSurfing</a>;

  const handleLogout = () => {
    return logout().then(() => router.push('/'));
  };

  if (currentUser) {
    return(
      <nav className="header">
        { logo }
        <ul className="header-buttons">
          <li>Hello, { currentUser.username }!</li>
          <li><Button onClick={ handleLogout } bsStyle="primary">Log Out</Button></li>
        </ul>
      </nav>
    );
  } else {
    return(
      <nav className="header">
        { logo }
        <ul className="header-buttons">
          <li><LoginContainer /></li>
          <li><JoinContainer /></li>
        </ul>
      </nav>
    );
  }
};

export default Header;
