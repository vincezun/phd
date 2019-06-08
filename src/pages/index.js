import React, { Component } from 'react';

import Layout from '../components/Layout/layout';
import SEO from '../components/seo';
import '../styles/index.scss';

class index extends Component {
  render() {
    return (
      <Layout>
        <SEO title='Home' />
        <div className='home-wrapper'>
          <section>
            <div className='hero-section w-container'>
              <h1>Ensuring your project remains up and running</h1>
              <p>
                PHd provide plant, MEWPS, tool, accommodation and waste
                solutions to site's through out the UK and Europen Union. With a
                network of approved suppliers whom we know are up to the job and
                meet the high standards we demand.
              </p>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default index;
