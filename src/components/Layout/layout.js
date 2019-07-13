import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Navbar from './navbar';
import Footer from './footer';

import '../../styles/layout.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

import bold from '../../fonts/gilroy-bold-webfont.woff2';
import light from '../../fonts/gilroy-light-webfont.woff2';
import regular from '../../fonts/gilroy-regular-webfont.woff2';
import semibold from '../../fonts/gilroy-semibold-webfont.woff2';
import semibolditalic from '../../fonts/gilroy-semibolditalic-webfont.woff2';

const Layout = ({ children }) => {
  return (
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
          <Helmet>
            <link
              rel="preload"
              as="font"
              href={light}
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              as="font"
              href={regular}
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              as="font"
              href={semibold}
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              as="font"
              href={semibolditalic}
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              as="font"
              href={bold}
              type="font/woff2"
              crossOrigin="anonymous"
            />
          </Helmet>
          <Navbar />
          <div>
            <main role="main">{children}</main>
          </div>
          <Footer />
        </Fragment>
      )}
    />
  );
};

// class Layout extends Component {
//   // componentDidMount() {
//   //   AOS.init();
//   //   AOS.refreshHard();
//   // }

//   render() {
//     const children = this.props.children;
//     return (

//     );
//   }
// }

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
