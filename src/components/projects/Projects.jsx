import React, { useState } from 'react';
import { getAllProjects } from '../../ProjectData';
import Project from './Project';
import "./projects.scss";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

export default function Projects() {

  const [currentSlide, setCurrentSlide] = useState(1);

  const handleClick = (dir) => {
    if (dir === "back") {
      setCurrentSlide(currentSlide > 1 ? currentSlide - 1 : getAllProjects().length);
    } else {
      setCurrentSlide(currentSlide === getAllProjects().length ? 1 : currentSlide + 1);
    }
  }

  return (
    <div className="projects" id="projects">
      <div className="slider" style={{transform: `translateX(-${(currentSlide - 1) * 100}vw)`}} >
        
        {getAllProjects().map(project => <Project project={project} />)}
      </div>
      <NavigateNextIcon className="next" onClick={() => handleClick("next")} />
      <NavigateBeforeIcon className="back" onClick={() => handleClick("back")} />
      </div>
  )
}
