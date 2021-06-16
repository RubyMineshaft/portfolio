import React, { useEffect, useRef } from 'react';
import "./info.scss";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';


export default function Info() {

  const titleRef = useRef();

  useEffect(() => {
    init(titleRef.current, {
      showCursor: true,
      backDelay: 1500,
      startDelay: 1000,
      backSpeed: 50,
      loop: false,
      strings: ["Techie", "Go Player", "Coffee Drinker", "Software Engineer."]
    })
  }, [])

  return (
    <div className="info" id="info">
      <div className="left">
        <div className="imgContainer"> 
          <img src="/assets/matt.png" alt="Matt"/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there. I'm</h2>
          <h1>Matthew Etress</h1>
          <h3><span ref={titleRef}></span></h3>
        </div>
        <div className="social">
            <a href="https://github.com/rubymineshaft" target="_blank" rel="noreferrer" className="social-link">
              <GitHubIcon className="icon" />
              <span> RubyMineshaft </span> 
            </a>
            <a href="https://linkedin.com/in/mattetress" className="social-link">
              <LinkedInIcon className="icon" />
              <span>mattetress</span>
            </a>
            <a href="mailto:mattetress@gmail.com" className="social-link">
              <EmailIcon className="icon" />
              <span>mattetress@gmail.com</span>
            </a>

        </div>
        <a href="#portfolio" id="down-arrow">
          <ExpandMoreIcon className="down-icon" />
        </a>
      </div>
    </div>
  )
}
