import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Navbar from './navbar';

import '../../styles/layout.scss';

const layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <Fragment>
        <Navbar />
        <div>
          <main>{children}</main>
        </div>
      </Fragment>
    )}
  />
);

export default layout;
