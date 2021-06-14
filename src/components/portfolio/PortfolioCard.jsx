import React from 'react';
import "./portfolioCard.scss";

export default function PortfolioCard({project}) {
  return (
    <div className="portfolioCard">
      <img src={project.splashImage} alt={project.title + " thumbnail"}/>
      <h3>{project.title}</h3>
    </div>
  )
}
