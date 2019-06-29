import React from 'react';

import '../styles/404.scss';

import SEO from '../components/seo';
import GoBackToHomePage from '../components/Button/button-4';

const PageNotFound = () => (
  <div className='page-not-found-background'>
    <SEO title='Page not found' />
    <h1 className='title'>404</h1>
    <p className='sub-title'>PAGE NOT FOUND</p>
    <p className='description'>
      We looked everywhere for this page. <br />
      Are you sure the website URL is correct? <br />
      Get in touch with the site owner.
    </p>
    <GoBackToHomePage />
  </div>
);

export default PageNotFound;
