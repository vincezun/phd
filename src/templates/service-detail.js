import React from 'react';
import { graphql } from 'gatsby';

import '../styles/service-detail.scss';

import Layout from '../components/Layout/layout';
import Breadcrumb from '../components/Layout/breadcrumb';
import SEO from '../components/seo';
import Tools from '../components/tools';
import Testimonial from '../components/testimonial';
import GetInTouch from '../components/get-in-touch';
import AccountManager from '../components/account-manager';

import CallUsBtn from '../components/Button/button-2';

const ServiceDetailTemplate = ({ data }) => (
  <Layout>
    <div className="service-detail-wrapper">
      <section>
        <div className="hero-section w-container">
          <SEO title={data.sd.serviceoverview.name} />
          <Breadcrumb
            link={data.sd.serviceoverview.slug}
            name={`\u00A0\u00A0/\u00A0\u00A0${data.sd.serviceoverview.name}`}
            subLink={`/${data.sd.serviceoverview.slug}/${data.sd.slug}`}
            subName={data.sd.name}
          />
          <h1
            className="heading"
            data-aos="fade-down"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            {data.sd.name}
          </h1>
          <p
            className="description"
            data-aos="fade-down"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            {data.sd.introductionText}
          </p>
          <CallUsBtn />
        </div>
      </section>
      <section>
        <div className="tool-list">
          <p
            className="title"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            {data.sd.toolListHeading}
          </p>
          <p
            className="description"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-anchor=".title"
          >
            {data.sd.toolListText}
          </p>
          {data.sd.tools.map(document => (
            <Tools
              key={document.id}
              toolName={document.name}
              toolDescription={document.details}
              className="tool-details"
            />
          ))}
        </div>
      </section>
      <Testimonial
        quote={data.sd.testimonial.quote}
        client={data.sd.testimonial.name}
        company={data.sd.testimonial.company}
      />
      <GetInTouch />
      <AccountManager
        name={data.sd.accountmanager.name}
        emailAddress={data.sd.accountmanager.emailAddress}
        bio={data.sd.accountmanager.bio}
        facebookLink={data.sd.accountmanager.facebook}
        twitterLink={data.sd.accountmanager.twitter}
        linkedinLink={data.sd.accountmanager.linkedin}
        instagramLink={data.sd.accountmanager.instagram}
        img={data.img.childImageSharp.fluid}
      />
    </div>
  </Layout>
);

export default ServiceDetailTemplate;

export const query = graphql`
  query ServiceDetailTemplate($slug: String, $imagePath: String) {
    sd: strapiServicedetail(slug: { eq: $slug }) {
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
      accountmanager {
        name
        bio
        facebook
        twitter
        linkedin
        instagram
        emailAddress
      }
      tools {
        id
        name
        details
      }
      testimonial {
        quote
        name
        company
      }
    }
    img: file(relativePath: { eq: $imagePath }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
