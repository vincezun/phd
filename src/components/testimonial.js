import React from 'react';

import '../styles/testimonial.scss';

const Testimonial = ({ quote, client, company }) => (
  <section className='yellow-background'>
    <div
      className='testimonial w-container'
      data-aos='fade-up'
      data-aos-easing='ease'
      data-aos-duration='1000'
      data-aos-delay='300'
    >
      <p className='quote'>{quote}</p>
      <p className='client'>
        {client}, {company}
      </p>
    </div>
  </section>
);

export default Testimonial;
