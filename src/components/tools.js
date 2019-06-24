import React from 'react';

import '../styles/tools.scss';

import fancyArrow from '../images/fancy-arrow.png';

const Tools = ({ toolName, toolDescription }) => (
  <figure
    className='tool'
    data-aos='fade-up'
    data-aos-easing='ease'
    data-aos-duration='1000'
    data-aos-delay='300'
  >
    <img src={fancyArrow} alt='Arrow' className='fancy-arrow' />
    <figcaption className='tool-name'>{toolName}</figcaption>
    <p className='dash'> - </p>
    <p className='tool-description'>{toolDescription}</p>
  </figure>
);

export default Tools;
