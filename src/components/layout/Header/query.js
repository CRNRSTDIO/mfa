import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Template from './'

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(sort: {fields: frontmatter___order}, limit: 7) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => <Template {...allMarkdownRemark} />}
  />
)
