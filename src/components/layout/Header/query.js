import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Template from './'

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(filter: {frontmatter: {template: {ne: "showcase"}}}, sort: {fields: id}) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                template
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => <Template {...allMarkdownRemark} />}
  />
)
