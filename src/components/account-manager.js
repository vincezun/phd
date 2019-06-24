import React from 'react';
import Img from 'gatsby-image';

import '../styles/account-manager.scss';

import facebook from '../images/social-icon-facebook.png';
import twitter from '../images/social-icon-twitter.png';
import linkedin from '../images/social-icon-linkedin.png';
import instagram from '../images/social-icon-instagram.png';

const AccountManager = ({
  img,
  name,
  bio,
  facebookLink,
  twitterLink,
  linkedinLink,
  instagramLink,
  emailAddress
}) => (
  <section className='yellow-cluster-shapes-bg'>
    <div
      className='account-manager w-container'
      data-aos='fade'
      data-aos-easing='ease'
      data-aos-duration='1000'
      data-aos-delay='300'
    >
      <div className='details'>
        <p className='title'>
          Speak directly with one of our account managers, now.
        </p>
        <a href={`mailto:${emailAddress}`} className='contact-us'>
          Contact {name}
        </a>
        <p className='bio'>{bio}</p>
        <ul className='social-links'>
          <li>
            <a href={facebookLink}>
              <img src={facebook} alt='Facebook' className='logo' />
            </a>
          </li>
          <li>
            <a href={twitterLink}>
              <img src={twitter} alt='Twitter' className='logo' />
            </a>
          </li>
          <li>
            <a href={linkedinLink}>
              <img src={linkedin} alt='Linkedin' className='logo' />
            </a>
          </li>
          <li>
            <a href={instagramLink}>
              <img src={instagram} alt='Instagram' className='logo' />
            </a>
          </li>
        </ul>
      </div>
      <Img fluid={img} className='manager-image' />
    </div>
  </section>
);

export default AccountManager;
