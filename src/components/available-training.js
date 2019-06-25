import React from 'react';

import '../styles/available-training.scss';

import BookTodayBtn from './Button/button-3';

const AvailableTraining = () => (
  <section className='available-training-background'>
    <div className='available-training w-container'>
      <p
        className='title'
        data-aos='fade-up'
        data-aos-easing='ease'
        data-aos-duration='1000'
        data-aos-delay='300'
      >
        Available Training
      </p>
      <div
        data-aos='fade-up'
        data-aos-easing='ease'
        data-aos-duration='1000'
        data-aos-delay='300'
      >
        <p className='training-name'>IOSH Managing Safely</p>
        <p>Starting in Winter 2019</p>
        <p className='price'>£495 per person</p>
        <p>when conducted at your premises.</p>
        <BookTodayBtn />
      </div>
      <div
        data-aos='fade-up'
        data-aos-easing='ease'
        data-aos-duration='1000'
        data-aos-delay='300'
      >
        <p className='training-name'>IOSH Working Safely</p>
        <p>Starting in Winter 2019</p>
        <p className='price'>£295 per person</p>
        <p>when conducted at your premises.</p>
        <BookTodayBtn />
      </div>
      <div
        data-aos='fade-up'
        data-aos-easing='ease'
        data-aos-duration='1000'
        data-aos-delay='300'
      >
        <p className='training-name'>Manual Handling</p>
        <p>Minimum class of 6</p>
        <p className='price'>£50 per person</p>
        <p>at customers premises.</p>
        <BookTodayBtn />
      </div>
      <div
        data-aos='fade-up'
        data-aos-easing='ease'
        data-aos-duration='1000'
        data-aos-delay='300'
      >
        <p className='training-name'>½ Day Abrasive Wheels Training</p>
        <p>Minimum class of 6</p>
        <p className='price'>£50 per person</p>
        <p>at customers premises.</p>
        <BookTodayBtn />
      </div>
    </div>
  </section>
);

export default AvailableTraining;
