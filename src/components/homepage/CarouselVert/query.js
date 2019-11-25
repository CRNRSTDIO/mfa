import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Template from '../../../containers/homepage/CarouselVert'

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(filter: {frontmatter: {template: {eq: "showcase"}}}) {
          edges {
            node {
              frontmatter {
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
                showcase_isSold
                showcase_title
                showcase_year
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => <Template {...allMarkdownRemark} />}
  />
)
