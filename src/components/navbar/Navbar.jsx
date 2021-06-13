import React from 'react';
import "./navbar.scss";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Navbar({menuActive, setMenuActive}) {
  return (
    <div className={"navbar " + (menuActive && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#info" className="logo">mattetress</a>
          <div className="social">
            <GitHubIcon className="icon" />
            <span> RubyMineshaft </span> 
          </div> 
          <div className="social" >
            <LinkedInIcon className="icon" />
            <span>mattetress</span>
          </div>
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
