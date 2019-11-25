import React from 'react'
import { graphql } from 'gatsby'
import Template from '../../templates/process'

export default ({ data: { markdownRemark: { frontmatter } } }) => <Template {...frontmatter} />

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {template: {eq: "standard"}}}) {
      edges {
        node {
          frontmatter {
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
                  fluid(maxWidth: 1200){
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
    }
  }
`
