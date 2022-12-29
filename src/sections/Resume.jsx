import React from 'react';
import ResumeItem from '../components/js/ResumeItem';
import data from '../components/data/resumeData.js';
import skillIcon from '/src/assets/icons/skill-icon.png';
import images from '/src/components/data/resumeImages.js';

export default function Resume() {
  const educationElements = data.Education.map((item) => {
    return <ResumeItem key={item.id} section="Education" {...item} />;
  });
  const experienceElements = data.Experience.map((item) => {
    return <ResumeItem key={item.id} section="Experience" {...item} />;
  });

  const skills = [
    { id: 1, name: 'CSS', url: '' },
    { id: 2, name: 'Figma', url: '' },
    { id: 3, name: 'GitHub', url: '' },
    { id: 4, name: 'HTML', url: '' },
    { id: 5, name: 'JavaScript', url: '' },
    { id: 6, name: 'NPM', url: '' },
    { id: 7, name: 'Prettier', url: '' },
    { id: 8, name: 'PWA', url: '' },
    { id: 9, name: 'React', url: '' },
    { id: 10, name: 'Vite', url: '' },
    { id: 11, name: 'Webflow', url: '' },
    { id: 12, name: 'WordPress', url: '' },
  ];

  const skillsElement = skills.map((item, i) => {
    item.url = images[i].url;
    return (
      <li key={item.id}>
        <img
          src={item.url}
          alt={`${item.name} Logo`}
          className="hard-skills__icon"
        />
        {item.name}
      </li>
    );
  });

  return (
    <section id="resume">
      <div className="wrap">
        <h1>My Experience...</h1>

        <div className="resume-wrap">
          <div className="resume-nav">
            <ul className="resume-nav__items">
              <li>
                <a href="">Education</a>
              </li>
              <li>
                <a href="">Skills</a>
              </li>
              <li>
                <a href="">Experience</a>
              </li>
            </ul>
          </div>

          <div className="resume-content">
            <div className="resume-section" id="Education">
              <h2>Education</h2>
              {educationElements}
            </div>

            <div className="resume-section" id="Skills">
              <h2>Skills</h2>

              <div className="resume-item">
                <div className="resume-item__icon">
                  <img src={skillIcon} alt="Resume Item Icon" />
                </div>

                <div className="resume-item__content">
                  <h3>Interpersonal Skills</h3>
                  <ul className="resume-item__list">
                    <li>Detail-oriented work ethic</li>
                    <li>Employee resource management</li>
                    <li>
                      Enthusiastic synergy-focused approach to collaboration
                    </li>
                    <li>Project management</li>
                    <li>Solution based communication skills</li>
                  </ul>
                </div>
              </div>

              <div className="resume-item">
                <div className="resume-item__icon">
                  <img src={skillIcon} alt="Resume Item Icon" />
                </div>

                <div className="resume-item__content">
                  <h3>Technical Compentencies</h3>
                  <ul className="resume-item__hard-skills">{skillsElement}</ul>
                </div>
              </div>
            </div>

            <div className="resume-section" id="Experience">
              <h2>Experience</h2>

              {experienceElements}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
