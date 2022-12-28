import React from 'react';

import Button from '../components/js/Button';

import github from '/src/assets/icons/github-icon.png';
import email from '/src/assets/icons/email-icon.png';
import linkedin from '/src/assets/icons/linkedin-icon.png';

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <h1>Get In Contact...</h1>
        <h2>I'm currently open to work, and I'm always ready to learn!</h2>

        <div className="contact-items">
          <Button
            link="mailto:marques.q.webster@gmail.com"
            text="Resume"
            icon={email}
          />
          <Button
            link="mailto:marques.q.webster@gmail.com"
            text="Email"
            icon={email}
          />
          <Button
            link="https://github.com/mqwebst2"
            text="LinkedIn"
            icon={linkedin}
          />
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
