import React from 'react'
import { graphql } from 'gatsby'
import Template from '../../templates/contact'

export default ({ data: { markdownRemark: { frontmatter } } }) => <Template {...frontmatter} />

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {template: {eq: "standard"}}}) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
