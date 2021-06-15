import React, { useEffect, useState } from 'react';
import PortfolioList from "./PortfolioList";
import "./portfolio.scss";
import PortfolioCard from './PortfolioCard';
import {getAllProjects, getProjectType, getTypes} from "../../ProjectData";

export default function Portfolio({setCurrentSlide}) {

  const [filteredProjects, setFilteredProjects] = useState(getAllProjects());
  const [selected, setSelected] = useState("All");

  useEffect(() => {
    if (selected === "All") {
      setFilteredProjects(getAllProjects());
    } else {
      setFilteredProjects(getProjectType(selected))
    }
  } ,[selected])


  return (
    <div className="portfolioContainer">
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {getTypes().map(type => {
            return <PortfolioList type={type} active={selected === type} setSelected={setSelected} />
          })}
        </ul>
        <div className="container">
          {filteredProjects.map(project => (
            <a href="#projects" onClick={(e)=> {
                e.preventDefault();
                window.location.href='#projects';
                setCurrentSlide(project.id);
                }}
            ><PortfolioCard project={project} /> </a>
          ))}
        </div>
      </div>
    </div>
  )
}

