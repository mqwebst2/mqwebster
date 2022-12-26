import React from 'react';
import quotation from '/src/assets/images/quote-icon.png';
import '../css/Timeline.css';

export default function Timeline(props) {
  return (
    <div className='timeline-item'>
      <div className='tl-left'>
        <h2>{props.date}</h2>
      </div>

      <div className='tl-center'>
        <div className='tl-circle'></div>
      </div>

      <div className='tl-right'>
        {props.image && (
          <div className='tl-img'>
            <img src={props.image} alt='Timeline Image' />
          </div>
        )}

        <h3 className='tl-title'>{props.title}</h3>
        <p className='tl-desc'>{props.desc}</p>

        <div className='tl-quote'>
          <img
            src={quotation}
            alt='Quotation Marks'
            className='tl-quote__img'
          />
          <span className='tl-quote__text'>{props.quote}</span>
          <span className='tl-quote__author'>{props.author}</span>
        </div>
      </div>
    </div>
  );
}
