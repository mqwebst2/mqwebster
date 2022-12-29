import React from 'react';
import PortfolioItem from '../components/js/PortfolioItem';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="wrap">
        <h1>Work Showcase...</h1>

        <div className="portfolio-content">
          <div className="portfolio-section">
            <h2>Sites</h2>

            <div className="portfolio-grid">
              <PortfolioItem />
            </div>
          </div>

          <div className="portfolio-section">
            <h2>Projects</h2>

            <div className="portfolio-grid">
              <PortfolioItem />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
