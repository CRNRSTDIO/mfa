import React from 'react'
import { graphql } from 'gatsby'

export const ProcessTemplate = () => (
  <>Process</>
)

export default ({ data: { markdownRemark: { frontmatter } } }) => <ProcessTemplate {...frontmatter} />

export const processQuery = graphql`
  query Process {
    markdownRemark(frontmatter: { template: { eq: "process" } }) {
      frontmatter {
        template
      }
    }
  }
`
