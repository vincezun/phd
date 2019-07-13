const path = require(`path`);

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        return result;
      })
    );
  });

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getServiceDetails = makeRequest(
    graphql,
    `
    {
      allStrapiServicedetail {
        edges {
          node {
            slug
            serviceoverview {
              slug
            }
            accountmanager {
              imagePath
            }
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each service overview.
    result.data.allStrapiServicedetail.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.serviceoverview.slug}/${node.slug}`,
        component: path.resolve(`src/templates/service-detail.js`),
        context: {
          slug: node.slug,
          imagePath: node.accountmanager.imagePath
        }
      });
    });
  });

  const getCaseStudies = makeRequest(
    graphql,
    `
    {
      allStrapiCasestudy {
        edges {
          node {
            slug
            accountmanager {
              imagePath
            }
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each case study.
    result.data.allStrapiCasestudy.edges.forEach(({ node }) => {
      createPage({
        path: `/case-studies/${node.slug}`,
        component: path.resolve(`src/templates/case-study.js`),
        context: {
          slug: node.slug,
          imagePath: node.accountmanager.imagePath
        }
      });
    });
  });

  // Query for service overview and case study nodes to use in creating pages.
  return Promise.all([getServiceDetails, getCaseStudies]);
};
