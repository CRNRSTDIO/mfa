import React from 'react'
import { graphql } from 'gatsby'

export const ShowcaseTemplate = () => (
  <>Showcase</>
)

export default ({ data: { markdownRemark: { frontmatter } } }) => <ShowcaseTemplate {...frontmatter} />

export const showcaseQuery = graphql`
  query Showcase($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        template
      }
    }
  }
`
