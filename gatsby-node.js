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

  const getServiceList = makeRequest(
    graphql,
    `
    {
      allStrapiServicelist {
        edges {
          node {
            Slug
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiServicelist.edges.forEach(({ node }) => {
      createPage({
        path: `plant-hire/${node.Slug}`,
        component: path.resolve(`src/templates/service-list.js`),
        context: {
          Slug: node.Slug
        }
      });
    });
  });

  // Query for articles nodes to use in creating pages.
  return getServiceList;
};
