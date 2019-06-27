import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import '../styles/resources.scss';

import Layout from '../components/Layout/layout';
import Breadcrumb from '../components/Layout/breadcrumb';
import SEO from '../components/seo';
import GetInTouch from '../components/get-in-touch';

import CallUsBtn from '../components/Button/button-2';
import arrowRight from '../images/arrow-right-yellow.png';

const Resources = ({ data }) => (
  <Layout>
    <div className='resources-wrapper'>
      <section>
        <div
          className='hero-section w-container'
          aria-label='Plant Hire Division Resources'
        >
          <SEO title='Resources' />
          <Breadcrumb link='resources' name='Resources' />
          <h1
            className='heading'
            data-aos='fade-down'
            data-aos-easing='ease'
            data-aos-duration='1000'
            data-aos-delay='300'
          >
            Resources
          </h1>
          <p
            className='description'
            data-aos='fade-up'
            data-aos-easing='ease'
            data-aos-duration='1000'
            data-aos-delay='300'
            data-aos-anchor='.heading'
          >
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor.
            Sed posuere consectetur est at lobortis. Aenean lacinia bibendum
            nulla sed consectetur.
          </p>
          <CallUsBtn />
        </div>
      </section>
      <section>
        <div className='resources-content'>
          {data.allStrapiResource.edges.map(document => {
            const get = document.node;
            const id = get.id;
            const name = get.name;
            const fileType = get.fileType;
            const description = get.description;
            const icon = get.icon.childImageSharp.fixed;
            return (
              <Link
                key={id}
                to='/resources#'
                className='resources-details'
                data-aos='fade-up'
                data-aos-easing='ease'
                data-aos-duration='1000'
                data-aos-delay='300'
              >
                <Img fixed={icon} alt={name} className='resource-image' />
                <div className='resource'>
                  <p className='resource-name'>{name}</p>
                  <img
                    src={arrowRight}
                    alt='Arrow Right'
                    className='arrow-right'
                  />
                  <p className='file-type'>{fileType}</p>
                  <p className='description'>{description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <GetInTouch />
    </div>
  </Layout>
);

export default Resources;

export const query = graphql`
  query Resources {
    allStrapiResource {
      edges {
        node {
          id
          name
          fileType
          description
          icon {
            childImageSharp {
              fixed(width: 39) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
        }
      }
    }
  }
`;
