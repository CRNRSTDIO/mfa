import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Template from './'

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(filter: {frontmatter: {template: {regex: "/standard|process|about/"}}}) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                metadata {
                  metadata_listing {
                    image {
                      childImageSharp {
                        fluid(maxWidth: 600) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    alt
                    title
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => <Template {...allMarkdownRemark} {...props} />}
  />
)
