import React from 'react';

import '../styles/terms-policy.scss';

import Layout from '../components/Layout/layout';
import SEO from '../components/seo';

const PrivacyPolicy = () => (
  <Layout>
    <div className='terms-policy-wrapper'>
      <section>
        <div
          className='hero-section w-container'
          aria-label='Plant Hire Division Privacy Policy'
        >
          <SEO title='Privacy Policy' />
          <h1
            className='heading'
            data-aos='fade-down'
            data-aos-easing='ease'
            data-aos-duration='1000'
            data-aos-delay='300'
          >
            Privacy Policy
          </h1>
          <div
            className='terms-policy-content'
            data-aos='fade-up'
            data-aos-easing='ease'
            data-aos-duration='1000'
            data-aos-delay='300'
            data-aos-anchor='.heading'
          >
            <p className='description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              et dapibus dui. Sed vitae sagittis libero, nec elementum enim. Ut
              ac ex imperdiet, lobortis diam et, ornare eros. Aliquam a
              venenatis nunc. Sed dictum felis vel ante bibendum luctus.
            </p>
            <p className='description'>
              Donec eget gravida leo. Suspendisse in hendrerit nunc. Mauris
              neque enim, iaculis at imperdiet sit amet, volutpat ornare tellus.
              Nunc ut odio vel risus blandit tincidunt ut ut velit. Donec
              hendrerit leo in lobortis porttitor. Vestibulum tempor arcu lorem,
              ac mattis eros tempus at. Vestibulum hendrerit augue vel tellus
              dapibus, mattis condimentum felis tempus.
            </p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default PrivacyPolicy;
