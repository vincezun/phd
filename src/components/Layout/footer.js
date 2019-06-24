import React from 'react';
import { Link } from 'gatsby';

import '../../styles/footer.scss';

import phdLogo from '../../images/phd-logo.png';
import twitterLogo from '../../images/social-icon-twitter.png';
import facebookLogo from '../../images/social-icon-facebook.png';
import instagramLogo from '../../images/social-icon-instagram.png';

const Footer = () => (
  <footer className='footer'>
    <div className='footer-links w-container'>
      <img src={phdLogo} className='phd-logo' alt='Plant Hire Division logo' />
      <div
        className='about-us'
        data-aos='fade'
        data-aos-easing='ease'
        data-aos-duration='1000'
        data-aos-delay='300'
      >
        <p className='title'>About Us</p>
        <p className='description'>
          Onec sed odio duum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculusonec sed odioum. Aenean eu leo quam.
          Pellentesque ornare venenatis vestibulum...&#160;
          <Link to='/about-us' className='read-more'>
            Read more
          </Link>
        </p>
      </div>
      <div className='social-links'>
        <a href='https://www.twitter.com'>
          <figure
            className='twitter-link'
            data-aos='fade-up'
            data-aos-easing='ease'
            data-aos-duration='1000'
            data-aos-delay='300'
          >
            <img src={twitterLogo} alt='Twitter logo' className='social-logo' />
            <figcaption className='title'>Twitter</figcaption>
          </figure>
        </a>
        <a href='https://www.facebook.com'>
          <figure
            className='facebook-link'
            data-aos='fade-up'
            data-aos-easing='ease'
            data-aos-duration='1000'
            data-aos-delay='300'
          >
            <img
              src={facebookLogo}
              alt='Facebook logo'
              className='social-logo'
            />
            <figcaption className='title'>Facebook</figcaption>
          </figure>
        </a>
        <a href='https://www.instagram.com'>
          <figure
            className='instagram-link'
            data-aos='fade-up'
            data-aos-easing='ease'
            data-aos-duration='1000'
            data-aos-delay='300'
          >
            <img
              src={instagramLogo}
              alt='Instagram logo'
              className='social-logo'
            />
            <figcaption className='title'>Instagram</figcaption>
          </figure>
        </a>
      </div>
    </div>
    <div className='footer-bar'>
      <ul
        className='footer-detail w-container'
        data-aos='fade'
        data-aos-easing='ease'
        data-aos-duration='1000'
        data-aos-delay='300'
        data-aos-anchor='.instagram-link'
      >
        <li className='credits'>© Plant Hire Division 2019</li>
        <li className='registered'>Registered in England: 1471587</li>
        <li className='terms'>
          <Link to='/terms-and-conditions'>Terms and Conditions</Link>
        </li>
        <li className='privacy'>
          <Link to='/privacy-policy'>Privacy Policy</Link>
        </li>
        <li className='blog'>
          <Link to='/blog'>Blog</Link>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
