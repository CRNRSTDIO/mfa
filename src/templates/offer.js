import React from 'react'
import { graphql } from 'gatsby'

export const OfferTemplate = () => (
  <>Offer</>
)

export default ({ data: { markdownRemark: { frontmatter } } }) => <OfferTemplate {...frontmatter} />

export const offerQuery = graphql`
  query Offer {
    markdownRemark(frontmatter: { template: { eq: "offer" } }) {
      frontmatter {
        template
      }
    }
  }
`
