/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
   {
     resolve: `gatsby-plugin-layout`,
     options: {
       component: require.resolve(`./src/components/layout`),
     },
   },
   `gatsby-plugin-styled-components`,
 ],
 siteMetadata: {
  title: `Leslie Beheum`,
  siteUrl: `http://www.lesliethe.dev`,
  description: `Web Developer based in Brooklyn, NY`,
},
}
