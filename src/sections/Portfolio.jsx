import React from 'react';
import PortfolioItem from '../components/js/PortfolioItem';
import data from '../components/data/portfolioData.js';

export default function Portfolio() {
  const siteElements = data.sites.map((item) => {
    return <PortfolioItem key={item.id} {...item} />;
  });
  const projectElements = data.projects.map((item) => {
    return <PortfolioItem key={item.id} {...item} />;
  });

  return (
    <section id="portfolio">
      <div className="wrap">
        <h1>Work Showcase...</h1>

        <div className="portfolio-content">
          <div className="portfolio-section">
            <h2>Sites</h2>

            <div className="portfolio-grid">{siteElements}</div>
          </div>

          <div className="portfolio-section">
            <h2>Projects</h2>

            <div className="portfolio-grid">{projectElements}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
