import React from 'react'
import { graphql } from 'gatsby'
import Template from '../../templates/homepage'

export default ({ data: { markdownRemark: { frontmatter } } }) => <Template {...frontmatter} />

export const query = graphql`
  query {
    markdownRemark(frontmatter: {template: {eq: "homepage"}}) {
      frontmatter {
        seo {
          title,
          descr
        }
        homepage_section_0 {
          slide {
            heading
            subheading
            image {
              childImageSharp {
                fluid(maxWidth: 2048) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            link
            alt
            tags {
              tag
            }
          }
        }
        homepage_section_1 {
          label
          heading
          text
          aside
        }
        homepage_section_2 {
          label
          heading
          text
        }
        homepage_section_3 {
          heading
          image {
            childImageSharp {
              fluid(maxWidth: 2048) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
