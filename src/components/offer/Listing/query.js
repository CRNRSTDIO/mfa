import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Template from './'

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(filter: {frontmatter: {template: {eq: "showcase"}}}) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                showcase_title
                showcase_isSold
                showcase_year
                showcase_tags {
                  tag
                }
                showcase_main_image {
                  alt
                  image {
                    childImageSharp {
                      fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                      }
                    }
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
