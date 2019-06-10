import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Navbar from './navbar';
import Footer from './footer';

import '../../styles/layout.scss';

const Layout = ({ children }) => (
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
          <main role='main'>{children}</main>
        </div>
        <Footer />
      </Fragment>
    )}
  />
);

export default Layout;
