import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import '../styles/service-overview.scss';

import Layout from '../components/Layout/layout';
import Breadcrumb from '../components/Layout/breadcrumb';
import SEO from '../components/seo';
import GetInTouch from '../components/get-in-touch';

import CallUsBtn from '../components/Button/button-2';

const Specialities = ({ data }) => (
  <Layout>
    <div className='service-overview-wrapper'>
      <section>
        <div className='hero-section w-container'>
          {data.allStrapiServiceoverview.edges.map((document, i) => {
            const get = document.node;
            const name = get.name;
            const slug = get.slug;
            const introductionText = get.introductionText;
            return (
              <div key={i}>
                <SEO title={name} />
                <Breadcrumb link={slug} name={name} subName='' />
                <h1
                  className='heading'
                  data-aos='fade-down'
                  data-aos-easing='ease'
                  data-aos-duration='1000'
                  data-aos-delay='300'
                  data-aos-once='true'
                >
                  {name}
                </h1>
                <p
                  className='description'
                  data-aos='fade-up'
                  data-aos-easing='ease'
                  data-aos-duration='1000'
                  data-aos-delay='300'
                  data-aos-once='true'
                >
                  {introductionText}
                </p>
                <CallUsBtn />
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <div>
          {data.allStrapiServiceoverview.edges.map((document, i) => {
            const base = document.node.slug;
            return (
              <div key={i}>
                {document.node.servicedetails.map((document, i) => {
                  const slug = document.slug;
                  const name = document.name;
                  const introductionText = document.introductionText;
                  const image = document.image.childImageSharp.fluid;
                  return (
                    <div
                      key={i}
                      className='service-details'
                      data-aos='fade-up'
                      data-aos-easing='ease'
                      data-aos-duration='1000'
                      data-aos-delay='300'
                      data-aos-once='true'
                    >
                      <Link to={`/${base}/${slug}`} className='w-container'>
                        <h3 className='service-name'>{name}</h3>
                        <p className='description'>{introductionText}</p>
                        <div
                          className='arrow-right'
                          aria-label='Yellow right arrow button'
                          role='button'
                        />
                      </Link>
                      <Img fluid={image} alt={name} />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>
      <GetInTouch />
    </div>
  </Layout>
);

export default Specialities;

export const query = graphql`
  query specialities {
    allStrapiServiceoverview(filter: { name: { eq: "Specialities" } }) {
      edges {
        node {
          slug
          name
          introductionText
          servicedetails {
            slug
            name
            introductionText
            image {
              childImageSharp {
                fluid(maxWidth: 480) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`;
