import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import '../styles/plant-hire.scss';

import Layout from '../components/Layout/layout';
import Breadcrumb from '../components/Layout/breadcrumb';
import SEO from '../components/seo';
import GetInTouch from '../components/get-in-touch';

import CallUsBtn from '../components/Button/button-2';

const PlantHire = ({ data }) => (
  <Layout>
    <SEO title='Plant Hire' />
    <div className='plant-hire-wrapper'>
      <section>
        <div className='hero-section w-container'>
          <Breadcrumb link='/plant-hire' name='PLANT HIRE' />
          {data.allStrapiServiceoverview.edges.map((document, i) => (
            <div key={i}>
              <h1 className='heading'>{document.node.Name}</h1>
              <p className='description'>{document.node.Introduction_Text}</p>
              <CallUsBtn />
            </div>
          ))}
        </div>
      </section>
      <section>
        <div>
          {data.allStrapiServiceoverview.edges.map((document, i) => (
            <div key={i}>
              {document.node.servicelists.map((document, i) => (
                <div key={i} className='plant-hire-details'>
                  <Link to={`/${document.id}`} className='w-container'>
                    <h3 className='service-name'>{document.Name}</h3>
                    <p className='description'>{document.Introduction_Text}</p>
                    <div
                      className='arrow-right'
                      aria-label='Yellow right arrow button'
                      role='button'
                    />
                  </Link>
                  <Img
                    fluid={document.Image.childImageSharp.fluid}
                    alt={document.Name}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <GetInTouch />
    </div>
  </Layout>
);

export default PlantHire;

export const query = graphql`
  query myQquery {
    allStrapiServiceoverview(filter: { Name: { eq: "Plant Hire" } }) {
      edges {
        node {
          Name
          Introduction_Text
          servicelists {
            id
            Name
            Introduction_Text
            Image {
              childImageSharp {
                fluid(maxWidth: 480) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`;
