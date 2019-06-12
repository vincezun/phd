import React from 'react';

import '../styles/testimonial.scss';

const Testimonial = () => (
  <section className='yellow-background'>
    <div
      className='testimonial w-container'
      data-aos='fade-up'
      data-aos-easing='ease'
      data-aos-duration='1000'
      data-aos-delay='300'
      data-aos-once='true'
    >
      <p className='quote'>
        “Without doubt Plant Hire Division have lorum ipsum dorum montes
        nascetur sed ridiccis”
      </p>
      <p className='client'>A. Customer, SSI Schaffer</p>
    </div>
  </section>
);

export default Testimonial;
