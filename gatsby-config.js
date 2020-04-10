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
   `gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`,
   `gatsby-transformer-remark`,
   `gatsby-transformer-yaml`,
   {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `data`,
    path: `${__dirname}/src/content`,
  },
},
{
resolve: `gatsby-source-filesystem`,
options: {
 name: `img`,
 path: `${__dirname}/src/images`,
},
},
 ],
 siteMetadata: {
  title: `Leslie Behum`,
  siteUrl: `http://www.lesliethe.dev`,
  description: `Web Developer based in Brooklyn, NY`,
},
}
