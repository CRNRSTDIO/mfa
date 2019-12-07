import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Template from './'

export default props => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(frontmatter: {template: {eq: "standard"}}) {
          fields {
            slug
          }
        }
      }
    `}
    render={({ markdownRemark }) => <Template {...markdownRemark} {...props} />}
  />
)
