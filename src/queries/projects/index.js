import React from 'react'
import { graphql } from 'gatsby'
import Template from '../../templates/projects'

export default ({ data: { markdownRemark: { frontmatter } } }) => <Template {...frontmatter} />

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {template: {eq: "projects"}}}) {
      edges {
        node {
          frontmatter {
            projects_section_0 {
              heading
              image {
                childImageSharp {
                  fluid(maxWidth: 2048) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            projects_section_1 {
              heading
              text
            }
            projects_section_2 {
              heading
            }
            projects_section_3 {
              heading
              steps {
                step
              }
              text
            }
            projects_section_4 {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 640) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              heading
              text
            }
            projects_section_5 {
              heading
              details {
                data
                heading
              }
              opinions {
                alt
                image {
                  childImageSharp {
                    fluid(maxWidth: 640) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                link
                subtext
                text
              }
              text
            }
          }
        }
      }
    }
  }
`
