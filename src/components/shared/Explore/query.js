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
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => <Template {...allMarkdownRemark} />}
  />
)
