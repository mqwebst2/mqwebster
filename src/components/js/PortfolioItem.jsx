import React from 'react';
import '../css/PortfolioItem.css';
import project from '/src/assets/icons/project-icon.png';

export default function PortfolioItem() {
  return (
    <div className="portfolio-item">
      <div className="portfolio-item__content">
        <h3>Test Item</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio
          ut sem nulla pharetra diam sit amet nisl. Enim nunc faucibus a
          pellentesque sit amet.
        </p>
        <button>
          <a href="google.com" target="_blank" rel="noopener noreferrer">
            <div>
              <span className="btn-text">See Project</span>
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
