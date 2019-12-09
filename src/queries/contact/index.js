import React from 'react'
import { graphql } from 'gatsby'
import Template from '../../templates/contact'

export default ({ data: { markdownRemark: { frontmatter } } }) => <Template {...frontmatter} />

export const query = graphql`
  {
    markdownRemark(frontmatter: {template: {eq: "standard"}}) {
      frontmatter {
        title
      }
    }
  }
`
