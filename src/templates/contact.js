import React from 'react'
import { graphql } from 'gatsby'

export const ContactTemplate = () => (
  <>Contact</>
)

export default ({ data: { markdownRemark: { frontmatter } } }) => <ContactTemplate {...frontmatter} />

export const contactQuery = graphql`
  query Contact {
    markdownRemark(frontmatter: { template: { eq: "contact" } }) {
      frontmatter {
        template
      }
    }
  }
`
