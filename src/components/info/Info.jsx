import React, { useEffect, useRef } from 'react';
import "./info.scss";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped';

export default function Info() {

  const titleRef = useRef();

  useEffect(() => {
    init(titleRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 50,
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
        <a href="#portfolio">
          <ExpandMoreIcon className="down-icon" />
        </a>
      </div>
    </div>
  )
}
