import React from 'react'
import { graphql } from 'gatsby'
import Template from '../../templates/offer'

export default ({ data: { markdownRemark: { frontmatter } } }) => <Template {...frontmatter} />

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {template: {eq: "offer"}}}) {
      edges {
        node {
          frontmatter {
            offer_section_0 {
              heading
            }
          }
        }
      }
    }
  }
`
