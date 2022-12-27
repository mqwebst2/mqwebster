import React from 'react';

export default function Button(props) {
  return (
    <button>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <span className="btn-text">{props.text}</span>
        <div className="btn-img">
          <img src={props.icon} alt="Button Icon" />
        </div>
      </a>
    </button>
  );
}
