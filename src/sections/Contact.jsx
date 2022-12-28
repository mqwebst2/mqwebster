import React from 'react';

import Button from '../components/js/Button';

import github from '/src/assets/icons/github-icon.png';

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <h1>Get In Contact...</h1>
        <h2>I'm currently open to work, and I'm always ready to learn!</h2>

        <div className="contact-items">
          <Button
            link="https://github.com/mqwebst2"
            text="GitHub"
            icon={github}
          />
        </div>
      </div>
    </section>
  );
}
