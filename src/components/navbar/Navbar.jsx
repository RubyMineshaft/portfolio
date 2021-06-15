import React from 'react';
import "./navbar.scss";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

export default function Navbar({menuActive, setMenuActive}) {
  return (
    <div className={"navbar " + (menuActive && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#info" className="logo">mattetress</a>
          <a href="https://github.com/rubymineshaft" className="social">
            <GitHubIcon className="icon" />
            <span> RubyMineshaft </span> 
          </a>
          <a href="https://linkedin.com/in/mattetress" className="social" >
            <LinkedInIcon className="icon" />
            <span>mattetress</span>
          </a>
          <a href="mailto:mattetress@gmail.com" className="social">
            <EmailIcon className="icon" />
            <span>mattetress@gmail.com</span>
          </a>
        </div>
        <div className="right">
          <div className="hamburgerMenu" onClick={() => setMenuActive(!menuActive)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
