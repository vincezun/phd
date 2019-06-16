import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';

const ServiceListTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiServicelist.Name}</h1>
  </Layout>
);

export default ServiceListTemplate;

export const query = graphql`
  query ServiceListTemplate($Slug: String!) {
    strapiServicelist(Slug: { eq: $Slug }) {
      Name
    }
  }
`;
