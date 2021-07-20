const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
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
    // Data passed to context is available
    // in page queries as GraphQL variables.
    slug: node.slug,
    },
  })
})
}
