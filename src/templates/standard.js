import React from 'react'
import { graphql } from 'gatsby'

export const StandardTemplate = () => (
  <>Standard</>
)

export default ({ data: { markdownRemark: { frontmatter } } }) => <StandardTemplate {...frontmatter} />

export const standardQuery = graphql`
  query Standard {
    markdownRemark(frontmatter: { template: { eq: "standard" } }) {
      frontmatter {
        template
      }
    }
  }
`
