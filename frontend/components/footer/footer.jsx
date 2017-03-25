import React from 'react';
import { Link } from 'react-router';
import { Popover, OverlayTrigger } from 'react-bootstrap';

const Footer = () => {
  const emailPopover = (
    <Popover id="email-popover">daniel.j.fletcher2@gmail.com</Popover>
  );

  return(
    <nav className="footer">
      <div className="footer-about">
        <Link to={ `/about` }>ABOUT</Link>
        <Link to={ `/howitworks` }>HOW IT WORKS</Link>
        <Link to={ `/safety` }>SAFETY</Link>
      </div>
      <div className="footer-links">
        <a href="https://github.com/djfletcher/SolarSurfing" target="_blank" >
          <img src="https://res.cloudinary.com/dmgrq5xrb/image/upload/v1490396415/git_bsw1do.png" alt="github"/>
        </a>
        <a href="https://www.linkedin.com/in/daniel-fletcher-525727119/" target="_blank" >
          <img src="https://res.cloudinary.com/dmgrq5xrb/image/upload/v1490396415/linkedin_pl2wov.png" alt="linkedin"/>
        </a>
        <a>
          <OverlayTrigger trigger="click" placement="top" overlay={ emailPopover }>
            <img src="https://res.cloudinary.com/dmgrq5xrb/image/upload/v1490396415/gmail_amypcv.png" alt="gmail" />
          </OverlayTrigger>
        </a>
      </div>
      <div>
        <p>Created by Daniel Fletcher, March 2017</p>
      </div>
    </nav>
  );
};

export default Footer;
