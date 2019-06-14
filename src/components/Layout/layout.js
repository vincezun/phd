import React, { Fragment, Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Navbar from './navbar';
import Footer from './footer';

import '../../styles/layout.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

class Layout extends Component {
  componentDidMount() {
    AOS.init();
    AOS.refreshHard();
  }

  render() {
    const children = this.props.children;
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
            <Navbar />
            <div>
              <main role='main'>{children}</main>
            </div>
            <Footer />
          </Fragment>
        )}
      />
    );
  }
}

export default Layout;
