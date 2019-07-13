import React from 'react';
import { graphql } from 'gatsby';

import '../styles/case-study.scss';

import Layout from '../components/Layout/layout';
import Breadcrumb from '../components/Layout/breadcrumb';
import SEO from '../components/seo';
import Testimonial from '../components/testimonial';
import SolutionDetail from '../components/solution-details';
import GetInTouch from '../components/get-in-touch';
import AccountManager from '../components/account-manager';

import whiteCirle from '../images/white-circle.png';
import whiteTileHorizontal from '../images/white-tile-horizontal.png';
import whiteTileVertical from '../images/white-tile-vertical.png';

import CallUsBtn from '../components/Button/button-2';

const CaseStudyTemplate = ({ data }) => (
  <Layout>
    <div className="case-study-wrapper">
      <section>
        <div className="hero-section w-container">
          <SEO title="Case Studies" />
          <Breadcrumb
            link="case-studies"
            name={`\u00A0\u00A0/\u00A0\u00A0 Case Studies`}
            subLink={`case-studies/${data.cs.slug}`}
            subName={data.cs.name}
          />
          <img src={whiteCirle} alt="White Circle" className="white-circle" />
          <img
            src={whiteTileHorizontal}
            alt="White Tile Horizontal"
            className="white-tile-horizontal"
          />
          <img
            src={whiteTileVertical}
            alt="White Tile Vertical"
            className="white-tile-vertical"
          />
          <h1
            className="heading"
            data-aos="fade-down"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            {data.cs.name}
          </h1>
          <p
            className="description"
            data-aos="fade-down"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-anchor=".heading"
          >
            {data.cs.introduction}
          </p>
          <CallUsBtn />
        </div>
      </section>
      <section>
        <div className="case-study-details">
          <p
            className="sub-title"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            THE BRIEF
          </p>
          <p
            className="title"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-anchor=".sub-title"
          >
            What Adidas Needed
          </p>
          <p
            className="description"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-anchor=".title"
          >
            {data.cs.details}
          </p>
        </div>
      </section>
      <Testimonial
        quote={data.cs.testimonial.quote}
        client={data.cs.testimonial.name}
        company={data.cs.testimonial.company}
      />
      <SolutionDetail />
      <GetInTouch />
      <AccountManager
        name={data.cs.accountmanager.name}
        emailAddress={data.cs.accountmanager.emailAddress}
        bio={data.cs.accountmanager.bio}
        facebookLink={data.cs.accountmanager.facebook}
        twitterLink={data.cs.accountmanager.twitter}
        linkedinLink={data.cs.accountmanager.linkedin}
        instagramLink={data.cs.accountmanager.instagram}
        img={data.img.childImageSharp.fluid}
      />
    </div>
  </Layout>
);

export default CaseStudyTemplate;

export const query = graphql`
  query CaseStudyTemplate($slug: String, $imagePath: String) {
    cs: strapiCasestudy(slug: { eq: $slug }) {
      slug
      name
      introduction
      details
      logo {
        childImageSharp {
          fixed(width: 177) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
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
