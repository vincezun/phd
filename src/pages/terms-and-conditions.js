import React from 'react';

import '../styles/terms-policy.scss';

import Layout from '../components/Layout/layout';
import SEO from '../components/seo';

const TermsAndConditions = () => (
  <Layout>
    <div className='terms-policy-wrapper'>
      <section>
        <div
          className='hero-section w-container'
          aria-label='Plant Hire Division Terms and Conditions'
        >
          <SEO title='Terms and Conditions' />
          <h1
            className='heading'
            data-aos='fade-down'
            data-aos-easing='ease'
            data-aos-duration='1000'
            data-aos-delay='300'
          >
            Terms and Conditions
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
              Duis ultricies placerat ante non accumsan. Integer euismod
              tristique lacus, id bibendum nisi rutrum vitae. Sed ac tellus
              vitae neque ornare rhoncus in vitae lorem. Nulla et fermentum
              tortor. Duis eu lacus viverra, aliquet quam sed, bibendum magna.
            </p>
            <p className='description'>
              Duis iaculis, sem vel semper maximus, massa nisl vestibulum felis,
              lobortis venenatis mi eros dignissim magna. Nam justo nisi,
              ullamcorper non massa vitae, facilisis lacinia leo. Sed varius
              molestie lorem, vitae hendrerit sapien porta sed. Phasellus ac
              nisi at nunc malesuada aliquam non a nibh. Aliquam nisl nulla,
              blandit nec massa ac, gravida cursus dui.
            </p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default TermsAndConditions;
