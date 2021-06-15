import React from 'react';
import "./project.scss";
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import CheckIcon from '@material-ui/icons/Check';
import LangIcon from "../langicon/LangIcon";

export default function Project({project}) {

  function demoLink() {

    if (project.demoURL) {
    return (
      <a href={project.demoURL} target="_blank" rel="noreferrer">
        <WebIcon className="icon"/> 
        View live demo
      </a>
    )}
  }

  return (
    <div className="container">
    <div className="project">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={project.largeImage} alt=""/>
                </div>
                <div className="languages">
                  <h3>Languages</h3>
                  <div className="languageIcons">
                    {project.languages.map((language) => <LangIcon language={language}/>)}
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <h1>{project.title}</h1>
              <div className="rightContainer">
                {project.fullDesc.map((description) => <p>{description}</p>)}
                <div className="bullets">
                  <ul>
                    {project.bullets.map((bullet) => <li><CheckIcon className="check"/>{bullet}</li>)}
                  </ul>
                </div>
                <div className="linksContainer">
                  <a href={project.githubURL} target="_blank" rel="noreferrer"> 
                  <GitHubIcon className="icon"/>
                    View on GitHub
                  </a>

                  {demoLink()}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
