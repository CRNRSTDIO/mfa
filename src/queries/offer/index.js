import React from 'react'
import { graphql } from 'gatsby'
import Template from '../../templates/offer'

export default ({ data: { markdownRemark: { frontmatter } } }) => <Template {...frontmatter} />

export const query = graphql`
  {
    markdownRemark(frontmatter: {template: {eq: "offer"}}) {
      frontmatter {
        seo {
          title,
          descr
        }
        offer_section_0 {
          heading
        }
      }
    }
  }
`
