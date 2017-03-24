import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return(
    <nav className="footer">
      <Link to={ `/about` }>ABOUT</Link>
      <Link to={ `/howitworks` }>HOW IT WORKS</Link>
      <Link to={ `/safety` }>SAFETY</Link>
    </nav>
  );
};

export default Footer;
