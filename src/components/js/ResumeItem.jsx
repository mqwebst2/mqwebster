import React from 'react';
import '../css/ResumeItem.css';
import educationIcon from '/src/assets/icons/education-icon.png';
import experienceIcon from '/src/assets/icons/experience-icon.png';

export default function ResumeItem(props) {
  const iconSelector =
    props.section === 'Education' ? educationIcon : experienceIcon;

  return (
    <div className='resume-item'>
      <div className='resume-item__icon'>
        <img src={iconSelector} alt='Resume Item Icon' />
      </div>

      <div className='resume-item__content'>
        <span className='date'>{props.date}</span>
        <h3>{props.title}</h3>
        <span className='location'>{props.location}</span>
        {props.list && (
          <ul className='resume-item__list'>
            {props.list.map((item) => {
              return <li key={props.list.indexOf(item)}>{item}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
