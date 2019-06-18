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
          link={data.sd.serviceoverview.Slug}
          name={`\u00A0\u00A0/\u00A0\u00A0${data.sd.serviceoverview.Name}`}
          subLink={`${data.sd.serviceoverview.Slug}/${data.sd.Slug}`}
          subName={data.sd.Name}
        />
        <p>{data.sd.serviceoverview.Name}</p>
        <h1>{data.sd.Name}</h1>
        {/* <h2>{data.strapiServicedetail.accountmanager.Name}</h2>
        <p>{data.strapiServicedetail.accountmanager.Bio}</p> */}
        <p>{data.am.Name}</p>
        <Img fluid={data.am.Image.childImageSharp.fluid} />
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
  query ServiceDetailTemplate($Slug: String, $AM: String) {
    sd: strapiServicedetail(Slug: { eq: $Slug }) {
      Slug
      Name
      Introduction_Text
      Tool_List_Heading
      Tool_List_Text
      serviceoverview {
        Name
        Slug
        Introduction_Text
      }
      testimonial {
        Quote
        Name
        Company
      }
    }
    am: strapiAccountmanager(Name: { eq: $AM }) {
      Name
      Bio
      Image {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  }
`;
