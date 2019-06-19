import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout/layout';
import Breadcrumb from '../components/Layout/breadcrumb';

const ServiceDetailTemplate = ({ data }) => (
  <Layout>
    <div className='service-detail-wrapper'>
      <section>
        <Breadcrumb
          link={data.strapiServicedetail.serviceoverview.slug}
          name={`\u00A0\u00A0/\u00A0\u00A0${
            data.strapiServicedetail.serviceoverview.name
          }`}
          subLink={`${data.strapiServicedetail.serviceoverview.slug}/${
            data.strapiServicedetail.slug
          }`}
          subName={data.strapiServicedetail.name}
        />
        <h1>{data.strapiServicedetail.name}</h1>

        {data.strapiServicedetail.accountmanagers.map((document, i) => (
          <div key={i}>
            <h2>{document.name}</h2>
            <h2>{document.bio}</h2>
            <Img fluid={document.image.childImageSharp.fluid} />
          </div>
        ))}
      </section>
    </div>
  </Layout>
);

export default ServiceDetailTemplate;

export const query = graphql`
  query ServiceDetailTemplate($slug: String) {
    strapiServicedetail(slug: { eq: $slug }) {
      slug
      name
      introductionText
      toolListHeading
      toolListText
      serviceoverview {
        name
        slug
        introductionText
      }
      accountmanagers {
        name
        bio
        image {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;
