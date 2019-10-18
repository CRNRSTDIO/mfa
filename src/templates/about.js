import React from 'react'
import { graphql } from 'gatsby'

export const AboutTemplate = () => (
  <>About</>
)

export default ({ data: { markdownRemark: { frontmatter } } }) => <AboutTemplate {...frontmatter} />

export const aboutQuery = graphql`
  query About {
    markdownRemark(frontmatter: { template: { eq: "about" } }) {
      frontmatter {
        template
      }
    }
  }
`
