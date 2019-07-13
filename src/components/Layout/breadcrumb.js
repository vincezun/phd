import React from 'react';
import { Link } from 'gatsby';

import '../../styles/breadcrumb.scss';

const Breadcrumb = ({ link, name, subName, subLink }) => (
  <ul
    className="breadcrumb-section"
    data-aos="fade-down"
    data-aos-easing="ease"
    data-aos-duration="1000"
    data-aos-delay="300"
  >
    <li>
      <Link to="/">HOME</Link>
    </li>
    <li>
      <Link to={`/${link}/`} activeClassName="active">
        {name}
      </Link>
    </li>
    <li>
      <Link to={`/${subLink}`} activeClassName="active">
        {subName}
      </Link>
    </li>
  </ul>
);

export default Breadcrumb;
