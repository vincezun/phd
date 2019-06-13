import React from 'react';
import { Link } from 'gatsby';

import '../styles/get-in-touch.scss';

const GetInTouch = () => (
  <section className='stripe-tile-background'>
    <div
      className='get-in-touch w-container'
      data-aos='fade-up'
      data-aos-easing='ease'
      data-aos-duration='1000'
      data-aos-delay='300'
      data-aos-once='true'
    >
      <div>
        <h2 className='title'>
          Cant find what your looking for? We can source most equipment
        </h2>
        <br />
        <Link to='/contact' className='get-in-touch-link' role='button'>
          Get in touch
        </Link>
      </div>
      <div>
        <p className='description'>
          With over 20 years experience the PhD team has met every demanding
          situation the industry can throw up.  We pride ourselves on our
          customers and the loyalty they have continuously shown through the
          years.  We are a nationwide plant supplier offering quick solutions to
          demanding situations and understand the importance of quick turn
          around solutions.
        </p>
      </div>
    </div>
  </section>
);

export default GetInTouch;
