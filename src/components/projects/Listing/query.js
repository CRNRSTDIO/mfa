import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Template from '../../../containers/shared/CarouselCenter'

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
                showcase_main_image {
                  alt
                  image {
                    childImageSharp {
                      fluid(maxWidth: 1024) {
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
