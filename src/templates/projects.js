import React from 'react'
import { graphql } from 'gatsby'

export const ProjectsTemplate = () => (
  <>Projects</>
)

export default ({ data: { markdownRemark: { frontmatter } } }) => <ProjectsTemplate {...frontmatter} />

export const projectsQuery = graphql`
  query Projects {
    markdownRemark(frontmatter: { template: { eq: "projects" } }) {
      frontmatter {
        template
      }
    }
  }
`
