import React from 'react'
import { graphql } from 'gatsby'

export const HomepageTemplate = () => (
  <>Homepage</>
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
