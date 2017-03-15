import React from 'react';
import { Link } from 'react-router';

import JoinContainer from '../join/join_container';
import LoginContainer from '../login/login_container';

const Header = ({ currentUser, logout }) => {
  const logo = <h1>plaaaaaaaaanets</h1>;
  if (currentUser) {
    return(
      <nav>
        { logo }
        <h1>Hello, {currentUser.username}!</h1>
        <button onClick={logout}>Log Out</button>
      </nav>
    );
  } else {
    return(
      <nav>
        { logo }
        <LoginContainer />
        <JoinContainer />
      </nav>
    );
  }
};

export default Header;
