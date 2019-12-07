import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Template from './'

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(filter: {frontmatter: {template: {regex: "/offer|projects/"}}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                metadata {
                  metadata_offer {
                    title
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => <Template {...allMarkdownRemark} />}
  />
)
