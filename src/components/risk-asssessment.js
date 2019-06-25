import React from 'react';

import '../styles/risk-assessment.scss';

const RiskAssessment = () => (
  <section className='risk-assessment-background'>
    <div className='risk-assessments w-container'>
      <p
        className='title'
        data-aos='fade-up'
        data-aos-easing='ease'
        data-aos-duration='1000'
        data-aos-delay='300'
      >
        Risk assessments made easy
      </p>
      <ul className='details'>
        <li
          data-aos='fade-up'
          data-aos-easing='ease'
          data-aos-duration='1000'
          data-aos-delay='300'
        >
          <p className='number'>1.</p>
          <p className='description'>
            A top-qualified risk assessment specialist visits your organization.
          </p>
        </li>
        <li
          data-aos='fade-up'
          data-aos-easing='ease'
          data-aos-duration='1000'
          data-aos-delay='300'
        >
          <p className='number'>2.</p>
          <p className='description'>
            We guide you through the entire process, offering our expert eye so
            you can be sure that you identify all risks and hazards.
          </p>
        </li>
        <li
          data-aos='fade-up'
          data-aos-easing='ease'
          data-aos-duration='1000'
          data-aos-delay='300'
        >
          <p className='number'>3.</p>
          <p className='description'>
            You get full documentation, which we make sure you complete
            correctly.
          </p>
        </li>
      </ul>
      <p
        className='introduction-text'
        data-aos='fade-up'
        data-aos-easing='ease'
        data-aos-duration='1000'
        data-aos-delay='300'
      >
        A risk assessment is how you identify hazards that may cause harm before
        taking reasonable steps to prevent them. It’s difficult, so it’s easy to
        miss a potential danger. And that’s a big responsibility for any
        employer to shoulder. So if you worry about making a mistake or complain
        that risk assessments take you away from your day job, you’re not alone.
        pHd gives you the answer. Our risk assessment and documentation service
        offers the simplest way to protect the public, your people, your
        business and you.
      </p>
    </div>
  </section>
);

export default RiskAssessment;
