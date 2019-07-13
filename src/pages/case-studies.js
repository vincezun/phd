import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import '../styles/case-studies.scss';

import Layout from '../components/Layout/layout';
import Breadcrumb from '../components/Layout/breadcrumb';
import SEO from '../components/seo';
import GetInTouch from '../components/get-in-touch';

import CallUsBtn from '../components/Button/button-2';

const CaseStudies = ({ data }) => (
  <Layout>
    <div className="case-studies-wrapper">
      <section>
        <div className="hero-section w-container">
          <SEO title="Case Studies" />
          <Breadcrumb link="case-studies" name="Case Studies" subLink="#" />
          <h1
            className="heading"
            data-aos="fade-down"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Case Studies
          </h1>
          <p
            className="description"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-anchor=".heading"
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
        <div>
          {data.allStrapiCasestudy.edges.map(document => {
            const get = document.node;
            const id = get.id;
            const slug = get.slug;
            const name = get.name;
            const introduction = get.introduction;
            const logo = get.logo.childImageSharp.fixed;
            return (
              <div
                key={id}
                className="case-studies-details"
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <Link to={`/case-studies/${slug}`} className="w-container">
                  <p className="case-study-name">{name}</p>
                  <p className="description">{introduction}</p>
                  <div
                    className="arrow-right"
                    aria-label="Yellow right arrow button"
                    role="button"
                  />
                </Link>
                <div className="yellow-bg">
                  <Img fixed={logo} alt={name} className="logo" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <GetInTouch />
    </div>
  </Layout>
);

export default CaseStudies;

export const query = graphql`
  query caseStudies {
    allStrapiCasestudy {
      edges {
        node {
          id
          slug
          name
          introduction
          logo {
            childImageSharp {
              fixed(width: 177) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
        }
      }
    }
  }
`;
