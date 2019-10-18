/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions: { createPage }, graphql }) => graphql(`
  {
    allMarkdownRemark(limit: 100) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            template
          }
        }
      }
    }
  }
`).then(result => {
  if (result.errors) {
    result.errors.forEach(e => console.error(e.toString()))
    return Promise.reject(result.errors)
  }

  const pages = result.data.allMarkdownRemark.edges

  pages.forEach(({ node: { id, fields: { slug }, frontmatter: { template } } }) => {
    createPage({
      path: slug,
      component: path.resolve(
        `src/templates/${template}.js`
      ),
      context: {
        id
      }
    })
  })
})

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  fmImagesToRelative(node)

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: 'slug',
      node,
      value
    })
  }
}
