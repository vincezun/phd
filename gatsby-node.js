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
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

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
    // Create pages for each article.
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

  // Query for articles nodes to use in creating pages.
  return getServiceDetails;
};
