import React from 'react';
import Timeline from '../components/js/Timeline';
import data from '../components/data/timelineItems.js';

export default function About() {
  const timelineItems = data.map((item) => {
    return <Timeline key={item.id} {...item} />;
  });

  return (
    <section id='about'>
      <div className='wrap'>
        <div className='about-content'>
          <h1 className='section-title'>About Me...</h1>
          <p>
            I'm a fresh face with an old soul, and I'm always looking to learn.
            There's a saying that a wise person learns from his mistakes and a
            wiser one learns from others' mistakes. However, the wisest among us
            learn from others' successes. I'm a product of all of the successes
            of those that have come before me and have prepared me for
            excellence. My goal is to be a lesson for the wisest members of the
            generations to follow.
          </p>
        </div>

        <div className='timeline'>
          <div className='tl-progress-bar'>
            <div className='tl-progress-bar__indicator'></div>
          </div>
          <div className='tl-progress-bar__fade'></div>

          {timelineItems}
        </div>
      </div>
    </section>
  );
}
