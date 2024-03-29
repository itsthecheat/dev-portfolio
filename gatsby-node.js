const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


 exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allProjectsYaml {
        edges {
          node {
            slug
      }
    }
  }
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
     }
}
  `)
result.data.allProjectsYaml.edges.forEach(({ node }) => {
  createPage({
    path: node.slug,
    component: path.resolve(`./src/templates/portfolio-pages.js`),
    context: {
    slug: node.slug,
    },
  })
})
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
