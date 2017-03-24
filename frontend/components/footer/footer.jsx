import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return(
    <nav className="footer">
      <div>
        <Link to={ `/about` }>ABOUT</Link>
        <Link to={ `/howitworks` }>HOW IT WORKS</Link>
        <Link to={ `/safety` }>SAFETY</Link>
      </div>
      <div>
        <a href="https://github.com/djfletcher/SolarSurfing" target="_blank" >
          <img src="https://res.cloudinary.com/dmgrq5xrb/image/upload/v1490396415/git_bsw1do.png" alt="github"/>
        </a>
        <a href="https://www.linkedin.com/in/daniel-fletcher-525727119/" target="_blank" >
          <img src="https://res.cloudinary.com/dmgrq5xrb/image/upload/v1490396415/linkedin_pl2wov.png" alt="linkedin"/>
        </a>
        <div>
          <p>daniel.j.fletcher2@gmail.com</p>
        </div>
      </div>
      <div>
        <p>Created by Daniel Fletcher, March 2017</p>
      </div>
    </nav>
  );
};

export default Footer;
