import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Template from './'

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(filter: {frontmatter: {template: {ne: "showcase"}}}, sort: {fields: frontmatter___order}) {
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
