import React from 'react';
import { getAllProjects } from '../../ProjectData';
import Project from './Project';
import "./projects.scss";

export default function Projects() {

  return (
    <div className="projects" id="projects">
      <div className="slider">
        
          {getAllProjects().map(project => <Project project={project} />)}
        </div>
      </div>
  
  )
}
