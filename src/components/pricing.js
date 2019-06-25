import React from 'react';

import BookTodayBtn from './Button/button-3';

import '../styles/pricing.scss';

const Pricing = () => (
  <section className='pricing-background'>
    <div className='pricing'>
      <p
        className='title'
        data-aos='fade-up'
        data-aos-easing='ease'
        data-aos-duration='1000'
        data-aos-delay='300'
      >
        Monthly Pricing
      </p>
      <div
        data-aos='fade-up'
        data-aos-easing='ease'
        data-aos-duration='1000'
        data-aos-delay='300'
      >
        <p className='pricing-title'>1-3 Persons</p>
        <p className='price'>£106</p>
        <p className='unit'>per employee</p>
        <BookTodayBtn />
      </div>
      <div
        data-aos='fade-up'
        data-aos-easing='ease'
        data-aos-duration='1000'
        data-aos-delay='300'
      >
        <p className='pricing-title'>4-7 Persons</p>
        <p className='price'>£84</p>
        <p className='unit'>per employee</p>
        <BookTodayBtn />
      </div>
      <div
        data-aos='fade-up'
        data-aos-easing='ease'
        data-aos-duration='1000'
        data-aos-delay='300'
      >
        <p className='pricing-title'>8-11 Persons</p>
        <p className='price'>£72</p>
        <p className='unit'>per employee</p>
        <BookTodayBtn />
      </div>
      <div
        data-aos='fade-up'
        data-aos-easing='ease'
        data-aos-duration='1000'
        data-aos-delay='300'
      >
        <p className='pricing-title'>12-15 Persons</p>
        <p className='price'>£56</p>
        <p className='unit'>per employee</p>
        <BookTodayBtn />
      </div>
      <div
        data-aos='fade-up'
        data-aos-easing='ease'
        data-aos-duration='1000'
        data-aos-delay='300'
      >
        <p className='pricing-title'>16-20 Persons</p>
        <p className='price'>£49</p>
        <p className='unit'>per employee</p>
        <BookTodayBtn />
      </div>
      <div
        data-aos='fade-up'
        data-aos-easing='ease'
        data-aos-duration='1000'
        data-aos-delay='300'
      >
        <p className='pricing-title'>20+ Persons</p>
        <p className='price'>£40</p>
        <p className='unit'>per employee</p>
        <BookTodayBtn />
      </div>
      <p
        className='description'
        data-aos='fade-up'
        data-aos-easing='ease'
        data-aos-duration='1000'
        data-aos-delay='300'
      >
        *The below service pricing is based on our entry level product over a 2
        year term. Dependent on your industry or business circumstances and the
        service term you require, the fee may vary above or below the example
        fee.
      </p>
    </div>
  </section>
);

export default Pricing;
