const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Plant Hire Division',
    description:
      "PHd provide plant, MEWPS, tool, accommodation and waste solutions to site's through out the UK and Europen Union. With a network of approved suppliers whom we know are up to the job and meet the high standards we demand.",
    author: '@vincezun'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          autoprefixer({
            grid: true,
            flexbox: true
          })
        ]
      }
    }

    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: `Plant Hire Division`,
    //     short_name: `PHd`,
    //     start_url: `/`,
    //     // background_color: `#1d1f21`,
    //     // theme_color: `#1d1f21`,
    //     display: `standalone`,
    //     orientation: `landscape`
    //     // icon: `src/images/terminal.png`
    //   }
    // }
  ]
};
