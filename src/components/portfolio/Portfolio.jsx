import React, { useEffect, useState } from 'react';
import PortfolioList from "./PortfolioList";
import "./portfolio.scss";
import PortfolioCard from './PortfolioCard';
import {getAllProjects, getProjectType, getTypes} from "../../ProjectData";

export default function Portfolio() {

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
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {getTypes().map(type => {
          return <PortfolioList type={type} active={selected === type} setSelected={setSelected} />
        })}
      </ul>
      <div className="container">
        {filteredProjects.map(project => (
          <PortfolioCard project={project} />
        ))}
      </div>
    </div>
  )
}

