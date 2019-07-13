import React from 'react';
import { graphql } from 'gatsby';

import '../styles/training.scss';

import Layout from '../components/Layout/layout';
import Breadcrumb from '../components/Layout/breadcrumb';
import SEO from '../components/seo';
import GetInTouch from '../components/get-in-touch';
import AccountManager from '../components/account-manager';
import Testimonial from '../components/testimonial';
import Pricing from '../components/pricing';
import RiskAssessment from '../components/risk-asssessment';
import AvailableTraining from '../components/available-training';

import CallUsBtn from '../components/Button/button-2';

const Training = ({ data }) => (
  <Layout>
    <div className="training-wrapper">
      <section>
        <div
          className="hero-section w-container"
          aria-label="Plant Hire Division Training"
        >
          <SEO title="Training" />
          <Breadcrumb link="training" name="Training" subLink="#" />
          <h1
            className="heading"
            data-aos="fade-down"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Our consultants are fully trained and qualified
          </h1>
          <p
            className="description"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-anchor=".heading"
          >
            At Plant Hire Division we take great care in recruiting our health
            and safety consultants. They must be able to show competency,
            knowledge and practical skills acquired from working with businesses
            and be able to apply those skills across a range of business types.
          </p>
          <CallUsBtn />
        </div>
      </section>
      <section>
        <div className="industry-accredited w-container">
          <div
            className="introduction"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-anchor=".description"
          >
            <p className="title">Industry Accredited</p>
            <p className="description">
              They must also be qualified with at least full membership of the
              Institute of Occupational Safety and Health &#40;IOSH&#41; or the
              International Institute of Risk andSafety Management
              &#40;IIRSM&#41;. Our expectation is that our consultants work
              towards attaining chartered status. To maintain status with their
              professional body, PHd consultants must be able to show that they
              undertake Continuing Professional Development &#40;CPD&#41;. PHd
              ensures that they meet this requirement through regular routine
              training sessions which ensure that consultants are kept up to
              date with changes to legal requirements, guidance and best
              practice in the industries with which they deal.
            </p>
          </div>
          <div
            className="question-one"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <p className="question">
              Will they understand and know what is required of my business?
            </p>
            <p className="answer">
              Almost certainly; because of their business backgrounds and our
              own internal training and development arrangements our consultants
              will be able to apply their skills to your circumstances. In the
              rare event that they are uncertain you can be assured that they
              will take advice from within our consultancy circles. Our
              consultants come from such a wide variety of backgrounds,
              including for example from Government, manufacturing and
              installation. This pool of knowledge and practical expertise can
              always be tapped and used to ensure that you get the best
              available advice.
            </p>
          </div>
          <div
            className="question-two"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <p className="question">What will they do for me?</p>
            <p className="answer">
              Initially our consultants will visit your premises and evaluate
              your compliance with current health and safety legislation. They
              will ensure that you can demonstrate an effective safety
              management system that achieves and maintains compliance. Where
              you don’t come up to scratch they will provide you with a
              suggested action plan, supported by practical advice and
              documentation, to bring you back into compliance. At subsequent
              visits they will help you monitor the actions that have been taken
              and your continuing compliance, providing action plans and
              guidance as necessary. As a business owner or employer, you must
              hold regular risk assessments.It’s the law. Because if you don’t
              keep people in your organisation safe, you are responsible. That
              could mean a fine—or even prison.
            </p>
          </div>
        </div>
      </section>
      {data.st.edges.map(document => {
        const get = document.node;
        const id = get.id;
        const quote = get.quote;
        const name = get.name;
        const company = get.company;
        return (
          <Testimonial key={id} quote={quote} client={name} company={company} />
        );
      })}
      <RiskAssessment />
      <Pricing />
      <AvailableTraining />
      <GetInTouch />
      <AccountManager
        name={data.am.name}
        emailAddress={data.am.emailAddress}
        bio={data.am.bio}
        facebookLink={data.am.facebook}
        twitterLink={data.am.twitter}
        linkedinLink={data.am.linkedin}
        instagramLink={data.am.instagram}
        img={data.img.childImageSharp.fluid}
      />
    </div>
  </Layout>
);

export default Training;

export const query = graphql`
  query testimonialTraining {
    st: allStrapiTestimonial(filter: { name: { eq: "A. Customer" } }) {
      edges {
        node {
          id
          quote
          name
          company
        }
      }
    }
    am: strapiAccountmanager(name: { eq: "Britney" }) {
      name
      bio
      facebook
      twitter
      linkedin
      instagram
      emailAddress
    }
    img: file(relativePath: { eq: "britney.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
