const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: `Plant Hire Division`,
    description: `PHd provide plant, MEWPS, tool, accommodation and waste solutions to site's through out the UK and Europen Union. With a network of approved suppliers whom we know are up to the job and meet the high standards we demand.`,
    author: `Vince Zuño <vincezun@yahoo.com> (https://vincezun.com)`,
    social: {
      twitter: `@vincezun`
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          autoprefixer({
            grid: true,
            flexbox: true
          })
        ]
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? 'https://plant-hire-division.herokuapp.com'
          : 'http://localhost:1337',
        contentTypes: [
          `serviceoverview`,
          `servicedetail`,
          `testimonial`,
          `casestudy`,
          `resource`,
          `accountmanager`
        ],
        queryLimit: 5000
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Plant Hire Division`,
        short_name: `PHd`,
        start_url: `/`,
        background_color: `#101010`,
        theme_color: `#101010`,
        display: `minimal-ui`,
        icon: `src/images/phd.png`
      }
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-remove-fingerprints`
  ]
};
