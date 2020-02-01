import React from 'react'
import { graphql } from 'gatsby'
import Template from '../../templates/process'

export default ({ data: { markdownRemark: { id, frontmatter } } }) => <Template id={id} {...frontmatter} />

export const query = graphql`
  {
    markdownRemark(frontmatter: {template: {eq: "process"}}) {
      id
      frontmatter {
        seo {
          title,
          descr
        }
        process_section_0 {
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
        process_sections {
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
