import React from 'react'
import "./portfolioList.scss";

export default function PortfolioList({type, active, setSelected}) {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} onClick={() => setSelected(type)}>
      {type}
    </li>
  )
}
