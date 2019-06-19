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

/* 
ACCOUNT MANAGERS
Account Manager has many Service Details:

--The childImageSharp does not show if the content type is a child

So in order to fetch it correctly,
I used AM context in gatsby node and AM alias in service template to fetch 
the data of Account Managers based on the slug fetch from the service 
detail in gatsby node. But it has a bug, idk whats causing it. The bug
is some of the image of account manager does not show instead the image of
the service detail appear. Also in service detail, sometimes the image of
account managers appear.
-----------------------------------------------------------------------

Many to Many:
I cant fetch the data. But this is the correct relationship to fetch the data.

TOOLS 
Many to Many:
I cant fetch the data. But this is the correct relationship to fetch the data.

Tool has many Service Details:
This cant be done because the relationship does not open to have the service
detail many tools. One tool for every service detail. So many to many will apply.

*/

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
