import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Template from '../../../containers/shared/Carousel'

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(filter: {frontmatter: {template: {regex: "/about|process|standard/"}}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                metadata {
                  metadata_standard {
                    alt
                    image {
                      childImageSharp {
                        fluid(maxWidth: 800) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    heading
                    text
                    title
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => <Template {...allMarkdownRemark} />}
  />
)
