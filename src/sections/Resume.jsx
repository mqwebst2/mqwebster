import React from 'react';
import ResumeItem from '../components/js/ResumeItem';
import data from '../components/data/resumeData.js';
import skillIcon from '/src/assets/icons/skill-icon.png';

export default function Resume() {
  const educationElements = data.Education.map((item) => {
    return <ResumeItem key={item.id} section='Education' {...item} />;
  });
  const experienceElements = data.Experience.map((item) => {
    return <ResumeItem key={item.id} section='Experience' {...item} />;
  });

  const skills = [
    'CSS',
    'Figma',
    'GitHub',
    'HTML',
    'JavaScript',
    'NPM',
    'Prettier',
    'PWA',
    'React',
    'Vite',
    'Webflow',
    'WordPress',
  ];

  const skillsElement = skills.map((item) => {
    return (
      <li key={item}>
        <img
          src={`/src/assets/logos/${item}.png`}
          alt={`${item} Logo`}
          className='hard-skills__icon'
        />
        {item}
      </li>
    );
  });

  return (
    <section id='resume'>
      <div className='wrap'>
        <h1>My Experience...</h1>

        <div className='resume-wrap'>
          <div className='resume-nav'>
            <ul className='resume-nav__items'>
              <li>
                <a href=''>Education</a>
              </li>
              <li>
                <a href=''>Skills</a>
              </li>
              <li>
                <a href=''>Experience</a>
              </li>
            </ul>
          </div>

          <div className='resume-content'>
            <div className='resume-section' id='Education'>
              <h2>Education</h2>
              {educationElements}
            </div>

            <div className='resume-section' id='Skills'>
              <h2>Skills</h2>

              <div className='resume-item'>
                <div className='resume-item__icon'>
                  <img src={skillIcon} alt='Resume Item Icon' />
                </div>

                <div className='resume-item__content'>
                  <h3>Interpersonal Skills</h3>
                  <ul className='resume-item__list'>
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

              <div className='resume-item'>
                <div className='resume-item__icon'>
                  <img src={skillIcon} alt='Resume Item Icon' />
                </div>

                <div className='resume-item__content'>
                  <h3>Technical Compentencies</h3>
                  <ul className='resume-item__hard-skills'>{skillsElement}</ul>
                </div>
              </div>
            </div>

            <div className='resume-section' id='Experience'>
              <h2>Experience</h2>

              {experienceElements}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
