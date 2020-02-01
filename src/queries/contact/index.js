import React from 'react'
import { graphql } from 'gatsby'
import Template from '../../templates/contact'

export default ({ data: { markdownRemark: { frontmatter } } }) => <Template {...frontmatter} />

export const query = graphql`
  {
    markdownRemark(frontmatter: {template: {eq: "contact"}}) {
      frontmatter {
        seo {
          title,
          descr
        }
        contact_section_0 {
          heading
          phone
          email
          address
        }
      }
    }
  }
`
