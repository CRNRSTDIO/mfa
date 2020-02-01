import React from 'react'
import { graphql } from 'gatsby'
import Template from '../../templates/about'

export default ({ data: { markdownRemark: { id, frontmatter } } }) => <Template id={id} {...frontmatter} />

export const query = graphql`
  {
    markdownRemark(frontmatter: {template: {eq: "about"}}) {
      id
      frontmatter {
        seo {
          title,
          descr
        }
        mfa_section_0 {
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
        mfa_sections {
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
