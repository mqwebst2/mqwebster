import React from 'react';
import '../css/PortfolioItem.css';
import project from '/src/assets/icons/project-icon.png';

export default function PortfolioItem(props) {
  return (
    <div className="portfolio-item">
      <div className="portfolio-item__bg">
        <img src={props.image} />
      </div>
      <div className="portfolio-item__content">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <button>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div>
              <span className="btn-text">
                See {props.type[0].toUpperCase() + props.type.slice(1)}
              </span>
              <div className="btn-img">
                <img src={project} alt="Project Icon" />
              </div>
            </div>
          </a>
        </button>
      </div>
    </div>
  );
}
