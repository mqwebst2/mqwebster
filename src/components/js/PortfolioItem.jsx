import React from 'react';
import { Link } from 'react-router-dom';
import '../css/PortfolioItem.css';
import project from '/src/assets/icons/project-icon.png';

export default function PortfolioItem(props) {
  const btnContent = (
    <div>
      <span className="btn-text">
        See {props.type[0].toUpperCase() + props.type.slice(1)}
      </span>
      <div className="btn-img">
        <img src={project} alt="Project Icon" />
      </div>
    </div>
  );

  const siteBtn = (
    <button>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {btnContent}
      </a>
    </button>
  );

  const projectBtn = (
    <button>
      <Link to={`/project/${props.link}`}>{btnContent}</Link>
    </button>
  );

  return (
    <div className="portfolio-item">
      <div className="portfolio-item__content">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        {props.link.includes('https://') ? siteBtn : projectBtn}
      </div>
    </div>
  );
}
