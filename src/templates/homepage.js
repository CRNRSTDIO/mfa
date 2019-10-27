import React from 'react'
import { graphql } from 'gatsby'
import { Carousel } from '../containers/homepage'
import { Carousel as SharedCarousel } from '../containers/shared'

export const HomepageTemplate = () => (
  <>
    <Carousel />
    <SharedCarousel />
  </>
)

export default ({ data: { markdownRemark: { frontmatter } } }) => <HomepageTemplate {...frontmatter} />

export const homepageQuery = graphql`
  query Homepage {
    markdownRemark(frontmatter: { template: { eq: "homepage" } }) {
      frontmatter {
        template
      }
    }
  }
`
