import React from 'react';
import { graphql } from 'gatsby';

import '../styles/about-us.scss';

import Layout from '../components/Layout/layout';
import Breadcrumb from '../components/Layout/breadcrumb';
import SEO from '../components/seo';
import Testimonial from '../components/testimonial';
import GetInTouch from '../components/get-in-touch';
import AccountManager from '../components/account-manager';

import CallUsBtn from '../components/Button/button-2';
import fancyArrow from '../images/fancy-arrow.png';
import whiteCirle from '../images/white-circle.png';
import whiteTileHorizontal from '../images/white-tile-horizontal.png';
import whiteTileVertical from '../images/white-tile-vertical.png';

const AboutUs = ({ data }) => (
  <Layout>
    <div className="about-us-wrapper">
      <section>
        <div
          className="hero-section w-container"
          aria-label="Plant Hire Division Services"
        >
          <SEO title="About Us" />
          <Breadcrumb link="about-us" name="About Us" subLink="" subName="" />
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
            About Us
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
      <section>
        <div className="national-coverage">
          <p
            className="title"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-offset="5"
          >
            National Coverage
          </p>
          <p
            className="description"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-anchor=".title"
          >
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi
            erat porttitor ligula, eget lacinia odio sem nec elit. Aenean
            lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Curabitur blandit tempus
            porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum.
          </p>

          <figure
            className="list"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img src={fancyArrow} alt="Arrow" className="fancy-arrow" />
            <figcaption className="name">
              Malesuada Dapibus Elit Vestibulum Ipsum
            </figcaption>
          </figure>
          <figure
            className="list"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img src={fancyArrow} alt="Arrow" className="fancy-arrow" />
            <figcaption className="name">
              Mattis Nibh Fusce Dolor Sit
            </figcaption>
          </figure>
          <figure
            className="list"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img src={fancyArrow} alt="Arrow" className="fancy-arrow" />
            <figcaption className="name">Dolor Venenatis Sit</figcaption>
          </figure>
          <figure
            className="list"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img src={fancyArrow} alt="Arrow" className="fancy-arrow" />
            <figcaption className="name">
              Mattis Risus Ridiculus Fermentum Magna
            </figcaption>
          </figure>
          <figure
            className="list"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img src={fancyArrow} alt="Arrow" className="fancy-arrow" />
            <figcaption className="name">
              Sem Condimentum Tristique Fringilla Parturient
            </figcaption>
          </figure>
          <figure
            className="list"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img src={fancyArrow} alt="Arrow" className="fancy-arrow" />
            <figcaption className="name">Dolor Venenatis Sit</figcaption>
          </figure>
          <figure
            className="list"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img src={fancyArrow} alt="Arrow" className="fancy-arrow" />
            <figcaption className="name">
              Mattis Nibh Fusce Dolor Sit
            </figcaption>
          </figure>
          <figure
            className="list"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img src={fancyArrow} alt="Arrow" className="fancy-arrow" />
            <figcaption className="name">
              Parturient Inceptos Euismod Dolor Etiam
            </figcaption>
          </figure>
          <figure
            className="list"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img src={fancyArrow} alt="Arrow" className="fancy-arrow" />
            <figcaption className="name">Fusce Sem Euismod Dolor</figcaption>
          </figure>
          <figure
            className="list"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img src={fancyArrow} alt="Arrow" className="fancy-arrow" />
            <figcaption className="name">
              Sem Condimentum Tristique Fringilla Parturient
            </figcaption>
          </figure>
        </div>
      </section>
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

export default AboutUs;

export const query = graphql`
  query testimonialAboutUs {
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
