const path = require(`path`)

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
}
