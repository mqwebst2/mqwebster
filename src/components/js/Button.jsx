import { useState } from 'react';

export default function Button(props) {
  const [btnText, setBtnText] = useState(props.text);

  const btnContent = (
    <div>
      <span className="btn-text">{btnText}</span>
      <div className="btn-img">
        <img src={props.icon} alt="Button Icon" />
      </div>
    </div>
  );

  function emailBtn() {
    function copyEmail() {
      setBtnText('Copied!');
      const link = props.link.replace('mailto:', '');
      navigator.clipboard.writeText(link);

      setTimeout(() => {
        setBtnText(props.text);
      }, 2000);
    }

    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          copyEmail();
        }}
      >
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {btnContent}
        </a>
      </button>
    );
  }

  function resumeBtn() {
    function download() {
      setBtnText('Downloaded!');
      setTimeout(() => {
        setBtnText(props.text);
      }, 2000);
    }
    return (
      <button onClick={download}>
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          download="Marques-Webster-Resume"
        >
          {btnContent}
        </a>
      </button>
    );
  }

  function buttonType(type) {
    return (
      {
        email: emailBtn(),
        resume: resumeBtn(),
      }[type] || (
        <button>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            {btnContent}
          </a>
        </button>
      )
    );
  }

  return buttonType(props.type);
}
