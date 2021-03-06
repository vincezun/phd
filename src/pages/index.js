import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout/layout';
import SEO from '../components/seo';
import GetInTouch from '../components/get-in-touch';
import Testimonial from '../components/testimonial';
import '../styles/index.scss';

import whiteCirle from '../images/white-circle.png';
import whiteTileHorizontal from '../images/white-tile-horizontal.png';
import whiteTileVertical from '../images/white-tile-vertical.png';
import forklift from '../images/forklift.png';
import scissorlift from '../images/scissorlift.png';
import amIcon1 from '../images/am-icon-1.png';
import amIcon2 from '../images/am-icon-2.png';
import amIcon3 from '../images/am-icon-3.png';
import accountManagers from '../images/account-managers.png';
import arrowDownYellow from '../images/arrow-down-yellow.png';

const Home = ({ data }) => (
  <Layout>
    <SEO title='Home' />
    <div className='home-wrapper'>
      <section>
        <div
          className='hero-section w-container'
          role='img'
          aria-label='Plant Hire Division Facility'
        >
          <h1
            className='heading'
            data-aos='fade-down'
            data-aos-easing='ease'
            data-aos-duration='1000'
            data-aos-delay='300'
            data-aos-offset='5'
          >
            Ensuring your project remains up and running
          </h1>
          <p
            className='description'
            data-aos='fade-up'
            data-aos-easing='ease'
            data-aos-duration='1000'
            data-aos-delay='300'
          >
            PHd provides plant, MEWPS, tool, accommodation and waste solutions
            to sites throughout the UK and Europen Union. With a network of
            approved suppliers whom we know are up to the job and meet the high
            standards we demand.
          </p>
          <img
            src={arrowDownYellow}
            alt='Arrow down yellow'
            className='arrow-down-yellow'
            data-aos='fade'
            data-aos-easing='ease'
            data-aos-duration='1000'
            data-aos-delay='300'
          />
        </div>
      </section>
      <section>
        <div className='main-section'>
          <p
            className='title'
            data-aos='fade'
            data-aos-easing='ease'
            data-aos-duration='1000'
            data-aos-delay='300'
          >
            OUR SERVICES
          </p>
          <div className='row-1'>
            <figure
              className='plant-hire services-overviews'
              data-aos='fade-up'
              data-aos-easing='ease'
              data-aos-duration='1000'
              data-aos-delay='300'
              data-aos-anchor-placement='top'
            >
              <img
                src={whiteCirle}
                alt='White Circle'
                className='white-circle'
              />
              <img
                src={whiteTileVertical}
                alt='White Tile Vertical'
                className='white-tile-vertical'
              />
              <Link to='/plant-hire'>
                <div className='w-container'>
                  <figcaption className='sub-title'>Plant Hire</figcaption>
                  <div
                    className='arrow-right'
                    aria-label='Yellow right arrow button'
                    role='button'
                  />
                </div>
              </Link>
            </figure>
            <figure
              className='working-platforms services-overviews'
              data-aos='fade-up'
              data-aos-easing='ease'
              data-aos-duration='1000'
              data-aos-delay='300'
              data-aos-anchor-placement='top'
            >
              <img
                src={scissorlift}
                alt='Scissorlift'
                className='scissor-lift'
              />
              <Link to='/working-platforms'>
                <div className='w-container'>
                  <figcaption className='sub-title'>
                    Working Platforms
                  </figcaption>
                  <div
                    className='arrow-right'
                    aria-label='Black right arrow button'
                    role='button'
                  />
                </div>
              </Link>
            </figure>
          </div>
          <div className='row-2'>
            <figure
              className='specialities services-overviews'
              data-aos='fade-up'
              data-aos-easing='ease'
              data-aos-duration='1000'
              data-aos-delay='300'
              data-aos-anchor-placement='top'
            >
              <img src={forklift} alt='Forklift' className='forklift' />
              <Link to='/specialities'>
                <div className='w-container'>
                  <figcaption className='sub-title'>Specialities</figcaption>
                  <div
                    className='arrow-right'
                    aria-label='Black right arrow button'
                    role='button'
                  />
                </div>
              </Link>
            </figure>
            <figure
              className='tool-hire services-overviews'
              data-aos='fade-up'
              data-aos-easing='ease'
              data-aos-duration='1000'
              data-aos-delay='300'
              data-aos-anchor-placement='top'
            >
              <img
                src={whiteCirle}
                alt='White Circle'
                className='white-circle'
              />
              <img
                src={whiteTileHorizontal}
                alt='White Tile Horizontal'
                className='white-tile-horizontal'
              />
              <Link to='/tool-hire'>
                <div className='w-container'>
                  <figcaption className='sub-title'>Tool Hire</figcaption>
                  <div
                    className='arrow-right'
                    aria-label='Yellow right arrow button'
                    role='button'
                  />
                </div>
              </Link>
            </figure>
          </div>
        </div>
      </section>
      <GetInTouch />
      <section>
        <div className='account-managers-section w-container'>
          <p
            className='sub-heading'
            data-aos='fade'
            data-aos-easing='ease'
            data-aos-duration='1000'
            data-aos-delay='300'
          >
            HOW WE WORK
          </p>
          <p
            className='heading'
            data-aos='fade-up'
            data-aos-easing='ease'
            data-aos-duration='1000'
            data-aos-delay='300'
          >
            Dedicated Account Managers
          </p>
          <figure
            className='problem dedicated-am'
            data-aos='fade-up'
            data-aos-easing='ease'
            data-aos-duration='1000'
            data-aos-delay='300'
          >
            <div className='w-title'>
              <img
                src={amIcon1}
                alt='Account Manager icon one'
                className='am-one'
              />
              <figcaption className='title'>Problem</figcaption>
            </div>
            <p className='description'>
              Donec sed odio duum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculusonec sed.
            </p>
          </figure>
          <figure
            className='solution dedicated-am'
            data-aos='fade-up'
            data-aos-easing='ease'
            data-aos-duration='1000'
            data-aos-delay='300'
          >
            <div className='w-title'>
              <img
                src={amIcon2}
                alt='Account Manager icon two'
                className='am-two'
              />
              <figcaption className='title'>Solution</figcaption>
            </div>
            <p className='description'>
              Donec sed odio duum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculusonec sed.
            </p>
          </figure>
          <figure
            className='delivery dedicated-am'
            data-aos='fade-up'
            data-aos-easing='ease'
            data-aos-duration='1000'
            data-aos-delay='300'
          >
            <div className='w-title'>
              <img
                src={amIcon3}
                alt='Account Manager icon three'
                className='am-three'
              />
              <figcaption className='title'>Delivery</figcaption>
            </div>
            <p className='description'>
              Donec sed odio duum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculusonec sed.
            </p>
          </figure>
          <img
            src={accountManagers}
            alt='Account Managers group'
            className='account-managers'
            data-aos='fade'
            data-aos-easing='ease'
            data-aos-duration='1000'
            data-aos-delay='300'
          />
        </div>
      </section>
      {data.allStrapiTestimonial.edges.map(document => {
        const get = document.node;
        const id = get.id;
        const quote = get.quote;
        const name = get.name;
        const company = get.company;
        return (
          <Testimonial key={id} quote={quote} client={name} company={company} />
        );
      })}
    </div>
  </Layout>
);

export default Home;

export const query = graphql`
  query testimonialHome {
    allStrapiTestimonial(filter: { name: { eq: "A. Customer" } }) {
      edges {
        node {
          id
          quote
          name
          company
        }
      }
    }
  }
`;
