import React from 'react';

import Button from '../components/js/Button';

import download from '/src/assets/icons/download-icon.png';
import email from '/src/assets/icons/email-icon.png';
import github from '/src/assets/icons/github-icon.png';
import linkedin from '/src/assets/icons/linkedin-icon.png';
import resume from '/src/assets/files/resume.pdf';

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <h1>Get In Contact...</h1>
        <h2>I'm currently open to work, and I'm always ready to learn!</h2>

        <div className="contact-items">
          <Button link={resume} text="Resume" icon={download} type="resume" />
          <Button
            link="mailto:marques.q.webster@gmail.com"
            text="Email"
            icon={email}
            type="email"
          />
          <Button
            link="https://www.linkedin.com/in/marques-webster/"
            text="LinkedIn"
            icon={linkedin}
            type="social"
          />
          <Button
            link="https://github.com/mqwebst2"
            text="GitHub"
            icon={github}
            type="social"
          />
        </div>
      </div>
    </section>
  );
}
