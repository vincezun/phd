import React from 'react';
import { Link } from 'gatsby';

import '../../styles/breadcrumb.scss';

const Breadcrumb = ({ link, name, subLink, subName }) => (
  <div className='breadcrumb-section'>
    <Link to='/' className='home-link'>
      HOME
    </Link>
    <p>/</p>
    <Link to={link}>{name}</Link>
    <p>/</p>
    <Link to={subLink}>{subName}</Link>
  </div>
);

export default Breadcrumb;
