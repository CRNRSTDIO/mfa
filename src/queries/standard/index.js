import React from 'react'
import { graphql } from 'gatsby'
import Template from '../../templates/standard'

export default ({ data: { markdownRemark: { id, frontmatter } } }) => <Template id={id} {...frontmatter} />

export const query = graphql`
  {
    markdownRemark(frontmatter: {template: {eq: "standard"}}) {
      id
      frontmatter {
        seo {
          title,
          descr
        }
        standard_section_0 {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 2048) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
        standard_sections {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 2048){
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          text
        }
      }
    }
  }
`
