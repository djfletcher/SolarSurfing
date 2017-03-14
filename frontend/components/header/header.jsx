import React from 'react';
import { Link } from 'react-router';

const Header = ({ currentUser, logout }) => {
    if (currentUser) {
      return(
        <nav>
          <h1>Hello, {currentUser.username}!</h1>
          <button onClick={logout}>Log Out</button>
        </nav>
      );
    } else {
      return(
        <nav>
          <Link to="/login">Log In</Link>
          <br />
          <Link to="/join">Join</Link>
        </nav>
      );
    }
  };

export default Header;
